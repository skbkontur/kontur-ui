# Tabs

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_display-data-tabs--docs)

Табы группируют контент и помогают в навигации.

```jsx
import { Tabs } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `indicatorClassName`

type: `string` · optional

Кастомный класс для индикатора (подчёркивания) активного таба.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `large`

Размер табов.

### `value`

type: `string` · required

Идентификатор активного таба. Совпадает с `id` выбранного `<Tab />`.

### `onValueChange`

type: `(value: T) => void` · optional

Событие смены активного таба.

### `vertical`

type: `boolean` · optional · default: `false`

Располагает табы вертикально.

### `width`

type: `string | number` · optional

Ширина компонента.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Использование

Используйте `Tabs` для второстепенной навигации, для группировки или фильтрации контента.

**Когда не использовать**

- Для основной навигации. Для этого лучше подходит главное меню на цветной плашке — оно более заметно на странице.
- Для состояний — для этого есть [RadioGroup](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/radiogroup.md), [Toggle](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/toggle.md) и [Switcher](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/switcher.md).

**Связанные компоненты**

Таб реализован через подкомпонент `Tabs.Tab` (см.ниже).

```jsx
<Tabs>
  <Tabs.Tab> // один таб
```

## Примеры

### Базовый пример

```tsx
const [active, setActive] = React.useState('inbox');
return (
    <Tabs value={active} onValueChange={setActive}>
      <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
      <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
    </Tabs>
  );
```

## Tabs.Tab

<details>
  <summary>Пропсы для Tabs.Tab </summary>
</details>

### Примеры

#### Изменение корневого компонента

С помощью пропа `component` можно изменять корневой элемент `<Tab />`.
Проп может принимать компоненты, функции и строки.

#### Блокировка таба

Проп `disabled` блокирует таб, делая его недоступным для нажатия.

#### Визуальные состояния выбранного таба

Пропсы `primary`, `success`, `warning` и `error` задают визуальное состояние выбранного таба.

#### Кастомизация: цвет активного состояния

Используя переменные `tabColorPrimary`, `tabColorSuccess`, `tabColorWarning` и `tabColorError` можно изменить цвет активного состояния, а библиотека автоматически подберёт цвет подчёркивания при наведении.

## Доступность

Компонент поддерживает управление с клавиатуры - при переходе к группе табов клавишей `Tab` первый таб получает фокус. Стрелками можно перемещать фокус между табами. При нажатии клавиши `Enter` таб с фокусом становится активным.

**Рекомендации**

- Используйте `aria-describedby` для связи группы табов с элементом, содержащим дополнительное, развёрнутое описание.
- Используйте `aria-label`, чтобы задать доступное имя таба для пользователей скринридеров.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию группа табов не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Tabs/Tabs.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Tabs/Tabs.tsx)
