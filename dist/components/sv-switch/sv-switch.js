import { svTokens as e } from "../../theme/tokens.js";
import { useDefaultProps as t } from "@mui/material/DefaultPropsProvider";
import n from "clsx";
import { mergeSx as r } from "merge-sx";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import { buttonBaseClasses as o } from "@mui/material/ButtonBase";
import { mergeSlotProps as s } from "@mui/material/utils";
import c, { switchClasses as l } from "@mui/material/Switch";
//#region src/components/sv-switch/sv-switch.tsx
var u = `&:has(> .${l.switchBase}.${l.checked})`, d = `&:has(> .${l.switchBase}.${l.disabled})`;
function f(t) {
	return {
		padding: "4px",
		color: "var(--SvSwitch-thumb-color)",
		transform: "translateX(var(--SvSwitch-offset))",
		"&:hover": {
			backgroundColor: `color-mix(in srgb, currentColor calc(${(t.vars ?? t).palette.action.hoverOpacity} * 100%), transparent)`,
			"@media (hover: none)": { backgroundColor: "transparent" }
		},
		[`&.${o.focusVisible}`]: {
			outline: `2px solid ${e(t).focus}`,
			outlineOffset: 2,
			"@media (forced-colors: active)": { outlineColor: "Highlight" }
		}
	};
}
var p = {
	width: "var(--SvSwitch-thumb-size)",
	height: "var(--SvSwitch-thumb-size)",
	boxShadow: "none",
	backgroundColor: "currentColor"
}, m = {
	borderRadius: "14px",
	backgroundColor: "var(--SvSwitch-track-color)",
	opacity: "var(--SvSwitch-track-opacity)"
}, h = i(function(i, o) {
	let l = t({
		props: {},
		name: "MuiSwitch"
	}), h = t({
		props: {},
		name: "SvSwitch"
	}), g = t({
		props: i,
		name: "SvSwitch"
	}), { className: _, sx: v, slotProps: y, size: b = "medium", color: x = "primary", ...S } = t({
		props: g,
		name: "MuiSwitch"
	}), C = (t) => {
		let n = (t.vars ?? t).palette, r = n[x], i = x === "primary" ? e(t).green : r && typeof r == "object" && "main" in r ? r.main : n.text.secondary;
		return {
			width: b === "small" ? 40 : 42,
			height: b === "small" ? 24 : 28,
			padding: b === "small" ? "7px" : "7px 4px",
			overflow: "visible",
			"--SvSwitch-neutral": n.text.secondary,
			"--SvSwitch-selected": i,
			"--SvSwitch-thumb-size": b === "small" ? "16px" : "20px",
			"--SvSwitch-thumb-color": "var(--SvSwitch-neutral)",
			"--SvSwitch-track-color": "var(--SvSwitch-neutral)",
			"--SvSwitch-track-opacity": .32,
			"--SvSwitch-offset": "0px",
			[u]: {
				"--SvSwitch-offset": b === "small" ? "16px" : "14px",
				"--SvSwitch-thumb-color": "var(--SvSwitch-selected)",
				"--SvSwitch-track-color": "var(--SvSwitch-selected)",
				"--SvSwitch-track-opacity": .6
			},
			[d]: {
				opacity: .5,
				"--SvSwitch-thumb-color": "var(--SvSwitch-neutral)",
				"--SvSwitch-track-color": "var(--SvSwitch-neutral)",
				"--SvSwitch-track-opacity": .32
			},
			"@media (prefers-reduced-motion: reduce)": { "&& *, && *::before, && *::after": {
				transition: "none",
				animation: "none"
			} },
			"@media (forced-colors: active)": {
				forcedColorAdjust: "none",
				"--SvSwitch-neutral": "CanvasText",
				"--SvSwitch-selected": "Highlight",
				"--SvSwitch-track-opacity": 1,
				[u]: { "--SvSwitch-track-opacity": 1 },
				[d]: {
					opacity: 1,
					"--SvSwitch-neutral": "GrayText",
					"--SvSwitch-track-opacity": 1
				}
			}
		};
	}, w = (e) => s(i.slotProps?.[e], s(h.slotProps?.[e], l.slotProps?.[e] ?? {})), T = (e, t) => {
		let n = s(w(e), { sx: t });
		return ((e) => {
			let t = typeof n == "function" ? n(e) : n;
			return {
				...t,
				sx: (e) => ({ "&&&&": e.unstable_sx(t.sx ?? {}) })
			};
		});
	}, E = r(C, l.sx, h.sx, i.sx);
	return /* @__PURE__ */ a(c, {
		...S,
		size: b,
		color: x,
		ref: o,
		className: n("SvSwitch-root", _),
		sx: E,
		slotProps: {
			root: s(w("root"), { sx: E }),
			switchBase: T("switchBase", f),
			thumb: T("thumb", p),
			track: T("track", m),
			input: w("input")
		}
	});
});
//#endregion
export { h as SvSwitch };

//# sourceMappingURL=sv-switch.js.map