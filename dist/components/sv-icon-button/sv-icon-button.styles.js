import { svTokens as e } from "../../theme/tokens.js";
import { buttonColors as t, buttonFocus as n, buttonReducedMotion as r, buttonSize as i } from "../shared/button-shared.js";
import { buttonBaseClasses as a } from "@mui/material/ButtonBase";
import { iconButtonClasses as o } from "@mui/material/IconButton";
//#region src/components/sv-icon-button/sv-icon-button.styles.ts
function s(s, c) {
	let { appearance: l, color: u = "default", size: d, loading: f } = c, p = (s.vars ?? s).palette, m = e(s), h = t(s, u), g = l === "webinar", _ = g && u === "default", v = `${i(d)}px`, y = g ? "20px" : "16px", b = _ ? "#fff" : u === "default" ? p.text.secondary : g ? h.contrast : h.main, x = _ ? "rgba(0,0,0,0.5)" : g ? u === "inherit" ? p.action.hover : h.main : "transparent", S = _ ? "rgba(0,0,0,0.6)" : g ? u === "inherit" ? p.action.selected : h.hover : `var(--SvButton-surfaceHover, ${m.surfaceHover})`;
	return {
		width: v,
		height: v,
		padding: "6px",
		boxSizing: "border-box",
		borderRadius: "999px",
		border: _ ? "1px solid currentColor" : 0,
		overflow: "hidden",
		flexShrink: 0,
		color: b,
		background: x,
		"&:hover": {
			background: S,
			color: b
		},
		[`&.${a.focusVisible}`]: n(s),
		[`&.${o.disabled}`]: {
			background: x,
			color: _ && !f ? "var(--SvButton-muted, #828282)" : b,
			opacity: f || _ ? 1 : .5
		},
		[`&.${o.loading}`]: { color: b },
		[`& .${o.loadingIndicator}`]: { color: "inherit" },
		"& .SvIconButton-icon": {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			visibility: f ? "hidden" : "visible",
			"& > svg": {
				fontSize: y,
				width: y,
				height: y
			}
		},
		"@media (prefers-reduced-motion: reduce)": r
	};
}
//#endregion
export { s as iconButtonStyles };

//# sourceMappingURL=sv-icon-button.styles.js.map