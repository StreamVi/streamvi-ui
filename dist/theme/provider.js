import { createSvTheme as e } from "./create-theme.js";
import { useMemo as t } from "react";
import { jsx as n } from "react/jsx-runtime";
import { StyledEngineProvider as r, THEME_ID as i, ThemeProvider as a } from "@mui/material/styles";
import { useTheme as o } from "@emotion/react";
//#region src/theme/provider.tsx
var s = e({
	cssVariables: {
		cssVarPrefix: "sv",
		colorSchemeSelector: "data-mui-color-scheme"
	},
	colorSchemes: {
		light: !0,
		dark: !0
	}
});
function c({ children: e, theme: c = s, injectFirst: l = !0, defaultMode: u = "light", modeStorageKey: d = "sv-mode", colorSchemeStorageKey: f = "sv-color-scheme", ...p }) {
	let m = o(), h = i in m, g = t(() => h ? { [i]: c } : c, [h, c]);
	return /* @__PURE__ */ n(r, {
		injectFirst: l,
		children: /* @__PURE__ */ n(a, {
			theme: g,
			defaultMode: u,
			modeStorageKey: d,
			colorSchemeStorageKey: f,
			...p,
			children: e
		})
	});
}
//#endregion
export { c as SvThemeProvider };

//# sourceMappingURL=provider.js.map