import { SvChip as e } from "../sv-chip/sv-chip.js";
import { SvField as t } from "../sv-field/sv-field.js";
import { tagChipStyles as n, tagClearStyles as r, tagRootStyles as i } from "./sv-tag-input.styles.js";
import a from "@mui/material/Box";
import { useDefaultProps as o } from "@mui/material/DefaultPropsProvider";
import s from "clsx";
import { mergeSx as c } from "merge-sx";
import { createContext as l, forwardRef as u, useCallback as d, useContext as f, useRef as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
import { mergeSlotProps as _ } from "@mui/material/utils";
import v from "@mui/material/IconButton";
import { c as y } from "react/compiler-runtime";
import { composeRefs as b } from "@radix-ui/react-compose-refs";
import x from "@mui/material/Autocomplete";
import S from "@mui/material/Portal";
//#region src/components/sv-tag-input/sv-tag-input.tsx
var C = l(null), w = u(function(e, t) {
	let n = y(23), r, i;
	n[0] === e ? (r = n[1], i = n[2]) : ({ownerState: r, ...i} = e, n[0] = e, n[1] = r, n[2] = i);
	let a = f(C);
	if (!a) return null;
	let o = a.component ?? v, s;
	n[3] !== a.component || n[4] !== r ? (s = a.component && { ownerState: r }, n[3] = a.component, n[4] = r, n[5] = s) : s = n[5];
	let c, l;
	n[6] === i ? (c = n[7], l = n[8]) : (c = (e) => {
		i.onMouseDown?.(e), e.preventDefault();
	}, l = (e) => {
		i.onKeyDown?.(e), e.stopPropagation();
	}, n[6] = i, n[7] = c, n[8] = l);
	let u;
	n[9] !== a.inputRef || n[10] !== i ? (u = (e) => {
		i.onClick?.(e), e.defaultPrevented || a.inputRef.current?.focus({ preventScroll: !0 });
	}, n[9] = a.inputRef, n[10] = i, n[11] = u) : u = n[11];
	let d;
	n[12] !== o || n[13] !== i || n[14] !== t || n[15] !== s || n[16] !== c || n[17] !== l || n[18] !== u ? (d = /* @__PURE__ */ h(o, {
		...i,
		...s,
		ref: t,
		onMouseDown: c,
		onKeyDown: l,
		onClick: u
	}), n[12] = o, n[13] = i, n[14] = t, n[15] = s, n[16] = c, n[17] = l, n[18] = u, n[19] = d) : d = n[19];
	let p;
	return n[20] !== a.container || n[21] !== d ? (p = /* @__PURE__ */ h(S, {
		container: a.container,
		children: d
	}), n[20] = a.container, n[21] = d, n[22] = p) : p = n[22], p;
}), T = u(function(l, u) {
	let f = o({
		props: {},
		name: "MuiAutocomplete"
	}), v = o({
		props: {},
		name: "SvTagInput"
	}), y = o({
		props: l,
		name: "SvTagInput"
	}), { label: S, helperText: T, error: E = !1, placeholder: D, labelAdornment: O, className: k, sx: A, slotProps: j = {}, slots: M, options: N = [], renderInput: P, renderValue: F, clearIcon: I, clearText: L = "Clear", size: R = "medium", ...z } = o({
		props: y,
		name: "MuiAutocomplete"
	}), { textField: B, ...V } = j, H = p(null), U = p(null), W = d(() => H.current, []), G = c(!P && i, f.sx, v.sx, l.sx);
	return /* @__PURE__ */ h(C.Provider, {
		value: {
			container: W,
			inputRef: U,
			component: M?.clearIndicator
		},
		children: /* @__PURE__ */ h(x, {
			...z,
			onKeyDown: (e) => {
				z.onKeyDown?.(e), !P && e.target instanceof Element && e.target.closest(".SvField-header") && (e.defaultMuiPrevented = !0);
			},
			ref: u,
			multiple: !0,
			freeSolo: !0,
			options: N,
			size: R,
			clearText: L,
			clearIcon: P ? I : I === void 0 ? L : I,
			className: s("SvTagInput-root", k),
			sx: G,
			slots: {
				...M,
				chip: M?.chip ?? e,
				...!P && { clearIndicator: w }
			},
			slotProps: {
				...V,
				root: _(V.root, { sx: G }),
				...!P && { clearIndicator: _(V.clearIndicator, {
					tabIndex: 0,
					sx: r
				}) },
				chip: _(V.chip, { sx: n })
			},
			renderValue: F,
			renderInput: P ?? ((e) => {
				let n = typeof B == "function" ? B({
					id: e.id,
					disabled: e.disabled,
					fullWidth: e.fullWidth,
					size: R,
					readOnly: z.readOnly ?? !1,
					error: E
				}) : B;
				return /* @__PURE__ */ h(t, {
					label: S,
					helperText: T,
					error: E,
					placeholder: D,
					labelAdornment: O,
					...n,
					...e,
					headerAction: (e) => /* @__PURE__ */ g(m, { children: [typeof n?.headerAction == "function" ? n.headerAction(e) : n?.headerAction, /* @__PURE__ */ h(a, {
						component: "span",
						ref: H,
						className: "SvTagInput-clearTarget",
						sx: { display: "flex" }
					})] }),
					sx: c(!S && !n?.label && !O && !n?.labelAdornment && !n?.headerAction && { "& .SvField-header:has(.SvTagInput-clearTarget:empty)": { display: "none" } }, n?.sx),
					slotProps: {
						...n?.slotProps,
						inputLabel: _(n?.slotProps?.inputLabel, e.slotProps.inputLabel),
						input: (t) => {
							let r = n?.slotProps?.input, i = typeof r == "function" ? r(t) : r;
							return {
								..._(i, e.slotProps.input),
								ref: b(i?.ref, e.slotProps.input.ref)
							};
						},
						htmlInput: (t) => {
							let r = n?.slotProps?.htmlInput, i = typeof r == "function" ? r(t) : r;
							return {
								..._(i, e.slotProps.htmlInput),
								ref: b(i?.ref, e.slotProps.htmlInput.ref, U)
							};
						}
					}
				});
			})
		})
	});
});
//#endregion
export { T as SvTagInput };

//# sourceMappingURL=sv-tag-input.js.map