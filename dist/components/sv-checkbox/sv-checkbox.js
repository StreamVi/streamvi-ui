import { svTokens as e } from "../../theme/tokens.js";
import t from "@mui/material/Box";
import { useDefaultProps as n } from "@mui/material/DefaultPropsProvider";
import r from "clsx";
import { mergeSx as i } from "merge-sx";
import { forwardRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import s from "@mui/icons-material/CheckRounded";
import c from "@mui/icons-material/RemoveRounded";
import { buttonBaseClasses as l } from "@mui/material/ButtonBase";
import u, { checkboxClasses as d } from "@mui/material/Checkbox";
import { mergeSlotProps as f } from "@mui/material/utils";
//#region src/components/sv-checkbox/sv-checkbox.tsx
var p = {
	small: 16,
	medium: 20,
	large: 24
}, m = {
	width: "var(--SvCheckbox-size)",
	height: "var(--SvCheckbox-size)",
	borderRadius: "4px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	boxSizing: "border-box"
}, h = {
	border: "2px solid var(--SvCheckbox-stroke)",
	[`.${d.root}.${d.disabled} &`]: { opacity: .4 }
}, g = {
	backgroundColor: "var(--SvCheckbox-fill)",
	color: "var(--SvCheckbox-foreground)",
	[`.${d.root}.${d.disabled} &`]: { opacity: .5 }
}, _ = a(function(a, d) {
	let _ = n({
		props: {},
		name: "MuiCheckbox"
	}), v = n({
		props: {},
		name: "SvCheckbox"
	}), y = n({
		props: a,
		name: "SvCheckbox"
	}), { selectionNumber: b, className: x, sx: S, slotProps: C, icon: w, checkedIcon: T, indeterminateIcon: E, size: D = "small", color: O = "primary", disableRipple: k = !0, ...A } = n({
		props: y,
		name: "MuiCheckbox"
	}), j = p[D] ?? p.small, M = i((t) => {
		let n = (t.vars ?? t).palette, r = n[O], i = r && typeof r == "object" && "main" in r ? r.main : n.text.secondary;
		return {
			padding: "4px",
			minWidth: 24,
			minHeight: 24,
			"--SvCheckbox-size": `${j}px`,
			"--SvCheckbox-accent": e(t).accent,
			"--SvCheckbox-stroke": e(t).stroke,
			"--SvCheckbox-foreground": "#fff",
			"--SvCheckbox-fill": O === "primary" ? "var(--SvCheckbox-accent)" : O === "default" ? n.text.secondary : i,
			[`&.${l.focusVisible}`]: {
				outline: `2px solid ${e(t).focus}`,
				outlineOffset: 2
			}
		};
	}, _.sx, v.sx, a.sx), N = /* @__PURE__ */ o(t, {
		component: "span",
		"aria-hidden": "true",
		sx: i(m, h)
	}), P = /* @__PURE__ */ o(t, {
		component: "span",
		"aria-hidden": "true",
		sx: i(m, g),
		children: b == null ? /* @__PURE__ */ o(s, { sx: { fontSize: "var(--SvCheckbox-size)" } }) : /* @__PURE__ */ o(t, {
			component: "span",
			className: "SvCheckbox-number",
			sx: {
				display: "block",
				maxWidth: "100%",
				overflow: "hidden",
				whiteSpace: "nowrap",
				fontFamily: "Inter, sans-serif",
				fontSize: 12,
				fontWeight: 400,
				lineHeight: "16px",
				textAlign: "center"
			},
			children: b
		})
	}), F = /* @__PURE__ */ o(t, {
		component: "span",
		"aria-hidden": "true",
		sx: i(m, g),
		children: /* @__PURE__ */ o(c, { sx: { fontSize: "var(--SvCheckbox-size)" } })
	});
	return /* @__PURE__ */ o(u, {
		...A,
		size: D,
		color: O,
		disableRipple: k,
		icon: w ?? N,
		checkedIcon: T ?? P,
		indeterminateIcon: E ?? F,
		ref: d,
		className: r("SvCheckbox-root", x),
		sx: M,
		slotProps: {
			...C,
			root: f(C?.root, { sx: M })
		}
	});
});
//#endregion
export { _ as SvCheckbox };

//# sourceMappingURL=sv-checkbox.js.map