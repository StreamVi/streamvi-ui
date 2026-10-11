import { svTokens as e } from "./tokens.js";
import { mergeSvThemeOptions as t, svColorDefaults as n } from "./defaults.js";
import { mergeSx as r } from "merge-sx";
import { createTheme as i } from "@mui/material/styles";
//#region src/theme/create-theme.ts
function a(e, t, n) {
	let r = Object.fromEntries(Object.entries(n).filter(([e, n]) => n !== t[e]));
	return {
		...t,
		...e.applyStyles("dark", r)
	};
}
function o(o = {}) {
	let s = o.defaultColorScheme ?? o.palette?.mode ?? "light", c = (e) => {
		if (!o.cssVariables && !o.colorSchemes || e === s && o.palette) return o.palette;
		let t = o.colorSchemes?.[e];
		return t && t !== !0 ? t.palette : void 0;
	}, l = (e, t) => c(t)?.text?.secondary ? (e.vars ?? e).palette.text.secondary : t === "dark" ? "#828282" : "#8e8e8e", u = (e, t) => c(t)?.error ? (e.vars ?? e).palette.error.main : "#d64933", d = (t) => {
		let n = e(t), r = (t.vars ?? t).palette, i = (e) => ({
			"--SvButton-error": u(t, e),
			"--SvButton-errorHover": c(e)?.error ? r.error.dark : "#de6d5c",
			"--SvButton-success": c(e)?.success ? r.success.main : n.green,
			"--SvButton-successHover": c(e)?.success ? r.success.dark : n.greenHover ?? "#1fbf4c",
			"--SvButton-successContrast": c(e)?.success ? r.success.contrastText : "#fff"
		});
		return a(t, {
			"--SvButton-primary": n.accent,
			"--SvButton-primaryHover": n.accentHover,
			"--SvButton-primaryContrast": "#fff",
			"--SvButton-errorContrast": "#fff",
			...i("light"),
			"--SvButton-surface": o.sv?.surface ?? "rgba(20,20,20,0.06)",
			"--SvButton-surfaceHover": o.sv?.surfaceHover ?? "rgba(20,20,20,0.1)",
			"--SvButton-muted": "#8e8e8e"
		}, {
			...i("dark"),
			"--SvButton-surface": o.sv?.surface ?? "rgba(247,247,247,0.06)",
			"--SvButton-surfaceHover": o.sv?.surfaceHover ?? "rgba(247,247,247,0.1)",
			"--SvButton-muted": "#828282"
		});
	}, f = (t) => ({
		"--SvCheckbox-accent": e(t).accent,
		"--SvCheckbox-stroke": o.sv?.stroke ?? "#ccc",
		"--SvCheckbox-foreground": "#fff",
		...t.applyStyles("dark", { "--SvCheckbox-stroke": o.sv?.stroke ?? "#333" })
	}), p = (e) => ({
		"--SvSwitch-neutral": "#8e8e8e",
		...e.applyStyles("dark", { "--SvSwitch-neutral": "#828282" })
	}), m = (e) => ({
		"--SvSlider-default-stroke": o.sv?.stroke ?? "#ccc",
		...e.applyStyles("dark", { "--SvSlider-default-stroke": o.sv?.stroke ?? "#333" })
	}), h = (t) => ({
		"--SvRadio-accent": e(t).accent,
		"--SvRadio-stroke": o.sv?.stroke ?? "#ccc",
		"--SvRadio-foreground": "#fff",
		...t.applyStyles("dark", { "--SvRadio-stroke": o.sv?.stroke ?? "#333" })
	}), g = (t) => a(t, {
		"--SvField-accent": e(t).accent,
		"--SvField-stroke": o.sv?.stroke ?? "#ccc",
		"--SvField-secondary": l(t, "light"),
		"--SvField-error": u(t, "light")
	}, {
		"--SvField-error": u(t, "dark"),
		"--SvField-stroke": o.sv?.stroke ?? "#333",
		"--SvField-secondary": l(t, "dark")
	}), _ = (e) => ({
		"--SvChip-surface": o.sv?.surface ?? "rgba(20,20,20,0.06)",
		"--SvChip-surface-hover": o.sv?.surfaceHover ?? "rgba(20,20,20,0.1)",
		"--SvChip-icon-color": l(e, "light"),
		...e.applyStyles("dark", {
			"--SvChip-surface": o.sv?.surface ?? "rgba(247,247,247,0.06)",
			"--SvChip-surface-hover": o.sv?.surfaceHover ?? "rgba(247,247,247,0.1)",
			"--SvChip-icon-color": l(e, "dark")
		})
	}), v = (e) => a(e, {
		"--SvTagInput-surface": o.sv?.surface ?? "rgba(20,20,20,0.06)",
		"--SvTagInput-secondary": l(e, "light"),
		"--SvTagInput-error": u(e, "light")
	}, {
		"--SvTagInput-surface": o.sv?.surface ?? "rgba(247,247,247,0.06)",
		"--SvTagInput-secondary": l(e, "dark"),
		"--SvTagInput-error": u(e, "dark")
	}), y = (t) => ({
		"--SvSelect-accent": e(t).accent,
		"--SvSelect-stroke": o.sv?.stroke ?? "#ccc",
		"--SvSelect-secondary": l(t, "light"),
		"--SvSelect-error": (t.vars ?? t).palette.error.main,
		...t.applyStyles("dark", {
			"--SvSelect-stroke": o.sv?.stroke ?? "#333",
			"--SvSelect-secondary": l(t, "dark")
		})
	}), b = (e) => {
		let t = (e.vars ?? e).palette;
		return {
			"--SvMenu-stroke": o.sv?.stroke ?? t.divider,
			...e.applyStyles("dark", {
				"--SvMenu-surface": c("dark")?.background?.paper ? t.background.paper : "rgba(34,34,34,0.48)",
				"--SvMenu-hover": c("dark")?.action?.hover ? t.action.hover : "rgba(43,43,43,0.64)",
				"--SvMenu-stroke": o.sv?.stroke ?? (c("dark")?.divider ? t.divider : "#333"),
				"--SvMenu-secondary": l(e, "dark"),
				"--SvMenu-danger": u(e, "dark")
			})
		};
	}, x = {
		...n(s),
		typography: {
			fontFamily: "Inter, sans-serif",
			button: {
				textTransform: "none",
				fontWeight: 500
			}
		},
		shape: { borderRadius: 8 },
		components: {
			SvChip: { defaultProps: { sx: _ } },
			SvMenu: { defaultProps: { sx: b } },
			SvTagInput: { defaultProps: { sx: v } },
			SvSelect: { defaultProps: { sx: y } },
			SvField: { defaultProps: { sx: g } },
			SvIconButton: { defaultProps: { sx: d } },
			SvCheckbox: { defaultProps: { sx: f } },
			SvRadio: { defaultProps: { sx: h } },
			SvSlider: { defaultProps: { sx: m } },
			SvSwitch: { defaultProps: { sx: p } },
			SvButton: { defaultProps: { sx: d } }
		}
	};
	return i(t(x, {
		...o,
		components: {
			...o.components,
			SvChip: { defaultProps: {
				...o.components?.SvChip?.defaultProps,
				sx: r(_, o.components?.SvChip?.defaultProps?.sx)
			} },
			SvMenu: { defaultProps: {
				...o.components?.SvMenu?.defaultProps,
				sx: r(b, o.components?.SvMenu?.defaultProps?.sx)
			} },
			SvTagInput: { defaultProps: {
				...o.components?.SvTagInput?.defaultProps,
				sx: r(v, o.components?.SvTagInput?.defaultProps?.sx)
			} },
			SvSelect: { defaultProps: {
				...o.components?.SvSelect?.defaultProps,
				sx: r(y, o.components?.SvSelect?.defaultProps?.sx)
			} },
			SvField: { defaultProps: {
				...o.components?.SvField?.defaultProps,
				sx: r(g, o.components?.SvField?.defaultProps?.sx)
			} },
			SvIconButton: { defaultProps: {
				...o.components?.SvIconButton?.defaultProps,
				sx: r(d, o.components?.SvIconButton?.defaultProps?.sx)
			} },
			SvButton: { defaultProps: {
				...o.components?.SvButton?.defaultProps,
				sx: r(x.components?.SvButton?.defaultProps?.sx, o.components?.SvButton?.defaultProps?.sx)
			} },
			SvSwitch: { defaultProps: {
				...o.components?.SvSwitch?.defaultProps,
				sx: r(p, o.components?.SvSwitch?.defaultProps?.sx)
			} },
			SvSlider: { defaultProps: {
				...o.components?.SvSlider?.defaultProps,
				sx: r(m, o.components?.SvSlider?.defaultProps?.sx)
			} },
			SvRadio: { defaultProps: {
				...o.components?.SvRadio?.defaultProps,
				sx: r(h, o.components?.SvRadio?.defaultProps?.sx)
			} },
			SvCheckbox: { defaultProps: {
				...o.components?.SvCheckbox?.defaultProps,
				sx: r(f, o.components?.SvCheckbox?.defaultProps?.sx)
			} }
		}
	}));
}
//#endregion
export { o as createSvTheme };

//# sourceMappingURL=create-theme.js.map