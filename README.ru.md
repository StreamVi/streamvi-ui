# StreamVi UI Kit

[English version](./README.md)

StreamVi UI Kit — библиотека из 14 React-компонентов на Material UI для создания интерфейсов StreamVi и плагинов в едином визуальном стиле, со светлой и тёмной темами и поддержкой TypeScript.

> **BREAKING CHANGE — существенная переработка.** В этой версии прежняя реализация на Base UI заменена на Material UI. Изменились подключение темы, свойства компонентов, события и способы настройки оформления. Перед обновлением существующих приложений потребуется миграция; см. [Переход с предыдущей версии](#переход-с-предыдущей-версии).

## Установка

```sh
npm install @streamvi/streamvi-ui-kit
```

В приложении должны быть доступны совместимые peer-зависимости:

| Пакет                                  | Поддерживаемый диапазон |
| -------------------------------------- | ----------------------- |
| `react`, `react-dom`                   | `^19.2.0`               |
| `@mui/material`, `@mui/icons-material` | `^9.5.0`                |
| `@emotion/react`                       | `^11.14.0`              |
| `@emotion/styled`                      | `^11.14.1`              |

npm 7+ автоматически устанавливает обязательные peer-зависимости, если это поведение не отключено. Для явной установки:

```sh
npm install react@^19.2.0 react-dom@^19.2.0 @mui/material@^9.5.0 @mui/icons-material@^9.5.0 @emotion/react@^11.14.0 @emotion/styled@^11.14.1
```

Если приложение уже использует MUI и Emotion, сохраните его прямые зависимости и согласуйте их версии с этими диапазонами, чтобы приложение и UI Kit использовали совместимые экземпляры библиотек.

Если пакет недоступен в npm, установите версию из GitHub, содержащую собранный пакет:

```sh
npm install github:StreamVi/streamvi-ui
```

## Быстрый старт

Оберните интерфейс в `SvThemeProvider`. При необходимости один раз импортируйте `fonts.css` в точке входа приложения для подключения поставляемого с библиотекой шрифта Inter.

```tsx
import { SvButton, SvThemeProvider } from '@streamvi/streamvi-ui-kit';
import '@streamvi/streamvi-ui-kit/fonts.css'; // Необязательно: локальный Inter

export function App() {
  return (
    <SvThemeProvider defaultMode="light">
      <SvButton>Создать трансляцию</SvButton>
    </SvThemeProvider>
  );
}
```

Стили компонентов подключаются через MUI и Emotion. Отдельный импорт `style.css` больше не используется. Библиотека не загружает шрифты автоматически и не добавляет MUI `CssBaseline`; фон страницы, расположение элементов и глобальные стили задаёт приложение.

Провайдер по умолчанию использует тему StreamVi с CSS-переменными и светлой/тёмной схемами. Начальный режим — светлый, но ранее сохранённый выбор пользователя имеет приоритет.

## Компоненты

Импортируйте компоненты и их публичные типы из `@streamvi/streamvi-ui-kit`.

| Компонент       | Основные свойства                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `SvButton`      | `children`, `appearance`, `variant`, `color`, `size`, `startIcon`, `endIcon`, `loading`, `disabled`      |
| `SvIconButton`  | `children`, `appearance`, `color`, `size`, `loading`, `disabled`, `aria-label`                           |
| `SvCheckbox`    | `checked/defaultChecked`, `indeterminate`, `selectionNumber`, `onChange`                                 |
| `SvChip`        | `label`, `selected`, `icon`, `avatar`, `onClick`, `onDelete`, `disabled`                                 |
| `SvField`       | `label`, `value/defaultValue`, `onChange`, `error`, `helperText`, `multiline`, `inputRef`                |
| `SvNumberField` | `value/defaultValue: number \| null`, `onChange(event, value)`, `min`, `max`, `step`, `readOnly`         |
| `SvRadio`       | `checked/defaultChecked`, `onChange(event, checked)`, `disabled`, `color`, `size`                        |
| `SvRadioGroup`  | `options` или `children`, `value/defaultValue`, `onChange`, `row`, `label`, `helperText`                 |
| `SvSelect`      | `options` или `children`, `value/defaultValue`, `onChange`, `multiple`, `renderValue`                    |
| `SvSlider`      | `value/defaultValue: number \| number[]`, `min`, `max`, `step`, `marks`, `onChange`, `onChangeCommitted` |
| `SvSwitch`      | `checked/defaultChecked`, `onChange(event, checked)`, `disabled`, `readOnly`, `color`, `size`            |
| `SvMenu`        | `items` или `children`, `anchorEl`, `open`, `onClose`, `header`, `footer`                                |
| `SvTagInput`    | `value/defaultValue: string[]`, `onChange`, `inputValue`, `onInputChange`, `options`, `clearText`        |
| `SvTooltip`     | `title`, триггер в `children`, `placement`, `open`, `onOpen`, `onClose`, `arrow`                         |

`SvButton` использует варианты MUI: `contained` (по умолчанию), `outlined` и `text`. Фирменное оформление выбирается через `appearance`: `default`, `secondary`, `tooltip`, `server`, `serverSecondary`, `nerf`, `nerfSecondary`. Для опасных действий используйте `color="error"`, для зелёных кнопок — `color="success"`. Кнопки с одной иконкой представлены отдельным компонентом `SvIconButton` с `appearance="default"` или `"webinar"`.

Для управляемых компонентов обновляйте `value` или `checked` в обработчике изменения; для неуправляемого состояния используйте `defaultValue` или `defaultChecked`. Сохраняйте выбранный режим на протяжении жизни компонента. Для стандартных событий сохраняются соответствующие сигнатуры MUI.

## Примеры использования

Размещайте каждый пример внутри `SvThemeProvider`, как в быстром старте. Четыре примера охватывают все 14 компонентов. Базовое оформление стандартных подписей, иконок, пунктов списков и тегов задают сами компоненты.

### Кнопки, чип и подсказка

Текст кнопки передаётся через `children`, иконки рядом с текстом — через `startIcon/endIcon`, содержимое чипа — через `label`, подсказки — через `title`. Выбор чипа управляется состоянием приложения.

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
      <SvButton startIcon={<AddRounded />}>Создать трансляцию</SvButton>
      <SvTooltip title="Настройте каналы перед началом трансляции">
        <SvIconButton aria-label="Подсказка о трансляции">
          <HelpOutlineRounded />
        </SvIconButton>
      </SvTooltip>
      <SvChip
        label="Избранное"
        selected={selected}
        onClick={() => setSelected((current) => !current)}
      />
    </>
  );
}
```

### Текстовое и числовое поля

Подписи, пояснения и кнопки изменения числа оформлены внутри компонентов. `SvField.onChange` получает событие; текст доступен через `target.value`. `SvNumberField.onChange(event, value)` получает `number | null` при фиксации значения: потере фокуса, Enter, стрелках вверх/вниз или нажатии кнопок изменения. Пустой ввод даёт `null`; неправильный ввод откатывается, число ограничивается `min/max`.

```tsx
import { SvField, SvNumberField } from '@streamvi/streamvi-ui-kit';

