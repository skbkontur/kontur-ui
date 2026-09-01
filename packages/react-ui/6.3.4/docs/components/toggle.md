# Toggle

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-toggle--docs)

Тогл переключает состояния. Например, включает или отключает уведомления в настройках.
Состоит из надписи и переключателя.

```jsx
import { Toggle } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `captionPosition`

type: `"left" | "right"` · optional · default: `right`

Расположение названия относительно переключателя.

### `checked`

type: `boolean` · optional · default: `false`

Включает тогл.

### `defaultChecked`

type: `boolean` · optional

Делает тогл включенным по умолчанию. Не работает, если задан проп `checked`.

### `disabled`

type: `boolean` · optional · default: `false`

Блокирует тогл.

### `onValueChange`

type: `(value: boolean) => void` · optional

Событие изменения значения.

### `onChange`

type: `ChangeEventHandler<HTMLInputElement>` · optional

Событие клика на тогл.

### `warning`

type: `boolean` · optional · default: `false`

Переводит тогл в состояние предупреждения.

### `error`

type: `boolean` · optional · default: `false`

Переводит тогл в состояние ошибки.

### `loading`

type: `boolean` · optional · default: `false`

Переводит тогл в состояние загрузки: добавляет стили для состояния `loading` и отключает тогл.

### `autoFocus`

type: `boolean` · optional · default: `false`

Устанавливает фокус на тогл после окончания загрузки страницы.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер тогла.

### `onFocus`

type: `FocusEventHandler<HTMLInputElement>` · optional

Событие получения тоглом фокуса.

### `onBlur`

type: `FocusEventHandler<HTMLInputElement>` · optional

Событие потери тоглом фокуса.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию.

### `comment`

type: `ReactNode` · optional

Задаёт второстепенный пояснительный текст под основным текстом тогла.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Примеры

### ExampleBasic

```tsx
const [checked, setChecked] = React.useState(false);
return (
    <Toggle checked={checked} onValueChange={setChecked}>
      {checked ? 'Включен' : 'Выключен'}
    </Toggle>
  );
```

### Размер

```tsx
return (
    <Gapped vertical>
      <Toggle size="small">Маленький</Toggle>
      <Toggle size="medium">Средний</Toggle>
      <Toggle size="large">Большой</Toggle>
    </Gapped>
  );
```

### Поясняющий текст

Проп `comment` задаёт второстепенный пояснительный текст под основным текстом тогла.

```tsx
const [checked, setChecked] = React.useState(false);
return (
    <Toggle checked={checked} onValueChange={setChecked} comment="Поясняющий текст">
      Обычный тогл
    </Toggle>
  );
```

### Расположение надписи

Проп `captionPosition` определяет, с какой стороны от переключателя находится его название.

```tsx
const [checked, setChecked] = React.useState(false);
return (
    <Gapped vertical>
      <Toggle checked={checked} onValueChange={setChecked} captionPosition="right">
        Название справа
      </Toggle>
      <Toggle checked={checked} onValueChange={setChecked} captionPosition="left">
        Название слева
      </Toggle>
    </Gapped>
  );
```

### Тогл с внешним `<label/>`

```tsx
const [checked, setChecked] = React.useState(false);
return (
    <Gapped>
      <Toggle id="toggle-id" checked={checked} onValueChange={setChecked} />
      <label htmlFor="toggle-id">Внешний label</label>
    </Gapped>
  );
```

### Состояние блокировки

Проп `disabled` переводит тогл в состояние блокировки.

```tsx
return <Toggle disabled>Заблокированный</Toggle>;
```

### Состояние загрузки

Проп `loading` переводит тогл в состояние загрузки.

```tsx
return <Toggle loading>Загрузка</Toggle>;
```

### Отключение анимации

Проп `disableAnimations` отключает анимацию при переключении тогла. По умолчанию тогл переключается с анимацией: круг плавно перемещается, фон движется за ним.

```tsx
return <Toggle disableAnimations>Без анимации</Toggle>;
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Валидация

Если тогл нельзя использовать, заблокируйте его. Валидация не нужна.

## Адаптивность

По умолчанию тогл не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Toggle/Toggle.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Toggle/Toggle.tsx)
