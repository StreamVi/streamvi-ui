import { svTokens as e } from "../../theme/tokens.js";
import { buttonColors as t, buttonFocus as n, buttonReducedMotion as r, buttonSize as i } from "../shared/button-shared.js";
import { buttonClasses as a } from "@mui/material/Button";
//#region src/components/sv-button/sv-button.styles.ts
var o = 24 / Math.sin(Math.PI / 3), s = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	overflow: "hidden",
	clipPath: "inset(50%)",
	whiteSpace: "nowrap"
};
function c(c, l) {
	let u = (c.vars ?? c).palette, d = e(c), { appearance: f, variant: p, size: m, color: h = "primary", hasColor: g, loading: _, loadingMode: v, loadingPosition: y } = l, b = f !== "default" && !g, x = p === "text", S = i(m), { main: C, hover: w, contrast: T } = t(c, h), E = h === "inherit" ? u.action.hover : C, D = h === "inherit" ? u.action.selected : w, O = T, k = O, A = C, j = w;
	if (b) {
		switch (f) {
			case "secondary":
				E = `var(--SvButton-surface, ${d.surface})`, D = `var(--SvButton-surfaceHover, ${d.surfaceHover})`, O = u.text.primary;
				break;
			case "tooltip":
				E = D = "#fff", O = "#000";
				break;
			case "server":
			case "serverSecondary":
			case "nerf":
			case "nerfSecondary": {
				let e = f.startsWith("nerf"), t = f.endsWith("Secondary"), n = e ? d.green : d.accent, r = t ? e ? "#eff5f1" : "#f1eff5" : "#2f2f2f";
				E = `radial-gradient(ellipse 51.9% 203.571% at 51.9% 212.5%, ${n}, ${r})`, D = `radial-gradient(ellipse 61.9% 242.857% at 51.9% 212.5%, ${n}, ${r})`, O = t ? "#000" : "#fff";
			}
		}
		k = f === "tooltip" ? "rgba(0,0,0,0.7)" : O, A = O, j = k;
	}
	let M = _ && v === "mui" && y === "center", N = p === "contained" ? O : A, P = {
		fontFamily: c.typography.fontFamily ?? "Inter, sans-serif",
		textTransform: "none",
		fontWeight: 500,
		fontSize: m === "large" ? "15px" : "13px",
		lineHeight: "24px",
		letterSpacing: "-0.0025em",
		borderRadius: "8px",
		boxSizing: "border-box",
		minWidth: 0,
		padding: `${(S - 24) / 2}px ${m === "small" ? 8 : m === "large" ? 16 : 12}px`,
		position: "relative",
		isolation: "isolate",
		overflow: "hidden",
		"& .SvButton-label": {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center"
		},
		[`& .${a.startIcon}`]: {
			marginLeft: 0,
			marginRight: "6px"
		},
		[`& .${a.endIcon}`]: {
			marginRight: 0,
			marginLeft: "6px"
		},
		[`& .${a.icon} > :nth-of-type(1)`]: {
			fontSize: "16px",
			width: "16px",
			height: "16px"
		},
		[`&.${a.focusVisible}`]: n(c),
		[`&.${a.disabled}`]: { opacity: _ ? 1 : .5 },
		[`& .${a.loadingIndicator}`]: M && h === "inherit" ? {} : { color: N }
	};
	if ((p === "contained" || p === "outlined" || p === "text") && Object.assign(P, {
		color: M ? "transparent" : N,
		background: p === "contained" ? E : "transparent",
		"&:hover": {
			background: p === "contained" ? D : "transparent",
			color: M ? "transparent" : p === "contained" ? k : j
		},
		[`&.${a.disabled}`]: {
			opacity: _ ? 1 : .5,
			color: M ? "transparent" : N,
			background: p === "contained" ? E : "transparent"
		}
	}), p === "outlined" && Object.assign(P, {
		border: `1px solid ${A}`,
		padding: m === "small" ? "1px 7px" : m === "large" ? "9px 15px" : "5px 11px"
	}), x && Object.assign(P, {
		padding: 0,
		borderRadius: 0,
		fontSize: m === "large" ? "15px" : "12px",
		lineHeight: m === "large" ? "24px" : "16px",
		letterSpacing: 0
	}), b && f === "secondary" && p === "contained" && (P[`&.${a.disabled}`] = {
		opacity: 1,
		background: D,
		color: M ? "transparent" : O,
		..._ ? {} : { [`& .SvButton-label, & .${a.icon}`]: { opacity: .5 } }
	}), _ && v === "stripes" && Object.assign(P, {
		[`&.${a.disabled}`]: {
			opacity: 1,
			color: O,
			background: E
		},
		"&::before": {
			content: "\"\"",
			position: "absolute",
			inset: "0 auto 0 0",
			width: `calc(100% + ${o}px)`,
			height: "100%",
			zIndex: 0,
			pointerEvents: "none",
			backgroundImage: `repeating-linear-gradient(60deg, transparent 0 12px, ${D} 12px 24px)`,
			animation: "sv-button-stripes 1s linear infinite"
		},
		"@keyframes sv-button-stripes": { to: { transform: `translateX(-${o}px)` } },
		[`& .SvButton-label, & .${a.icon}`]: {
			position: "relative",
			zIndex: 1
		},
		[`& .${a.loadingIndicator}`]: s
	}), _ && v === "text" && (P["& .SvButton-label"] = s, P[`& .${a.icon}`] = { display: "none" }, v === "text" && Object.assign(P, {
		width: l.fullWidth ? "100%" : "16px",
		height: "16px",
		padding: 0
	})), v === "mui" && y !== "center") {
		let e = x ? 0 : (m === "small" ? 8 : m === "large" ? 16 : 12) - (p === "outlined");
		P[`& .${a.loadingIndicator}`] = {
			color: N,
			...l.fullWidth ? {
				position: "relative",
				width: 0,
				left: y === "start" ? "-22px" : "6px",
				right: "auto",
				"& > *": { flexShrink: 0 }
			} : { [y === "start" ? "left" : "right"]: `${e}px` }
		};
	}
	return P["@media (prefers-reduced-motion: reduce)"] = r, P;
}
//#endregion
export { c as buttonStyles };

//# sourceMappingURL=sv-button.styles.js.map