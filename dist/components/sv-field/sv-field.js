import { fieldHelperStyles as e, fieldInputStyles as t, fieldLabelStyles as ee, fieldRootStyles as te } from "./sv-field.styles.js";
import n from "@mui/material/Box";
import { useDefaultProps as r } from "@mui/material/DefaultPropsProvider";
import i from "clsx";
import { mergeSx as a } from "merge-sx";
import { forwardRef as o, useId as ne } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { useForkRef as l } from "@mui/material/utils";
import re from "@mui/material/FormControl";
import ie from "@mui/material/FormHelperText";
import u from "@mui/material/InputLabel";
import ae from "@mui/material/OutlinedInput";
//#region src/components/sv-field/sv-field.tsx
function d(e, t) {
	return typeof e == "function" ? e(t) : e;
}
var f = o(function(o, f) {
	let oe = r({
		props: {},
		name: "MuiTextField"
	}), se = r({
		props: {},
		name: "SvField"
	}), ce = r({
		props: o,
		name: "SvField"
	}), p = r({
		props: ce,
		name: "MuiTextField"
	}), { label: m, helperText: h, labelAdornment: g, headerAction: _, id: le, disabled: v = !1, error: y = !1, required: b = !1, fullWidth: x = !1, multiline: S = !1, variant: C = "outlined", color: w = "primary", size: T = "medium", value: ue, defaultValue: de, onChange: fe, onFocus: pe, onBlur: me, inputRef: he, name: ge, type: _e, autoComplete: ve, autoFocus: E, placeholder: D, rows: O, minRows: k, maxRows: A, sx: j, className: M, classes: N, slots: P = {}, slotProps: F = {}, ...I } = p, L = {
		...p,
		disabled: v,
		error: y,
		required: b,
		fullWidth: x,
		multiline: S,
		variant: C,
		color: w,
		size: T
	}, R = d(F.root, L), z = d(F.input, L), B = d(F.htmlInput, L), V = z?.inputProps, H = d(F.inputLabel, L), U = d(F.formHelperText, L), ye = ne(), W = B?.id ?? z?.id ?? le ?? ye, G = h != null && h !== !1 && h !== "", K = G ? U?.id ?? `${W}-helper-text` : void 0, q = l(f, R?.ref), be = l(he, z?.inputRef), J = P.root ?? re, Y = P.input ?? ae, X = P.inputLabel ?? u, Z = P.formHelperText ?? ie, Q = typeof g == "function" ? g(L) : g, $ = typeof _ == "function" ? _(L) : _, xe = [...new Set(i(K, I["aria-describedby"], z?.["aria-describedby"], V?.["aria-describedby"], B?.["aria-describedby"]).split(" ").filter(Boolean))].join(" ") || void 0;
	return /* @__PURE__ */ c(J, {
		...typeof J != "string" && { ownerState: L },
		...I,
		disabled: v,
		error: y,
		required: b,
		fullWidth: x,
		variant: C,
		color: w,
		size: T,
		...R,
		ref: q,
		className: i("SvField-root", N?.root, M, R?.className),
		sx: a(te, oe.sx, se.sx, j, R?.sx),
		children: [
			(m != null && m !== "" || Q != null || $ != null) && /* @__PURE__ */ c(n, {
				className: "SvField-header",
				sx: {
					display: "flex",
					alignItems: "flex-start",
					gap: "8px",
					minWidth: 0
				},
				children: [/* @__PURE__ */ c(n, {
					sx: {
						display: "flex",
						alignItems: "center",
						gap: "4px",
						minWidth: 0,
						flex: 1
					},
					children: [m != null && m !== "" && /* @__PURE__ */ s(X, {
						...typeof X != "string" && { ownerState: L },
						shrink: !1,
						disableAnimation: !0,
						...H,
						htmlFor: W,
						className: i("SvField-label", H?.className),
						sx: a(ee, H?.sx),
						children: m
					}), Q]
				}), $ != null && /* @__PURE__ */ s(n, {
					className: "SvField-headerAction",
					sx: {
						display: "flex",
						flexShrink: 0
					},
					children: $
				})]
			}),
			/* @__PURE__ */ s(Y, {
				...typeof Y != "string" && { ownerState: L },
				value: ue,
				defaultValue: de,
				onChange: fe,
				onFocus: pe,
				onBlur: me,
				name: ge,
				type: _e,
				autoComplete: ve,
				autoFocus: E,
				placeholder: D,
				multiline: S,
				rows: O,
				minRows: k,
				maxRows: A,
				fullWidth: x,
				notched: !1,
				...z,
				id: W,
				inputRef: be,
				slots: {
					...z?.slots,
					...P.htmlInput && { input: P.htmlInput }
				},
				inputProps: {
					...V,
					...B,
					id: W,
					"aria-describedby": xe
				},
				className: i("SvField-input", z?.className),
				sx: a(t, z?.sx, z?.slotProps?.root?.sx)
			}),
			G && /* @__PURE__ */ s(Z, {
				...typeof Z != "string" && { ownerState: L },
				...U,
				id: K,
				className: i("SvField-helperText", U?.className),
				sx: a(e, U?.sx),
				children: h
			})
		]
	});
});
//#endregion
export { f as SvField, d as resolveFieldSlot };

//# sourceMappingURL=sv-field.js.map