import e from "@mui/utils/deepmerge";
//#region src/theme/defaults.ts
function t(e) {
	let t = e === "dark";
	return {
		palette: {
			mode: e,
			primary: {
				main: "#a288e3",
				contrastText: "#221638"
			},
			secondary: { main: t ? "#b9a5eb" : "#7150ad" },
			error: { main: t ? "#ff8978" : "#b93524" },
			success: { main: t ? "#13b240" : "#08772a" },
			background: {
				default: t ? "#141414" : "#f7f7f7",
				paper: t ? "#1f1f1f" : "#fff"
			},
			text: {
				primary: t ? "#fff" : "#1c1c1c",
				secondary: t ? "#a3a3a3" : "#666"
			},
			divider: t ? "#444" : "#ccc"
		},
		sv: {
			accent: "#a288e3",
			accentHover: "#b5a0e9",
			surface: t ? "#ffffff0f" : "#1414140f",
			surfaceHover: t ? "#ffffff1a" : "#1414141a",
			stroke: t ? "#444" : "#ccc",
			green: "#13b240",
			greenHover: "#1fbf4c",
			focus: t ? "#c1abf0" : "#7150ad"
		}
	};
}
function n(n, r) {
	let i = e(n, r);
	if (!r.cssVariables && !r.colorSchemes) return i;
	let a = {
		[r.defaultColorScheme ?? r.palette?.mode ?? "light"]: !0,
		...r.colorSchemes
	};
	for (let n of ["light", "dark"]) {
		let i = a[n];
		i && (a[n] = e(t(n), {
			...i === !0 ? {} : i,
			...r.sv ? { sv: r.sv } : {}
		}));
	}
	return i.colorSchemes = a, r.palette || delete i.palette, i;
}
//#endregion
export { n as mergeSvThemeOptions, t as svColorDefaults };

//# sourceMappingURL=defaults.js.map