# RadioGroup

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-radiogroup--docs)

Группирует радиокнопки. Контейнер для компонента [Radio](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/radio.md).

```jsx
import { RadioGroup } from '@skbkontur/react-ui';
```

Группа радиокнопок может содержать любую разметку с радиокнопками. Значения могут быть переданы в `children`, либо через проп `items`.
Тип значений в группе и радиокнопках должен совпадать.

Значения активного элемента сравниваются по строгому равенству `===`.

## Все пропсы и методы

### `defaultValue`

type: `T` · optional

Значение по умолчанию. Должно быть одним из значений дочерних радиокнопок или значений из `items`.

### `value`

type: `T` · optional

Значение группы радиокнопок. Должно быть одним из значений радиокнопок.
Если не указано, то компонент будет работать как неконтролируемый.

### `items`

type: `T[] | [T, ReactNode][]` · optional

Массив параметров радиокнопок. Может быть типа `Array<Value>` или `Array<[Value, Data]>`,
где тип `Value` — значение радиокнопки, а `Data` — значение которое будет использовано вторым параметром в `renderItem`.
Тип `Array<Value>` будет приведен к типу `Array<[Value, Value]>`.
Может быть использовано, если не передан `children`.

### `name`

type: `string` · optional

Устанавливает атрибут `name` для дочерних радиокнопок. Если не указан, то сгенерируется случайное имя.

### `toKey`

type: `(item: T) => string | number` · optional

Получает уникальный ключ по элементу.
@param item - элемент, по которому нужно получить ключ.

### `disabled`

type: `boolean` · optional

Блокирует все радиокнопки в группе.

### `warning`

type: `boolean` · optional

Переводит контрол в состояние предупреждения.

### `error`

type: `boolean` · optional

Переводит контрол в состояние ошибки.

### `inline`

type: `boolean` · optional

Размещает радиокнопки в строку. Работает только со значениями, переданными через `items`, не работает с `children`.

### `width`

type: `Width<string | number>` · optional

Ширина радиогруппы. Работает только со значениями, переданными через `items`, не работает с `children`.

### `renderItem`

type: `(itemValue: T, data: ReactNode) => ReactNode` · optional

Отрисовывает контент радиокнопки. Работает только со значениями, переданными через `items`, не работает с `children`.
@param itemValue - значение радиокнопки.
@param data - значение для отрисовки радиокнопки.

### `onValueChange`

type: `(value: T) => void` · optional

Событие изменения `value`.

### `onBlur`

type: `(event: FocusEvent) => void` · optional

Событие потери радиогруппой фокуса.

### `onMouseLeave`

type: `() => any` · optional

Событие ухода мышки с объекта (событие `onmouseleave`).

### `onMouseOver`

type: `() => any` · optional

Событие наведения мышкой (событие `onmouseover`).

### `onMouseEnter`

type: `() => any` · optional

Событие наведения мышкой (событие `onmouseenter`). Смотрите разницу с `onMouseOver` в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave)

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
const [chosen, setChosen] = React.useState(null);
return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped gap={3} vertical>
        <Radio value={1}>Первый вариант</Radio>
        <Radio value={2}>Второй вариант</Radio>
        <Radio value={3}>Третий вариант</Radio>
        <Radio value={4}>Четвёртый вариант</Radio>
      </Gapped>
    </RadioGroup>
  );
```

### Ширина

Проп `width` задаёт максимальную ширину элементов группы. Работает только со значениями, переданными через `items`, не работает с `children`.

```tsx
const items = [
    'Уведомлять обо всех изменениях',
    'Уведомлять только о самых важных изменения',
    'Никогда не уведомлять',
    'Настроить свой вариант',
  ];
return <RadioGroup items={items} width={'150px'} />;
```

### Состояния

У группы радиокнопок есть несколько пропсов состояний:
- `disabled` — блокировка.
- `error` — ошибка.
- `warning` — предупреждение.

```tsx
const itemsDisabled = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];
const itemsError = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];
const itemsWarning = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];
const disabledRadioGroup = (
    <Gapped vertical>
      <b>Заблокированная группа</b>
      <RadioGroup items={itemsDisabled} disabled />
    </Gapped>
  );
const errorRadioGroup = (
    <Gapped vertical>
      <b>В состоянии «Ошибка»</b>
      <RadioGroup items={itemsError} error />
    </Gapped>
  );
const warningRadioGroup = (
    <Gapped vertical>
      <b>В состоянии «Предупреждение»</b>
      <RadioGroup items={itemsWarning} warning />
    </Gapped>
  );
return (
    <Gapped vertical>
      {disabledRadioGroup}
      {errorRadioGroup}
      {warningRadioGroup}
    </Gapped>
  );
```

### Значение по умолчанию

Проп `defaultValue` задаёт значение по умолчанию. Должно быть одним из значений дочерних радиокнопок или значений из `items`.

```tsx
const items = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];
return <RadioGroup items={items} defaultValue="Второй вариант" />;
```

### Расположение в строку

Проп `inline` размещает радиокнопки в строку. Работает только со значениями, переданными через `items`, не работает с `children`.

```tsx
const items = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];
return <RadioGroup items={items} inline />;
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите [в документации пакета React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию группа радиокнопок не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/RadioGroup/RadioGroup.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/RadioGroup/RadioGroup.tsx)
