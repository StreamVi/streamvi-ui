import { Button } from '@base-ui/react/button';
import { Checkbox } from '@base-ui/react/checkbox';
import { Combobox } from '@base-ui/react/combobox';
import { DetailedHTMLProps } from 'react';
import { Field } from '@base-ui/react/field';
import { JSX } from 'react/jsx-runtime';
import { LabelHTMLAttributes } from 'react';
import { Menu } from '@base-ui/react/menu';
import { NumberField } from '@base-ui/react/number-field';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import { ReactNode } from 'react';
import { Select } from '@base-ui/react/select';
import { Slider } from '@base-ui/react/slider';
import { Switch } from '@base-ui/react/switch';
import { Tooltip } from '@base-ui/react/tooltip';

export declare function SvButton({ children, styleType, size, leftIcon, rightIcon, isPending, ...props }: Readonly<SvButtonProps>): JSX.Element;

export declare interface SvButtonProps extends Button.Props {
    /** Set view type of button */
    styleType?: 'primary' | 'secondary' | 'important' | 'tooltip' | 'webinar' | 'server' | 'serverSecondary' | 'nerf' | 'nerfSecondary' | 'text';
    /** Set button size */
    size?: 'small' | 'default';
    /** Add left icon */
    leftIcon?: ReactNode;
    /** Wrap button content */
    children?: ReactNode;
    /** Add right icon */
    rightIcon?: ReactNode;
    /** Turn on pending state */
    isPending?: boolean;
}

export declare function SvCheckbox({ disabled, labelContent, innerProps, ...props }: Readonly<SvCheckboxProps>): JSX.Element;

export declare interface SvCheckboxProps extends Checkbox.Root.Props {
    /** Add label content */
    labelContent?: ReactNode;
    /** Turn on disabled state */
    disabled?: boolean;
    /** Set inner elements props */
    innerProps?: Partial<{
        label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        indicator: Checkbox.Indicator.Props;
    }>;
}

export declare function SvField({ error, description, label, innerProps, ...props }: Readonly<SvFieldProps>): JSX.Element;

export declare interface SvFieldProps extends Field.Root.Props {
    /** Add label content  */
    label?: ReactNode;
    /** Add error content */
    error?: ReactNode;
    /** Add description content */
    description?: ReactNode;
    /** Set inner elements props */
    innerProps?: Partial<{
        label: Field.Label.Props;
        control: Field.Control.Props;
        error: Field.Error.Props;
        description: Field.Description.Props;
    }>;
}

export declare function SvMenu({ triggerButton, disabled, itemList, innerProps, ...props }: Readonly<SvMenuProps>): JSX.Element;

export declare interface SvMenuItemData {
    content: ReactNode;
    itemListProps?: Menu.Item.Props;
}

export declare interface SvMenuProps extends Menu.Root.Props {
    /** Add list content */
    itemList: SvMenuItemData[];
    /** Add trigger content */
    triggerButton: SvButtonProps;
    /** Set inner elements props */
    innerProps?: Partial<{
        trigger?: Menu.Trigger.Props;
        portal?: Menu.Portal.Props;
        positioner?: Menu.Positioner.Props;
        popup?: Menu.Popup.Props;
        item?: Menu.Item.Props;
    }>;
}

export declare function SvNumberField({ isInvalid, innerProps, ...props }: Readonly<SvNumberFieldProps>): JSX.Element;

export declare interface SvNumberFieldProps extends NumberField.Root.Props {
    /** Turn on invalid state */
    isInvalid?: boolean;
    /** Set inner elements props */
    innerProps?: {
        label?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        group?: NumberField.Group.Props;
        decrement?: NumberField.Decrement.Props;
        increment?: NumberField.Increment.Props;
        input?: NumberField.Input.Props;
    };
}

export declare function SvRadioGroup({ itemList, disabled, innerProps, ...props }: SvRadioGroupProps): JSX.Element;

