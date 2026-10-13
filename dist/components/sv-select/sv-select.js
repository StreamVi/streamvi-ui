import { menuItemSx as e, menuPaperSx as t } from "./menu-paper.js";
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
	let l = p(21), _;
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
	let R = i(L), z = f(), B = M.color ?? z?.color ?? "primary", V = M.variant ?? z?.variant ?? "outlined", H = M.size ?? z?.size ?? "medium", U = u(M.input) ? M.input.props : void 0, W = O?.slotProps?.paper, G = g, K = k ?? (F ? void 0 : h), q;
	l[7] === E ? q = l[8] : (q = a("SvSelect-root", E), l[7] = E, l[8] = q);
	let J = o(!M.input && !F && V === "outlined" && H === "medium" && r(B, M.label != null), b.sx, S.sx, !M.slotProps && U?.slotProps?.root?.sx, U?.sx, M.slotProps?.root?.sx, n.sx), Y;
	l[9] !== O || l[10] !== W ? (Y = O?.slots?.paper ? O : {
		...O,
		slotProps: {
			...O?.slotProps,
			paper: (e) => {
				let n = typeof W == "function" ? W(e) : W;
				return {
					...n,
					sx: o(t, n?.sx)
				};
			}
		}
	}, l[9] = O, l[10] = W, l[11] = Y) : Y = l[11];
	let X = F ? I : s.map(I, (t) => u(t) && t.type === m ? c(t, { sx: o(e, R.sx, t.props.sx) }) : t), Z;
	return l[12] !== G || l[13] !== F || l[14] !== M || l[15] !== K || l[16] !== q || l[17] !== J || l[18] !== Y || l[19] !== X ? (Z = /* @__PURE__ */ d(G, {
		...M,
		native: F,
		IconComponent: K,
		className: q,
		sx: J,
		MenuProps: Y,
		children: X
	}), l[12] = G, l[13] = F, l[14] = M, l[15] = K, l[16] = q, l[17] = J, l[18] = Y, l[19] = X, l[20] = Z) : Z = l[20], Z;
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