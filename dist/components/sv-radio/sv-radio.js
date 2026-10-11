import { svTokens as e } from "../../theme/tokens.js";
import t from "@mui/material/Box";
import { useDefaultProps as n } from "@mui/material/DefaultPropsProvider";
import r from "clsx";
import { mergeSx as i } from "merge-sx";
import { forwardRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import s from "@mui/icons-material/CheckRounded";
import { buttonBaseClasses as c } from "@mui/material/ButtonBase";
import { mergeSlotProps as l } from "@mui/material/utils";
import u, { radioClasses as d } from "@mui/material/Radio";
//#region src/components/sv-radio/sv-radio.tsx
var f = {
	width: "var(--SvRadio-size)",
	height: "var(--SvRadio-size)",
	borderRadius: "50%",
	boxSizing: "border-box",
	flexShrink: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	[`.${d.root}.${d.disabled} &`]: { opacity: .4 },
	"@media (forced-colors: active)": {
		forcedColorAdjust: "none",
		[`.${d.root}.${d.disabled} &`]: { opacity: 1 }
	}
}, p = a(function(a, p) {
	let m = n({
		props: {},
		name: "MuiRadio"
	}), h = n({
		props: {},
		name: "SvRadio"
	}), g = n({
		props: a,
		name: "SvRadio"
	}), { className: _, sx: v, slotProps: y, icon: b, checkedIcon: x, size: S = "small", color: C = "primary", disableRipple: w = !0, ...T } = n({
		props: g,
		name: "MuiRadio"
	}), E = i((t) => {
		let n = (t.vars ?? t).palette, r = n[C], i = r && typeof r == "object" && "main" in r ? r.main : n.text.secondary;
		return {
			padding: "4px",
			minWidth: 24,
			minHeight: 24,
			"--SvRadio-size": S === "medium" ? "20px" : "16px",
			"--SvRadio-accent": e(t).accent,
			"--SvRadio-stroke": e(t).stroke,
			"--SvRadio-foreground": "#fff",
			"--SvRadio-fill": C === "primary" ? "var(--SvRadio-accent)" : i,
			color: "var(--SvRadio-stroke)",
			[`&.${d.disabled}`]: { color: "var(--SvRadio-stroke)" },
			[`&.${d.checked}`]: { color: "var(--SvRadio-fill)" },
			[`&.${c.focusVisible}`]: {
				outline: `2px solid ${e(t).focus}`,
				outlineOffset: 2,
				"@media (forced-colors: active)": { outlineColor: "Highlight" }
			}
		};
	}, m.sx, h.sx, a.sx);
	return /* @__PURE__ */ o(u, {
		...T,
		ref: p,
		size: S,
		color: C,
		disableRipple: w,
		className: r("SvRadio-root", _),
		sx: E,
		icon: b ?? /* @__PURE__ */ o(t, {
			component: "span",
			"aria-hidden": "true",
			className: "SvRadio-icon",
			sx: i(f, {
				border: "2px solid currentColor",
				"@media (forced-colors: active)": {
					borderColor: "CanvasText",
					[`.${d.root}.${d.disabled} &`]: { borderColor: "GrayText" }
				}
			})
		}),
		checkedIcon: x ?? /* @__PURE__ */ o(t, {
			component: "span",
			"aria-hidden": "true",
			className: "SvRadio-icon",
			sx: i(f, {
				backgroundColor: "currentColor",
				"@media (forced-colors: active)": {
					backgroundColor: "Highlight",
					[`.${d.root}.${d.disabled} &`]: { backgroundColor: "GrayText" }
				}
			}),
			children: /* @__PURE__ */ o(s, { sx: {
				fontSize: "var(--SvRadio-size)",
				color: "var(--SvRadio-foreground)",
				"@media (forced-colors: active)": {
					color: "HighlightText",
					[`.${d.root}.${d.disabled} &`]: { color: "Canvas" }
				}
			} })
		}),
		slotProps: {
			...y,
			root: l(y?.root, { sx: E })
		}
	});
});
//#endregion
export { p as SvRadio };

//# sourceMappingURL=sv-radio.js.map