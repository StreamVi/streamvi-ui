import { svTokens as e } from "../../theme/tokens.js";
import { outlinedInputClasses as t } from "@mui/material/OutlinedInput";
import { selectClasses as n } from "@mui/material/Select";
import { inputBaseClasses as r } from "@mui/material/InputBase";
//#region src/components/sv-select/sv-select.styles.ts
function i(i, a) {
	return (o) => {
		let s = (o.vars ?? o).palette, c = s[i], l = i === "primary" ? `var(--SvSelect-accent, ${e(o).accent})` : c && typeof c == "object" && "main" in c ? c.main : e(o).accent;
		return {
			minWidth: 0,
			borderRadius: "8px",
			fontSize: "13px",
			lineHeight: "24px",
			letterSpacing: "-0.0025em",
			backgroundColor: "transparent",
			[`& .${t.notchedOutline}`]: {
				...!a && {
					top: 0,
					"& legend": { display: "none" }
				},
				borderWidth: "1px",
				borderColor: `var(--SvSelect-stroke, ${e(o).stroke})`
			},
			[`&:hover:not(.${r.disabled}):not(.${r.error}) .${t.notchedOutline}, &.${r.focused}:not(.${r.disabled}):not(.${r.error}) .${t.notchedOutline}`]: {
				borderWidth: "1px",
				borderColor: l
			},
			[`&.${r.error} .${t.notchedOutline}`]: {
				borderWidth: "1px",
				borderColor: `var(--SvSelect-error, ${s.error.main})`
			},
			[`&.${r.disabled} .${t.notchedOutline}`]: { borderColor: `var(--SvSelect-stroke, ${e(o).stroke})` },
			[`&:has(.${n.select}:focus-visible)`]: {
				outline: `2px solid ${e(o).focus}`,
				outlineOffset: "2px"
			},
			[`& .${n.select}`]: {
				minHeight: "24px",
				padding: "6px 44px 6px 8px",
				lineHeight: "24px",
				[`&.${n.disabled}`]: { WebkitTextFillColor: `var(--SvSelect-secondary, ${s.text.secondary})` }
			},
			[`& .${n.icon}`]: {
				width: "16px",
				height: "16px",
				fontSize: "16px",
				right: "12px",
				top: "calc(50% - 8px)",
				color: `var(--SvSelect-secondary, ${s.text.secondary})`
			}
		};
	};
}
//#endregion
export { i as selectStyles };

//# sourceMappingURL=sv-select.styles.js.map