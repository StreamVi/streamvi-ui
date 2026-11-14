import { mergeSvThemeOptions as e, svColorDefaults as t } from "./defaults.js";
import { svTokens as n } from "./tokens.js";
import { mergeSx as r } from "merge-sx";
import { createTheme as i } from "@mui/material/styles";
// src/theme/create-theme.ts
function a(e, t, n) {
	let r = Object.fromEntries(Object.entries(n).filter(([e, n]) => n !== t[e]));
	return {
		...t,
		...e.applyStyles("dark", r)
	};
}
function o(e) {
	return {
		"--SvSwitch-neutral": "#8e8e8e",
		...e.applyStyles("dark", { "--SvSwitch-neutral": "#828282" })
	};
}
function s(s = {}) {
	let c = s.defaultColorScheme ?? s.palette?.mode ?? "light", l = (e) => {
		if (!s.cssVariables && !s.colorSchemes || e === c && s.palette) return s.palette;
		let t = s.colorSchemes?.[e];
		return t && t !== !0 ? t.palette : void 0;
	}, u = (e, t) => l(t)?.text?.secondary ? (e.vars ?? e).palette.text.secondary : t === "dark" ? "#828282" : "#8e8e8e", d = (e, t) => l(t)?.error ? (e.vars ?? e).palette.error.main : "#d64933", f = (e) => {
		let t = n(e), r = (e.vars ?? e).palette, i = (n) => ({
			"--SvButton-error": d(e, n),
			"--SvButton-errorHover": l(n)?.error ? r.error.dark : "#de6d5c",
			"--SvButton-success": l(n)?.success ? r.success.main : t.green,
			"--SvButton-successHover": l(n)?.success ? r.success.dark : t.greenHover ?? "#1fbf4c",
			"--SvButton-successContrast": l(n)?.success ? r.success.contrastText : "#fff"
		});
		return a(e, {
			"--SvButton-primary": t.accent,
			"--SvButton-primaryHover": t.accentHover,
			"--SvButton-primaryContrast": "#fff",
			"--SvButton-errorContrast": "#fff",
			...i("light"),
			"--SvButton-surface": s.sv?.surface ?? "rgba(20,20,20,0.06)",
			"--SvButton-surfaceHover": s.sv?.surfaceHover ?? "rgba(20,20,20,0.1)",
			"--SvButton-muted": "#8e8e8e"
		}, {
			...i("dark"),
			"--SvButton-surface": s.sv?.surface ?? "rgba(247,247,247,0.06)",
			"--SvButton-surfaceHover": s.sv?.surfaceHover ?? "rgba(247,247,247,0.1)",
			"--SvButton-muted": "#828282"
		});
	}, p = (e) => ({
		"--SvCheckbox-accent": n(e).accent,
		"--SvCheckbox-stroke": s.sv?.stroke ?? "#ccc",
		"--SvCheckbox-foreground": "#fff",
		...e.applyStyles("dark", { "--SvCheckbox-stroke": s.sv?.stroke ?? "#333" })
	}), m = (e) => ({
		"--SvSlider-default-stroke": s.sv?.stroke ?? "#ccc",
		...e.applyStyles("dark", { "--SvSlider-default-stroke": s.sv?.stroke ?? "#333" })
	}), h = (e) => ({
		"--SvRadio-accent": n(e).accent,
		"--SvRadio-stroke": s.sv?.stroke ?? "#ccc",
		"--SvRadio-foreground": "#fff",
		...e.applyStyles("dark", { "--SvRadio-stroke": s.sv?.stroke ?? "#333" })
	}), g = (e) => a(e, {
		"--SvField-accent": n(e).accent,
		"--SvField-stroke": s.sv?.stroke ?? "#ccc",
		"--SvField-secondary": u(e, "light"),
		"--SvField-error": d(e, "light")
	}, {
		"--SvField-error": d(e, "dark"),
		"--SvField-stroke": s.sv?.stroke ?? "#333",
		"--SvField-secondary": u(e, "dark")
	}), _ = (e) => ({
		"--SvChip-surface": s.sv?.surface ?? "rgba(20,20,20,0.06)",
		"--SvChip-surface-hover": s.sv?.surfaceHover ?? "rgba(20,20,20,0.1)",
		"--SvChip-icon-color": u(e, "light"),
		...e.applyStyles("dark", {
			"--SvChip-surface": s.sv?.surface ?? "rgba(247,247,247,0.06)",
			"--SvChip-surface-hover": s.sv?.surfaceHover ?? "rgba(247,247,247,0.1)",
			"--SvChip-icon-color": u(e, "dark")
		})
	}), v = (e) => a(e, {
		"--SvTagInput-surface": s.sv?.surface ?? "rgba(20,20,20,0.06)",
		"--SvTagInput-secondary": u(e, "light"),
		"--SvTagInput-error": d(e, "light")
	}, {
		"--SvTagInput-surface": s.sv?.surface ?? "rgba(247,247,247,0.06)",
		"--SvTagInput-secondary": u(e, "dark"),
		"--SvTagInput-error": d(e, "dark")
	}), y = (e) => ({
		"--SvSelect-accent": n(e).accent,
		"--SvSelect-stroke": s.sv?.stroke ?? "#ccc",
		"--SvSelect-secondary": u(e, "light"),
		"--SvSelect-error": (e.vars ?? e).palette.error.main,
		...e.applyStyles("dark", {
			"--SvSelect-stroke": s.sv?.stroke ?? "#333",
			"--SvSelect-secondary": u(e, "dark")
		})
	}), b = (e) => {
		let t = (e.vars ?? e).palette;
		return {
			"--SvMenu-stroke": s.sv?.stroke ?? t.divider,
			...e.applyStyles("dark", {
				"--SvMenu-surface": l("dark")?.background?.paper ? t.background.paper : "rgba(34,34,34,0.48)",
				"--SvMenu-hover": l("dark")?.action?.hover ? t.action.hover : "rgba(43,43,43,0.64)",
				"--SvMenu-stroke": s.sv?.stroke ?? (l("dark")?.divider ? t.divider : "#333"),
				"--SvMenu-secondary": u(e, "dark"),
				"--SvMenu-danger": d(e, "dark")
			})
		};
	}, x = {
		...t(c),
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
			SvIconButton: { defaultProps: { sx: f } },
			SvCheckbox: { defaultProps: { sx: p } },
			SvRadio: { defaultProps: { sx: h } },
			SvSlider: { defaultProps: { sx: m } },
			SvSwitch: { defaultProps: { sx: o } },
			SvButton: { defaultProps: { sx: f } }
		}
	};
	return i(e(x, {
		...s,
		components: {
			...s.components,
			SvChip: { defaultProps: {
				...s.components?.SvChip?.defaultProps,
				sx: r(_, s.components?.SvChip?.defaultProps?.sx)
			} },
			SvMenu: { defaultProps: {
				...s.components?.SvMenu?.defaultProps,
				sx: r(b, s.components?.SvMenu?.defaultProps?.sx)
			} },
			SvTagInput: { defaultProps: {
				...s.components?.SvTagInput?.defaultProps,
				sx: r(v, s.components?.SvTagInput?.defaultProps?.sx)
			} },
			SvSelect: { defaultProps: {
				...s.components?.SvSelect?.defaultProps,
				sx: r(y, s.components?.SvSelect?.defaultProps?.sx)
			} },
			SvField: { defaultProps: {
				...s.components?.SvField?.defaultProps,
				sx: r(g, s.components?.SvField?.defaultProps?.sx)
			} },
			SvIconButton: { defaultProps: {
				...s.components?.SvIconButton?.defaultProps,
				sx: r(f, s.components?.SvIconButton?.defaultProps?.sx)
			} },
			SvButton: { defaultProps: {
				...s.components?.SvButton?.defaultProps,
				sx: r(x.components?.SvButton?.defaultProps?.sx, s.components?.SvButton?.defaultProps?.sx)
			} },
			SvSwitch: { defaultProps: {
				...s.components?.SvSwitch?.defaultProps,
				sx: r(o, s.components?.SvSwitch?.defaultProps?.sx)
			} },
			SvSlider: { defaultProps: {
				...s.components?.SvSlider?.defaultProps,
				sx: r(m, s.components?.SvSlider?.defaultProps?.sx)
			} },
			SvRadio: { defaultProps: {
				...s.components?.SvRadio?.defaultProps,
				sx: r(h, s.components?.SvRadio?.defaultProps?.sx)
			} },
			SvCheckbox: { defaultProps: {
				...s.components?.SvCheckbox?.defaultProps,
				sx: r(p, s.components?.SvCheckbox?.defaultProps?.sx)
			} }
		}
	}));
}
export { s as createSvTheme };

//# sourceMappingURL=create-theme.js.map