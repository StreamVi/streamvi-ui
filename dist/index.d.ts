import { AutocompleteProps } from '@mui/material/Autocomplete';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import { AvatarProps } from '@mui/material/Avatar';
import { ButtonProps } from '@mui/material/Button';
import { ButtonTypeMap } from '@mui/material/Button';
import { CheckboxProps } from '@mui/material/Checkbox';
import { ChipProps } from '@mui/material/Chip';
import { ChipTypeMap } from '@mui/material/Chip';
import { default as default_2 } from '@mui/material/Slider';
import { ElementType } from 'react';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { FormControlProps } from '@mui/material/FormControl';
import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { FormLabelProps } from '@mui/material/FormLabel';
import { ForwardRefExoticComponent } from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
import { IconButtonTypeMap } from '@mui/material/IconButton';
import { JSX } from 'react';
import { Key } from 'react';
import { MenuItemProps } from '@mui/material/MenuItem';
import { MenuProps } from '@mui/material/Menu';
import { MouseEvent as MouseEvent_2 } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { RadioGroupProps } from '@mui/material/RadioGroup';
import { RadioProps } from '@mui/material/Radio';
import { ReactNode } from 'react';
import { Ref } from 'react';
import { RefAttributes } from 'react';
import { SelectProps } from '@mui/material/Select';
import { SliderProps } from '@mui/material/Slider';
import { SwitchProps } from '@mui/material/Switch';
import { SyntheticEvent } from 'react';
import { TextFieldClasses } from '@mui/material/TextField';
import { TextFieldOwnerState } from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';
import { Theme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';
import { ThemeProviderProps } from '@mui/material/styles';
import { TooltipProps } from '@mui/material/Tooltip';
import { useColorScheme as useSvColorScheme } from '@mui/material/styles';
import { useTheme as useSvTheme } from '@mui/material/styles';

declare type BaseProps = AutocompleteProps<string, true, boolean, true>;

export declare function createSvTheme(options?: ThemeOptions): Theme;

declare type MuiFieldProps = TextFieldProps<'outlined'>;

declare type OptionRadioProps = Omit<SvRadioProps, 'value' | 'name' | 'checked' | 'defaultChecked'>;

declare type StepSlotProps = SvIconButtonProps | ((state: SvNumberFieldOwnerState) => SvIconButtonProps);

export declare const SvButton: ExtendButtonBase<ButtonTypeMap<SvButtonOwnProps>>;

export declare type SvButtonAppearance = 'default' | 'secondary' | 'success' | 'tooltip' | 'server' | 'serverSecondary' | 'nerf' | 'nerfSecondary';

declare interface SvButtonOwnProps {
    /** StreamVi appearance. Success defaults to the success palette; a resolved color overrides it. Variant and size retain their MUI meanings. */
    appearance?: SvButtonAppearance | undefined;
}

export declare type SvButtonProps<C extends ElementType = 'button'> = ButtonProps<C, SvButtonOwnProps>;

export declare const SvCheckbox: ForwardRefExoticComponent<Omit<SvCheckboxProps, "ref"> & RefAttributes<HTMLSpanElement>>;

export declare interface SvCheckboxProps extends CheckboxProps {
    /** Replaces the default check mark when the checkbox is selected. */
    selectionNumber?: number | string | undefined;
}

export declare const SvChip: OverridableComponent<ChipTypeMap<SvChipOwnProps>>;

declare interface SvChipOwnProps {
    /** Controlled selection; adds a check unless icon or avatar is supplied. */
    selected?: boolean | undefined;
}

export declare type SvChipProps<C extends ElementType = 'div'> = ChipProps<C, SvChipOwnProps>;

export declare type SvColorMode = NonNullable<ThemeProviderProps<Theme>['defaultMode']>;

export declare const SvField: ForwardRefExoticComponent<Omit<SvFieldProps, "ref"> & RefAttributes<HTMLDivElement>>;

export declare type SvFieldClasses = TextFieldClasses;

export declare interface SvFieldOwnerState extends TextFieldOwnerState {
    disabled: boolean;
    error: boolean;
    required: boolean;
    fullWidth: boolean;
    multiline: boolean;
    variant: 'outlined';
}

export declare interface SvFieldProps extends Omit<MuiFieldProps, 'variant' | 'select' | 'children' | 'slots' | 'slotProps'> {
    variant?: 'outlined';
    slots?: Omit<NonNullable<MuiFieldProps['slots']>, 'select'>;
    slotProps?: Omit<NonNullable<MuiFieldProps['slotProps']>, 'select'>;
    labelAdornment?: ReactNode | ((ownerState: SvFieldOwnerState) => ReactNode);
    headerAction?: ReactNode | ((ownerState: SvFieldOwnerState) => ReactNode);
}

export declare const SvIconButton: ExtendButtonBase<IconButtonTypeMap<SvIconButtonOwnProps>>;

export declare type SvIconButtonAppearance = 'default' | 'webinar';

declare interface SvIconButtonOwnProps {
    appearance?: SvIconButtonAppearance | undefined;
}

export declare type SvIconButtonProps<C extends ElementType = 'button'> = IconButtonProps<C, SvIconButtonOwnProps>;

export declare const SvMenu: ForwardRefExoticComponent<(Omit<Omit<MenuProps, "children"> & {
    header?: ReactNode;
    footer?: ReactNode;
} & {
    children?: ReactNode;
    items?: never;
}, "ref"> | Omit<Omit<MenuProps, "children"> & {
    header?: ReactNode;
    footer?: ReactNode;
} & {
    children?: never;
    items: readonly SvMenuItem[];
}, "ref">) & RefAttributes<HTMLDivElement>>;

export declare type SvMenuCloseReason = Parameters<NonNullable<MenuProps['onClose']>>[1];

export declare interface SvMenuItem {
    id: string;
    label: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: (event: MouseEvent_2<HTMLLIElement>) => void;
    slotProps?: {
        item?: Omit<MenuItemProps, 'onClick' | 'disabled'>;
    };
}

export declare type SvMenuProps = Omit<MenuProps, 'children'> & {
    header?: ReactNode;
    footer?: ReactNode;
} & ({
    children?: ReactNode;
    items?: never;
} | {
    children?: never;
    items: readonly SvMenuItem[];
});

export declare const SvNumberField: ForwardRefExoticComponent<Omit<SvNumberFieldProps, "ref"> & RefAttributes<HTMLDivElement>>;

export declare interface SvNumberFieldOwnerState extends SvFieldOwnerState {
    value: number | null;
    readOnly: boolean;
    min?: number | undefined;
    max?: number | undefined;
    step: number;
}

export declare interface SvNumberFieldProps extends Omit<SvFieldProps, 'value' | 'defaultValue' | 'onChange' | 'type' | 'multiline' | 'rows' | 'minRows' | 'maxRows' | 'slots' | 'slotProps'> {
    value?: number | null;
    defaultValue?: number | null;
    onChange?: (event: SyntheticEvent, value: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    readOnly?: boolean;
    slots?: SvFieldProps['slots'] & {
        increment?: ElementType;
        decrement?: ElementType;
    };
    slotProps?: SvFieldProps['slotProps'] & {
        increment?: StepSlotProps;
        decrement?: StepSlotProps;
    };
}

export declare const SvRadio: ForwardRefExoticComponent<Omit<SvRadioProps, "ref"> & RefAttributes<HTMLSpanElement>>;

export declare const SvRadioGroup: ForwardRefExoticComponent<(Omit<Omit<RadioGroupProps, "children"> & {
    label?: ReactNode;
    helperText?: ReactNode;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    slotProps?: {
        formControl?: FormControlProps;
        label?: FormLabelProps;
        radio?: OptionRadioProps;
        helperText?: FormHelperTextProps;
    };
} & {
    options: readonly SvRadioOption[];
    children?: never;
}, "ref"> | Omit<Omit<RadioGroupProps, "children"> & {
    label?: ReactNode;
    helperText?: ReactNode;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    slotProps?: {
        formControl?: FormControlProps;
        label?: FormLabelProps;
        radio?: OptionRadioProps;
        helperText?: FormHelperTextProps;
    };
} & {
    options?: never;
    children?: ReactNode;
}, "ref">) & RefAttributes<HTMLDivElement>>;

export declare type SvRadioGroupProps = Omit<RadioGroupProps, 'children'> & {
    label?: ReactNode;
    helperText?: ReactNode;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    slotProps?: {
        formControl?: FormControlProps;
        label?: FormLabelProps;
        radio?: OptionRadioProps;
        helperText?: FormHelperTextProps;
    };
} & ({
    options: readonly SvRadioOption[];
    children?: never;
} | {
    options?: never;
    children?: ReactNode;
});

export declare interface SvRadioOption {
    value: string;
    label: ReactNode;
    disabled?: boolean;
    slotProps?: {
        radio?: OptionRadioProps;
        label?: Omit<FormControlLabelProps, 'control' | 'label' | 'value' | 'checked' | 'name'>;
    };
}

export declare interface SvRadioProps extends Omit<RadioProps, 'ref'> {
    ref?: Ref<HTMLSpanElement> | undefined;
}

export declare function SvSelect<Value = unknown>(inProps: SvSelectProps<Value>): JSX.Element;

export declare namespace SvSelect {
    var muiName: string;
}

export declare interface SvSelectOption<Value = unknown> {
    /** Supply a stable key for object values or dynamic option lists. */
    key?: Key;
    value: Value;
    label: ReactNode;
    disabled?: boolean;
    avatar?: AvatarProps;
    slotProps?: {
        item?: Omit<MenuItemProps, 'value' | 'children' | 'disabled'>;
    };
}

export declare type SvSelectProps<Value = unknown> = SelectProps<Value> & ({
    children?: ReactNode;
    options?: never;
} | {
    children?: never;
    options: readonly SvSelectOption<Value extends readonly (infer Item)[] ? Item : Value>[];
    native?: false | undefined;
});

export declare const SvSlider: typeof default_2;

export declare type SvSliderProps<RootComponent extends ElementType = 'span', AdditionalProps = Record<never, never>, Value extends number | readonly number[] = number | number[]> = SliderProps<RootComponent, AdditionalProps, Value>;

export declare type SvStorageManager = NonNullable<ThemeProviderProps<Theme>['storageManager']>;

export declare const SvSwitch: ForwardRefExoticComponent<Omit<SvSwitchProps, "ref"> & RefAttributes<HTMLSpanElement>>;

export declare interface SvSwitchProps extends Omit<SwitchProps, 'ref'> {
    ref?: Ref<HTMLSpanElement> | undefined;
}

export declare const SvTagInput: ForwardRefExoticComponent<Omit<SvTagInputProps, "ref"> & RefAttributes<HTMLDivElement>>;

/** State for the extra textField slot. Native slots receive MUI's ownerState. */
export declare interface SvTagInputFieldOwnerState extends Omit<AutocompleteRenderInputParams, 'slotProps' | 'size'> {
    size: NonNullable<BaseProps['size']>;
    readOnly: boolean;
    error: boolean;
}

export declare interface SvTagInputProps extends Omit<BaseProps, 'renderInput' | 'multiple' | 'freeSolo' | 'options' | 'slotProps' | 'ref'> {
    ref?: Ref<HTMLDivElement> | undefined;
    label?: ReactNode;
    helperText?: ReactNode;
    error?: boolean;
    placeholder?: string;
    labelAdornment?: SvFieldProps['labelAdornment'];
    options?: readonly string[];
    renderInput?: BaseProps['renderInput'];
    slotProps?: BaseProps['slotProps'] & {
        textField?: SvFieldProps | ((ownerState: SvTagInputFieldOwnerState) => SvFieldProps);
    };
}

/** MUI-compatible theme, available without importing MUI in application code. */
export declare type SvTheme = Theme;

export declare type SvThemeOptions = ThemeOptions;

export declare function SvThemeProvider({ children, theme, injectFirst, defaultMode, modeStorageKey, colorSchemeStorageKey, ...props }: SvThemeProviderProps): JSX.Element;

export declare interface SvThemeProviderProps extends Omit<ThemeProviderProps<Theme>, 'theme' | 'children'> {
    children: ReactNode;
    theme?: Theme;
    /** Set false to use the application's existing Emotion insertion order. */
    injectFirst?: boolean;
    /** Create an independent mode context instead of inheriting the outer one. */
    disableNestedContext?: boolean | undefined;
    /** Skip variables already emitted by a parent using the same theme. */
    disableStyleSheetGeneration?: boolean | undefined;
    /** Recalculate raw theme values when the mode changes. CSS variables do not need this. */
    forceThemeRerender?: boolean | undefined;
    /** Element receiving the color-scheme selector; defaults to the document root. */
    colorSchemeNode?: Element | null | undefined;
}

export declare interface SvTokens {
    accent: string;
    accentHover: string;
    surface: string;
    surfaceHover: string;
    stroke: string;
    green: string;
    greenHover?: string;
    focus: string;
}

export declare const SvTooltip: ForwardRefExoticComponent<Omit<TooltipProps, "ref"> & RefAttributes<HTMLElement>>;

export declare type SvTooltipProps = TooltipProps;

export { useSvColorScheme }

export { useSvTheme }

export { }


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvCheckbox: SvCheckboxProps;
    }
    interface Components {
        SvCheckbox?: {
            defaultProps?: Partial<SvCheckboxProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvButton: SvButtonProps;
    }
    interface Components {
        SvButton?: {
            defaultProps?: Partial<SvButtonProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvSelect: SvSelectProps;
    }
    interface Components {
        SvSelect?: {
            defaultProps?: Partial<SvSelectProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvRadioGroup: SvRadioGroupProps;
    }
    interface Components {
        SvRadioGroup?: {
            defaultProps?: Partial<SvRadioGroupProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvRadio: SvRadioProps;
    }
    interface Components {
        SvRadio?: {
            defaultProps?: Partial<SvRadioProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvSlider: SvSliderProps;
    }
    interface Components {
        SvSlider?: {
            defaultProps?: Partial<SvSliderProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvSwitch: SvSwitchProps;
    }
    interface Components {
        SvSwitch?: {
            defaultProps?: Partial<SvSwitchProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvIconButton: SvIconButtonProps;
    }
    interface Components {
        SvIconButton?: {
            defaultProps?: Partial<SvIconButtonProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvMenu: SvMenuProps;
    }
    interface Components {
        SvMenu?: {
            defaultProps?: Partial<SvMenuProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvTagInput: SvTagInputProps;
    }
    interface Components {
        SvTagInput?: {
            defaultProps?: Partial<SvTagInputProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvField: SvFieldProps;
    }
    interface Components {
        SvField?: {
            defaultProps?: Partial<SvFieldProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvChip: SvChipProps;
    }
    interface Components {
        SvChip?: {
            defaultProps?: Partial<SvChipProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface ComponentsPropsList {
        SvNumberField: SvNumberFieldProps;
    }
    interface Components {
        SvNumberField?: {
            defaultProps?: Partial<SvNumberFieldProps> | undefined;
        } | undefined;
    }
}


declare module '@mui/material/styles' {
    interface Theme {
        sv: SvTokens;
    }
    interface ThemeOptions {
        sv?: Partial<SvTokens>;
    }
    interface ThemeVars {
        sv?: SvTokens;
    }
}
