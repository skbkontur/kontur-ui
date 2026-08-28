# FxInput

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-fxinput--docs)

В автополе можно вывести автоматически рассчитанное цифровое значение. В него можно передавать итог любого вычисления, например, сумму других полей, процент или более сложную функцию.

У поля есть иконка математической формулы и кнопка Restore — с её помощью пользователь может вернуть исходное значение, если редактировал поле. Видимость кнопки и поведение при нажатии нужно прописывать в компоненте самостоятельно.

```jsx
import { FxInput } from '@skbkontur/react-ui';
```

## Все пропсы

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `alwaysShowMask`

type: `boolean` · optional · default: `false`

Всегда показывать символы маски, независимо от фокуса в поле.

### `mask`

type: `string` · optional

Шаблон ввода, определяющий допустимые символы.

### `maskChar`

type: `string` · optional · default: `_`

Плейсхолдер, который отображается на месте ещё не введённых пользователем символов.

### `formatChars`

type: `Record<string, string>` · optional · default: `{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }`

Словарь правил для настройки маски, где:
ключ — символ для использования в маске;
значение — регулярка-правило.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер поля.

### `prefix`

type: `ReactNode` · optional

Устанавливает префикс `ReactNode` перед значением, но после иконки.

### `onSubmit`

type: `() => void` · optional

Событие отправки формы.

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

type: `"left" | "center" | "right"` · optional

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

### `fractionDigits`

type: `number` · optional

Устанавливает минимальное количество отображаемых знаков после запятой. Если fractionDigits=15, то в целой части допускается только **0**.

### `signed`

type: `boolean` · optional

Разрешает вводить в поле символ минуса для отрицательных значений.

### `integerDigits`

type: `number` · optional

Допустимое количество цифр целой части до запятой.
Если передан **0**, то в целой части допускается только **0**.

### `auto`

type: `boolean` · optional · default: `false`

Управляет видимостью кнопки Restore:
- true — кнопка Restore не отображается. Значение в поле является автоматически рассчитанным.
- false — кнопка Restore отображается в поле. Значение в поле считается отредактированным.

### `type`

type: `"number" | "search" | "email" | "tel" | "password" | "text" | "time" | "date" | "url" | "currency"` · optional · default: `text`

Тип поля.

### `onRestore`

type: `() => void` · optional

Событие нажатия на кнопку Restore.

### `onValueChange`

type: `((value: number) => void) | ((value: string) => void)` · required

Событие изменения value.

### `value`

type: `string | number` · optional · default: ``

Значение поля.

### `refInput`

type: `(element: CurrencyInput | Input) => void` · optional

Задаёт ref поля.

### `hideTrailingZeros`

type: `boolean` · optional

Убирает лишние нули после запятой.

### `buttonAriaLabel`

type: `string` · optional

Атрибут aria-label кнопке Restore.

## Использование

Компонент наследует часть базовых пропcов (размер, ширина, количество символов до/после запятой и т.д.) от компонентов Input и CurrencyInput, они включены <a href="#все-пропсы-и-методы" target="-_self"> в таблицу пропсов </a>.
Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/docs/components/input.md) и [CurrencyInput](https://tech.skbkontur.ru/kontur-ui/docs/components/currencyinput.md).

Пропсы для добавления маски в поле наследуются от [MaskedInput](https://tech.skbkontur.ru/kontur-ui/docs/components/maskedinput.md).

## Примеры

### Базовый пример

```tsx
const FxValue = 100500;
const [auto, setAuto] = React.useState<boolean>(true);
const [value, setValue] = React.useState<string>(FxValue.toString());
function handleValueChange(value: string) {
    setAuto(false);
    setValue(value);
  }
function handleRestore() {
    setAuto(true);
    setValue(FxValue.toString());
  }
return <FxInput auto={auto} value={value} onValueChange={handleValueChange} onRestore={handleRestore} />;
```

### Кнопка Restore

У компонента нет заложенной по умолчанию логики по нажатию на кнопку Restore, задайте её самостоятельно.
На видимость кнопки Restore влияет проп `auto`. Если передано:
- `true` — кнопка Restore не отображается. Значение в поле считается автоматически рассчитанным.
- `false` — кнопка Restore отображается в поле. Значение в поле считается отредактированным. Вернуть автоматически рассчитанное значение можно в обработчике `onRestore` после нажатия на кнопку. Чтобы кнопка Restore пропала после нажатия, верните проп `auto` в значение `true`.

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

### Очистка значения

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

### Единица измерения

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

### Маска

Проп `mask` задаёт маску для поля.

```tsx
const [auto, setAuto] = React.useState<boolean>(true);
const [value, setValue] = React.useState<string>('');
function handleValueChange(value: string) {
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

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/docs/components/input.md).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/FxInput/FxInput.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/FxInput/FxInput.tsx)
