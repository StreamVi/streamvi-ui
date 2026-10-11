import { iconButtonStyles as e } from "./sv-icon-button.styles.js";
import { useDefaultProps as t } from "@mui/material/DefaultPropsProvider";
import n from "clsx";
import { mergeSx as r } from "merge-sx";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import o from "@mui/material/IconButton";
//#region src/components/sv-icon-button/sv-icon-button.tsx
var s = i(function(i, s) {
	let c = t({
		props: {},
		name: "MuiIconButton"
	}), l = t({
		props: {},
		name: "SvIconButton"
	}), u = t({
		props: i,
		name: "SvIconButton"
	}), { appearance: d = "default", color: f = "default", size: p = "medium", loading: m = null, children: h, className: g, ..._ } = t({
		props: u,
		name: "MuiIconButton"
	});
	return /* @__PURE__ */ a(o, {
		..._,
		ref: s,
		color: f,
		size: p,
		loading: m,
		"aria-busy": m ? !0 : _["aria-busy"],
		className: n("SvIconButton-root", `SvIconButton-appearance-${d}`, g),
		sx: r((t) => e(t, {
			appearance: d,
			color: f,
			size: p,
			loading: m
		}), c.sx, l.sx, i.sx),
		children: /* @__PURE__ */ a("span", {
			className: "SvIconButton-icon",
			children: h
		})
	});
});
//#endregion
export { s as SvIconButton };

//# sourceMappingURL=sv-icon-button.js.map