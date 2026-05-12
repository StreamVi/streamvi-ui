import { Button as e } from "@base-ui/react/button";
import { clsx as t } from "clsx";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Checkbox as i } from "@base-ui/react/checkbox";
import { CheckIcon as a, ChevronDown as o, Minus as s, Plus as c, X as l } from "lucide-react";
import { Field as u } from "@base-ui/react/field";
import { Menu as d } from "@base-ui/react/menu";
import { NumberField as f } from "@base-ui/react/number-field";
import { useEffect as p, useState as m } from "react";
import { Radio as h } from "@base-ui/react/radio";
import { RadioGroup as g } from "@base-ui/react/radio-group";
import { Select as _ } from "@base-ui/react/select";
import { Slider as v } from "@base-ui/react/slider";
import { Switch as y } from "@base-ui/react/switch";
import { Combobox as b } from "@base-ui/react/combobox";
import { Tooltip as x } from "@base-ui/react/tooltip";
var S = {
	Button: "_Button_1fwpe_10",
	ButtonContent: "_ButtonContent_1fwpe_54",
	Pending: "_Pending_1fwpe_63",
	load: "_load_1fwpe_1",
	TextForm: "_TextForm_1fwpe_87",
	IconForm: "_IconForm_1fwpe_91",
	SizeSmallText: "_SizeSmallText_1fwpe_95",
	SizeDefaultText: "_SizeDefaultText_1fwpe_99",
	SizeSmallIcon: "_SizeSmallIcon_1fwpe_103",
	SizeDefaultIcon: "_SizeDefaultIcon_1fwpe_107",
	TypePrimary: "_TypePrimary_1fwpe_111",
	TypeSecondary: "_TypeSecondary_1fwpe_122",
	TypeImportant: "_TypeImportant_1fwpe_135",
	TypeTooltip: "_TypeTooltip_1fwpe_148",
	TypeServer: "_TypeServer_1fwpe_161",
	TypeServerSecondary: "_TypeServerSecondary_1fwpe_172",
	TypeNerf: "_TypeNerf_1fwpe_183",
	TypeNerfSecondary: "_TypeNerfSecondary_1fwpe_196",
	TypeText: "_TypeText_1fwpe_209",
	TypeWebinar: "_TypeWebinar_1fwpe_221"
};
//#endregion
//#region src/components/sv-button/sv-button.tsx
function C({ children: i, styleType: a = "primary", size: o = "default", leftIcon: s, rightIcon: c, isPending: l, ...u }) {
	let { className: d, disabled: f, ...p } = u, m = o === "default" ? S.SizeDefaultText : S.SizeSmallText;
	return /* @__PURE__ */ n(e, {
		...p,
		"aria-busy": l,
		disabled: f || l,
		className: t("sv-font", S.Button, m, S.TextForm, w(a), l && S.Pending, d),
		"data-pending": l ? "" : void 0,
		children: /* @__PURE__ */ r("span", {
			className: S.ButtonContent,
			children: [
				s,
				i,
				c
			]
		})
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
	Label: "_Label_1soit_1",
	Checkbox: "_Checkbox_1soit_17",
	Indicator: "_Indicator_1soit_50"
};
//#endregion
//#region src/components/sv-checkbox/sv-checkbox.tsx
function E({ disabled: e, labelContent: o, innerProps: s = {}, ...c }) {
	let { className: l, ...u } = s.label || {}, { className: d, ...f } = c || {}, { className: p, ...m } = s.indicator || {};
	return /* @__PURE__ */ r("label", {
		"aria-disabled": e,
		className: t("sv-font", T.Label, l),
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
	Field: "_Field_12j89_1",
	Label: "_Label_12j89_10",
	Input: "_Input_12j89_17",
	Error: "_Error_12j89_47",
	Description: "_Description_12j89_53"
};
//#endregion
//#region src/components/sv-field/sv-field.tsx
function O({ error: e, description: i, label: a, innerProps: o = {}, ...s }) {
	let { className: c, ...l } = s || {}, { className: d, ...f } = o.label || {}, { className: p, ...m } = o.control || {}, { className: h, ...g } = o.error || {}, { className: _, ...v } = o.description || {};
	return /* @__PURE__ */ r(u.Root, {
		className: t("sv-font", D.Field, c),
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
				match: !!e,
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
function A({ triggerButton: e, disabled: i, itemList: a, innerProps: o = {}, ...s }) {
	let { className: c, ...l } = o?.trigger || {}, { className: u, ...f } = o.portal || {}, { className: p, ...m } = o.positioner || {}, { className: h, ...g } = o.popup || {}, { className: _, ...v } = o.item || {};
	return /* @__PURE__ */ r(d.Root, {
		disabled: i,
		...s,
		children: [/* @__PURE__ */ n(d.Trigger, {
			nativeButton: !1,
			className: t("sv-font", k.Trigger, c),
			...l,
			children: /* @__PURE__ */ n(C, {
				...e,
				disabled: i,
				children: e.children
			})
		}), /* @__PURE__ */ n(d.Portal, {
			className: u,
			...f,
			children: /* @__PURE__ */ n(d.Positioner, {
				className: t("sv-font", k.Positioner, p),
				sideOffset: 8,
				...m,
				children: /* @__PURE__ */ n(d.Popup, {
					className: t(k.Popup, h),
					...g,
					children: a.map((e, r) => {
						let { className: i, ...a } = e.itemListProps || {};
						return /* @__PURE__ */ n(d.Item, {
							className: t(k.Item, _, i),
							...v,
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
	Field: "_Field_1uvn6_1",
	Group: "_Group_1uvn6_12",
	Input: "_Input_1uvn6_18",
	Decrement: "_Decrement_1uvn6_56",
	Increment: "_Increment_1uvn6_57"
};
//#endregion
//#region src/components/sv-number-field/sv-number-field.tsx
function M({ isInvalid: e, innerProps: i = {}, ...a }) {
	let { className: o, ...l } = i.group || {}, { className: u, ...d } = i.decrement || {}, { className: p, ...m } = i.input || {}, { className: h, ...g } = i.increment || {};
	return /* @__PURE__ */ n(f.Root, {
		className: t("sv-font", j.Field),
		...a,
		children: /* @__PURE__ */ r(f.Group, {
			className: t(j.Group, o),
			...l,
			children: [
				/* @__PURE__ */ n(f.Decrement, {
					className: t(j.Decrement, u),
					...d,
					children: /* @__PURE__ */ n(s, {
						width: 16,
						height: 16
					})
				}),
				/* @__PURE__ */ n(f.Input, {
					className: t(j.Input, p),
					"aria-invalid": e,
					...m
				}),
				/* @__PURE__ */ n(f.Increment, {
					className: t(j.Increment, h),
					...g,
					children: /* @__PURE__ */ n(c, {
						width: 16,
						height: 16
					})
				})
			]
		})
	});
}
var N = {
	RadioGroup: "_RadioGroup_1ywb1_1",
	Item: "_Item_1ywb1_14",
	Radio: "_Radio_1ywb1_1",
	Indicator: "_Indicator_1ywb1_55"
};
//#endregion
//#region src/components/sv-radio-group/sv-radio-group.tsx
function P({ itemList: e, disabled: i, innerProps: o = {}, ...s }) {
	let { className: c, ...l } = s || {}, { className: u, ...d } = o.listRoot || {}, { className: f, ...p } = o.listLabel || {}, { className: m, ..._ } = o.listIndicator || {};
	return /* @__PURE__ */ n(g, {
		className: t("sv-font", N.RadioGroup, c),
		disabled: i,
		...l,
		children: e.map(({ id: e, itemLabel: o, disabledItem: s, itemProps: c = {} }) => {
			let { className: l, ...g } = c.label || {}, { className: v, ...y } = c.root || {}, { className: b, ...x } = c.indicator || {};
			return /* @__PURE__ */ r("label", {
				className: t(N.Item, f, l),
				...p,
				...g,
				"aria-disabled": i || s,
				children: [/* @__PURE__ */ n(h.Root, {
					value: e,
					className: t(N.Radio, u, v),
					...d,
					...y,
					children: /* @__PURE__ */ n(h.Indicator, {
						className: t(N.Indicator, m, b),
						..._,
						...x,
						children: /* @__PURE__ */ n(a, {
							size: 12,
							strokeWidth: 3
						})
					})
				}), o]
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
	let { className: l, ...u } = s.label || {}, { className: d, ...f } = s.trigger || {}, { className: p, ...m } = s.triggerValue || {}, { className: h, ...g } = s.triggerIcon || {}, { className: v, ...y } = s.positioner || {}, { className: b, ...x } = s.popup || {}, { className: S, ...C } = s.list || {}, { className: w, ...T } = s.item || {}, { className: E, ...D } = s.itemIndicator || {}, { className: O, ...k } = s.itemText || {};
	return /* @__PURE__ */ r(_.Root, {
		items: e,
		...c,
		children: [
			/* @__PURE__ */ n(_.Label, {
				className: t("sv-font", F.Label, l),
				...u,
				children: i
			}),
			/* @__PURE__ */ r(_.Trigger, {
				className: t("sv-font", F.Select, d),
				...f,
				children: [/* @__PURE__ */ n(_.Value, {
					className: t(F.Value, p),
					...m
				}), /* @__PURE__ */ n(_.Icon, {
					className: t(F.SelectIcon, h),
					...g,
					children: /* @__PURE__ */ n(o, {})
				})]
			}),
			/* @__PURE__ */ n(_.Portal, {
				...s.portal,
				children: /* @__PURE__ */ n(_.Positioner, {
					className: t("sv-font", F.Positioner, v),
					sideOffset: 8,
					...y,
					children: /* @__PURE__ */ n(_.Popup, {
						className: t(F.Popup, b),
						...x,
						children: /* @__PURE__ */ n(_.List, {
							className: t(F.List, S),
							...C,
							children: e.map(({ label: e, value: i, disabled: o, itemListProps: s = {} }) => {
								let { className: c, ...l } = s.item || {}, { className: u, ...d } = s.itemIndicator || {}, { className: f, ...p } = s.itemText || {};
								return /* @__PURE__ */ r(_.Item, {
									value: i,
									className: t(F.Item, w, c),
									disabled: o,
									...T,
									...l,
									children: [/* @__PURE__ */ n(_.ItemText, {
										className: t(F.ItemText, O, f),
										...k,
										...p,
										children: e
									}), /* @__PURE__ */ n(_.ItemIndicator, {
										className: t(F.ItemIndicator, E, u),
										...D,
										...d,
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
	return /* @__PURE__ */ n(v.Root, {
		...i,
		children: /* @__PURE__ */ n(v.Control, {
			className: t(L.Control, a),
			...o,
			children: /* @__PURE__ */ r(v.Track, {
				className: t(L.Track, s),
				...c,
				children: [/* @__PURE__ */ n(v.Indicator, {
					className: t(L.Indicator, l),
					...u
				}), /* @__PURE__ */ n(v.Thumb, {
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
	return /* @__PURE__ */ n(y.Root, {
		className: t(z.Switch, e),
		...i,
		children: /* @__PURE__ */ n(y.Thumb, {
			className: t(z.Thumb, a),
			...o
		})
	});
}
var V = {
	wrapper: "_wrapper_10itz_1",
	inputGroup: "_inputGroup_10itz_7",
	chips: "_chips_10itz_33",
	chip: "_chip_10itz_33",
	chipRemove: "_chipRemove_10itz_56",
	input: "_input_10itz_7",
	clear: "_clear_10itz_70"
};
//#endregion
//#region src/components/sv-tag-input/sv-tag-input.tsx
function H({ isInvalid: e, innerProps: i = {}, defaultState: a = [], defaultInput: o = "", disabled: s, addButton: c, onChangeValue: u, onValueChange: d, ...f }) {
	let { className: h, ...g } = i.inputGroup || {}, { className: _, ...v } = i.chips || {}, { className: y, ...x } = i.chip || {}, { className: S, ...w } = i.input || {}, { className: T, ...E } = i.chipRemove || {}, { className: D, ...O } = i.clear || {}, [k, A] = m(a), [j, M] = m(o), N = () => {
		let e = j.trim();
		if (e !== "") {
			if (k.some((t) => t.toLowerCase() === e.toLowerCase())) {
				M("");
				return;
			}
			A((t) => t.concat(e)), M("");
		}
	};
	return p(() => {
		u && u(k);
	}, [u, k]), /* @__PURE__ */ r("div", {
		className: V.wrapper,
		children: [/* @__PURE__ */ n(b.Root, {
			items: k,
			multiple: !0,
			value: k,
			inputValue: j,
			open: !1,
			disabled: s,
			onValueChange: (e, t) => {
				A(Array.isArray(e) ? e : []), d && d(Array.isArray(e) ? e.join("/") : e, t);
			},
			onInputValueChange: M,
			...f,
			children: /* @__PURE__ */ r(b.InputGroup, {
				className: t("sv-font", V.inputGroup, h),
				"aria-invalid": e,
				...g,
				children: [/* @__PURE__ */ r(b.Chips, {
					className: t(V.chips, _),
					...v,
					children: [k.map((e) => /* @__PURE__ */ r(b.Chip, {
						className: t(V.chip, y),
						...x,
						children: [e, /* @__PURE__ */ n(b.ChipRemove, {
							className: t(V.chipRemove, T),
							...E,
							children: /* @__PURE__ */ n(l, { size: 9 })
						})]
					}, encodeURIComponent(e).replaceAll("%", ""))), /* @__PURE__ */ n(b.Input, {
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), N());
						},
						className: t(V.input, S),
						...w
					})]
				}), /* @__PURE__ */ n(b.Clear, {
					className: t(V.clear, D),
					...O
				})]
			})
		}), c && /* @__PURE__ */ n(C, {
			...c,
			disabled: s,
			onClick: N,
			children: c.children
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
				className: t("sv-font", U.Button, s),
				...c,
				children: i
			}), /* @__PURE__ */ n(x.Portal, {
				className: t("sv-font", l),
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
