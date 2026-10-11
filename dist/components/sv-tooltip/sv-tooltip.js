import e from "clsx";
import { mergeSx as t } from "merge-sx";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import { mergeSlotProps as i } from "@mui/material/utils";
import { c as a } from "react/compiler-runtime";
import o from "@mui/material/Tooltip";
//#region src/components/sv-tooltip/sv-tooltip.tsx
var s = n(function(n, s) {
	let c = a(19), l, u, d, f;
	c[0] === n ? (l = c[1], u = c[2], d = c[3], f = c[4]) : ({className: l, sx: f, slotProps: d, ...u} = n, c[0] = n, c[1] = l, c[2] = u, c[3] = d, c[4] = f);
	let p = d?.tooltip, m;
	c[5] !== l || c[6] !== f || c[7] !== p ? (m = i(p, {
		className: e("SvTooltip-root", l),
		sx: t({
			backgroundColor: "background.paper",
			color: "text.primary",
			border: "1px solid",
			borderColor: "divider",
			borderRadius: "8px",
			p: "8px 12px",
			maxWidth: 280,
			fontSize: 12,
			fontWeight: 400,
			lineHeight: "16px",
			letterSpacing: 0,
			boxShadow: 2
		}, f)
	}), c[5] = l, c[6] = f, c[7] = p, c[8] = m) : m = c[8];
	let h = d?.arrow, g;
	c[9] === h ? g = c[10] : (g = i(h, { sx: {
		color: "background.paper",
		"&::before": {
			border: "1px solid",
			borderColor: "divider"
		}
	} }), c[9] = h, c[10] = g);
	let _;
	c[11] !== d || c[12] !== m || c[13] !== g ? (_ = {
		...d,
		tooltip: m,
		arrow: g
	}, c[11] = d, c[12] = m, c[13] = g, c[14] = _) : _ = c[14];
	let v;
	return c[15] !== u || c[16] !== s || c[17] !== _ ? (v = /* @__PURE__ */ r(o, {
		...u,
		ref: s,
		slotProps: _
	}), c[15] = u, c[16] = s, c[17] = _, c[18] = v) : v = c[18], v;
});
//#endregion
export { s as SvTooltip };

//# sourceMappingURL=sv-tooltip.js.map