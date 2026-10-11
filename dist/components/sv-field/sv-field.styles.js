import { svTokens as e } from "../../theme/tokens.js";
import { formHelperTextClasses as t } from "@mui/material/FormHelperText";
import { inputLabelClasses as n } from "@mui/material/InputLabel";
import { outlinedInputClasses as r } from "@mui/material/OutlinedInput";
import { inputAdornmentClasses as i } from "@mui/material/InputAdornment";
//#region src/components/sv-field/sv-field.styles.ts
var a = {
	gap: "4px",
	minWidth: 0,
	maxWidth: "100%",
	fontFamily: "fontFamily"
};
function o(e) {
	return {
		position: "static",
		transform: "none",
		transition: "none",
		maxWidth: "100%",
		fontSize: "12px",
		lineHeight: "16px",
		fontWeight: 500,
		whiteSpace: "normal",
		overflowWrap: "anywhere",
		color: `var(--SvField-secondary, ${(e.vars ?? e).palette.text.secondary})`,
		[`&.${n.focused}, &.${n.error}, &.${n.disabled}`]: { color: `var(--SvField-secondary, ${(e.vars ?? e).palette.text.secondary})` }
	};
}
function s(e) {
	return {
		margin: 0,
		fontSize: "12px",
		lineHeight: "16px",
		overflowWrap: "anywhere",
		color: `var(--SvField-secondary, ${(e.vars ?? e).palette.text.secondary})`,
		[`&.${t.error}`]: { color: `var(--SvField-error, ${(e.vars ?? e).palette.error.main})` },
		[`&.${t.disabled}`]: { color: `var(--SvField-secondary, ${(e.vars ?? e).palette.text.secondary})` }
	};
}
function c(t) {
	let n = (t.vars ?? t).palette, a = `var(--SvField-secondary, ${n.text.secondary})`;
	return {
		borderRadius: "8px",
		minHeight: "36px",
		padding: "4px 6px 4px 8px",
		gap: "8px",
		fontSize: "13px",
		lineHeight: "24px",
		letterSpacing: "-0.0025em",
		color: "text.primary",
		backgroundColor: "transparent",
		[`& .${r.notchedOutline}`]: {
			top: 0,
			borderWidth: "1px",
			borderColor: `var(--SvField-stroke, ${e(t).stroke})`,
			"& legend": { display: "none" }
		},
		[`&:hover:not(.${r.disabled}):not(.${r.error}) .${r.notchedOutline}, &.${r.focused}:not(.${r.disabled}):not(.${r.error}) .${r.notchedOutline}`]: {
			borderWidth: "1px",
			borderColor: `var(--SvField-accent, ${e(t).accent})`
		},
		[`&.${r.error} .${r.notchedOutline}`]: {
			borderWidth: "1px",
			borderColor: `var(--SvField-error, ${n.error.main})`
		},
		[`&.${r.disabled} .${r.notchedOutline}`]: { borderColor: `var(--SvField-stroke, ${e(t).stroke})` },
		"&:has(input:focus-visible), &:has(textarea:focus-visible)": {
			outline: `2px solid ${e(t).focus}`,
			outlineOffset: "2px"
		},
		[`& .${r.input}`]: {
			minWidth: 0,
			padding: "2px 0",
			height: "24px",
			lineHeight: "24px",
			"&::placeholder": {
				color: a,
				opacity: 1
			},
			[`&.${r.disabled}`]: {
				WebkitTextFillColor: a,
				color: a,
				opacity: 1
			}
		},
		[`&.${r.multiline}`]: { alignItems: "flex-start" },
		[`&.${r.multiline} .${r.input}`]: { height: "auto" },
		[`& .${i.root}`]: {
			margin: 0,
			gap: "4px",
			maxHeight: "none",
			flexShrink: 0,
			color: a
		}
	};
}
//#endregion
export { s as fieldHelperStyles, c as fieldInputStyles, o as fieldLabelStyles, a as fieldRootStyles };

//# sourceMappingURL=sv-field.styles.js.map