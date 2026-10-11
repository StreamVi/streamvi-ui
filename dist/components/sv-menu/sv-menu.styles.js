import { svTokens as e } from "../../theme/tokens.js";
import { listItemIconClasses as t } from "@mui/material/ListItemIcon";
import { listItemTextClasses as n } from "@mui/material/ListItemText";
import { menuItemClasses as r } from "@mui/material/MenuItem";
import { avatarClasses as i } from "@mui/material/Avatar";
import { dividerClasses as a } from "@mui/material/Divider";
import { svgIconClasses as o } from "@mui/material/SvgIcon";
//#region src/components/sv-menu/sv-menu.styles.ts
function s(t) {
	let n = (t.vars ?? t).palette;
	return {
		"--SvMenu-surface": n.background.paper,
		"--SvMenu-hover": n.action.hover,
		"--SvMenu-stroke": n.divider,
		"--SvMenu-secondary": n.text.secondary,
		"--SvMenu-danger": n.error.main,
		"--SvMenu-focus": e(t).focus
	};
}
var c = {
	width: "max-content",
	borderRadius: "8px",
	border: "1px solid var(--SvMenu-stroke)",
	color: "text.primary",
	backgroundColor: "var(--SvMenu-surface)",
	backgroundImage: "none",
	backdropFilter: "blur(24px)",
	boxShadow: "0 8px 24px #2f2b431a"
}, l = {
	padding: 0,
	[`& .${a.root}`]: {
		margin: 0,
		borderColor: "var(--SvMenu-stroke)",
		borderBottomWidth: "0.5px"
	}
}, u = {
	minHeight: "44px",
	padding: "10px 16px",
	gap: "8px",
	fontSize: "13px",
	lineHeight: "24px",
	fontWeight: 400,
	letterSpacing: "-0.0025em",
	overflow: "hidden",
	[`&.${r.selected}`]: { backgroundColor: "transparent" },
	[`&:hover, &.${r.selected}:hover`]: {
		backgroundColor: "var(--SvMenu-hover)",
		"@media (hover: none)": { backgroundColor: "transparent" }
	},
	[`&.${r.focusVisible}`]: {
		backgroundColor: "var(--SvMenu-hover)",
		outline: "2px solid var(--SvMenu-focus)",
		outlineOffset: "-2px"
	},
	[`&.${r.dense}`]: {
		minHeight: "32px",
		paddingBlock: "4px"
	},
	[`&:not(.${r.gutters})`]: { paddingInline: 0 },
	[`&:has(.${n.multiline})`]: { paddingBlock: "8px" },
	[`& .${t.root}`]: {
		minWidth: 0,
		flexShrink: 0,
		color: "var(--SvMenu-secondary)"
	},
	[`& .${o.root}`]: {
		width: "16px",
		height: "16px",
		fontSize: "16px"
	},
	[`& .${i.root}`]: {
		width: "28px",
		height: "28px",
		fontSize: "13px"
	},
	[`& .${n.root}`]: {
		minWidth: 0,
		margin: 0
	},
	[`& .${n.primary}`]: {
		font: "inherit",
		letterSpacing: "inherit",
		overflow: "hidden",
		textOverflow: "ellipsis"
	},
	[`& .${n.multiline} .${n.primary}`]: { height: "20px" },
	[`& .${n.secondary}`]: {
		fontSize: "12px",
		lineHeight: "16px",
		letterSpacing: 0,
		color: "var(--SvMenu-secondary)",
		display: "flex",
		alignItems: "center",
		gap: "4px"
	}
}, d = {
	flexShrink: 0,
	padding: "8px 16px",
	minHeight: "40px",
	fontSize: "13px",
	lineHeight: "24px",
	fontWeight: 500,
	letterSpacing: "-0.0025em",
	color: "inherit",
	backgroundColor: "transparent",
	borderBottom: "0.5px solid var(--SvMenu-stroke)"
}, f = {
	margin: 0,
	padding: 0,
	listStyle: "none"
};
//#endregion
export { f as menuGroupStyles, d as menuHeaderStyles, u as menuItemStyles, l as menuListStyles, c as menuPaperStyles, s as menuRootStyles };

//# sourceMappingURL=sv-menu.styles.js.map