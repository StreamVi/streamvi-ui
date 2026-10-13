# StreamVi UI Kit

[Русская версия](README.ru.md)

StreamVi UI Kit is a library of 14 React components built on Material UI for creating StreamVi interfaces and plugins with a consistent visual style, light and dark themes, and TypeScript support.

> **BREAKING CHANGE — major redesign.** This version replaces the previous Base UI implementation with Material UI. Theme setup, component props, events, and customization have changed. Existing applications need migration before upgrading; see [Upgrading from the previous version](#upgrading-from-the-previous-version).

## Installation

```sh
npm install @streamvi/streamvi-ui-kit
```

The application must provide compatible peer dependencies:

| Package                                | Supported range |
| -------------------------------------- | --------------- |
| `react`, `react-dom`                   | `^19.3.0`       |
| `@mui/material`, `@mui/icons-material` | `^9.5.0`        |
| `@emotion/react`                       | `^11.14.0`      |
| `@emotion/styled`                      | `^11.14.1`      |

npm 7+ installs required peer dependencies automatically unless this behavior is disabled. To install them explicitly:

```sh
npm install react@^19.3.0 react-dom@^19.3.0 @mui/material@^9.5.0 @mui/icons-material@^9.5.0 @emotion/react@^11.14.0 @emotion/styled@^11.14.1
```

In an application that already uses MUI and Emotion, keep its direct dependencies and align their versions with these ranges so the application and UI Kit share compatible instances.

The minimum supported React and React DOM version is 19.3.0. Upgrade both packages together when migrating from React 19.2.

TypeScript declarations support `moduleResolution: Bundler` and `NodeNext`. With MUI 9.5, combining `exactOptionalPropertyTypes: true` with `skipLibCheck: false` exposes errors in MUI's Collapse/Fade declarations. Use `skipLibCheck: true` with exact optional checking, or disable `exactOptionalPropertyTypes` when checking all dependency declarations. The library's package checks cover both configurations.

If the package is not available on npm, install a version from GitHub that includes the built package:

```sh
npm install github:StreamVi/streamvi-ui
```

## Quick start

Wrap your interface in `SvThemeProvider`. Optionally import `fonts.css` once in the application entry point to load the bundled Inter font.

```tsx
import { SvButton, SvThemeProvider } from '@streamvi/streamvi-ui-kit';
import '@streamvi/streamvi-ui-kit/fonts.css'; // Optional: bundled Inter font

export function App() {
  return (
    <SvThemeProvider defaultMode="light">
      <SvButton>Create stream</SvButton>
    </SvThemeProvider>
  );
}
```

Component styles are provided through MUI and Emotion. A separate `style.css` import is no longer used. The library does not automatically load fonts or add MUI `CssBaseline`; the application controls page background, layout, and global styles.

The default provider includes the StreamVi theme with CSS variables and light/dark color schemes. It starts in light mode unless a previously saved user preference takes precedence.

## Components

Import components and their public types from `@streamvi/streamvi-ui-kit`.

| Component       | Main props                                                                                               |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `SvButton`      | `children`, `appearance`, `variant`, `color`, `size`, `startIcon`, `endIcon`, `loading`, `disabled`      |
| `SvIconButton`  | `children`, `appearance`, `color`, `size`, `loading`, `disabled`, `aria-label`                           |
| `SvCheckbox`    | `checked/defaultChecked`, `indeterminate`, `selectionNumber`, `onChange`                                 |
| `SvChip`        | `label`, `selected`, `icon`, `avatar`, `onClick`, `onDelete`, `disabled`                                 |
| `SvField`       | `label`, `value/defaultValue`, `onChange`, `error`, `helperText`, `multiline`, `inputRef`                |
| `SvNumberField` | `value/defaultValue: number \| null`, `onChange(event, value)`, `min`, `max`, `step`, `readOnly`         |
| `SvRadio`       | `checked/defaultChecked`, `onChange(event, checked)`, `disabled`, `color`, `size`                        |
| `SvRadioGroup`  | `options` or `children`, `value/defaultValue`, `onChange`, `row`, `label`, `helperText`                  |
| `SvSelect`      | `options` or `children`, `value/defaultValue`, `onChange`, `multiple`, `renderValue`                     |
| `SvSlider`      | `value/defaultValue: number \| number[]`, `min`, `max`, `step`, `marks`, `onChange`, `onChangeCommitted` |
| `SvSwitch`      | `checked/defaultChecked`, `onChange(event, checked)`, `disabled`, `readOnly`, `color`, `size`            |
| `SvMenu`        | `items` or `children`, `anchorEl`, `open`, `onClose`, `header`, `footer`                                 |
| `SvTagInput`    | `value/defaultValue: string[]`, `onChange`, `inputValue`, `onInputChange`, `options`, `clearText`        |
| `SvTooltip`     | `title`, trigger in `children`, `placement`, `open`, `onOpen`, `onClose`, `arrow`                        |

`SvButton` uses MUI variants `contained` (default), `outlined`, and `text`. StreamVi presets are selected through `appearance`: `default`, `secondary`, `tooltip`, `server`, `serverSecondary`, `nerf`, and `nerfSecondary`. Use `color="error"` for destructive actions and `color="success"` for green buttons. Icon buttons use the separate `SvIconButton` component with `appearance="default"` or `"webinar"`.

For controlled components, update `value` or `checked` in the change handler; use `defaultValue` or `defaultChecked` for uncontrolled state. Keep the chosen mode consistent throughout the component's lifetime. Standard MUI event signatures are preserved where applicable.

## Usage examples

Render each example inside `SvThemeProvider`, as in the quick start. These four examples cover all 14 components. Standard labels, icons, list items, and tags receive their base styling from the components.

### Buttons, chip, and tooltip

Pass button text through `children`, adjacent icons through `startIcon/endIcon`, chip content through `label`, and tooltip content through `title`. The selected chip is controlled by application state.

```tsx
import { useState } from 'react';
import AddRounded from '@mui/icons-material/AddRounded';
import HelpOutlineRounded from '@mui/icons-material/HelpOutlineRounded';
import {
  SvButton,
  SvChip,
  SvIconButton,
  SvTooltip,
} from '@streamvi/streamvi-ui-kit';

export function ActionsExample() {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <SvButton startIcon={<AddRounded />}>Create stream</SvButton>
      <SvTooltip title="Configure channels before starting the stream">
        <SvIconButton aria-label="Stream help">
          <HelpOutlineRounded />
        </SvIconButton>
      </SvTooltip>
      <SvChip
        label="Favorite"
        selected={selected}
        onClick={() => setSelected((current) => !current)}
      />
    </>
  );
}
```

### Text and number fields

Labels, helper text, and number adjustment buttons are styled by the components. `SvField.onChange` receives an event; read its `target.value`. `SvNumberField.onChange(event, value)` receives `number | null` when a value is committed on blur, Enter, arrow keys, or the adjustment buttons. Empty input produces `null`; invalid input is reverted, and numeric values are clamped to `min/max`.

```tsx
import { SvField, SvNumberField } from '@streamvi/streamvi-ui-kit';

export function FieldsExample() {
  return (
    <>
      <SvField
        label="Stream title"
        defaultValue="Evening stream"
        helperText="Viewers will see this title"
      />
      <SvNumberField
        label="Repeat count"
        defaultValue={2}
        min={0}
        max={10}
        step={1}
      />
    </>
  );
}
```

### Checkboxes, switches, radio groups, and slider

`SvRadioGroup.options` creates labeled radio buttons. Use MUI `FormControlLabel` for individual Checkbox/Switch labels and radio composition, as shown below. A native label such as `<label><SvCheckbox /> Notify subscribers</label>` is also supported. Give icon buttons and sliders accessible names.

```tsx
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  SvCheckbox,
  SvRadio,
  SvRadioGroup,
  SvSlider,
  SvSwitch,
} from '@streamvi/streamvi-ui-kit';

export function SettingsExample() {
  return (
    <>
      <FormControlLabel
        label="Notify subscribers"
        control={<SvCheckbox defaultChecked />}
      />
      <FormControlLabel
        label="Record stream"
        control={<SvSwitch defaultChecked />}
      />
      <SvRadioGroup
        name="quality"
        label="Quality"
        defaultValue="hd"
        options={[
          { value: 'hd', label: 'HD' },
          { value: 'sd', label: 'SD' },
        ]}
      />
      <SvRadioGroup
        name="format"
        aria-label="Stream format"
        defaultValue="video"
      >
        <FormControlLabel value="video" label="Video" control={<SvRadio />} />
        <FormControlLabel value="audio" label="Audio" control={<SvRadio />} />
      </SvRadioGroup>
      <SvSlider
        aria-label="Volume"
        defaultValue={50}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: '0%' },
          { value: 100, label: '100%' },
        ]}
      />
    </>
  );
}
```

### Menu, select, and tags

`SvMenu.items`, `SvSelect.options`, and `SvTagInput.options` accept data. Menu descriptions, select avatars, and tags are styled automatically. Close a menu from the item handler when needed: clicking an item does not change `open` or call `onClose` automatically. The select and tags below use uncontrolled state.

```tsx
import { useId, useState } from 'react';
import CloseRounded from '@mui/icons-material/CloseRounded';
import {
  SvButton,
  SvMenu,
  SvSelect,
  SvTagInput,
} from '@streamvi/streamvi-ui-kit';

export function ListsExample() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const triggerId = useId();
  const menuId = useId();
  const open = Boolean(anchorEl);
  const closeMenu = () => setAnchorEl(null);

  return (
    <>
      <SvButton
        id={triggerId}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        Actions
      </SvButton>
      <SvMenu
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenu}
        slotProps={{ list: { id: menuId, 'aria-labelledby': triggerId } }}
        items={[
          {
            id: 'close',
            label: 'Close menu',
            description: 'Return to settings',
            icon: <CloseRounded />,
            onClick: closeMenu,
          },
          { id: 'delete', label: 'Delete stream', disabled: true },
        ]}
      />
      <SvSelect<number>
        defaultValue={0}
        inputProps={{ 'aria-label': 'Stream channel' }}
        options={[
          { value: 0, label: 'Main channel', avatar: { children: 'S' } },
          { value: 1, label: 'Backup channel' },
          { value: 2, label: 'Unavailable channel', disabled: true },
        ]}
      />
      <SvTagInput
        label="Tags"
        defaultValue={['Stream']}
        options={['Stream', 'Video', 'News']}
        helperText="Choose a suggestion or type a tag and press Enter"
        clearText="Clear"
      />
    </>
  );
}
```

`SvSelect` accepts either `options` or `children` containing MUI `MenuItem`. For native mode, use `native` with `children` containing HTML `option`. With `multiple`, provide an array value. A visible label and helper text belong to external MUI `FormControl`, `FormLabel/InputLabel`, and `FormHelperText`; connect them using `labelId` and `aria-describedby`. The Select `label` prop alone does not create a visible label. For a placeholder, use `displayEmpty` and `renderValue`.

`SvTagInput` accepts string arrays and supports suggestions and free text. Add a tag with Enter or by selecting a suggestion; remove it with its delete button, Backspace/Delete, or the clear action. Tags (`value/onChange`) and draft text (`inputValue/onInputChange`) can be controlled independently. Whitespace trimming and case-insensitive deduplication are application responsibilities.

## Themes

### Switching light, dark, and system modes

Call `useSvColorScheme()` inside the provider. `mode` can be `undefined` on the first render; account for that when rendering a switcher. `systemMode` reports the resolved system preference when system mode is active.

```tsx
import {
  SvButton,
  SvThemeProvider,
  useSvColorScheme,
} from '@streamvi/streamvi-ui-kit';

function ThemeControls() {
  const { mode, setMode } = useSvColorScheme();
  if (!mode) return null;

  return (
    <>
      <SvButton
        aria-pressed={mode === 'light'}
        onClick={() => setMode('light')}
      >
        Light
      </SvButton>
      <SvButton aria-pressed={mode === 'dark'} onClick={() => setMode('dark')}>
        Dark
      </SvButton>
      <SvButton
        aria-pressed={mode === 'system'}
        onClick={() => setMode('system')}
      >
        System
      </SvButton>
    </>
  );
}

export function ThemeExample() {
  return (
    <SvThemeProvider defaultMode="system" disableTransitionOnChange>
      <ThemeControls />
    </SvThemeProvider>
  );
}
```

| Provider option             | Default / purpose                                                     |
| --------------------------- | --------------------------------------------------------------------- |
| `defaultMode`               | `light`; also accepts `dark` and `system`                             |
| `modeStorageKey`            | `sv-mode`                                                             |
| `colorSchemeStorageKey`     | `sv-color-scheme`                                                     |
| `storageManager`            | MUI localStorage persistence; `null` disables persistence             |
| `injectFirst`               | `true`; use `false` to retain the application's style insertion order |
| `disableTransitionOnChange` | Disables transitions while switching modes                            |

The built-in theme uses the `sv` CSS variable prefix and `data-mui-color-scheme` selector. For example, its paper background is available as `--sv-palette-background-paper`. The CSS variable theme also sets the browser's `color-scheme`.

### Custom theme

Pass configuration directly to `createSvTheme`, then pass the result to the provider. It accepts standard MUI theme options plus StreamVi tokens in `sv`: `accent`, `accentHover`, `surface`, `surfaceHover`, `stroke`, `green`, `greenHover`, and `focus`.

```tsx
import {
  createSvTheme,
  SvButton,
  SvThemeProvider,
  type SvThemeOptions,
} from '@streamvi/streamvi-ui-kit';

const options: SvThemeOptions = {
  cssVariables: {
    cssVarPrefix: 'sv',
    colorSchemeSelector: 'data-mui-color-scheme',
  },
  colorSchemes: {
    light: true,
    dark: { palette: { background: { paper: '#202020' } } },
  },
  sv: { accent: '#7653c1', accentHover: '#6845b3' },
};

const theme = createSvTheme(options);

export function CustomThemeExample() {
  return (
    <SvThemeProvider theme={theme} defaultMode="dark">
      <SvButton>Save</SvButton>
    </SvThemeProvider>
  );
}
```

`createSvTheme()` without options creates an ordinary light theme. To switch schemes in a custom theme, configure `cssVariables` and both `colorSchemes`, as above. Set scheme-specific palette colors in `colorSchemes.light/dark.palette`; a top-level `palette` takes precedence for the primary scheme. Common `sv` token overrides apply to both schemes.

`useSvTheme()` returns the active theme. Public types include `SvTheme`, `SvThemeOptions`, `SvTokens`, `SvColorMode`, `SvStorageManager`, and `SvThemeProviderProps`. Components also work under a standard MUI `ThemeProvider`; a plain MUI theme can omit StreamVi tokens, in which case components use the MUI palette. StreamVi component styling applies to `Sv*` components; ordinary MUI components retain their own styles.

A nested provider inherits the outer provider's mode context. Configure the initial mode and persistence at the provider that owns that context. Use `disableNestedContext` only when an independent mode is required. If two themes generate separate CSS variables, use different `cssVarPrefix` values, a shared selector, and a single mode owner.

For server rendering, configure the initial color-scheme attribute and Emotion cache in the application using the [MUI SSR guidance](https://mui.com/material-ui/guides/server-rendering/) and [color-scheme initialization](https://mui.com/material-ui/react-init-color-scheme-script/). `noSsr` is for client rendering; it does not fix hydration mismatches.

## Customization and accessibility

Use `sx` for local styles and supported `slotProps` for internal elements. `sx` accepts objects, arrays, and theme callbacks. Fields that accept `ReactNode`, such as labels and menu descriptions, can also receive JSX. Full replacements through `slots` or `render*` must preserve the required props, refs, and accessibility behavior.

```tsx
import { SvField, SvSelect, SvTagInput } from '@streamvi/streamvi-ui-kit';

export function CustomizedExample() {
  return (
    <>
      <SvField
        label="Title"
        sx={{ width: 320, maxWidth: '100%' }}
        slotProps={{
          input: { readOnly: true, sx: { borderRadius: '12px' } },
          htmlInput: { maxLength: 120 },
        }}
      />
      <SvTagInput
        label="Tags"
        defaultValue={['Stream']}
        clearText="Clear"
        slotProps={{ chip: { sx: { borderRadius: '12px' } } }}
      />
      <SvSelect
        defaultValue="main"
        inputProps={{ 'aria-label': 'Channel' }}
        options={[{ value: 'main', label: 'Main channel' }]}
        MenuProps={{ slotProps: { paper: { sx: { borderRadius: '12px' } } } }}
      />
    </>
  );
}
```

`SvField` uses `slotProps.input` for `readOnly` and adornments, `slotProps.htmlInput` for native input attributes, and `inputRef` for the native input/textarea. `SvNumberField` also supports top-level `readOnly` and `slotProps.increment/decrement` for its buttons. For tag fields, customize the field through `slotProps.textField` and tags through `slotProps.chip`.

Menu and tooltip popups are rendered through portals. Style them directly: `SvMenu.slotProps.paper/list`, `SvSelect.MenuProps.slotProps`, and the supported Tooltip slots. A selector on the trigger's container does not reach the popup. `SvTooltip.sx/className` style the tooltip itself; style the trigger through `children`.

Use accessible labels for controls, connect field descriptions, and preserve visible keyboard focus. The default StreamVi colors include combinations below WCAG AA's 4.5:1 normal-text threshold, including white text on accent/red buttons and some secondary/error text. Override theme colors or component styles to meet your application's contrast requirements.

The package provides ES modules and TypeScript declarations. Use named imports from the package root; separate component subpaths are not public API. Bundlers can remove unused components through tree shaking. Import `fonts.css` explicitly when you need the bundled font.

## Upgrading from the previous version

React and React DOM 19.3.0 or later within React 19 are required. Update the application's React packages and React type packages together before installing this release.

**This is a breaking update.** The move from Base UI to Material UI changes component APIs and the customization model. Review existing usages and CSS selectors before upgrading; the old Base UI DOM structure and types are not supported contracts of this version.

| Previous usage                                                                  | Current API / required change                                                                                                                                                                                               |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Importing `@streamvi/streamvi-ui-kit/style.css`                                 | Remove it; styles are provided by MUI/Emotion. The optional `fonts.css` import remains supported.                                                                                                                           |
| Setup without a theme provider                                                  | Use `SvThemeProvider` for the StreamVi theme, or a compatible MUI `ThemeProvider`.                                                                                                                                          |
| Button `styleType`, custom `variant` values, size `default`                     | Use MUI `variant="contained"`, `"outlined"`, or `"text"`, `color`, StreamVi `appearance`, and size `medium`. Former `variant="primary"` becomes `variant="contained" color="primary"`; `important` becomes `color="error"`. |
| Button `leftIcon/rightIcon`, `isPending`                                        | Use `startIcon/endIcon`, `loading`.                                                                                                                                                                                         |
| Icon/webinar appearances on `SvButton`                                          | Use `SvIconButton` or `SvIconButton appearance="webinar"` with an accessible name.                                                                                                                                          |
| Checkbox/Switch `labelContent`                                                  | Use external `FormControlLabel` or an HTML `label`.                                                                                                                                                                         |
| Select `itemList`, built-in label/helper text                                   | Use `options` or MUI `MenuItem` children; place labels/help in external form components connected by `labelId` and `aria-describedby`.                                                                                      |
| `innerProps` and old internal CSS selectors                                     | Use supported `sx`, `slotProps`, MUI classes, and `MenuProps` for Select popups.                                                                                                                                            |
| Text-valued `error` or `isInvalid`                                              | Use boolean `error` plus `helperText`.                                                                                                                                                                                      |
| Field top-level `readOnly`, `startAdornment/endAdornment`                       | Use `slotProps.input`; native input attributes go in `slotProps.htmlInput`. `SvNumberField.readOnly` remains a top-level prop.                                                                                              |
| TagInput `defaultState/onChangeValue` and built-in normalization                | Use `defaultValue/onChange(event, tags, reason, details)`; implement trimming and deduplication in the application.                                                                                                         |
| Tooltip `trigger/children`                                                      | Pass the trigger through `children` and tooltip content through `title`.                                                                                                                                                    |
| Menu `triggerButton`, automatic close after selection, `itemClick` close reason | Render a separate trigger; control `anchorEl/open/onClose` and close from item `onClick`. Remove handling of `itemClick`.                                                                                                   |

Compare event handlers as well as prop names: `SvField` receives an event, `SvNumberField` receives `(event, numberOrNull)`, and `SvTagInput` follows MUI Autocomplete callbacks. See the examples above and [Storybook](https://ui.streamvi.io) for component usage.

## License

The library is distributed under the MIT license; see `LICENSE` in the package. The bundled Inter font remains under the SIL Open Font License 1.1, included at `dist/fonts/OFL.txt`. See `THIRD-PARTY-NOTICES.md` for attribution and third-party notices.

## Resources

- [Storybook: component examples and API](https://ui.streamvi.io)
- [StreamVi API documentation](https://dev.streamvi.io)
- [StreamVi plugin development guide](https://streamvi.io/ru/docs/dev)
- [StreamVi developer community on Telegram](https://t.me/streamvi_plugins)
- [GitHub repository](https://github.com/StreamVi/streamvi-ui)
