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
	export let log_file = "";
	export let label = `log of ${log_file}`;
	export let dark = false;
	export let elem_id = "";
	export let elem_classes: string[] = ["terminal-block"];
	export let visible = true;
	export let value = "";
	export let show_label: boolean;
	export let scale: number | null = null;
	export let min_width: number | undefined = undefined;
	export let loading_status: LoadingStatus | undefined = undefined;

	let term;
	let termNode;

	$: theme = dark
		? { foreground: "white", background: "#1F2937" }
		: {
				foreground: "#1F2937",
				background: "white",
				selectionBackground: "#e5e7eb",
			};

	onMount(() => {
		term = new xterm.Terminal({
			// allowTransparency: true,
			theme,
		});
		term.open(termNode);
		const fitAddon = new addon.FitAddon();
		term.loadAddon(fitAddon);
		setTimeout(() => {
			fitAddon.fit();
		}, 300);
	});

	$: if (term && value) {
		if (value.trim() !== "") {
			term.write(value.replace(/\n/g, "\n\r"));
		}
	}
</script>

<Block
	{visible}
	{elem_id}
	{scale}
	{min_width}
	elem_classes={[...elem_classes, dark ? "dark" : ""]}
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
		<div bind:this={termNode}></div>
	</div>
</Block>

<style>
	@import "./node_modules/@xterm/xterm/css/xterm.css";
	* :global(.xterm .xterm-viewport) {
		overflow-y: auto !important;
	}
</style>
