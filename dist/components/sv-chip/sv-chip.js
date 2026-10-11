import { chipStyles as e } from "./sv-chip.styles.js";
import { useDefaultProps as t } from "@mui/material/DefaultPropsProvider";
import n from "clsx";
import { mergeSx as r } from "merge-sx";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import o from "@mui/icons-material/CheckRounded";
import { mergeSlotProps as s } from "@mui/material/utils";
import c from "@mui/icons-material/CloseRounded";
import l from "@mui/material/Chip";
//#region src/components/sv-chip/sv-chip.tsx
var u = i(function(i, u) {
	let d = t({
		props: {},
		name: "MuiChip"
	}), f = t({
		props: {},
		name: "SvChip"
	}), p = t({
		props: i,
		name: "SvChip"
	}), { selected: m, icon: h, avatar: g, deleteIcon: _ = /* @__PURE__ */ a(c, {}), className: v, sx: y, slotProps: b, color: x = "default", size: S = "medium", variant: C = "filled", ...w } = t({
		props: p,
		name: "MuiChip"
	}), T = w.clickable !== !1 && !!w.onClick || w.clickable, E = r((t) => e(t, {
		color: x,
		size: S,
		variant: C
	}), d.sx, f.sx, i.sx), D = (e) => s(i.slotProps?.[e], s(f.slotProps?.[e], d.slotProps?.[e] ?? {}));
	return /* @__PURE__ */ a(l, {
		"aria-pressed": T && m !== void 0 ? m : void 0,
		...w,
		ref: u,
		className: n("SvChip-root", m && "SvChip-selected", v),
		color: x,
		size: S,
		variant: C,
		avatar: g,
		icon: h ?? (m && !g ? /* @__PURE__ */ a(o, {}) : void 0),
		deleteIcon: _,
		sx: E,
		slotProps: {
			root: s(D("root"), { sx: E }),
			label: s(D("label"), { sx: {
				padding: 0,
				minWidth: 0,
				"&:empty": { display: "none" }
			} })
		}
	});
});
//#endregion
export { u as SvChip };

//# sourceMappingURL=sv-chip.js.map