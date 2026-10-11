import e from "@mui/material/Box";
import { useDefaultProps as t } from "@mui/material/DefaultPropsProvider";
import { mergeSx as n } from "merge-sx";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { c as a } from "react/compiler-runtime";
import o from "@mui/material/Avatar";
//#region src/components/sv-select/select-option-content.tsx
var s = {
	display: "inline-flex",
	alignItems: "center",
	verticalAlign: "middle",
	gap: "6px",
	minWidth: 0,
	maxWidth: "100%"
}, c = {
	order: -1,
	width: "16px",
	height: "16px",
	fontSize: "10px"
};
function l(l) {
	let u = a(13), { label: d, avatar: f } = l, p;
	u[0] === Symbol.for("react.memo_cache_sentinel") ? (p = {
		props: {},
		name: "MuiAvatar"
	}, u[0] = p) : p = u[0];
	let m = t(p), h;
	u[1] === Symbol.for("react.memo_cache_sentinel") ? (h = {
		minWidth: 0,
		overflow: "hidden",
		textOverflow: "ellipsis"
	}, u[1] = h) : h = u[1];
	let g;
	u[2] === d ? g = u[3] : (g = /* @__PURE__ */ r(e, {
		component: "span",
		sx: h,
		children: d
	}), u[2] = d, u[3] = g);
	let _;
	u[4] !== f.sx || u[5] !== m.sx ? (_ = n(c, m.sx, f.sx), u[4] = f.sx, u[5] = m.sx, u[6] = _) : _ = u[6];
	let v;
	u[7] !== f || u[8] !== _ ? (v = /* @__PURE__ */ r(o, {
		component: "span",
		"aria-hidden": !0,
		...f,
		sx: _
	}), u[7] = f, u[8] = _, u[9] = v) : v = u[9];
	let y;
	return u[10] !== g || u[11] !== v ? (y = /* @__PURE__ */ i(e, {
		component: "span",
		className: "SvSelect-optionContent",
		sx: s,
		children: [g, v]
	}), u[10] = g, u[11] = v, u[12] = y) : y = u[12], y;
}
//#endregion
export { l as SelectOptionContent };

//# sourceMappingURL=select-option-content.js.map