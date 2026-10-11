import { SvField as e, resolveFieldSlot as t } from "../sv-field/sv-field.js";
import { SvIconButton as n } from "../sv-icon-button/sv-icon-button.js";
import { clampNumber as r, parseNumber as i, stepNumber as a } from "./number.js";
import { useDefaultProps as o } from "@mui/material/DefaultPropsProvider";
import s from "clsx";
import { mergeSx as c } from "merge-sx";
import { forwardRef as l, useEffect as ee, useState as u } from "react";
import { jsx as d } from "react/jsx-runtime";
import f from "@mui/icons-material/RemoveRounded";
import { useForkRef as p } from "@mui/material/utils";
import m from "@mui/material/InputAdornment";
import te from "@mui/icons-material/AddRounded";
//#region src/components/sv-number-field/sv-number-field.tsx
var h = l(function(l, h) {
	let ne = o({
		props: {},
		name: "SvNumberField"
	}), re = o({
		props: l,
		name: "SvNumberField"
	}), g = o({
		props: re,
		name: "SvField"
	}), { value: _, defaultValue: v = null, onChange: y, min: b, max: x, step: S = 1, disabled: C = !1, readOnly: w = !1, onBlur: ie, onKeyDown: ae, inputRef: T, className: E, slots: D = {}, slotProps: O = {}, ...k } = o({
		props: g,
		name: "MuiTextField"
	}), [A, j] = u(() => r(v, b, x)), M = _ === void 0 ? A : _, [N, P] = u(null);
	N && !Object.is(N.base, M) && P(null);
	let F = N && Object.is(N.base, M) ? N.text : String(M ?? ""), I = {
		...k,
		value: M,
		disabled: C,
		readOnly: w,
		min: b,
		max: x,
		step: S,
		error: k.error ?? !1,
		required: k.required ?? !1,
		fullWidth: k.fullWidth ?? !1,
		multiline: !1,
		variant: "outlined"
	}, L = t(O.root, I), R = t(O.input, I), oe = t(O.htmlInput, I), z = {
		...R?.inputProps,
		...oe,
		...R?.slotProps?.input
	};
	delete z.value, delete z.defaultValue;
	let B = !!(C || L?.disabled || R?.disabled || z.disabled), V = !!(w || R?.readOnly || z.readOnly), H = B || V, U = {
		...I,
		disabled: B,
		readOnly: V
	}, W = t(O.increment, U), G = t(O.decrement, U), K = i(F), q = K === void 0 ? M : K, J = (e) => {
		let t = e === 1 ? W : G;
		return !!(H || q !== null && (e === 1 ? x !== void 0 && q >= x : b !== void 0 && q <= b) || t?.disabled || t?.loading);
	}, Y = (e, t = i(F)) => {
		if (H || e.defaultPrevented || (P(null), t === void 0)) return;
		let n = r(t, b, x);
		Object.is(n, M) || (_ === void 0 && j(n), y?.(e, n));
	}, X = (e, t) => {
		J(t) || Y(e, a(q, t, S, b, x));
	}, [Z, se] = u(null), Q = p(T, R?.inputRef, se);
	ee(() => {
		let e = Z?.form;
		if (!e) return;
		let t = (e) => {
			queueMicrotask(() => {
				e.defaultPrevented || (P(null), _ === void 0 && j(r(v, b, x)));
			});
		};
		return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
	}, [
		Z,
		_,
		v,
		b,
		x
	]);
	let ce = (e) => {
		(L?.onKeyDown ?? ae)?.(e), !(e.defaultPrevented || H || e.nativeEvent.isComposing || e.target !== Z) && (e.key === "Enter" ? (Y(e), e.preventDefault()) : e.key === "ArrowUp" || e.key === "ArrowDown" ? (X(e, e.key === "ArrowUp" ? 1 : -1), e.preventDefault()) : e.key === "Escape" && P(null));
	}, $ = (e) => {
		let t = e === 1 ? W : G, r = (e === 1 ? D.increment : D.decrement) ?? n;
		return /* @__PURE__ */ d(r, {
			size: "small",
			"aria-label": e === 1 ? "Increase value" : "Decrease value",
			...t,
			type: "button",
			disabled: J(e),
			className: s(e === 1 ? "SvNumberField-increment" : "SvNumberField-decrement", t?.className),
			sx: c((e) => ({ color: `var(--SvField-secondary, ${(e.vars ?? e).palette.text.secondary})` }), t?.sx),
			onMouseDown: (e) => {
				t?.onMouseDown?.(e), e.preventDefault();
			},
			onClick: (n) => {
				J(e) || (t?.onClick?.(n), n.defaultPrevented || X(n, e));
			},
			children: t?.children ?? d(e === 1 ? te : f, {})
		});
	}, { increment: le, decrement: ue, ...de } = D, { increment: fe, decrement: pe, ...me } = O;
	return /* @__PURE__ */ d(e, {
		...k,
		sx: c(ne.sx, k.sx),
		ref: h,
		className: s("SvNumberField-root", E),
		disabled: B,
		value: F,
		type: "text",
		slots: de,
		slotProps: {
			...me,
			root: {
				...L,
				onKeyDown: ce
			},
			input: {
				...R,
				inputProps: void 0,
				slotProps: {
					...R?.slotProps,
					input: void 0
				},
				inputRef: Q,
				value: F,
				defaultValue: void 0,
				type: "text",
				multiline: !1,
				disabled: B,
				readOnly: V,
				sx: c({ gap: "10px" }, R?.sx),
				startAdornment: /* @__PURE__ */ d(m, {
					position: "start",
					children: $(-1)
				}),
				endAdornment: /* @__PURE__ */ d(m, {
					position: "end",
					children: $(1)
				}),
				onChange: (e) => {
					R?.onChange?.(e), !H && !e.defaultPrevented && P({
						base: M,
						text: e.target.value
					});
				},
				onBlur: (e) => {
					(R?.onBlur ?? ie)?.(e);
				}
			},
			htmlInput: {
				...z,
				onBlur: (e) => {
					z.onBlur?.(e), Y(e);
				},
				type: "text",
				disabled: B,
				readOnly: V,
				role: "spinbutton",
				inputMode: "decimal",
				"aria-valuemin": b,
				"aria-valuemax": x,
				"aria-valuenow": K ?? void 0,
				style: {
					textAlign: "center",
					...z.style
				}
			}
		}
	});
});
//#endregion
export { h as SvNumberField };

//# sourceMappingURL=sv-number-field.js.map