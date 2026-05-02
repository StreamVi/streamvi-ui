# StreamVi UI Kit

[Русская версия](./README.ru.md)

StreamVi UI Kit is a React component library for building StreamVi interfaces and plugins with a consistent visual style.

## Installation

```bash
npm install @streamvi/streamvi-ui-kit
```

If the package is not published to npm yet, install it directly from GitHub:

```bash
npm install github:StreamVi/streamvi-ui
```

The library expects React and React DOM to be available in your project.

```bash
npm install react react-dom
```

## Usage

Import the library styles once in your application entry point:

```ts
import '@streamvi/streamvi-ui-kit/style.css';
```

Then import and use components:

```tsx
import { SvButton, SvCheckbox, SvSelect } from '@streamvi/streamvi-ui-kit';

export function Example() {
  return (
    <div>
      <SvButton styleType="primary">Save</SvButton>
      <SvCheckbox labelContent="Enable option" />
      <SvSelect
        label="Mode"
        itemList={[
          { value: 'basic', label: 'Basic' },
          { value: 'advanced', label: 'Advanced' },
        ]}
      />
    </div>
  );
}
```

## Components

The package includes ready-to-use StreamVi components such as buttons, fields, checkboxes, menus, number fields, radio groups, selects, sliders, switches, tag inputs, and tooltips.

## Examples

Live examples and component usage are available in Storybook:

[https://ui.streamvi.io](https://ui.streamvi.io)

## API Documentation

StreamVi API methods are documented here:

[https://dev.streamvi.io](https://dev.streamvi.io)

## Plugin Development

Documentation for creating StreamVi plugins is available here:

[https://streamvi.io/ru/docs/dev](https://streamvi.io/ru/docs/dev)

## Developer Community

Join the StreamVi developer Telegram chat:

[https://t.me/streamvi_plugins](https://t.me/streamvi_plugins)

## Repository

[https://github.com/StreamVi/streamvi-ui](https://github.com/StreamVi/streamvi-ui)
