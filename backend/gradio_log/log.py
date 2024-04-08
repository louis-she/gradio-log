from __future__ import annotations

from typing import Any, IO, Callable

from gradio.components.base import Component, FormComponent
from gradio.events import Events


class log(FormComponent):

    def find_start_position(self) -> int:
        self.io.seek(0, 2)
        file_size = self.io.tell()
        lines_found = 0
        block_size = 1024
        blocks = []

        while self.io.tell() > 0 and lines_found <= self.tail:
            self.io.seek(max(self.io.tell() - block_size, 0))
            block = self.io.read(min(block_size, self.io.tell()))
            blocks.append(block)
            lines_found += block.count(b"\n")
            self.io.seek(-len(block), 1)

        all_read_bytes = b"".join(reversed(blocks))
        lines = all_read_bytes.splitlines()

        if self.tail >= len(lines):
            return 0
        last_lines = b"\n".join(lines[-self.tail :])
        return file_size - len(last_lines)

    def read_to_end(self) -> bytes:
        print("read to end called")
        self.io.seek(self.current_pos)
        b = self.io.read().decode()
        self.current_pos = self.io.tell()
        return b

    def __init__(
        self,
        io: IO,
        tail: int = 100,
        *,
        label: str | None = None,
        info: str | None = None,
        every: float | None = None,
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
            io: the log io to read from
            tail: from the end of the file, the number of lines to start read from
            value: default text to provide in textarea. If callable, the function will be called whenever the app loads to set the initial value of the component.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            info: additional component description.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
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
        every = 1
        self.io = io
        self.tail = tail
        self.current_pos = self.find_start_position()
        value = self.read_to_end

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
            value=value,
        )

    def preprocess(self, payload: str | None) -> str | None:
        """
        Parameters:
            payload: the text entered in the textarea.
        Returns:
            Passes text value as a {str} into the function.
        """
        return None if payload is None else str(payload)

    def postprocess(self, value: str | None) -> str | None:
        """
        Parameters:
            value: Expects a {str} returned from function and sets textarea value to it.
        Returns:
            The value to display in the textarea.
        """
        return None if value is None else str(value)

    def api_info(self) -> dict[str, Any]:
        return {"type": "string"}

    def example_payload(self) -> Any:
        return "Hello!!"

    def example_value(self) -> Any:
        return "Hello!!"


# class log(FormComponent):
#     """
#     Creates a very simple textbox for user to enter string input or display string output.
#     """

#     EVENTS = [
#         Events.change,
#         Events.input,
#         Events.submit,
#     ]

#     def __init__(
#         self,
#         value: str | Callable | None = None,
#         *,
#         placeholder: str | None = None,
#         label: str | None = None,
#         every: float | None = None,
#         show_label: bool | None = None,
#         scale: int | None = None,
#         min_width: int = 160,
#         interactive: bool | None = None,
#         visible: bool = True,
#         rtl: bool = False,
#         elem_id: str | None = None,
#         elem_classes: list[str] | str | None = None,
#         render: bool = True,
#     ):
#         """
#         Parameters:
#             value: default text to provide in textbox. If callable, the function will be called whenever the app loads to set the initial value of the component.
#             placeholder: placeholder hint to provide behind textbox.
#             label: component name in interface.
#             every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
#             show_label: if True, will display label.
#             scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
#             min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
#             interactive: if True, will be rendered as an editable textbox; if False, editing will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.
#             visible: If False, component will be hidden.
#             rtl: If True and `type` is "text", sets the direction of the text to right-to-left (cursor appears on the left of the text). Default is False, which renders cursor on the right.
#             elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
#             elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
#             render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
#         """
#         self.placeholder = placeholder
#         self.rtl = rtl
#         super().__init__(
#             label=label,
#             every=every,
#             show_label=show_label,
#             scale=scale,
#             min_width=min_width,
#             interactive=interactive,
#             visible=visible,
#             elem_id=elem_id,
#             elem_classes=elem_classes,
#             value=value,
#             render=render,
#         )

#     def preprocess(self, payload: str | None) -> str | None:
#         """
#         Parameters:
#             payload: the text entered in the textarea.
#         Returns:
#             Passes text value as a {str} into the function.
#         """
#         return None if payload is None else str(payload)

#     def postprocess(self, value: str | None) -> str | None:
#         """
#         Parameters:
#             value: Expects a {str} returned from function and sets textarea value to it.
#         Returns:
#             The value to display in the textarea.
#         """
#         return None if value is None else str(value)

#     def api_info(self) -> dict[str, Any]:
#         return {"type": "string"}

#     def example_payload(self) -> Any:
#         return "Hello!!"

#     def example_value(self) -> Any:
#         return "Hello!!"
