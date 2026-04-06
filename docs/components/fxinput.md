# FxInput

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_fxinput--docs)

## Props

- **auto?**: Управляет видимостью кнопки Restore: - true — кнопка Restore не отображается. Значение в поле является автоматически рассчитанным. - false — кнопка Restore отображается в поле. Значение в поле считается отредактированным.
- **type?**: Тип поля.
- **onRestore?**: Событие нажатия на кнопку Restore.
- **onValueChange**: Событие изменения value.
- **value?**: Значение поля.
- **refInput?**: Задаёт ref поля.
- **hideTrailingZeros?**: Убирает лишние нули после запятой.
- **buttonAriaLabel?**: Атрибут aria-label кнопке Restore.

```jsx
import { FxInput } from '@skbkontur/react-ui';
```

## Использование

Компонент наследует часть базовых пропcов (размер, ширина, количество символов до/после запятой и т.д.) от компонентов Input и CurrencyInput, они включены <a href="#все-пропсы-и-методы" target="-_self"> в таблицу пропсов </a>.  
Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs) и [CurrencyInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-currencyinput--docs).

Пропсы для добавления маски в поле наследуются от [MaskedInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-maskedinput--docs).

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const FxValue = 100500;
  const [auto, setAuto] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<number>(FxValue);

  function handleValueChange(value: number) {
    setAuto(false);
    setValue(value);
  }

  function handleRestore() {
    setAuto(true);
    setValue(FxValue);
  }

  return <FxInput auto={auto} value={value} onValueChange={handleValueChange} onRestore={handleRestore} />;
```

### ExampleRestore

У компонента нет заложенной по умолчанию логики по нажатию на кнопку Restore, задайте её самостоятельно. На видимость кнопки Restore влияет проп `auto`. Если передано: - `true` — кнопка Restore не отображается. Значение в поле считается автоматически рассчитанным. - `false` — кнопка Restore отображается в поле. Значение в поле считается отредактированным. Вернуть автоматически рассчитанное значение можно в обработчике `onRestore` после нажатия на кнопку. Чтобы кнопка Restore пропала после нажатия, верните проп `auto` в значение `true`.

```tsx
const [auto, setAuto] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<number | string>('');

  function handleValueChange(value: number | string) {
    setAuto(false);
    setValue(value);
  }

  function handleRestore() {
    setAuto(true);
    setValue('');
  }

  return <FxInput auto={auto} value={value} onValueChange={handleValueChange} onRestore={handleRestore} />;
```

### ExampleClear

Очистить значение в автополе можно с помощью пустой строки или `undefined`.

```tsx
const [value, setValue] = React.useState<undefined | number | string>(12345);
  return (
    <Gapped>
      <FxInput value={value} onValueChange={setValue} auto />
      <Button onClick={() => setValue(undefined)}>Передать undefined</Button>
      <Button onClick={() => setValue('')}>Передать пустое значение</Button>
    </Gapped>
  );
```

### ExampleCurrency

Знак валюты, процент или другие единицы измерения можно прокидывать как внутрь поля с помощью пропа `rightIcon`, так и вне поля с помощью обычного `label`.

```tsx
const [value, setValue] = React.useState('100500');

  return (
    <Gapped vertical gap={20}>
      <FxInput value={value} onValueChange={setValue} auto rightIcon="₽" />
      <Gapped>
        <FxInput value={value} onValueChange={setValue} auto />
        <label htmlFor="input-id">₽</label>
      </Gapped>
    </Gapped>
  );
```

### ExampleMask

Проп `mask` задаёт маску для поля.

```tsx
const [auto, setAuto] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<number>('');

  function handleValueChange(value: number) {
    setAuto(false);
    setValue(value);
  }

  function handleRestore() {
    setAuto(true);
    setValue('');
  }

  return (
    <FxInput
      auto={auto}
      value={value}
      mask="999"
      alwaysShowMask
      onValueChange={handleValueChange}
      onRestore={handleRestore}
    />
  );
```