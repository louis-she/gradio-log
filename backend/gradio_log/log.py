"""Log component of Gradio."""

from __future__ import annotations

import time
from typing import Any

from gradio.components.base import FormComponent
from gradio.events import Events
from gradio_client.documentation import document


@document()
class Log(FormComponent):
    """
    Create a log component which can continuously read from a log file and display the content in a container.
    """

    EVENTS = [Events.load]

    def find_start_position(self) -> int:
        self.io.seek(0, 2)
        file_size = self.io.tell()
        lines_found = 0
        block_size = 1024
        blocks = []

        while self.io.tell() > 0 and lines_found <= self.tail:
            self.io.seek(max(self.io.tell() - block_size, 0))
            block = self.io.read(block_size)
            blocks.append(block)
            lines_found += block.count(b"\n")
            self.io.seek(-len(block), 1)

        all_read_bytes = b"".join(reversed(blocks))
        lines = all_read_bytes.splitlines()

        if self.tail >= len(lines):
            return 0
        last_lines = b"\n".join(lines[-self.tail :])
        return file_size - len(last_lines) - 1

    def read_to_end(self) -> bytes:
        if self.current_pos is None or self.stop_reading:
            return None
        self.io.seek(self.current_pos)
        b = self.io.read().decode()
        self.current_pos = self.io.tell()
        return b

    def __init__(
        self,
        log_file: str = None,
        tail: int = 100,
        dark: bool = False,
        *,
        label: str | None = None,
        info: str | None = None,
        every: float = 0.3,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = None,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
    ):
        """
        Parameters:
            log_file: the log file path to read from.
            tail: from the end of the file, the number of lines to start read from.
            dark: if True, will render the component in dark mode.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            info: additional component description.
            every: New log pulling interval.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, will be rendered as an editable textbox; if False, editing will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
        """
        self.log_file = log_file
        self.tail = tail
        self.dark = dark
        self.current_pos = None
        self.fd = None
        self.stop_reading = False

        super().__init__(
            label=label,
            info=info,
            every=every,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            value=self.read_to_end,
        )

        self.load(self.handle_load_event)

    def handle_load_event(self):
        # prevent race condition
        self.stop_reading = True
        time.sleep(1)
        self.io = open(self.log_file, "rb")
        self.current_pos = self.find_start_position()
        self.stop_reading = False

    def api_info(self) -> dict[str, Any]:
        return {"type": "string"}

    def example_payload(self) -> Any:
        return "Hello!!"

    def example_value(self) -> Any:
        return "Hello!!"
