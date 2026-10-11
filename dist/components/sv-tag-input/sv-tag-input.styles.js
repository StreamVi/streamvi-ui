import { svTokens as e } from "../../theme/tokens.js";
import { buttonBaseClasses as t } from "@mui/material/ButtonBase";
import { chipClasses as n } from "@mui/material/Chip";
import { outlinedInputClasses as r } from "@mui/material/OutlinedInput";
import { autocompleteClasses as i } from "@mui/material/Autocomplete";
//#region src/components/sv-tag-input/sv-tag-input.styles.ts
var a = {
	minWidth: 0,
	maxWidth: "100%",
	[`& .${i.tag}`]: {
		margin: 0,
		maxWidth: "100%"
	},
	[`& .${i.inputRoot}`]: {
		gap: "4px",
		padding: "4px 6px 4px 4px",
		[`& .${i.input}`]: {
			padding: 0,
			"&:not(:not(style) ~ input)": { paddingLeft: "4px" },
			height: "24px",
			minWidth: "30px",
			fontSize: "13px",
			lineHeight: "24px"
		}
	},
	[`&.${i.hasClearIcon} .${r.root}`]: { paddingRight: "6px" },
	[`&.${i.hasPopupIcon} .${r.root}`]: { paddingRight: "34px" },
	[`& .${i.endAdornment}`]: { right: "6px" }
};
function o(t) {
	return {
		backgroundColor: `var(--SvTagInput-surface, ${e(t).surface})`,
		[`& .${n.deleteIcon}`]: { color: `var(--SvTagInput-secondary, ${(t.vars ?? t).palette.text.secondary})` }
	};
}
function s(n) {
	return {
		padding: 0,
		margin: 0,
		borderRadius: "2px",
		fontFamily: "inherit",
		fontSize: "12px",
		lineHeight: "16px",
		fontWeight: 500,
		visibility: "visible",
		color: `var(--SvTagInput-error, ${(n.vars ?? n).palette.error.main})`,
		"&:hover": {
			backgroundColor: "transparent",
			textDecoration: "underline"
		},
		[`&.${t.focusVisible}`]: {
			outline: `2px solid ${e(n).focus}`,
			outlineOffset: "2px"
		}
	};
}
//#endregion
export { o as tagChipStyles, s as tagClearStyles, a as tagRootStyles };

//# sourceMappingURL=sv-tag-input.styles.js.map