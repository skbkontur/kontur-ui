# CurrencyLabel

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_display-data-currencylabel--docs)

Подпись для денежных сумм и других числовых значений.

```jsx
import { CurrencyLabel } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `fractionDigits`

type: `number` · optional · default: `2`

Минимальное количество отображаемых знаков после запятой.

### `value`

type: `number` · required

Значение.

### `currencySymbol`

type: `ReactNode` · optional

Символ валюты.

### `hideTrailingZeros`

type: `boolean` · optional

Убирает лишние нули после запятой.

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
return <CurrencyLabel value={12345.6} currencySymbol={'₽'} />;
```

### Символ валюты

В пропе `currencySymbol` указывается нужный символ валюты.

```tsx
return (
    <Gapped vertical>
      <CurrencyLabel value={123.0} />
      <CurrencyLabel value={123.0} currencySymbol={'₽'} />
      <CurrencyLabel value={123.1} currencySymbol={'} />
      <CurrencyLabel value={123.2} currencySymbol={'€'} />
    </Gapped>
  );
```

### Минимальное количество знаков после запятой

Проп `fractionDigits` устанавливает минимальное количество знаков после запятой.

```tsx
return <CurrencyLabel value={123456.7} fractionDigits={3} currencySymbol={'₽'} />;
```

### Удаление лишних нулей

Проп `hideTrailingZeros` удаляет лишние нули, если они есть в конце значения.

```tsx
return <CurrencyLabel value={123.4} hideTrailingZeros />;
```

## Source

[`components/CurrencyLabel/CurrencyLabel.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/CurrencyLabel/CurrencyLabel.tsx)