export function FieldsExample() {
  return (
    <>
      <SvField
        label="Название трансляции"
        defaultValue="Вечерний эфир"
        helperText="Название увидят зрители"
      />
      <SvNumberField
        label="Количество повторов"
        defaultValue={2}
        min={0}
        max={10}
        step={1}
      />
    </>
  );
}
```

### Чекбоксы, переключатели, радиогруппы и слайдер

`SvRadioGroup.options` создаёт радиокнопки с готовыми подписями. Для подписей отдельных Checkbox/Switch и композиции радиогруппы используйте MUI `FormControlLabel`, как в примере. Допустима и обычная HTML-подпись: `<label><SvCheckbox /> Уведомлять подписчиков</label>`. Задавайте доступные имена кнопкам с одной иконкой и слайдерам.

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
        label="Уведомлять подписчиков"
        control={<SvCheckbox defaultChecked />}
      />
      <FormControlLabel
        label="Записывать эфир"
        control={<SvSwitch defaultChecked />}
      />
      <SvRadioGroup
        name="quality"
        label="Качество"
        defaultValue="hd"
        options={[
          { value: 'hd', label: 'HD' },
          { value: 'sd', label: 'SD' },
        ]}
      />
      <SvRadioGroup
        name="format"
        aria-label="Формат трансляции"
        defaultValue="video"
      >
        <FormControlLabel value="video" label="Видео" control={<SvRadio />} />
        <FormControlLabel value="audio" label="Аудио" control={<SvRadio />} />
      </SvRadioGroup>
      <SvSlider
        aria-label="Громкость"
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

### Меню, список выбора и теги

`SvMenu.items`, `SvSelect.options` и `SvTagInput.options` принимают данные. Описания меню, аватары вариантов и теги оформляются автоматически. При необходимости закрывайте меню из обработчика пункта: нажатие пункта само по себе не меняет `open` и не вызывает `onClose`. Список выбора и теги ниже используют неуправляемое состояние.

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
        Действия
      </SvButton>
      <SvMenu
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenu}
        slotProps={{ list: { id: menuId, 'aria-labelledby': triggerId } }}
        items={[
          {
            id: 'close',
            label: 'Закрыть меню',
            description: 'Вернуться к настройкам',
            icon: <CloseRounded />,
            onClick: closeMenu,
          },
          { id: 'delete', label: 'Удалить трансляцию', disabled: true },
        ]}
      />
      <SvSelect<number>
        defaultValue={0}
        inputProps={{ 'aria-label': 'Канал трансляции' }}
        options={[
          { value: 0, label: 'Основной канал', avatar: { children: 'S' } },
          { value: 1, label: 'Резервный канал' },
          { value: 2, label: 'Недоступный канал', disabled: true },
        ]}
      />
      <SvTagInput
        label="Теги"
        defaultValue={['Эфир']}
        options={['Эфир', 'Видео', 'Новости']}
        helperText="Выберите подсказку или введите тег и нажмите Enter"
        clearText="Очистить"
      />
    </>
  );
}
```

