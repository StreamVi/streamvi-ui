import {Button} from '@base-ui/react/button';
import {Checkbox} from '@base-ui/react/checkbox';
import {Combobox} from '@base-ui/react/combobox';
import {DetailedHTMLProps, LabelHTMLAttributes, ReactNode} from 'react';
import {Field} from '@base-ui/react/field';
import {JSX} from 'react/jsx-runtime';
import {Menu} from '@base-ui/react/menu';
import {NumberField} from '@base-ui/react/number-field';
import {Radio} from '@base-ui/react/radio';
import {RadioGroup} from '@base-ui/react/radio-group';
import {Select} from '@base-ui/react/select';
import {Slider} from '@base-ui/react/slider';
import {Switch} from '@base-ui/react/switch';
import {Tooltip} from '@base-ui/react/tooltip';

export declare function SvButton({ children, styleType, size, leftIcon, rightIcon, ...props }: Readonly<SvButtonProps>): JSX.Element;

export declare interface SvButtonProps extends Button.Props {
    styleType?: 'primary' | 'secondary' | 'important' | 'tooltip' | 'webinar' | 'server' | 'serverSecondary' | 'nerf' | 'nerfSecondary' | 'text';
    size?: 'small' | 'default';
    leftIcon?: ReactNode;
    children?: ReactNode;
    rightIcon?: ReactNode;
    isPending?: boolean;
}

export declare function SvCheckbox({ disabled, labelContent, innerProps, ...props }: Readonly<SvCheckboxProps>): JSX.Element;

export declare interface SvCheckboxProps extends Checkbox.Root.Props {
    labelContent?: ReactNode;
    disabled?: boolean;
    innerProps?: Partial<{
        label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        indicator: Checkbox.Indicator.Props;
    }>;
}

export declare function SvField({ error, description, label, innerProps, ...props }: Readonly<SvFieldProps>): JSX.Element;

export declare interface SvFieldProps extends Field.Root.Props {
    label?: ReactNode;
    error?: ReactNode;
    description?: ReactNode;
    innerProps?: Partial<{
        label: Field.Label.Props;
        control: Field.Control.Props;
        error: Field.Error.Props;
        description: Field.Description.Props;
    }>;
}

export declare function SvMenu({ triggerContent, itemList, innerProps, ...props }: Readonly<SvMenuProps>): JSX.Element;

export declare interface SvMenuItemData {
    content: ReactNode;
    itemListProps?: Menu.Item.Props;
}

export declare interface SvMenuProps extends Menu.Root.Props {
    triggerContent: ReactNode;
    itemList: SvMenuItemData[];
    innerProps?: Partial<{
        trigger?: Menu.Trigger.Props;
        portal?: Menu.Portal.Props;
        positioner?: Menu.Positioner.Props;
        popup?: Menu.Popup.Props;
        item?: Menu.Item.Props;
    }>;
}

export declare function SvNumberField({ label, innerProps, ...props }: Readonly<SvNumberFieldProps>): JSX.Element;

export declare interface SvNumberFieldProps extends NumberField.Root.Props {
    label?: string;
    innerProps?: {
        label?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        group?: NumberField.Group.Props;
        decrement?: NumberField.Decrement.Props;
        increment?: NumberField.Increment.Props;
        input?: NumberField.Input.Props;
    };
}

export declare function SvRadioGroup({ itemList, innerProps, ...props }: SvRadioGroupProps): JSX.Element;

export declare interface SvRadioGroupProps extends RadioGroup.Props {
    itemList: SvRadioItemData[];
    innerProps?: Partial<{
        listLabel: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        listRoot: Radio.Root.Props;
        listIndicator: Radio.Indicator.Props;
    }>;
}

export declare interface SvRadioItemData {
    id: string;
    itemLabel: ReactNode;
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
    itemList: SvSelectItemData[];
    label?: ReactNode;
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
    innerProps?: Partial<{
        control: Slider.Control.Props;
        track: Slider.Track.Props;
        indicator: Slider.Indicator.Props;
        thumb: Slider.Thumb.Props;
    }>;
}

export declare function SvSwitch({ className, innerProps, ...props }: Readonly<SvSwitchProps>): JSX.Element;

export declare interface SvSwitchProps extends Switch.Root.Props {
    innerProps?: {
        thumb: Switch.Thumb.Props;
    };
}

export declare function SvTagInput({ innerProps, defaultState, defaultInput, addButton, onChangeValue, onValueChange, ...props }: SvTagInputProps): JSX.Element;

declare interface SvTagInputProps extends Combobox.Root.Props<string> {
    onChangeValue?: (value: string[]) => void;
    defaultState?: string[];
    defaultInput?: string;
    addButton?: {
        label: ReactNode;
        type?: SvButtonProps['styleType'];
    };
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
    children: ReactNode;
    trigger: ReactNode;
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
