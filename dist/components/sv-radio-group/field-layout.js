import { mergeSx as e } from "merge-sx";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
import r from "@mui/material/FormControl";
import i from "@mui/material/FormHelperText";
import { c as a } from "react/compiler-runtime";
import o from "@mui/material/FormLabel";
//#region src/components/sv-radio-group/field-layout.tsx
var s = {
	gap: "4px",
	minWidth: 0,
	color: "text.primary",
	fontFamily: "fontFamily"
}, c = {
	fontSize: 12,
	lineHeight: "16px",
	fontWeight: 500,
	color: "text.primary",
	"&.Mui-focused:not(.Mui-error):not(.Mui-disabled)": { color: "secondary.main" },
	"&.Mui-disabled": { color: "text.secondary" }
}, l = {
	margin: 0,
	fontSize: 13,
	lineHeight: "20px",
	"&.Mui-disabled": { color: "text.secondary" }
}, u = t(function(t, i) {
	let o = a(9), c, l;
	o[0] === t ? (c = o[1], l = o[2]) : ({sx: l, ...c} = t, o[0] = t, o[1] = c, o[2] = l);
	let u;
	o[3] === l ? u = o[4] : (u = e(s, l), o[3] = l, o[4] = u);
	let d;
	return o[5] !== c || o[6] !== i || o[7] !== u ? (d = /* @__PURE__ */ n(r, {
		...c,
		ref: i,
		sx: u
	}), o[5] = c, o[6] = i, o[7] = u, o[8] = d) : d = o[8], d;
}), d = t(function(t, r) {
	let i = a(9), s, l;
	i[0] === t ? (s = i[1], l = i[2]) : ({sx: l, ...s} = t, i[0] = t, i[1] = s, i[2] = l);
	let u;
	i[3] === l ? u = i[4] : (u = e(c, l), i[3] = l, i[4] = u);
	let d;
	return i[5] !== s || i[6] !== r || i[7] !== u ? (d = /* @__PURE__ */ n(o, {
		...s,
		ref: r,
		sx: u
	}), i[5] = s, i[6] = r, i[7] = u, i[8] = d) : d = i[8], d;
}), f = t(function(t, r) {
	let o = a(9), s, c;
	o[0] === t ? (s = o[1], c = o[2]) : ({sx: c, ...s} = t, o[0] = t, o[1] = s, o[2] = c);
	let u;
	o[3] === c ? u = o[4] : (u = e(l, c), o[3] = c, o[4] = u);
	let d;
	return o[5] !== s || o[6] !== r || o[7] !== u ? (d = /* @__PURE__ */ n(i, {
		...s,
		ref: r,
		sx: u
	}), o[5] = s, o[6] = r, o[7] = u, o[8] = d) : d = o[8], d;
});
//#endregion
export { f as FieldHelp, d as FieldLabel, u as FieldRoot };

//# sourceMappingURL=field-layout.js.map