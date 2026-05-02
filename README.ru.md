# StreamVi UI Kit

[English version](./README.md)

StreamVi UI Kit - это библиотека React-компонентов для создания интерфейсов StreamVi и плагинов в едином визуальном стиле.

## Установка

```bash
npm install @streamvi/streamvi-ui-kit
```

Если пакет еще не опубликован в npm, его можно подключить напрямую из GitHub:

```bash
npm install github:StreamVi/streamvi-ui
```

Для работы библиотеки в проекте должны быть установлены React и React DOM.

```bash
npm install react react-dom
```

## Подключение

Один раз импортируйте стили библиотеки в точке входа приложения:

```ts
import '@streamvi/streamvi-ui-kit/style.css';
```

После этого можно импортировать и использовать компоненты:

```tsx
import { SvButton, SvCheckbox, SvSelect } from '@streamvi/streamvi-ui-kit';

export function Example() {
  return (
    <div>
      <SvButton styleType="primary">Сохранить</SvButton>
      <SvCheckbox labelContent="Включить опцию" />
      <SvSelect
        label="Режим"
        itemList={[
          { value: 'basic', label: 'Базовый' },
          { value: 'advanced', label: 'Расширенный' },
        ]}
      />
    </div>
  );
}
```

## Компоненты

В библиотеке есть готовые компоненты StreamVi: кнопки, поля, чекбоксы, меню, числовые поля, radio group, select, slider, switch, tag input и tooltip.

## Примеры

Наглядные примеры использования компонентов доступны в Storybook:

[https://ui.streamvi.io](https://ui.streamvi.io)

## API StreamVi

Описание API-методов StreamVi находится здесь:

[https://dev.streamvi.io](https://dev.streamvi.io)

## Создание плагинов

Документация по созданию плагинов StreamVi доступна здесь:

[https://streamvi.io/ru/docs/dev](https://streamvi.io/ru/docs/dev)

## Сообщество разработчиков

Присоединяйтесь к Telegram-чату разработчиков StreamVi:

[https://t.me/streamvi_plugins](https://t.me/streamvi_plugins)

## Репозиторий

[https://github.com/StreamVi/streamvi-ui](https://github.com/StreamVi/streamvi-ui)