`SvSelect` принимает либо `options`, либо `children` с MUI `MenuItem`. Для нативного режима используйте `native` и `children` с HTML `option`. При `multiple` передавайте массив значений. Видимую подпись и пояснение создают внешние MUI `FormControl`, `FormLabel/InputLabel` и `FormHelperText`; связывайте их через `labelId` и `aria-describedby`. Один prop `label` у Select не создаёт видимую подпись. Для placeholder используйте `displayEmpty` и `renderValue`.

`SvTagInput` принимает массивы строк и поддерживает подсказки и свободный ввод. Добавление тега — Enter или выбор подсказки; удаление — кнопка тега, Backspace/Delete или действие очистки. Теги (`value/onChange`) и текст ввода (`inputValue/onInputChange`) управляются независимо. Обрезку пробелов и удаление дубликатов без учёта регистра выполняет приложение.

## Темы

### Переключение светлой, тёмной и системной схем

Вызывайте `useSvColorScheme()` внутри провайдера. На первом рендере `mode` может быть `undefined`; учитывайте это при выводе переключателя. `systemMode` возвращает текущую системную схему, когда активен системный режим.

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
        Светлая
      </SvButton>
      <SvButton aria-pressed={mode === 'dark'} onClick={() => setMode('dark')}>
        Тёмная
      </SvButton>
      <SvButton
        aria-pressed={mode === 'system'}
        onClick={() => setMode('system')}
      >
        Системная
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

| Настройка провайдера        | Значение по умолчанию / назначение                                           |
| --------------------------- | ---------------------------------------------------------------------------- |
| `defaultMode`               | `light`; также принимает `dark` и `system`                                   |
| `modeStorageKey`            | `sv-mode`                                                                    |
| `colorSchemeStorageKey`     | `sv-color-scheme`                                                            |
| `storageManager`            | Хранение в localStorage через MUI; `null` отключает сохранение               |
| `injectFirst`               | `true`; передайте `false`, чтобы сохранить порядок вставки стилей приложения |
| `disableTransitionOnChange` | Отключает переходы при смене режима                                          |

Встроенная тема использует префикс CSS-переменных `sv` и селектор `data-mui-color-scheme`. Например, фон поверхности доступен как `--sv-palette-background-paper`. Тема с CSS-переменными также задаёт браузерный `color-scheme`.

### Собственная тема

