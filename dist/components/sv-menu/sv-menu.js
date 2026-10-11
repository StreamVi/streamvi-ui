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
//#region src/components/sv-menu/sv-menu.tsx
function T(e, t) {
	return u.map(e, (e) => h(e) ? e.type === d ? f(e, { children: T(e.props.children, t) }) : e.type === w ? f(e, {
		className: c("SvMenu-item", t.className, e.props.className),
		sx: l(n, t.sx, e.props.sx)
	}) : e : e);
}
var E = m(function(n, u) {
	let d = y(54), f;
	d[0] === Symbol.for("react.memo_cache_sentinel") ? (f = {
		props: {},
		name: "MuiMenu"
	}, d[0] = f) : f = d[0];
	let p = s(f), m;
	d[1] === Symbol.for("react.memo_cache_sentinel") ? (m = {
		props: {},
		name: "SvMenu"
	}, d[1] = m) : m = d[1];
	let h = s(m), b;
	d[2] === n ? b = d[3] : (b = {
		props: n,
		name: "SvMenu"
	}, d[2] = n, d[3] = b);
	let x = s(b), w;
	d[4] === x ? w = d[5] : (w = {
		props: x,
		name: "MuiMenu"
	}, d[4] = x, d[5] = w);
	let E = s(w), k, A, j, M, N;
	if (d[6] !== E) {
		let { items: e, children: t, header: n, footer: r, className: i, sx: a, slotProps: o, ...s } = E;
		j = n, A = r, k = i, N = o, M = s, d[6] = E, d[7] = k, d[8] = A, d[9] = j, d[10] = M, d[11] = N;
	} else k = d[7], A = d[8], j = d[9], M = d[10], N = d[11];
	let P;
	d[12] === Symbol.for("react.memo_cache_sentinel") ? (P = {
		props: {},
		name: "MuiMenuItem"
	}, d[12] = P) : P = d[12];
	let F = s(P), I, L;
	if (d[13] !== A || d[14] !== j || d[15] !== n || d[16] !== F || d[17] !== p || d[18] !== h) {
		let e = [
			n,
			h,
			p
		].find(D), t = e?.items === void 0 ? e?.children : e.items.map(O);
		I = j != null || A != null, L = T(t, F), d[13] = A, d[14] = j, d[15] = n, d[16] = F, d[17] = p, d[18] = h, d[19] = I, d[20] = L;
	} else I = d[19], L = d[20];
	let R = L, z;
	d[21] === k ? z = d[22] : (z = c("SvMenu-root", k), d[21] = k, d[22] = z);
	let B;
	d[23] !== n.sx || d[24] !== p.sx || d[25] !== h.sx ? (B = l(a, p.sx, h.sx, n.sx), d[23] = n.sx, d[24] = p.sx, d[25] = h.sx, d[26] = B) : B = d[26];
	let V = N?.paper, H;
	d[27] !== I || d[28] !== V ? (H = v(V, {
		className: "SvMenu-paper",
		sx: l(i, I && {
			display: "flex",
			flexDirection: "column",
			overflow: "hidden"
		})
	}), d[27] = I, d[28] = V, d[29] = H) : H = d[29];
	let U = N?.list, W;
	d[30] !== I || d[31] !== U ? (W = v(U, {
		className: "SvMenu-list",
		sx: l(r, I && {
			display: "flex",
			flexDirection: "column",
			minHeight: 0,
			overflow: "hidden"
		})
	}), d[30] = I, d[31] = U, d[32] = W) : W = d[32];
	let G;
	d[33] !== N || d[34] !== W || d[35] !== H ? (G = {
		...N,
		paper: H,
		list: W
	}, d[33] = N, d[34] = W, d[35] = H, d[36] = G) : G = d[36];
	let K;
	d[37] === j ? K = d[38] : (K = j != null && /* @__PURE__ */ g(S, {
		role: "presentation",
		disableSticky: !0,
		className: "SvMenu-header",
		sx: t,
		children: j
	}), d[37] = j, d[38] = K);
	let q;
	d[39] !== R || d[40] !== I ? (q = I ? /* @__PURE__ */ g(o, {
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
			children: R
		})
	}) : R, d[39] = R, d[40] = I, d[41] = q) : q = d[41];
	let J;
	d[42] !== A || d[43] !== F ? (J = A != null && /* @__PURE__ */ g(o, {
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
			children: T(A, F)
		})
	}), d[42] = A, d[43] = F, d[44] = J) : J = d[44];
	let Y;
	return d[45] !== M || d[46] !== u || d[47] !== G || d[48] !== K || d[49] !== q || d[50] !== J || d[51] !== z || d[52] !== B ? (Y = /* @__PURE__ */ _(C, {
		...M,
		ref: u,
		className: z,
		sx: B,
		slotProps: G,
		children: [
			K,
			q,
			J
		]
	}), d[45] = M, d[46] = u, d[47] = G, d[48] = K, d[49] = q, d[50] = J, d[51] = z, d[52] = B, d[53] = Y) : Y = d[53], Y;
});
function D(e) {
	return e.children !== void 0 || e.items !== void 0;
}
function O(e) {
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
export { E as SvMenu };

//# sourceMappingURL=sv-menu.js.map