import { Button as e } from "@base-ui/react/button";
import { clsx as t } from "clsx";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Checkbox as i } from "@base-ui/react/checkbox";
import { CheckIcon as a, ChevronDown as o, Minus as s, Plus as c, X as l } from "lucide-react";
import { Field as u } from "@base-ui/react/field";
import { Menu as d } from "@base-ui/react/menu";
import { NumberField as f } from "@base-ui/react/number-field";
import { Radio as p } from "@base-ui/react/radio";
import { RadioGroup as m } from "@base-ui/react/radio-group";
import { Select as h } from "@base-ui/react/select";
import { Slider as g } from "@base-ui/react/slider";
import { Switch as _ } from "@base-ui/react/switch";
import { Combobox as v } from "@base-ui/react/combobox";
import { useEffect as y, useState as b } from "react";
import { Tooltip as x } from "@base-ui/react/tooltip";
var S = {
	Button: "_Button_ls7vb_10",
	TextForm: "_TextForm_ls7vb_49",
	IconForm: "_IconForm_ls7vb_53",
	SizeSmallText: "_SizeSmallText_ls7vb_57",
	SizeDefaultText: "_SizeDefaultText_ls7vb_61",
	SizeSmallIcon: "_SizeSmallIcon_ls7vb_65",
	SizeDefaultIcon: "_SizeDefaultIcon_ls7vb_69",
	TypePrimary: "_TypePrimary_ls7vb_73",
	load: "_load_ls7vb_1",
	TypeSecondary: "_TypeSecondary_ls7vb_102",
	TypeImportant: "_TypeImportant_ls7vb_113",
	TypeTooltip: "_TypeTooltip_ls7vb_124",
	TypeServer: "_TypeServer_ls7vb_135",
	TypeServerSecondary: "_TypeServerSecondary_ls7vb_145",
	TypeNerf: "_TypeNerf_ls7vb_155",
	TypeNerfSecondary: "_TypeNerfSecondary_ls7vb_165",
	TypeText: "_TypeText_ls7vb_175",
	TypeWebinar: "_TypeWebinar_ls7vb_185"
};
//#endregion
//#region src/components/sv-button/sv-button.tsx
function C({ children: n, styleType: i = "primary", size: a = "default", leftIcon: o, rightIcon: s, ...c }) {
	let { className: l, ...u } = c, d = a === "default" ? S.SizeDefaultText : S.SizeSmallText;
	return /* @__PURE__ */ r(e, {
		className: t("sv-ui", S.Button, d, S.TextForm, w(i), l),
		...u,
		children: [
			o,
			n,
			s
		]
	});
}
function w(e) {
	switch (e) {
		case "primary": return S.TypePrimary;
		case "secondary": return S.TypeSecondary;
		case "important": return S.TypeImportant;
		case "tooltip": return S.TypeTooltip;
		case "webinar": return S.TypeWebinar;
		case "server": return S.TypeServer;
		case "serverSecondary": return S.TypeServerSecondary;
		case "nerf": return S.TypeNerf;
		case "nerfSecondary": return S.TypeNerfSecondary;
		case "text": return S.TypeText;
	}
}
var T = {
	Label: "_Label_1iwrf_1",
	LabelDisabled: "_LabelDisabled_1iwrf_12",
	Checkbox: "_Checkbox_1iwrf_17",
	Indicator: "_Indicator_1iwrf_50"
};
//#endregion
//#region src/components/sv-checkbox/sv-checkbox.tsx
function E({ disabled: e, labelContent: o, innerProps: s = {}, ...c }) {
	let { className: l, ...u } = s.label || {}, { className: d, ...f } = c || {}, { className: p, ...m } = s.indicator || {};
	return /* @__PURE__ */ r("label", {
		"aria-disabled": e,
		className: t("sv-ui", T.Label, l),
		...u,
		children: [/* @__PURE__ */ n(i.Root, {
			className: t(T.Checkbox, d),
			disabled: e,
			...f,
			children: /* @__PURE__ */ n(i.Indicator, {
				className: t(T.Indicator, p),
				...m,
				children: /* @__PURE__ */ n(a, {
					width: 14,
					height: 14
				})
			})
		}), o]
	});
}
var D = {
	Field: "_Field_iy617_1",
	Label: "_Label_iy617_10",
	Input: "_Input_iy617_17",
	Error: "_Error_iy617_47",
	Description: "_Description_iy617_53"
};
//#endregion
//#region src/components/sv-field/sv-field.tsx
function O({ error: e, description: i, label: a, innerProps: o = {}, ...s }) {
	let { className: c, ...l } = s || {}, { className: d, ...f } = o.label || {}, { className: p, ...m } = o.control || {}, { className: h, ...g } = o.error || {}, { className: _, ...v } = o.description || {};
	return /* @__PURE__ */ r(u.Root, {
		className: t("sv-ui", D.Field, c),
		invalid: !!e,
		...l,
		children: [
			/* @__PURE__ */ n(u.Label, {
				className: t(D.Label, d),
				...f,
				children: a
			}),
			/* @__PURE__ */ n(u.Control, {
				className: t(D.Input, p),
				...m
			}),
			/* @__PURE__ */ n(u.Error, {
				className: t(D.Error, h),
				...g,
				children: e
			}),
			/* @__PURE__ */ n(u.Description, {
				className: t(D.Description, _),
				...v,
				children: i
			})
		]
	});
}
var k = {
	Trigger: "_Trigger_5jac2_1",
	Positioner: "_Positioner_5jac2_50",
	Popup: "_Popup_5jac2_54",
	Item: "_Item_5jac2_76"
};
//#endregion
//#region src/components/sv-menu/sv-menu.tsx
function A({ triggerContent: e, itemList: i, innerProps: a = {}, ...o }) {
	let { className: s, ...c } = a?.trigger || {}, { className: l, ...u } = a.portal || {}, { className: f, ...p } = a.positioner || {}, { className: m, ...h } = a.popup || {}, { className: g, ..._ } = a.item || {};
	return /* @__PURE__ */ r(d.Root, {
		...o,
		children: [/* @__PURE__ */ n(d.Trigger, {
			className: t("sv-ui", k.Trigger, s),
			...c,
			children: /* @__PURE__ */ n(C, { children: e })
		}), /* @__PURE__ */ n(d.Portal, {
			className: l,
			...u,
			children: /* @__PURE__ */ n(d.Positioner, {
				className: t("sv-ui", k.Positioner, f),
				sideOffset: 8,
				...p,
				children: /* @__PURE__ */ n(d.Popup, {
					className: t(k.Popup, m),
					...h,
					children: i.map((e, r) => {
						let { className: i, ...a } = e.itemListProps || {};
						return /* @__PURE__ */ n(d.Item, {
							className: t(k.Item, g, i),
							..._,
							...a,
							children: e.content
						}, r);
					})
				})
			})
		})]
	});
}
var j = {
	Field: "_Field_1wpxm_1",
	Label: "_Label_1wpxm_12",
	Group: "_Group_1wpxm_19",
	Input: "_Input_1wpxm_24",
	Decrement: "_Decrement_1wpxm_55",
	Increment: "_Increment_1wpxm_56"
};
//#endregion
//#region src/components/sv-number-field/sv-number-field.tsx
function M({ label: e, innerProps: i = {}, ...a }) {
	let { className: o, ...l } = i.label || {}, { className: u, ...d } = i.group || {}, { className: p, ...m } = i.decrement || {}, { className: h, ...g } = i.input || {}, { className: _, ...v } = i.increment || {};
	return /* @__PURE__ */ r("label", {
		className: t("sv-ui", j.Label, o),
		...l,
		children: [e, /* @__PURE__ */ n(f.Root, {
			className: t(j.Field),
			...a,
			children: /* @__PURE__ */ r(f.Group, {
				className: t(j.Group, u),
				...d,
				children: [
					/* @__PURE__ */ n(f.Decrement, {
						className: t(j.Decrement, p),
						...m,
						children: /* @__PURE__ */ n(s, {
							width: 16,
							height: 16
						})
					}),
					/* @__PURE__ */ n(f.Input, {
						className: t(j.Input, h),
						...g
					}),
					/* @__PURE__ */ n(f.Increment, {
						className: t(j.Increment, _),
						...v,
						children: /* @__PURE__ */ n(c, {
							width: 16,
							height: 16
						})
					})
				]
			})
		})]
	});
}
var N = {
	RadioGroup: "_RadioGroup_1iyxo_1",
	Item: "_Item_1iyxo_13",
	Radio: "_Radio_1iyxo_1",
	Indicator: "_Indicator_1iyxo_49"
};
//#endregion
//#region src/components/sv-radio-group/sv-radio-group.tsx
function P({ itemList: e, innerProps: i = {}, ...o }) {
	let { className: s, ...c } = o || {}, { className: l, ...u } = i.listRoot || {}, { className: d, ...f } = i.listLabel || {}, { className: h, ...g } = i.listIndicator || {};
	return /* @__PURE__ */ n(m, {
		className: t("sv-ui", N.RadioGroup, s),
		...c,
		children: e.map(({ id: e, itemLabel: i, itemProps: o = {} }) => {
			let { className: s, ...c } = o.label || {}, { className: m, ..._ } = o.root || {}, { className: v, ...y } = o.indicator || {};
			return /* @__PURE__ */ r("label", {
				className: t(N.Item, d, s),
				...f,
				...c,
				children: [/* @__PURE__ */ n(p.Root, {
					value: e,
					className: t(N.Radio, l, m),
					...u,
					..._,
					children: /* @__PURE__ */ n(p.Indicator, {
						className: t(N.Indicator, h, v),
						...g,
						...y,
						children: /* @__PURE__ */ n(a, {
							size: 12,
							strokeWidth: 3
						})
					})
				}), i]
			}, e);
		})
	});
}
var F = {
	Field: "_Field_1o9ug_1",
	Label: "_Label_1o9ug_8",
	Value: "_Value_1o9ug_16",
	Select: "_Select_1o9ug_20",
	SelectIcon: "_SelectIcon_1o9ug_62",
	Positioner: "_Positioner_1o9ug_66",
	Popup: "_Popup_1o9ug_73",
	List: "_List_1o9ug_102",
	Arrow: "_Arrow_1o9ug_110",
	Item: "_Item_1o9ug_150",
	ItemIndicator: "_ItemIndicator_1o9ug_197",
	ItemIndicatorIcon: "_ItemIndicatorIcon_1o9ug_201",
	ItemText: "_ItemText_1o9ug_207",
	ScrollArrow: "_ScrollArrow_1o9ug_211"
};
//#endregion
//#region src/components/sv-select/sv-select.tsx
function I({ itemList: e, label: i, innerProps: s = {}, ...c }) {
	let { className: l, ...u } = s.label || {}, { className: d, ...f } = s.trigger || {}, { className: p, ...m } = s.triggerValue || {}, { className: g, ..._ } = s.triggerIcon || {}, { className: v, ...y } = s.positioner || {}, { className: b, ...x } = s.popup || {}, { className: S, ...C } = s.list || {}, { className: w, ...T } = s.item || {}, { className: E, ...D } = s.itemIndicator || {}, { className: O, ...k } = s.itemText || {};
	return /* @__PURE__ */ r(h.Root, {
		items: e,
		...c,
		children: [
			/* @__PURE__ */ n(h.Label, {
				className: t("sv-ui", F.Label, l),
				...u,
				children: i
			}),
			/* @__PURE__ */ r(h.Trigger, {
				className: t("sv-ui", F.Select, d),
				...f,
				children: [/* @__PURE__ */ n(h.Value, {
					className: t(F.Value, p),
					...m
				}), /* @__PURE__ */ n(h.Icon, {
					className: t(F.SelectIcon, g),
					..._,
					children: /* @__PURE__ */ n(o, {})
				})]
			}),
			/* @__PURE__ */ n(h.Portal, {
				...s.portal,
				children: /* @__PURE__ */ n(h.Positioner, {
					className: t("sv-ui", F.Positioner, v),
					sideOffset: 8,
					...y,
					children: /* @__PURE__ */ n(h.Popup, {
						className: t(F.Popup, b),
						...x,
						children: /* @__PURE__ */ n(h.List, {
							className: t(F.List, S),
							...C,
							children: e.map(({ label: e, value: i, itemListProps: o = {} }) => {
								let { className: s, ...c } = o.item || {}, { className: l, ...u } = o.itemIndicator || {}, { className: d, ...f } = o.itemText || {};
								return /* @__PURE__ */ r(h.Item, {
									value: i,
									className: t(F.Item, w, s),
									...T,
									...c,
									children: [/* @__PURE__ */ n(h.ItemText, {
										className: t(F.ItemText, O, d),
										...k,
										...f,
										children: e
									}), /* @__PURE__ */ n(h.ItemIndicator, {
										className: t(F.ItemIndicator, E, l),
										...D,
										...u,
										children: /* @__PURE__ */ n(a, {
											size: 16,
											color: "#828282"
										})
									})]
								}, i);
							})
						})
					})
				})
			})
		]
	});
}
var L = {
	Control: "_Control_4dx9k_1",
	Track: "_Track_4dx9k_15",
	Indicator: "_Indicator_4dx9k_23",
	Thumb: "_Thumb_4dx9k_29"
};
//#endregion
//#region src/components/sv-slider/sv-slider.tsx
function R({ innerProps: e = {}, ...i }) {
	let { className: a, ...o } = e.control || {}, { className: s, ...c } = e.track || {}, { className: l, ...u } = e.indicator || {}, { className: d, ...f } = e.thumb || {};
	return /* @__PURE__ */ n(g.Root, {
		...i,
		children: /* @__PURE__ */ n(g.Control, {
			className: t(L.Control, a),
			...o,
			children: /* @__PURE__ */ r(g.Track, {
				className: t(L.Track, s),
				...c,
				children: [/* @__PURE__ */ n(g.Indicator, {
					className: t(L.Indicator, l),
					...u
				}), /* @__PURE__ */ n(g.Thumb, {
					className: t(L.Thumb, d),
					...f
				})]
			})
		})
	});
}
var z = {
	Switch: "_Switch_64i36_1",
	Thumb: "_Thumb_64i36_60"
};
//#endregion
//#region src/components/sv-switch/sv-switch.tsx
function B({ className: e, innerProps: r, ...i }) {
	let { className: a, ...o } = r?.thumb || {};
	return /* @__PURE__ */ n(_.Root, {
		className: t(z.Switch, e),
		...i,
		children: /* @__PURE__ */ n(_.Thumb, {
			className: t(z.Thumb, a),
			...o
		})
	});
}
var V = {
	wrapper: "_wrapper_mxo3z_1",
	inputGroup: "_inputGroup_mxo3z_7",
	chips: "_chips_mxo3z_22",
	chip: "_chip_mxo3z_22",
	chipRemove: "_chipRemove_mxo3z_45",
	input: "_input_mxo3z_7",
	clear: "_clear_mxo3z_59"
};
//#endregion
//#region src/components/sv-tag-input/sv-tag-input.tsx
function H({ innerProps: e = {}, defaultState: i = [], defaultInput: a = "", addButton: o, onChangeValue: s, onValueChange: c, ...u }) {
	let { className: d, ...f } = e.inputGroup || {}, { className: p, ...m } = e.chips || {}, { className: h, ...g } = e.chip || {}, { className: _, ...x } = e.input || {}, { className: S, ...w } = e.chipRemove || {}, { className: T, ...E } = e.clear || {}, [D, O] = b(i), [k, A] = b(a), j = () => {
		let e = k.trim();
		if (e !== "") {
			if (D.some((t) => t.toLowerCase() === e.toLowerCase())) {
				A("");
				return;
			}
			O((t) => t.concat(e)), A("");
		}
	};
	return y(() => {
		s && s(D);
	}, [s, D]), /* @__PURE__ */ r("div", {
		className: V.wrapper,
		children: [/* @__PURE__ */ n(v.Root, {
			items: D,
			multiple: !0,
			value: D,
			inputValue: k,
			open: !1,
			onValueChange: (e, t) => {
				O(Array.isArray(e) ? e : []), c && c(Array.isArray(e) ? e.join("/") : e, t);
			},
			onInputValueChange: A,
			...u,
			children: /* @__PURE__ */ r(v.InputGroup, {
				className: t("sv-ui", V.inputGroup, d),
				...f,
				children: [/* @__PURE__ */ r(v.Chips, {
					className: t(V.chips, p),
					...m,
					children: [D.map((e) => /* @__PURE__ */ r(v.Chip, {
						className: t(V.chip, h),
						...g,
						children: [e, /* @__PURE__ */ n(v.ChipRemove, {
							className: t(V.chipRemove, S),
							...w,
							children: /* @__PURE__ */ n(l, { size: 9 })
						})]
					}, encodeURIComponent(e).replaceAll("%", ""))), /* @__PURE__ */ n(v.Input, {
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), j());
						},
						className: t(V.input, _),
						...x
					})]
				}), /* @__PURE__ */ n(v.Clear, {
					className: t(V.clear, T),
					...E
				})]
			})
		}), o && /* @__PURE__ */ n(C, {
			styleType: o.type,
			onClick: j,
			children: o.label
		})]
	});
}
var U = {
	Panel: "_Panel_k999t_1",
	Button: "_Button_k999t_9",
	Icon: "_Icon_k999t_46",
	Popup: "_Popup_k999t_51",
	Arrow: "_Arrow_k999t_88",
	ArrowFill: "_ArrowFill_k999t_112",
	Positioner: "_Positioner_k999t_128"
};
//#endregion
//#region src/components/sv-tooltip/sv-tooltip.tsx
function W({ children: e, trigger: i, innerProps: a = {}, ...o }) {
	let { className: s, ...c } = a.trigger || {}, { className: l, ...u } = a.portal || {}, { className: d, ...f } = a.positioner || {}, { className: p, ...m } = a.popup || {};
	return /* @__PURE__ */ n(x.Provider, {
		...o,
		children: /* @__PURE__ */ r(x.Root, {
			...a?.root,
			children: [/* @__PURE__ */ n(x.Trigger, {
				className: t("sv-ui", U.Button, s),
				...c,
				children: i
			}), /* @__PURE__ */ n(x.Portal, {
				className: t("sv-ui", l),
				...u,
				children: /* @__PURE__ */ n(x.Positioner, {
					className: t(U.Positioner, d),
					...f,
					children: /* @__PURE__ */ n(x.Popup, {
						className: t(U.Popup, p),
						...m,
						children: e
					})
				})
			})]
		})
	});
}
//#endregion
export { C as SvButton, E as SvCheckbox, O as SvField, A as SvMenu, M as SvNumberField, P as SvRadioGroup, I as SvSelect, R as SvSlider, B as SvSwitch, H as SvTagInput, W as SvTooltip };
