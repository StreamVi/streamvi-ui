import { SvRadio as e } from "../sv-radio/sv-radio.js";
import { FieldHelp as t, FieldLabel as n, FieldRoot as r } from "./field-layout.js";
import { useDefaultProps as i } from "@mui/material/DefaultPropsProvider";
import a from "clsx";
import { mergeSx as o } from "merge-sx";
import { createElement as s, forwardRef as c, useId as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { mergeSlotProps as f } from "@mui/material/utils";
import { useFormControl as p } from "@mui/material/FormControl";
import m from "@mui/material/FormControlLabel";
import h from "@mui/material/RadioGroup";
import { composeRefs as g } from "@radix-ui/react-compose-refs";
//#region src/components/sv-radio-group/sv-radio-group.tsx
function _(e = {}, t = {}) {
	return {
		...f(t, e),
		...e.ref || t.ref ? { ref: g(e.ref, t.ref) } : {},
		slots: {
			...e.slots,
			...t.slots
		},
		slotProps: {
			input: (n) => {
				let r = typeof e.slotProps?.input == "function" ? e.slotProps.input(n) : e.slotProps?.input, i = typeof t.slotProps?.input == "function" ? t.slotProps.input(n) : t.slotProps?.input;
				return {
					...f(i, r ?? {}),
					...r?.ref || i?.ref ? { ref: g(r?.ref, i?.ref) } : {}
				};
			},
			root: (n) => {
				let r = typeof e.slotProps?.root == "function" ? e.slotProps.root(n) : e.slotProps?.root, i = typeof t.slotProps?.root == "function" ? t.slotProps.root(n) : t.slotProps?.root;
				return {
					...f(i, r ?? {}),
					...r?.ref || i?.ref ? { ref: g(r?.ref, i?.ref) } : {}
				};
			}
		}
	};
}
var v = c(function(c, g) {
	let v = i({
		props: {},
		name: "MuiRadioGroup"
	}), y = i({
		props: {},
		name: "SvRadioGroup"
	}), b = i({
		props: c,
		name: "SvRadioGroup"
	}), { options: x, children: S, label: C, helperText: w, error: T, disabled: E, required: D, className: O, sx: k, slotProps: A = {}, ...j } = i({
		props: b,
		name: "MuiRadioGroup"
	}), M = [
		c,
		y,
		v
	].find((e) => e.children !== void 0 || e.options !== void 0), N = M?.options, P = p(), F = i({
		props: A.formControl ?? {},
		name: "MuiFormControl"
	}), I = E ?? A.formControl?.disabled ?? P?.disabled ?? F.disabled, L = T ?? A.formControl?.error ?? P?.error ?? F.error, R = D ?? A.formControl?.required ?? P?.required ?? F.required, z = l(), B = A.label?.id ?? `${z}-label`, V = A.helperText?.id ?? `${z}-help`, H = [...new Set([...j["aria-describedby"]?.split(/\s+/) ?? [], ...w == null ? [] : [V]].filter(Boolean))].join(" ") || void 0, U = /* @__PURE__ */ u(h, {
		...j,
		ref: g,
		className: a("SvRadioGroup-root", O),
		sx: o(v.sx, y.sx, c.sx),
		"aria-labelledby": j["aria-labelledby"] ?? (j["aria-label"] === void 0 && C != null ? B : void 0),
		"aria-describedby": H,
		"aria-invalid": j["aria-invalid"] ?? (L || void 0),
		"aria-required": j["aria-required"] ?? (R || void 0),
		children: N === void 0 ? M?.children : N.map((t) => {
			let n = _(A.radio, t.slotProps?.radio);
			return /* @__PURE__ */ s(m, {
				...t.slotProps?.label,
				key: t.value,
				value: t.value,
				label: t.label,
				disabled: t.disabled ?? t.slotProps?.label?.disabled ?? n.disabled,
				slotProps: {
					...t.slotProps?.label?.slotProps,
					typography: f(t.slotProps?.label?.slotProps?.typography, { sx: { fontSize: 14 } })
				},
				sx: o({
					m: 0,
					gap: "4px"
				}, t.slotProps?.label?.sx),
				control: /* @__PURE__ */ u(e, {
					...n,
					value: t.value,
					disabled: t.disabled ?? n.disabled,
					required: n.required ?? t.slotProps?.label?.required ?? R
				})
			});
		})
	});
	return N === void 0 && C == null && w == null && E === void 0 && T === void 0 && D === void 0 && A.formControl === void 0 ? U : /* @__PURE__ */ d(r, {
		...A.formControl,
		disabled: I,
		error: L,
		required: R,
		className: a("SvRadioGroup-formControl", A.formControl?.className),
		children: [
			C != null && /* @__PURE__ */ u(n, {
				...A.label,
				id: B,
				className: a("SvRadioGroup-label", A.label?.className),
				children: C
			}),
			U,
			w != null && /* @__PURE__ */ u(t, {
				...A.helperText,
				id: V,
				className: a("SvRadioGroup-helperText", A.helperText?.className),
				children: w
			})
		]
	});
});
//#endregion
export { v as SvRadioGroup };

//# sourceMappingURL=sv-radio-group.js.map