Передавайте настройки непосредственно в `createSvTheme`, а результат — в провайдер. Фабрика принимает стандартные опции темы MUI и токены StreamVi в `sv`: `accent`, `accentHover`, `surface`, `surfaceHover`, `stroke`, `green`, `greenHover`, `focus`.

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
      <SvButton>Сохранить</SvButton>
    </SvThemeProvider>
  );
}
```

`createSvTheme()` без параметров создаёт обычную светлую тему. Для переключения схем в собственной теме настройте `cssVariables` и обе `colorSchemes`, как в примере. Разные цвета палитры задавайте в `colorSchemes.light/dark.palette`; верхнеуровневый `palette` имеет приоритет для основной схемы. Общие переопределения токенов `sv` действуют в обеих схемах.

`useSvTheme()` возвращает активную тему. Доступны публичные типы `SvTheme`, `SvThemeOptions`, `SvTokens`, `SvColorMode`, `SvStorageManager`, `SvThemeProviderProps`. Компоненты также работают с обычным MUI `ThemeProvider`; стандартная тема MUI может не содержать токены StreamVi, тогда компоненты используют палитру MUI. Фирменное оформление применяется к компонентам `Sv*`; обычные MUI-компоненты сохраняют собственные стили.

Вложенный провайдер наследует контекст режима внешнего провайдера. Начальный режим и сохранение выбора задавайте у владельца этого контекста. `disableNestedContext` нужен только для независимого режима. Если две темы создают отдельные CSS-переменные, используйте разные `cssVarPrefix`, общий селектор и одного владельца режима.

Для серверного рендеринга настройте начальный атрибут схемы и Emotion cache в приложении по [руководству MUI по SSR](https://mui.com/material-ui/guides/server-rendering/) и [инициализации цветовой схемы](https://mui.com/material-ui/react-init-color-scheme-script/). `noSsr` предназначен для клиентского рендеринга и не устраняет расхождения при гидратации.

## Настройка оформления и доступность

Для локальных стилей используйте `sx`, для внутренних элементов — поддерживаемые `slotProps`. `sx` принимает объекты, массивы и функции от темы. Поля с типом `ReactNode`, например подписи и описания меню, могут принимать JSX. При полной замене через `slots` или `render*` сохраняйте необходимые props, refs и доступность элемента.

```tsx
import { SvField, SvSelect, SvTagInput } from '@streamvi/streamvi-ui-kit';

