# Radio

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-radio--docs)

Радиокнопка позволяет выбрать одно значение из нескольких. Подходит при небольшом количестве вариантов — 2–5.

Для создания группы радиокнопок используйте специальный контейнер — компонент [RadioGroup](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-radiogroup--docs).

```jsx
import { Radio } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `error`

type: `boolean` · optional

Переводит контрол в состояние ошибки.

### `warning`

type: `boolean` · optional

Переводит контрол в состояние предупреждения.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер радиокнопки.

### `focused`

type: `boolean` · optional · default: `false`

Задаёт состояние фокуса.

### `onValueChange`

type: `(value: T) => void` · optional

Событие изменения `value`.

### `value`

type: `T` · required

Значение.

### `comment`

type: `ReactNode` · optional

Задаёт второстепенный пояснительный текст под основным текстом радиокнопки.

## Примеры

### ExampleBasic

```tsx
const [chosen, setChosen] = React.useState(null);
return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped gap={3} vertical>
        <Radio value={1}>Первый вариант</Radio>
        <Radio value={2}>Второй вариант</Radio>
      </Gapped>
    </RadioGroup>
  );
```

### Размер

Проп `size` задаёт размер радиокнопки.

```tsx
const [chosen, setChosen] = React.useState(null);
return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped vertical>
        <Radio size="small" value={1}>
          Маленький
        </Radio>
        <Radio size="medium" value={2}>
          Средний
        </Radio>
        <Radio size="large" value={3}>
          Большой
        </Radio>
      </Gapped>
    </RadioGroup>
  );
```

### Поясняющий текст

Проп `comment` задаёт второстепенный пояснительный текст под основным текстом радиокнопки.

```tsx
const [chosen, setChosen] = React.useState(1);
return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped vertical>
        <Radio value={1} comment="Поясняющий текст">
          Первый вариант
        </Radio>
        <Radio value={2} comment="Поясняющий текст">
          Второй вариант
        </Radio>
      </Gapped>
    </RadioGroup>
  );
```

### Состояния

У радиокнопки есть несколько пропсов состояний:
- `disabled` — блокирует радиокнопку.
- `checked` — делает радиокнопку контролируемым и выбранным по умолчанию элементом.
- `focused` — задаёт состояние фокусировки.
- `error` — задаёт состояние «Ошибка».
- `warning` — задаёт состояние «Предупреждение».
Радиокнопка может быть сразу в нескольких состояниях.

```tsx
const [chosen, setChosen] = React.useState(null);
return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped gap={3} vertical>
        <Radio value={1}>Обычная</Radio>
        <Radio value={2} disabled>
          Заблокированная
        </Radio>
        <Radio value={3} checked={!chosen}>
          Отмеченная по умолчанию
        </Radio>
        <Radio value={4} focused>
          В состоянии focused
        </Radio>
        <Radio value={5} error>
          В состоянии error
        </Radio>
        <Radio value={6} warning>
          В состоянии warning
        </Radio>
        <Radio disabled checked warning value="true">
          Заблокированная и отмеченная по умолчанию в состоянии warning
        </Radio>
      </Gapped>
    </RadioGroup>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию радиокнопка не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Radio/Radio.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Radio/Radio.tsx)
