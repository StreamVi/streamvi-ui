import { mergeSx as e } from "merge-sx";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
import { c as r } from "react/compiler-runtime";
import i from "@mui/material/Paper";
//#region src/components/sv-select/menu-paper.tsx
var a = {
	borderRadius: "8px",
	border: "1px solid",
	borderColor: "divider",
	color: "text.primary",
	backgroundImage: "none",
	backgroundColor: "background.paper",
	boxShadow: "0 8px 24px #2f2b431a"
}, o = {
	fontSize: 14,
	lineHeight: "20px",
	padding: "8px 16px"
}, s = t(function(t, o) {
	let s = r(9), c, l;
	s[0] === t ? (c = s[1], l = s[2]) : ({sx: l, ...c} = t, s[0] = t, s[1] = c, s[2] = l);
	let u;
	s[3] === l ? u = s[4] : (u = e(a, l), s[3] = l, s[4] = u);
	let d;
	return s[5] !== c || s[6] !== o || s[7] !== u ? (d = /* @__PURE__ */ n(i, {
		...c,
		ref: o,
		sx: u
	}), s[5] = c, s[6] = o, s[7] = u, s[8] = d) : d = s[8], d;
});
//#endregion
export { s as MenuPaper, o as menuItemSx };

//# sourceMappingURL=menu-paper.js.map