//#region src/theme/tokens.ts
function e(e) {
	let t = (e.vars ?? e).palette;
	return e.vars?.sv ?? e.sv ?? {
		accent: t.primary.main,
		accentHover: t.primary.light,
		surface: t.action.hover,
		surfaceHover: t.action.selected,
		stroke: t.divider,
		green: t.success.main,
		greenHover: t.success.dark,
		focus: t.primary.main
	};
}
//#endregion
export { e as svTokens };

//# sourceMappingURL=tokens.js.map