export declare interface SvRadioGroupProps extends RadioGroup.Props {
    /** Add list content */
    itemList: SvRadioItemData[];
    /** Set inner elements props */
    innerProps?: Partial<{
        listLabel: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        listRoot: Radio.Root.Props;
        listIndicator: Radio.Indicator.Props;
    }>;
}

export declare interface SvRadioItemData {
    id: string;
    itemLabel: ReactNode;
    disabledItem?: boolean;
    itemProps?: Partial<{
        label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        root: Radio.Root.Props;
        indicator: Radio.Indicator.Props;
    }>;
}

export declare function SvSelect({ itemList, label, innerProps, ...props }: Readonly<SvSelectProps>): JSX.Element;

export declare interface SvSelectItemData {
    value: string;
    label: ReactNode;
    itemListProps?: Partial<{
        item: Select.Item.Props;
        itemIndicator: Select.ItemIndicator.Props;
        itemText: Select.ItemText.Props;
    }>;
}

export declare interface SvSelectProps extends Select.Root.Props<string> {
    /** Add list content */
    itemList: SvSelectItemData[];
    /** Add label content */
    label?: ReactNode;
    /** Set inner elements props */
    innerProps?: Partial<{
        label: Select.Label.Props;
        trigger: Select.Trigger.Props;
        triggerValue: Select.Value.Props;
        triggerIcon: Select.Icon.Props;
        portal: Select.Portal.Props;
        positioner: Select.Positioner.Props;
        popup: Select.Popup.Props;
        list: Select.List.Props;
        item: Select.Item.Props;
        itemIndicator: Select.ItemIndicator.Props;
        itemText: Select.ItemText.Props;
    }>;
}

export declare function SvSlider({ innerProps, ...props }: Readonly<SvSliderProps>): JSX.Element;

export declare interface SvSliderProps extends Slider.Root.Props {
    /** Set inner elements props */
    innerProps?: Partial<{
        control: Slider.Control.Props;
        track: Slider.Track.Props;
        indicator: Slider.Indicator.Props;
        thumb: Slider.Thumb.Props;
    }>;
}

export declare function SvSwitch({ className, innerProps, ...props }: Readonly<SvSwitchProps>): JSX.Element;

export declare interface SvSwitchProps extends Switch.Root.Props {
    /** Set inner elements props */
    innerProps?: {
        thumb: Switch.Thumb.Props;
    };
}

export declare function SvTagInput({ isInvalid, innerProps, defaultState, defaultInput, disabled, addButton, onChangeValue, onValueChange, ...props }: SvTagInputProps): JSX.Element;

declare interface SvTagInputProps extends Combobox.Root.Props<string> {
    /** Add change state handler */
    onChangeValue?: (value: string[]) => void;
    /** Add default state */
    defaultState?: string[];
    /** Add default input state */
    defaultInput?: string;
    /** Turn on invalid state */
    isInvalid?: boolean;
    /** Show add button */
    addButton?: SvButtonProps;
    /** Set inner elements props */
    innerProps?: Partial<{
        inputGroup: Combobox.InputGroup.Props;
        chips: Combobox.Chips.Props;
        chip: Combobox.Chip.Props;
        chipRemove: Combobox.ChipRemove.Props;
        input: Combobox.Input.Props;
        clear: Combobox.Clear.Props;
    }>;
}

export declare function SvTooltip({ children, trigger, innerProps, ...props }: SvTooltipProps): JSX.Element;

export declare interface SvTooltipProps extends Tooltip.Provider.Props {
    /** Add content */
    children: ReactNode;
    /** Wrap trigger content */
    trigger: ReactNode;
    /** Set inner elements props */
    innerProps?: Partial<{
        root: Tooltip.Root.Props;
        trigger: Tooltip.Trigger.Props;
        portal: Tooltip.Portal.Props;
        positioner: Tooltip.Positioner.Props;
        popup: Tooltip.Popup.Props;
        arrow: Tooltip.Arrow.Props;
    }>;
}

export { }
