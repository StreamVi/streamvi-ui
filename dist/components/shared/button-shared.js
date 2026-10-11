import { svTokens as e } from "../../theme/tokens.js";
import { circularProgressClasses as t } from "@mui/material/CircularProgress";
//#region src/components/shared/button-shared.ts
function n(e) {
	return e === "small" ? 28 : e === "large" ? 44 : 36;
}
function r(e, t) {
	let n = (e.vars ?? e).palette, r = n[t], i = typeof r == "object" && r && "main" in r ? r : void 0;
	return {
		main: t === "inherit" ? "currentColor" : `var(--SvButton-${t}, ${i?.main ?? n.primary.main})`,
		hover: t === "inherit" ? "currentColor" : `var(--SvButton-${t}Hover, ${i && "dark" in i ? i.dark : n.primary.dark})`,
		contrast: t === "inherit" ? "inherit" : `var(--SvButton-${t}Contrast, ${i && "contrastText" in i ? i.contrastText : "#fff"})`
	};
}
function i(t) {
	return {
		outline: `2px solid ${e(t).focus}`,
		outlineOffset: "3px"
	};
}
var a = {
	animation: "none",
	transition: "none",
	"&::before": { animation: "none" },
	[`& .${t.root}, & .${t.circle}`]: { animation: "none" }
};
//#endregion
export { r as buttonColors, i as buttonFocus, a as buttonReducedMotion, n as buttonSize };

//# sourceMappingURL=button-shared.js.map