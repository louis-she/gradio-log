import logging
from pathlib import Path

import gradio as gr
from gradio_log import Log


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
    Log(log_file, dark=True)


if __name__ == "__main__":
    demo.launch(ssr_mode=True)
