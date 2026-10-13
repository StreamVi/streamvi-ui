import { menuGroupStyles as e, menuHeaderStyles as t, menuItemStyles as n, menuListStyles as r, menuPaperStyles as i, menuRootStyles as a } from "./sv-menu.styles.js";
import o from "@mui/material/Box";
import { useDefaultProps as s } from "@mui/material/DefaultPropsProvider";
import c from "clsx";
import { mergeSx as l } from "merge-sx";
import { Children as u, Fragment as d, cloneElement as f, createElement as p, forwardRef as m, isValidElement as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
import { mergeSlotProps as v } from "@mui/material/utils";
import { c as y } from "react/compiler-runtime";
import b from "@mui/material/ListItemIcon";
import x from "@mui/material/ListItemText";
import S from "@mui/material/ListSubheader";
import C from "@mui/material/Menu";
import w from "@mui/material/MenuItem";
import { useTheme as T } from "@mui/material/styles";
//#region src/components/sv-menu/sv-menu.tsx
function E(e, t) {
	return u.map(e, (e) => h(e) ? e.type === d ? f(e, { children: E(e.props.children, t) }) : e.type === w ? f(e, {
		className: c("SvMenu-item", t.className, e.props.className),
		sx: l(n, t.sx, e.props.sx)
	}) : e : e);
}
var D = m(function(n, u) {
	let d = y(60), f = T(), p;
	d[0] === Symbol.for("react.memo_cache_sentinel") ? (p = {
		props: {},
		name: "MuiMenu"
	}, d[0] = p) : p = d[0];
	let m = s(p), h;
	d[1] === Symbol.for("react.memo_cache_sentinel") ? (h = {
		props: {},
		name: "SvMenu"
	}, d[1] = h) : h = d[1];
	let b = s(h), x;
	d[2] === n ? x = d[3] : (x = {
		props: n,
		name: "SvMenu"
	}, d[2] = n, d[3] = x);
	let w = s(x), D;
	d[4] === w ? D = d[5] : (D = {
		props: w,
		name: "MuiMenu"
	}, d[4] = w, d[5] = D);
	let A = s(D), j, M, N, P, F;
	if (d[6] !== A) {
		let { items: e, children: t, header: n, footer: r, className: i, sx: a, slotProps: o, ...s } = A;
		N = n, M = r, j = i, F = o, P = s, d[6] = A, d[7] = j, d[8] = M, d[9] = N, d[10] = P, d[11] = F;
	} else j = d[7], M = d[8], N = d[9], P = d[10], F = d[11];
	let I;
	d[12] === Symbol.for("react.memo_cache_sentinel") ? (I = {
		props: {},
		name: "MuiMenuItem"
	}, d[12] = I) : I = d[12];
	let L = s(I), R, z;
	if (d[13] !== M || d[14] !== N || d[15] !== n || d[16] !== L || d[17] !== m || d[18] !== b) {
		let e = [
			n,
			b,
			m
		].find(O), t = e?.items === void 0 ? e?.children : e.items.map(k);
		R = N != null || M != null, z = E(t, L), d[13] = M, d[14] = N, d[15] = n, d[16] = L, d[17] = m, d[18] = b, d[19] = R, d[20] = z;
	} else R = d[19], z = d[20];
	let B = z, V;
	d[21] !== P.anchorOrigin || d[22] !== P.anchorReference || d[23] !== P.transformOrigin || d[24] !== f ? (V = (P.anchorReference ?? "anchorEl") === "anchorEl" && P.anchorOrigin === void 0 && P.transformOrigin === void 0 ? { transformOrigin: {
		vertical: -8,
		horizontal: f.direction === "rtl" ? "right" : "left"
	} } : {}, d[21] = P.anchorOrigin, d[22] = P.anchorReference, d[23] = P.transformOrigin, d[24] = f, d[25] = V) : V = d[25];
	let H = V, U;
	d[26] === j ? U = d[27] : (U = c("SvMenu-root", j), d[26] = j, d[27] = U);
	let W;
	d[28] !== n.sx || d[29] !== m.sx || d[30] !== b.sx ? (W = l(a, m.sx, b.sx, n.sx), d[28] = n.sx, d[29] = m.sx, d[30] = b.sx, d[31] = W) : W = d[31];
	let G = F?.paper, K;
	d[32] !== R || d[33] !== G ? (K = v(G, {
		className: "SvMenu-paper",
		sx: l(i, R && {
			display: "flex",
			flexDirection: "column",
			overflow: "hidden"
		})
	}), d[32] = R, d[33] = G, d[34] = K) : K = d[34];
	let q = F?.list, J;
	d[35] !== R || d[36] !== q ? (J = v(q, {
		className: "SvMenu-list",
		sx: l(r, R && {
			display: "flex",
			flexDirection: "column",
			minHeight: 0,
			overflow: "hidden"
		})
	}), d[35] = R, d[36] = q, d[37] = J) : J = d[37];
	let Y;
	d[38] !== F || d[39] !== K || d[40] !== J ? (Y = {
		...F,
		paper: K,
		list: J
	}, d[38] = F, d[39] = K, d[40] = J, d[41] = Y) : Y = d[41];
	let X;
	d[42] === N ? X = d[43] : (X = N != null && /* @__PURE__ */ g(S, {
		role: "presentation",
		disableSticky: !0,
		className: "SvMenu-header",
		sx: t,
		children: N
	}), d[42] = N, d[43] = X);
	let Z;
	d[44] !== B || d[45] !== R ? (Z = R ? /* @__PURE__ */ g(o, {
		component: "li",
		role: "none",
		className: "SvMenu-body",
		sx: {
			minHeight: 0,
			overflowY: "auto",
			overflowX: "hidden",
			flex: "1 1 auto"
		},
		children: /* @__PURE__ */ g(o, {
			component: "ul",
			role: "group",
			sx: e,
			children: B
		})
	}) : B, d[44] = B, d[45] = R, d[46] = Z) : Z = d[46];
	let Q;
	d[47] !== M || d[48] !== L ? (Q = M != null && /* @__PURE__ */ g(o, {
		component: "li",
		role: "none",
		className: "SvMenu-footer",
		sx: {
			flexShrink: 0,
			borderTop: "0.5px solid var(--SvMenu-stroke)"
		},
		children: /* @__PURE__ */ g(o, {
			component: "ul",
			role: "group",
			sx: e,
			children: E(M, L)
		})
	}), d[47] = M, d[48] = L, d[49] = Q) : Q = d[49];
	let $;
	return d[50] !== H || d[51] !== P || d[52] !== u || d[53] !== Y || d[54] !== X || d[55] !== Z || d[56] !== Q || d[57] !== U || d[58] !== W ? ($ = /* @__PURE__ */ _(C, {
		...P,
		...H,
		ref: u,
		className: U,
		sx: W,
		slotProps: Y,
		children: [
			X,
			Z,
			Q
		]
	}), d[50] = H, d[51] = P, d[52] = u, d[53] = Y, d[54] = X, d[55] = Z, d[56] = Q, d[57] = U, d[58] = W, d[59] = $) : $ = d[59], $;
});
function O(e) {
	return e.children !== void 0 || e.items !== void 0;
}
function k(e) {
	return /* @__PURE__ */ p(w, {
		...e.slotProps?.item,
		key: e.id,
		disabled: e.disabled,
		onClick: e.onClick
	}, e.icon != null && /* @__PURE__ */ g(b, { children: e.icon }), e.description == null ? e.label : /* @__PURE__ */ g(x, {
		primary: e.label,
		secondary: e.description,
		slotProps: {
			primary: { component: "div" },
			secondary: { component: "div" }
		}
	}));
}
//#endregion
export { D as SvMenu };

//# sourceMappingURL=sv-menu.js.map