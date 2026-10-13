import { buttonStyles as e } from "./sv-button.styles.js";
import t from "@mui/material/Box";
import n from "@mui/material/Button";
import { ButtonGroupContext as r } from "@mui/material/ButtonGroup";
import i from "@mui/material/CircularProgress";
import { useDefaultProps as a } from "@mui/material/DefaultPropsProvider";
import o from "clsx";
import { mergeSx as s } from "merge-sx";
import { forwardRef as c, useContext as l, useId as u } from "react";
import { jsx as d } from "react/jsx-runtime";
//#region src/components/sv-button/sv-button.tsx
var f = c(function(c, f) {
	let p = l(r), m = a({
		props: {},
		name: "MuiButton"
	}), h = a({
		props: {},
		name: "SvButton"
	}), g = { ...c };
	for (let e of [
		"color",
		"disabled",
		"disableElevation",
		"disableFocusRipple",
		"disableRipple",
		"fullWidth",
		"size",
		"variant"
	]) g[e] === void 0 && p[e] !== void 0 && Object.assign(g, { [e]: p[e] });
	let _ = a({
		props: g,
		name: "SvButton"
	}), v = a({
		props: _,
		name: "MuiButton"
	}), { appearance: y = "default", variant: b = "contained", color: x = y === "success" ? "success" : "primary", size: S = "medium", disableElevation: C = !0, loading: w = null, loadingIndicator: T, loadingPosition: E, children: D, className: O, id: k, ...A } = v, j = u(), M = k ?? j, N = v.color !== void 0, P = T !== void 0 || E !== void 0 ? "mui" : b === "text" ? "text" : b === "contained" && (y === "default" && x === "primary" || y === "secondary" && !N) ? "stripes" : "mui", F = {
		...v,
		appearance: y,
		variant: b,
		color: x,
		size: S,
		hasColor: N,
		loadingMode: P,
		loading: w,
		loadingPosition: E ?? "center"
	}, I = P === "stripes" ? /* @__PURE__ */ d(t, {
		component: "span",
		role: "progressbar",
		"aria-labelledby": M
	}) : P === "mui" ? T : /* @__PURE__ */ d(i, {
		color: "inherit",
		size: 16,
		"aria-labelledby": M
	});
	return /* @__PURE__ */ d(n, {
		...A,
		id: M,
		ref: f,
		className: o("SvButton-root", `SvButton-appearance-${y}`, O),
		variant: b,
		color: x,
		size: S,
		disableElevation: C,
		loading: w,
		loadingIndicator: I,
		loadingPosition: E,
		"aria-busy": w ? !0 : A["aria-busy"],
		sx: s((t) => e(t, F), m.sx, h.sx, c.sx),
		children: /* @__PURE__ */ d("span", {
			className: "SvButton-label",
			children: D
		})
	});
});
//#endregion
export { f as SvButton };

//# sourceMappingURL=sv-button.js.map