
import gradio as gr
from app import demo as app
import os

_docs = {'Log': {'description': 'Create a log component which can continuously read from a log file and display the content in a container.', 'members': {'__init__': {'log_file': {'type': 'str', 'default': 'None', 'description': 'the log file path to read from.'}, 'tail': {'type': 'int', 'default': '100', 'description': 'from the end of the file, the number of lines to start read from.'}, 'dark': {'type': 'bool', 'default': 'False', 'description': 'if True, will render the component in dark mode.'}, 'label': {'type': 'str | None', 'default': 'None', 'description': 'The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.'}, 'info': {'type': 'str | None', 'default': 'None', 'description': 'additional component description.'}, 'every': {'type': 'float', 'default': '0.3', 'description': 'New log pulling interval.'}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will display label.'}, 'container': {'type': 'bool', 'default': 'True', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'type': 'int | None', 'default': 'None', 'description': 'relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.'}, 'min_width': {'type': 'int', 'default': '160', 'description': 'minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'interactive': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will be rendered as an editable textbox; if False, editing will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.'}, 'visible': {'type': 'bool', 'default': 'True', 'description': 'If False, component will be hidden.'}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'render': {'type': 'bool', 'default': 'True', 'description': 'If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.'}}, 'postprocess': {}, 'preprocess': {'return': {'type': 'typing.Any', 'description': "The preprocessed input data sent to the user's function in the backend."}, 'value': None}}, 'events': {'load': {'type': None, 'default': None, 'description': 'This listener is triggered when the Log initially loads in the browser.'}}}, '__meta__': {'additional_interfaces': {}, 'user_fn_refs': {'Log': []}}}

abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_log`

<div style="display: flex; gap: 7px;">
<a href="https://pypi.org/project/gradio_log/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_log"></a>  
</div>

A Log component for Gradio which can easily show some log file in the interface.
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_log
```

## Usage

```python
from pathlib import Path
import logging
import gradio as gr

from gradio_log import Log

import logging


class CustomFormatter(logging.Formatter):

    green = "\x1b[32;20m"
    blue = "\x1b[34;20m"
    yellow = "\x1b[33;20m"
    red = "\x1b[31;20m"
    bold_red = "\x1b[31;1m"
    reset = "\x1b[0m"
    format = "%(asctime)s - %(levelname)s - %(message)s (%(filename)s:%(lineno)d)"

    FORMATS = {
        logging.DEBUG: blue + format + reset,
        logging.INFO: green + format + reset,
        logging.WARNING: yellow + format + reset,
        logging.ERROR: red + format + reset,
        logging.CRITICAL: bold_red + format + reset,
    }

    def format(self, record):
        log_fmt = self.FORMATS.get(record.levelno)
        formatter = logging.Formatter(log_fmt)
        return formatter.format(record)


formatter = CustomFormatter()

log_file = "/tmp/gradio_log.txt"
Path(log_file).touch()

ch = logging.FileHandler(log_file)
ch.setLevel(logging.DEBUG)
ch.setFormatter(formatter)

logger = logging.getLogger("gradio_log")
logger.setLevel(logging.DEBUG)
for handler in logger.handlers:
    logger.removeHandler(handler)
logger.addHandler(ch)


logger.info("The logs will be displayed in here.")


def create_log_handler(level):

    def l(text):
        getattr(logger, level)(text)

    return l


with gr.Blocks() as demo:
    text = gr.Textbox(label="Enter text to write to log file")
    with gr.Row():
        for l in ["debug", "info", "warning", "error", "critical"]:
            button = gr.Button(f"log as {l}")
            button.click(fn=create_log_handler(l), inputs=text)
    Log(log_file)


if __name__ == "__main__":
    demo.launch()

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `Log`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["Log"]["members"]["__init__"], linkify=[])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["Log"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As input:** Is passed, the preprocessed input data sent to the user's function in the backend.


 ```python
def predict(
    value: typing.Any
) -> Unknown:
    return value
```
""", elem_classes=["md-custom", "Log-user-fn"], header_links=True)




    demo.load(None, js=r"""function() {
    const refs = {};
    const user_fn_refs = {
          Log: [], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })

        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
