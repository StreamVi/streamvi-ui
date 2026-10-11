import { svTokens as e } from "../../theme/tokens.js";
import { useDefaultProps as t } from "@mui/material/DefaultPropsProvider";
import n from "clsx";
import { mergeSx as r } from "merge-sx";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import { mergeSlotProps as o } from "@mui/material/utils";
import s, { sliderClasses as c } from "@mui/material/Slider";
//#region src/components/sv-slider/sv-slider.tsx
function l(t) {
	return {
		width: "var(--SvSlider-thumb-size)",
		height: "var(--SvSlider-thumb-size)",
		"&::before": { boxShadow: "none" },
		"&:hover": {
			boxShadow: "0 0 0 7px color-mix(in srgb, currentColor 24%, transparent)",
			"@media (hover: none)": { boxShadow: "none" }
		},
		[`&.${c.focusVisible}`]: {
			boxShadow: "none",
			outline: `2px solid ${e(t).focus}`,
			outlineOffset: 3,
			"@media (forced-colors: active)": { outlineColor: "Highlight" }
		},
		[`&.${c.active}`]: { boxShadow: "0 0 0 14px color-mix(in srgb, currentColor 16%, transparent)" },
		[`&.${c.disabled}`]: { boxShadow: "none" }
	};
}
var u = {
	backgroundColor: "var(--SvSlider-rail)",
	opacity: 1,
	[`.${c.disabled} &`]: {
		backgroundColor: "currentColor",
		opacity: .38
	}
}, d = {
	backgroundColor: "var(--SvSlider-track)",
	boxSizing: "border-box",
	"@media (forced-colors: none)": { border: "none" }
}, f = i(function(i, f) {
	let p = t({
		props: {},
		name: "MuiSlider"
	}), m = t({
		props: {},
		name: "SvSlider"
	}), h = t({
		props: i,
		name: "SvSlider"
	}), { className: g, sx: _, slotProps: v, orientation: y = "horizontal", size: b = "medium", color: x = "primary", track: S = "normal", ...C } = t({
		props: h,
		name: "MuiSlider"
	}), w = (t) => ({
		"--SvSlider-accent": e(t).accent,
		"--SvSlider-stroke": `var(--SvSlider-default-stroke, ${e(t).stroke})`,
		"--SvSlider-thumb-size": b === "small" ? "12px" : "18px",
		"--SvSlider-rail": S === "inverted" ? "currentColor" : "var(--SvSlider-stroke)",
		"--SvSlider-track": S === "inverted" ? "var(--SvSlider-stroke)" : "currentColor",
		...x === "primary" && { color: "var(--SvSlider-accent)" },
		minWidth: 0,
		borderRadius: 0,
		...y === "vertical" ? {
			width: b === "small" ? "2px" : "3px",
			height: "100%"
		} : { height: b === "small" ? "2px" : "3px" },
		[`&.${c.disabled}`]: { "--SvSlider-track": "currentColor" },
		"@media (prefers-reduced-motion: reduce)": { [`&, & .${c.thumb}, & .${c.track}, & .${c.valueLabel}, & *::before, & *::after`]: { transition: "none" } }
	}), T = (e) => o(i.slotProps?.[e], o(m.slotProps?.[e], p.slotProps?.[e] ?? {})), E = r(w, p.sx, m.sx, i.sx);
	return /* @__PURE__ */ a(s, {
		...C,
		ref: f,
		orientation: y,
		size: b,
		color: x,
		track: S,
		className: n("SvSlider-root", g),
		sx: E,
		slotProps: {
			root: o(T("root"), { sx: E }),
			thumb: o(T("thumb"), { sx: l }),
			rail: o(T("rail"), { sx: u }),
			track: o(T("track"), { sx: d }),
			input: T("input"),
			mark: T("mark"),
			markLabel: T("markLabel"),
			valueLabel: T("valueLabel")
		}
	});
});
//#endregion
export { f as SvSlider };

//# sourceMappingURL=sv-slider.js.map