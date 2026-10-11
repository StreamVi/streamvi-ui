import { svTokens as e } from "../../theme/tokens.js";
import { chipClasses as t } from "@mui/material/Chip";
//#region src/components/sv-chip/sv-chip.styles.ts
function n(n, { color: r, size: i, variant: a }) {
	let o = e(n), s = (n.vars ?? n).palette, c = r === "default", l = a === "filled", u = `var(--SvChip-surface, ${o.surface})`, d = `var(--SvChip-surface-hover, ${o.surfaceHover})`, f = c ? `var(--SvChip-icon-color, ${s.text.secondary})` : "inherit";
	return {
		height: i === "small" ? "24px" : "28px",
		borderRadius: "8px",
		padding: l ? "2px 8px" : "1px 7px",
		gap: "6px",
		fontFamily: n.typography.fontFamily,
		fontSize: "13px",
		fontWeight: 500,
		lineHeight: "24px",
		letterSpacing: "-0.0025em",
		...c && {
			color: s.text.primary,
			backgroundColor: l ? u : "transparent",
			[`&.${t.clickable}:hover, &.${t.deletable}:hover`]: {
				backgroundColor: d,
				"@media (hover: none)": { backgroundColor: l ? u : "transparent" }
			}
		},
		[`&.${t.clickable}:active`]: { boxShadow: "none" },
		[`& .${t.icon}, & .${t.deleteIcon}, & .${t.avatar}`]: {
			margin: 0,
			width: "16px",
			height: "16px",
			fontSize: "16px",
			flexShrink: 0
		},
		[`& .${t.icon}, & .${t.deleteIcon}`]: { color: f },
		[`& .${t.deleteIcon}:hover`]: { color: "inherit" },
		[`&.${t.focusVisible}`]: {
			...c && { backgroundColor: d },
			outline: `2px solid ${o.focus}`,
			outlineOffset: "2px"
		},
		"@media (prefers-reduced-motion: reduce)": { transition: "none" },
		"@media (forced-colors: active)": {
			border: "1px solid ButtonText",
			[`&.${t.focusVisible}`]: { outlineColor: "Highlight" }
		}
	};
}
//#endregion
export { n as chipStyles };

//# sourceMappingURL=sv-chip.styles.js.map