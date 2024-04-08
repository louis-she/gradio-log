<svelte:options accessors={true} />

<script lang="ts">
	import type { Gradio } from "@gradio/utils";
	import { BlockTitle } from "@gradio/atoms";
	import { Block } from "@gradio/atoms";
	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	import xterm from "@xterm/xterm";
	import addon from "xterm-addon-fit";
	import { onMount } from "svelte";

	export let gradio: Gradio<{
		change: never;
		submit: never;
		input: never;
	}>;
	export let label = "Textbox";
	export let elem_id = "";
	export let elem_classes: string[] = [];
	export let visible = true;
	export let value = "";
	export let show_label: boolean;
	export let scale: number | null = null;
	export let min_width: number | undefined = undefined;
	export let loading_status: LoadingStatus | undefined = undefined;

	// When the value changes, dispatch the change event via handle_change()
	// See the docs for an explanation: https://svelte.dev/docs/svelte-components#script-3-$-marks-a-statement-as-reactive

	let term;
	onMount(() => {
		term = new xterm.Terminal({
			allowTransparency: true,
			theme: {
				foreground: "black",
				background: "white",
			},
		});
		term.open(document.getElementById("terminal"));
		const fitAddon = new addon.FitAddon();
		term.loadAddon(fitAddon);
		setTimeout(() => {
			fitAddon.fit();
		}, 300);
	});

	$: if (term) {
		if (value.trim() !== "") {
			term.write(value.replace(/\n/g, "\n\r"));
		}
	}
</script>

<Block
	{visible}
	{elem_id}
	{elem_classes}
	{scale}
	{min_width}
	allow_overflow={false}
	padding={true}
>
	{#if loading_status}
		<StatusTracker
			autoscroll={gradio.autoscroll}
			i18n={gradio.i18n}
			{...loading_status}
		/>
	{/if}
	<div>
		<BlockTitle {show_label} info={undefined}>{label}</BlockTitle>
		<div id="terminal"></div>
	</div>
</Block>

<style>
	@import "./node_modules/@xterm/xterm/css/xterm.css";
</style>
