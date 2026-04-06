# CurrencyInput

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_currencyinput--docs)

## Props

- **value?**: Значение поля.
- **hideTrailingZeros?**: Убирает лишние нули после запятой.
- **fractionDigits?**: Устанавливает минимальное количество отображаемых знаков после запятой. Если fractionDigits=15, то в целой части допускается только **0**.
- **signed?**: Разрешает вводить в поле символ минуса для отрицательных значений.
- **integerDigits?**: Допустимое количество цифр целой части до запятой. Если передан **0**, то в целой части допускается только **0**.
- **onValueChange**: Событие изменения `value`.
- **onSubmit?**: Событие отправки формы.

```jsx
import { CurrencyInput } from '@skbkontur/react-ui';
```

## Использование

Используйте такое поле, когда нужно вводить значение в рублях, долларах или другой валюте.
Оно форматирует введенное значение и помогает пользователю не ошибиться при вводе.

По умолчанию значение в поле — десятичная дробь c запятой в качестве разделителя. Если ввести точку, она автоматически заменится на запятую. Максимальная длина числа — 15 цифр с разделителем в любом месте, мы опираемся на рекомендации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

Количество знаков до и после запятой регулируются пропсами `fractionDigits` и `integerDigits`, с помощью пропа `fractionDigits` можно запретить знаки после запятой и разрешить только целые числа.

Компонент наследует часть базовых пропcов (размер, ширина, иконка в поле и т.д.) от компонента Input, они включены <a href="#все-пропсы-и-методы" target="-_self"> в таблицу пропсов </a>. Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const [value, setValue] = React.useState();

  return <CurrencyInput value={value} onValueChange={setValue} />;
```

### ExampleSize

Проп `size` задаёт размер поля. По умолчанию `"small"`.

```tsx
const [value, setValue] = React.useState();
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

### ExampleAlign

Проп `align` задаёт выравнивание текста. По умолчанию `"right"`. Меняйте правое выравнивание на левое, если значения других полей в колонке выровнены по левому краю.

```tsx
const [valueLeft, setValueLeft] = React.useState('10');
  const [valueRight, setValueRight] = React.useState('10');
  return (
    <Gapped gap={10} vertical>
      <CurrencyInput width={150} value={valueRight} onValueChange={setValueRight} />
      <CurrencyInput width={150} align="left" value={valueLeft} onValueChange={setValueLeft} />
    </Gapped>
  );
```

### ExampleFractionDigits

Проп `fractionDigits` задаёт количество знаков после запятой. По умолчанию `{2}`. Если задать максимальное значение `fractionDigits={15}`, то в целой части допускается **0**. Чтобы поле могло принимать только целое число, установите `fractionDigits={0}`.

```tsx
const [value, setValue] = React.useState();

  return <CurrencyInput value={value} fractionDigits={3} onValueChange={setValue} />;
```

### ExampleIntegerDigits

Проп `integerDigits` задаёт количество знаков до запятой. По умолчанию `{2}`. Если задать значение `integerDigits=0`, то в целой части допускается только **0**.

```tsx
const [value, setValue] = React.useState();

  return <CurrencyInput value={value} integerDigits={2} onValueChange={setValue} />;
```

### ExampleHideTrailingZeros

Проп `hideTrailingZeros` позволяет убрать лишние нули после запятой. Будет убирать лишние нули после запятой при потере фокуса с поля.

```tsx
const [value, setValue] = React.useState();

  return <CurrencyInput value={value} fractionDigits={8} onValueChange={setValue} hideTrailingZeros />;
```

### ExampleSigned

Проп `signed` разрешает ввод отрицательного значения. В поле можно ввести символ минуса (−). При вводе дефис (-), короткое тире (–) или тире (—) автоматически заменятся на верный символ минуса.

```tsx
const [value, setValue] = React.useState();

  return <CurrencyInput value={value} onValueChange={setValue} signed />;
```

### ExampleClear

Очистить значение в `CurrencyInput` можно с помощью `null` или `undefined`

```tsx
const [value, setValue] = React.useState();

  return (
    <Gapped>
      <CurrencyInput value={value} onValueChange={setValue} />
      <Button onClick={() => setValue(null)}>Передать null</Button>
      <Button onClick={() => setValue(undefined)}>Передать undefined</Button>
    </Gapped>
  );
```

### ExampleCurrency

Знак валюты можно прокидывать как внутрь поля с помощью пропа `rightIcon`, так и вне поля с помощью элемента `label`.

```tsx
const [value, setValue] = React.useState();

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