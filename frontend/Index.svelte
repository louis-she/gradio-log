<svelte:options accessors={true} />

<script lang="ts">
	import type { Gradio } from "@gradio/utils";
	import { BlockTitle } from "@gradio/atoms";
	import { Block } from "@gradio/atoms";
	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	import { Terminal } from "@xterm/xterm";
	import { FitAddon } from "xterm-addon-fit";
	import { onMount } from "svelte";

	export let gradio: Gradio<{
		change: never;
		submit: never;
		input: never;
	}>;
	export let height = 240;
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
	export let xterm_allow_proposed_api;
	export let xterm_allow_transparency;
	export let xterm_alt_click_moves_cursor;
	export let xterm_convert_eol;
	export let xterm_cursor_blink;
	export let xterm_cursor_inactive_style;
	export let xterm_cursor_style;
	export let xterm_cursor_width;
	export let xterm_custom_glyphs;
	export let xterm_disable_stdin;
	export let xterm_document_override;
	export let xterm_draw_bold_text_in_bright_colors;
	export let xterm_fast_scroll_modifier;
	export let xterm_fast_scroll_sensitivity;
	export let xterm_font_family;
	export let xterm_font_size;
	export let xterm_font_weight;
	export let xterm_font_weight_bold;
	export let xterm_ignore_bracketed_paste_mode;
	export let xterm_letter_spacing;
	export let xterm_line_height;
	export let xterm_log_level;
	export let xterm_mac_option_click_forces_selection;
	export let xterm_mac_option_is_meta;
	export let xterm_minimum_contrast_ratio;
	export let xterm_overview_ruler_width;
	export let xterm_rescale_overlapping_glyphs;
	export let xterm_right_click_selects_word;
	export let xterm_screen_reader_mode;
	export let xterm_scroll_on_user_input;
	export let xterm_scroll_sensitivity;
	export let xterm_scrollback;
	export let xterm_smooth_scroll_duration;
	export let xterm_tab_stop_width;
	export let xterm_windows_mode;

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
		term = new Terminal({
			theme,
			allowProposedApi: xterm_allow_proposed_api,
			allowTransparency: xterm_allow_transparency,
			altClickMovesCursor: xterm_alt_click_moves_cursor,
			convertEol: xterm_convert_eol,
			cursorBlink: xterm_cursor_blink,
			cursorInactiveStyle: xterm_cursor_inactive_style,
			cursorStyle: xterm_cursor_style,
			cursorWidth: xterm_cursor_width,
			customGlyphs: xterm_custom_glyphs,
			disableStdin: xterm_disable_stdin,
			documentOverride: xterm_document_override,
			drawBoldTextInBrightColors: xterm_draw_bold_text_in_bright_colors,
			fastScrollModifier: xterm_fast_scroll_modifier,
			fastScrollSensitivity: xterm_fast_scroll_sensitivity,
			fontFamily: xterm_font_family,
			fontSize: xterm_font_size,
			fontWeight: xterm_font_weight,
			fontWeightBold: xterm_font_weight_bold,
			ignoreBracketedPasteMode: xterm_ignore_bracketed_paste_mode,
			letterSpacing: xterm_letter_spacing,
			lineHeight: xterm_line_height,
			logLevel: xterm_log_level,
			macOptionClickForcesSelection: xterm_mac_option_click_forces_selection,
			macOptionIsMeta: xterm_mac_option_is_meta,
			minimumContrastRatio: xterm_minimum_contrast_ratio,
			overviewRulerWidth: xterm_overview_ruler_width,
			rescaleOverlappingGlyphs: xterm_rescale_overlapping_glyphs,
			rightClickSelectsWord: xterm_right_click_selects_word,
			screenReaderMode: xterm_screen_reader_mode,
			scrollOnUserInput: xterm_scroll_on_user_input,
			scrollSensitivity: xterm_scroll_sensitivity,
			smoothScrollDuration: xterm_smooth_scroll_duration,
			tabStopWidth: xterm_tab_stop_width,
			scrollback: xterm_scrollback,
			windowsMode: xterm_windows_mode,
		});

		term.open(termNode);
		const fitAddon = new FitAddon();
		term.loadAddon(fitAddon);

		const handleWindowResize = () => {
			fitAddon.fit();
		};

		setTimeout(() => {
			fitAddon.fit();
		}, 300);

		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
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
	{height}
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
	<div style="height: 100%;">
		<BlockTitle {show_label} info={undefined}>{label}</BlockTitle>
		<div style="height: calc(100% - 10px);" bind:this={termNode}></div>
	</div>
</Block>

<style>
	@import "./node_modules/@xterm/xterm/css/xterm.css";
	* :global(.xterm .xterm-viewport) {
		overflow-y: auto !important;
	}
</style>
