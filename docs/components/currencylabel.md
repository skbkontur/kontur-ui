# CurrencyLabel

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data_currencylabel--docs)

## Props

- **fractionDigits?**: Минимальное количество отображаемых знаков после запятой. (default: `2`)
- **value**: Значение.
- **currencySymbol?**: Символ валюты.
- **hideTrailingZeros?**: Убирает лишние нули после запятой.

```jsx
import { CurrencyLabel } from '@skbkontur/react-ui';
```

### ExampleBasic

```tsx
return <CurrencyLabel value={12345.6} currencySymbol={'₽'} />;
```

### ExampleCurrencySymbol

В пропе `currencySymbol` указывается нужный символ валюты.

```tsx
return (
    <Gapped vertical>
      <CurrencyLabel value={123.0} />
      <CurrencyLabel value={123.0} currencySymbol={'₽'} />
      <CurrencyLabel value={123.1} currencySymbol={'$'} />
      <CurrencyLabel value={123.2} currencySymbol={'€'} />
    </Gapped>
  );
```

### ExampleFractionDigits

Проп `fractionDigits` устанавливает минимальное количество знаков после запятой.

```tsx
return <CurrencyLabel value={123456.7} fractionDigits={3} currencySymbol={'₽'} />;
```

### ExampleHideTrailingZeros

Проп `hideTrailingZeros` удаляет лишние нули, если они есть в конце значения.

```tsx
return <CurrencyLabel value={123.4} hideTrailingZeros />;
```