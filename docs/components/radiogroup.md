# RadioGroup

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_radiogroup--docs)

## Props

- **defaultValue?**: Значение по умолчанию. Должно быть одним из значений дочерних радиокнопок или значений из `items`.
- **value?**: Значение группы радиокнопок. Должно быть одним из значений радиокнопок. Если не указано, то компонент будет работать как неконтролируемый.
- **items?**: Массив параметров радиокнопок. Может быть типа `Array<Value>` или `Array<[Value, Data]>`, где тип `Value` — значение радиокнопки, а `Data` — значение которое будет использовано вторым параметром в `renderItem`. Тип `Array<Value>` будет приведен к типу `Array<[Value, Value]>`. Может быть использовано, если не передан `children`.
- **name?**: Устанавливает атрибут `name` для дочерних радиокнопок. Если не указан, то сгенерируется случайное имя.
- **toKey?**: Получает уникальный ключ по элементу.
- **disabled?**: Блокирует все радиокнопки в группе.
- **warning?**: Меняет визуальное отображение всех радиокнопок на состояние «предупреждение».
- **error?**: Меняет визуальное отображение всех радиокнопок на состояние «ошибка».
- **inline?**: Размещает радиокнопки в строку. Работает только со значениями, переданными через `items`, не работает с `children`.
- **width?**: Ширина радиогруппы. Работает только со значениями, переданными через `items`, не работает с `children`.
- **renderItem?**: Отрисовывает контент радиокнопки. Работает только со значениями, переданными через `items`, не работает с `children`.
- **onBlur?**: Событие потери радиогруппой фокуса.
- **onMouseLeave?**: Событие ухода мышки с объекта (событие `onmouseleave`).
- **onMouseOver?**: Событие наведения мышкой (событие `onmouseover`).
- **onMouseEnter?**: Событие наведения мышкой (событие `onmouseenter`). Смотрите разницу с `onMouseOver` в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave)

```jsx
import { RadioGroup } from '@skbkontur/react-ui';
```

## Использование

Группа радиокнопок может содержать любую разметку с радиокнопками. Значения могут быть переданы в `children`, либо через проп `items`.
Тип значений в группе и радиокнопках должен совпадать.

Значения активного элемента сравниваются по строгому равенству `===`.

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите [в документации пакета React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию группа радиокнопок не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

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

### ExampleWidth

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

### ExampleMode

У группы радиокнопок есть несколько пропсов состояний: - `disabled` — блокировка. - `error` — ошибка. - `warning` — предупреждение.

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

### ExampleDefault

Проп `defaultValue` задаёт значение по умолчанию. Должно быть одним из значений дочерних радиокнопок или значений из `items`.

```tsx
const items = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];

  return <RadioGroup items={items} defaultValue="Второй вариант" />;
```

### ExampleInline

Проп `inline` размещает радиокнопки в строку. Работает только со значениями, переданными через `items`, не работает с `children`.

```tsx
const items = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвёртый вариант'];

  return <RadioGroup items={items} inline />;
```