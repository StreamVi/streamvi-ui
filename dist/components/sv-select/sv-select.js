import { MenuPaper as e, menuItemSx as t } from "./menu-paper.js";
import { SelectOptionContent as n } from "./select-option-content.js";
import { selectStyles as r } from "./sv-select.styles.js";
import { useDefaultProps as i } from "@mui/material/DefaultPropsProvider";
import a from "clsx";
import { mergeSx as o } from "merge-sx";
import { Children as s, cloneElement as c, createElement as l, isValidElement as u } from "react";
import { jsx as d } from "react/jsx-runtime";
import { useFormControl as f } from "@mui/material/FormControl";
import { c as p } from "react/compiler-runtime";
import m from "@mui/material/MenuItem";
import h from "@mui/icons-material/KeyboardArrowDown";
import g from "@mui/material/Select";
//#region src/components/sv-select/sv-select.tsx
function _(n) {
	let l = p(23), _;
	l[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
		props: {},
		name: "MuiSelect"
	}, l[0] = _) : _ = l[0];
	let b = i(_), x;
	l[1] === Symbol.for("react.memo_cache_sentinel") ? (x = {
		props: {},
		name: "SvSelect"
	}, l[1] = x) : x = l[1];
	let S = i(x), C;
	l[2] === n ? C = l[3] : (C = {
		props: n,
		name: "SvSelect"
	}, l[2] = n, l[3] = C);
	let w = i(C), T;
	l[4] === w ? T = l[5] : (T = {
		props: w,
		name: "MuiSelect"
	}, l[4] = w, l[5] = T);
	let { className: E, sx: D, MenuProps: O, IconComponent: k, children: A, options: j, ...M } = i(T), N = [
		n,
		S,
		b
	].find(y), P = N?.options, F = P === void 0 && M.native, I = P === void 0 ? N?.children : P.map(v), L;
	l[6] === Symbol.for("react.memo_cache_sentinel") ? (L = {
		props: {},
		name: "MuiMenuItem"
	}, l[6] = L) : L = l[6];
	let R = i(L), z = f(), B = M.color ?? z?.color ?? "primary", V = M.variant ?? z?.variant ?? "outlined", H = M.size ?? z?.size ?? "medium", U = u(M.input) ? M.input.props : void 0, W = g, G = k ?? (F ? void 0 : h), K;
	l[7] === E ? K = l[8] : (K = a("SvSelect-root", E), l[7] = E, l[8] = K);
	let q = o(!M.input && !F && V === "outlined" && H === "medium" && r(B, M.label != null), b.sx, S.sx, !M.slotProps && U?.slotProps?.root?.sx, U?.sx, M.slotProps?.root?.sx, n.sx), J = O?.slots, Y;
	l[9] === J ? Y = l[10] : (Y = {
		paper: e,
		...J
	}, l[9] = J, l[10] = Y);
	let X;
	l[11] !== O || l[12] !== Y ? (X = {
		...O,
		slots: Y
	}, l[11] = O, l[12] = Y, l[13] = X) : X = l[13];
	let Z = F ? I : s.map(I, (e) => u(e) && e.type === m ? c(e, { sx: o(t, R.sx, e.props.sx) }) : e), Q;
	return l[14] !== W || l[15] !== F || l[16] !== M || l[17] !== X || l[18] !== Z || l[19] !== G || l[20] !== K || l[21] !== q ? (Q = /* @__PURE__ */ d(W, {
		...M,
		native: F,
		IconComponent: G,
		className: K,
		sx: q,
		MenuProps: X,
		children: Z
	}), l[14] = W, l[15] = F, l[16] = M, l[17] = X, l[18] = Z, l[19] = G, l[20] = K, l[21] = q, l[22] = Q) : Q = l[22], Q;
}
function v(e, t) {
	return /* @__PURE__ */ l(m, {
		...e.slotProps?.item,
		key: e.key ?? (typeof e.value == "string" || typeof e.value == "number" ? e.value : t),
		value: e.value,
		disabled: e.disabled
	}, e.avatar ? /* @__PURE__ */ d(n, {
		label: e.label,
		avatar: e.avatar
	}) : e.label);
}
function y(e) {
	return e.children !== void 0 || e.options !== void 0;
}
_.muiName = g.muiName;
//#endregion
export { _ as SvSelect };

//# sourceMappingURL=sv-select.js.map