export function CustomizedExample() {
  return (
    <>
      <SvField
        label="Название"
        sx={{ width: 320, maxWidth: '100%' }}
        slotProps={{
          input: { readOnly: true, sx: { borderRadius: '12px' } },
          htmlInput: { maxLength: 120 },
        }}
      />
      <SvTagInput
        label="Теги"
        defaultValue={['Эфир']}
        clearText="Очистить"
        slotProps={{ chip: { sx: { borderRadius: '12px' } } }}
      />
      <SvSelect
        defaultValue="main"
        inputProps={{ 'aria-label': 'Канал' }}
        options={[{ value: 'main', label: 'Основной канал' }]}
        MenuProps={{ slotProps: { paper: { sx: { borderRadius: '12px' } } } }}
      />
    </>
  );
}
```

`SvField` использует `slotProps.input` для `readOnly` и adornments, `slotProps.htmlInput` для атрибутов нативного поля, `inputRef` для ссылки на input/textarea. `SvNumberField` также поддерживает верхнеуровневый `readOnly` и `slotProps.increment/decrement` для кнопок. У поля тегов текстовое поле настраивается через `slotProps.textField`, теги — через `slotProps.chip`.

Всплывающие меню и подсказки рендерятся через порталы. Стилизуйте их непосредственно: `SvMenu.slotProps.paper/list`, `SvSelect.MenuProps.slotProps` и поддерживаемые слоты Tooltip. Селектор на контейнере триггера не достигает всплывающего элемента. `SvTooltip.sx/className` оформляют саму подсказку; триггер оформляется через `children`.

Задавайте доступные подписи элементов управления, связывайте пояснения полей и сохраняйте видимый клавиатурный фокус. Стандартные цвета StreamVi включают сочетания ниже порога WCAG AA 4.5:1 для обычного текста, в том числе белый текст на акцентных/красных кнопках и часть вторичного текста и текста ошибок. Переопределяйте цвета темы или стили компонентов под требования вашего приложения к контрастности.

Пакет предоставляет ES-модули и декларации TypeScript. Используйте именованные импорты из корня пакета; отдельные пути компонентов не входят в публичный API. Сборщики могут удалять неиспользуемые компоненты через tree shaking. Для поставляемого шрифта явно импортируйте `fonts.css`.

## Переход с предыдущей версии

**Обновление содержит несовместимые изменения.** Переход с Base UI на Material UI меняет API компонентов и способы настройки оформления. Перед обновлением пересмотрите существующие использования и CSS-селекторы; прежняя DOM-структура и типы Base UI не являются поддерживаемыми контрактами этой версии.

| Прежнее использование                                                                    | Актуальный API / необходимое изменение                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Импорт `@streamvi/streamvi-ui-kit/style.css`                                             | Удалите его; стили подключаются через MUI/Emotion. Необязательный импорт `fonts.css` сохраняется.                                                                                                                                       |
| Подключение без провайдера темы                                                          | Используйте `SvThemeProvider` для темы StreamVi либо совместимый MUI `ThemeProvider`.                                                                                                                                                   |
| Button `styleType`, фирменные значения `variant`, размер `default`                       | Используйте MUI `variant="contained"`, `"outlined"` или `"text"`, `color`, фирменный `appearance` и размер `medium`. Прежний `variant="primary"` заменяется на `variant="contained" color="primary"`, `important` — на `color="error"`. |
| Button `leftIcon/rightIcon`, `isPending`                                                 | Используйте `startIcon/endIcon`, `loading`.                                                                                                                                                                                             |
| Оформление icon/webinar у `SvButton`                                                     | Используйте `SvIconButton` или `SvIconButton appearance="webinar"` с доступным именем.                                                                                                                                                  |
| Checkbox/Switch `labelContent`                                                           | Используйте внешний `FormControlLabel` либо HTML `label`.                                                                                                                                                                               |
| Select `itemList`, встроенные подпись/пояснение                                          | Используйте `options` либо дочерние MUI `MenuItem`; подписи/пояснения разместите во внешних компонентах формы, связанных через `labelId` и `aria-describedby`.                                                                          |
| `innerProps` и прежние внутренние CSS-селекторы                                          | Используйте поддерживаемые `sx`, `slotProps`, классы MUI и `MenuProps` для всплывающего списка Select.                                                                                                                                  |
| Текстовый `error` или `isInvalid`                                                        | Используйте булевый `error` и `helperText`.                                                                                                                                                                                             |
| Верхнеуровневые `readOnly`, `startAdornment/endAdornment` у поля                         | Используйте `slotProps.input`; атрибуты нативного поля передавайте в `slotProps.htmlInput`. У `SvNumberField` сохраняется верхнеуровневый `readOnly`.                                                                                   |
| TagInput `defaultState/onChangeValue` и встроенная нормализация                          | Используйте `defaultValue/onChange(event, tags, reason, details)`; обрезку пробелов и удаление дубликатов реализуйте в приложении.                                                                                                      |
| Tooltip `trigger/children`                                                               | Передавайте триггер через `children`, содержимое подсказки — через `title`.                                                                                                                                                             |
| Menu `triggerButton`, автоматическое закрытие после выбора, причина закрытия `itemClick` | Создайте отдельный триггер; управляйте `anchorEl/open/onClose` и закрывайте меню из `onClick` пункта. Удалите обработку `itemClick`.                                                                                                    |

Проверяйте обработчики событий вместе с названиями свойств: `SvField` получает событие, `SvNumberField` — `(event, numberOrNull)`, а `SvTagInput` использует колбэки MUI Autocomplete. Примеры выше и [Storybook](https://ui.streamvi.io) показывают актуальное использование компонентов.

## Полезные ссылки

- [Storybook: примеры и API компонентов](https://ui.streamvi.io)
- [Документация API StreamVi](https://dev.streamvi.io)
- [Руководство по созданию плагинов StreamVi](https://streamvi.io/ru/docs/dev)
- [Сообщество разработчиков StreamVi в Telegram](https://t.me/streamvi_plugins)
- [Репозиторий GitHub](https://github.com/StreamVi/streamvi-ui)
