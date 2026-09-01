# CurrencyInput

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-currencyinput--docs)

Поле для денежных сумм.

```jsx
import { CurrencyInput } from '@skbkontur/react-ui';
```

По умолчанию значение в поле — десятичная дробь c запятой в качестве разделителя. Если ввести точку, она автоматически заменится на запятую. Максимальная длина числа — 15 цифр с разделителем в любом месте, мы опираемся на рекомендации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

Компонент наследует часть базовых пропcов (размер, ширина, иконка в поле и т.д.) от компонента Input, они включены <a href="#все-пропсы-и-методы" target="-_self"> в таблицу пропсов </a>. Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/input.md).

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

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер поля.

### `type`

type: `"number" | "search" | "email" | "tel" | "password" | "text" | "time" | "date" | "url"` · optional

Тип поля ввода.

### `prefix`

type: `ReactNode` · optional

Устанавливает префикс `ReactNode` перед значением, но после иконки.

### `leftIcon`

type: `InputIconType` · optional

Добавляет иконку слева.
При использовании `ReactNode` применяются дефолтные стили для иконки.
При использовании `() => ReactNode` применяются только стили для позиционирования.

### `rightIcon`

type: `InputIconType` · optional

Добавляет иконку справа.
При использовании `ReactNode` применяются дефолтные стили для иконки.
При использовании `() => ReactNode` применяются только стили для позиционирования.

### `error`

type: `boolean` · optional

Переводит поле в состояние ошибки.

### `warning`

type: `boolean` · optional

Переводит поле в состояние предупреждения.

### `borderless`

type: `boolean` · optional

Убирает обводку поля.

### `align`

type: `"left" | "center" | "right"` · optional · default: `right`

Выравнивает контент внутри поля.

### `suffix`

type: `ReactNode` · optional

Устанавливает суффикс `ReactNode` после значения, но перед правой иконкой.

### `selectAllOnFocus`

type: `boolean` · optional

Выделяет введённое значение при фокусе в поле. Работает с типами `text`, `password`, `tel`, `search`, `url`.

### `showLengthCounter`

type: `boolean` · optional

Отображает счётчик введённых символов.

### `lengthCounter`

type: `number` · optional · default: `maxLength`

Допустимое количество символов в поле. Отображается в счётчике символов.

### `counterHelp`

type: `ReactNode | (() => ReactNode)` · optional

Подсказка для счётчика символов.

Если передать `ReactNode`, рисует тултип со встроенной иконкой.
Если передать функцию, рисует произвольный элемент.
@example ```
counterHelp={() => <Hint text="..."><Icon /></Hint>}
```

### `onUnexpectedInput`

type: `(value: string) => void` · optional

Устанавливает обработчик на случай некорректного ввода.
Если передан onUnexpectedInput, он будет вызван при ошибке, а эффект мигания можно запустить вручную через публичный метод blink.
@param value - значение поля.

### `element`

type: `ReactElement<InputElementProps, string | JSXElementConstructor<any>>` · optional

Устанавливает элемент, заменяющий нативный input. Должен иметь пропсы `InputElementProps` и тип `InputElement`.

### `value`

type: `number` · optional · default: `null`

Значение поля.

### `hideTrailingZeros`

type: `boolean` · optional · default: `false`

Убирает лишние нули после запятой.

### `fractionDigits`

type: `number` · optional · default: `2`

Устанавливает минимальное количество отображаемых знаков после запятой. Если fractionDigits=15, то в целой части допускается только **0**.

### `signed`

type: `boolean` · optional

Разрешает вводить в поле символ минуса для отрицательных значений.

### `integerDigits`

type: `number` · optional

Допустимое количество цифр целой части до запятой.
Если передан **0**, то в целой части допускается только **0**.

### `onValueChange`

type: `(value: number) => void` · required

Событие изменения `value`.

### `onSubmit`

type: `() => void` · optional

Событие отправки формы.

## Использование

Используйте такое поле, когда нужно вводить значение в рублях, долларах или другой валюте.
Оно форматирует введенное значение и помогает пользователю не ошибиться при вводе.

**Альтернативы и дополнения**

Если вам нужно отобразить в интерфейсе просто денежную сумму, не включая её в поле ввода, используйте [CurrencyLabel](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/currencylabel.md).

## Примеры

### Базовый пример

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return <CurrencyInput value={value} onValueChange={setValue} />;
```

### Размер

Проп `size` задаёт размер поля. По умолчанию `"small"`.

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <CurrencyInput size="small" value={value} onValueChange={setValue} />
      <CurrencyInput size="medium" value={value} onValueChange={setValue} />
      <CurrencyInput size="large" value={value} onValueChange={setValue} />
    </div>
  );
```

### Выравнивание текста

Проп `align` задаёт выравнивание текста. По умолчанию `"right"`. Меняйте правое выравнивание на левое, если значения других полей в колонке выровнены по левому краю.

```tsx
const [valueLeft, setValueLeft] = React.useState<Nullable<number>>(10);
const [valueRight, setValueRight] = React.useState<Nullable<number>>(10);
return (
    <Gapped gap={10} vertical>
      <CurrencyInput width={150} value={valueRight} onValueChange={setValueRight} />
      <CurrencyInput width={150} align="left" value={valueLeft} onValueChange={setValueLeft} />
    </Gapped>
  );
```

### Количество знаков после запятой

Проп `fractionDigits` задаёт количество знаков после запятой. По умолчанию `{2}`.
Если задать максимальное значение `fractionDigits={15}`, то в целой части допускается **0**.
Чтобы поле могло принимать только целое число, установите `fractionDigits={0}`.

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return <CurrencyInput value={value} fractionDigits={3} onValueChange={setValue} />;
```

### Количество знаков до запятой

Проп `integerDigits` задаёт количество знаков до запятой. По умолчанию `{2}`. Если задать значение `integerDigits=0`, то в целой части допускается только **0**.

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return <CurrencyInput value={value} integerDigits={2} onValueChange={setValue} />;
```

### Лишние нули после запятой

Проп `hideTrailingZeros` позволяет убрать лишние нули после запятой. Будет убирать лишние нули после запятой при потере фокуса с поля.

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return <CurrencyInput value={value} fractionDigits={8} onValueChange={setValue} hideTrailingZeros />;
```

### Отрицательное значение

Проп `signed` разрешает ввод отрицательного значения. В поле можно ввести символ минуса (−). При вводе дефис (-), короткое тире (–) или тире (—) автоматически заменятся на верный символ минуса.

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return <CurrencyInput value={value} onValueChange={setValue} signed />;
```

### Очистка поля

Очистить значение в `CurrencyInput` можно с помощью `null` или `undefined`

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return (
    <Gapped>
      <CurrencyInput value={value} onValueChange={setValue} />
      <Button onClick={() => setValue(null)}>Передать null</Button>
      <Button onClick={() => setValue(undefined)}>Передать undefined</Button>
    </Gapped>
  );
```

### Знак валюты

Знак валюты можно прокидывать как внутрь поля с помощью пропа `rightIcon`, так и вне поля с помощью элемента `label`.

```tsx
const [value, setValue] = React.useState<Nullable<number>>(null);
return (
    <Gapped vertical gap={20}>
      <CurrencyInput value={value} onValueChange={setValue} rightIcon="₽" />
      <Gapped>
        <CurrencyInput value={value} onValueChange={setValue} />
        <label htmlFor="input-id">₽</label>
      </Gapped>
    </Gapped>
  );
```

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/input.md).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/CurrencyInput/CurrencyInput.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/CurrencyInput/CurrencyInput.tsx)
