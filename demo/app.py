import gradio as gr
from gradio_log import log


fd = open("/tmp/some_log.txt", "rb")

with gr.Blocks() as demo:
    gr.Markdown("Start typing below and then click **Run** to see the output.")
    log(fd)


if __name__ == "__main__":
    demo.launch()
