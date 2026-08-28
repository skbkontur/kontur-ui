# Input

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs)

Поле ввода позволяет ввести или отредактировать значение.

```jsx
import { Input } from '@skbkontur/react-ui';
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

### `showClearIcon`

type: `"auto" | "always" | "never"` · optional · default: `never`

Показывает иконку очистки значения в заполненном поле.

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

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер поля.

### `onValueChange`

type: `(value: string) => void` · optional

Событие изменения значения `value` в поле.

### `type`

type: `"number" | "search" | "email" | "tel" | "password" | "text" | "time" | "date" | "url"` · optional · default: `text`

Тип поля ввода.

### `value`

type: `string` · optional

Значение внутри поля.

### `prefix`

type: `ReactNode` · optional

Устанавливает префикс `ReactNode` перед значением, но после иконки.

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

## Использование

Используйте поле ввода для коротких текстовых или цифровых значений без предсказуемого формата — не больше 5 слов.

По умолчанию поле ввода принимает все стандартные атрибуты, которые доступны для обычного [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input).

**Альтернативы и дополнения**

Для полей с длинными текстовыми комментариями используйте [Textarea](https://tech.skbkontur.ru/kontur-ui/docs/components/textarea.md).

Для ввода значений в определенном формате, используйте специальную версию поля:

- [PasswordInput](https://tech.skbkontur.ru/kontur-ui/docs/components/passwordinput.md) — поле для ввода пароля, в котором символы заменяются на точки.
- [CurrencyInput](https://tech.skbkontur.ru/kontur-ui/docs/components/currencyinput.md) — поле для ввода денежных сумм в разной валюте.
- [MaskedInput](https://tech.skbkontur.ru/kontur-ui/docs/components/maskedinput.md) — поле с маской.
- [FxInput](https://tech.skbkontur.ru/kontur-ui/docs/components/fxinput.md) — автополе.

Если же список значений заранее определен и должен отображаться пользователю для выбора, подойдут поля с подсказками:

- [Autocomplete](https://tech.skbkontur.ru/kontur-ui/docs/components/autocomplete.md)
- [Combobox](https://tech.skbkontur.ru/kontur-ui/docs/components/combobox.md)
- [TokenInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-tokeninput-tokeninput--docs)

## Примеры

### Базовый пример

```tsx
return <Input />;
```

### Название поля

Название к полю можно добавить через `label`. Для названия поля есть рекомендации по соблюдению доступности, изучите раздел <a href="#доступность" target="-_self"> Доступность </a>.

```tsx
return (
    <Gapped>
      <label htmlFor="input-id">Название поля</label>
      <Input />
    </Gapped>
  );
```

### Размер

Проп `size` задаёт размер поля.

```tsx
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <Input size="small" placeholder="Маленький" />
      <Input size="medium" placeholder="Средний" />
      <Input size="large" placeholder="Большой" />
    </div>
  );
```

### Ширина

Проп `width` задаёт ширину поля. Может принимать как абсолютные значения — например, 150, так и относительные — например, 50%.

```tsx
return (
    <Gapped vertical>
      <Input width={'150px'} />
      <Input width={'50%'} />
    </Gapped>
  );
```

### Плейсхолдер

В пропе `placeholder` можно задать плейсхолдер в поле. Добавляет подсказку, которая отображается внутри поля, пока оно не заполнено.

```tsx
return <Input placeholder=" Подсказка" />;
```

### Выравнивание текста

Проп `align` выравнивает текст в поле.

```tsx
const [valueLeft, setValueLeft] = React.useState('Left');
const [valueCenter, setValueCenter] = React.useState('Center');
const [valueRight, setValueRight] = React.useState('Right');
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <Input width={150} align="left" value={valueLeft} onValueChange={setValueLeft} />
      <Input width={150} align="center" value={valueCenter} onValueChange={setValueCenter} />
      <Input width={150} align="right" value={valueRight} onValueChange={setValueRight} />
    </div>
  );
```

### Очистка поля

Очистить значение в поле можно только с помощью пустого значения.

```tsx
const [value, setValue] = React.useState('Нажмите кнопку');
return (
    <Gapped>
      <Input value={value} onValueChange={setValue} />
      <Button onClick={() => setValue('')}>Передать пустое значение</Button>
    </Gapped>
  );
```

### Иконка

В поле ввода можно передать иконку.
Иконка может находиться в начале поля — проп `leftIcon`, в конце — проп `rightIcon`.
Под разный размер полей используйте подходящие начертания и размер иконок:
- Small — Light 16
- Medium — Light 20
- Large — Regular 24

```tsx
return (
    <Gapped vertical>
      <Gapped>
        <Input size="small" leftIcon={<IconSearchLoupeLight16 />} />
        <Input size="small" rightIcon={<IconSearchLoupeLight16 />} />
      </Gapped>
      <Gapped>
        <Input size="medium" leftIcon={<IconSearchLoupeLight20 />} />
        <Input size="medium" rightIcon={<IconSearchLoupeLight20 />} />
      </Gapped>
      <Gapped>
        <Input size="large" leftIcon={<IconSearchLoupeRegular24 />} />
        <Input size="large" rightIcon={<IconSearchLoupeRegular24 />} />
      </Gapped>
    </Gapped>
  );
```

### Иконка очистки

По умолчанию очистить поле ввода можно с помощью пустой строки.
Дополнительно можно добавить проп `showClearIcon`, по нажатию на иконку очистки поле будет очищаться. По умолчанию `"never"`.
Может отображаться в разных вариантах:
- `"always"` — всегда показывает иконку очистки в заполненном поле;
- `"auto"` — показывает иконку в заполненном поле, когда поле ввода в состоянии hover или focus;
- `"never"` (по умолчанию) — не показывает.
При одновременной настройке `rightIcon` и `showClearIcon` иконка очистки заменит иконку справа. В таких ситуациях не используйте для `rightIcon` интерактивную иконку, а значение для `showClearIcon` выбирайте `"auto"`.

```tsx
const [valueAlways, setValueAlways] = React.useState('showClearIcon="always"');
const [valueAuto, setValueAuto] = React.useState('showClearIcon="auto"');
const [valueNever, setValueNever] = React.useState('showClearIcon="never"');
const [valueWithIcon, setValueWithIcon] = React.useState('showClearIcon="auto" + rightIcon');
return (
    <Gapped gap={10} vertical>
      <Input showClearIcon="always" value={valueAlways} onValueChange={setValueAlways} width="350px" />
      <Input showClearIcon="auto" value={valueAuto} onValueChange={setValueAuto} width="350px" />
      <Input showClearIcon="never" value={valueNever} onValueChange={setValueNever} width="350px" />
      <br />
      <Input
        showClearIcon="auto"
        value={valueWithIcon}
        onValueChange={setValueWithIcon}
        width="350px"
        rightIcon={<IconSearchLoupeLight16 />}
      />
    </Gapped>
  );
```

### Выделение всего значения при фокусе

Чтобы значение внутри поля выделялось при фокусе на нем, добавьте проп `selectAllOnFocus`. Может быть полезно для полей, в которых пользователи могут часто копировать значение, или для полей только для чтения.

```tsx
const [valueAlways, setValueAlways] = React.useState('Обычное поле');
const [valueAuto, setValueAuto] = React.useState('Поле с автовыделением');
return (
    <Gapped gap={10} vertical>
      <Input value={valueAlways} onValueChange={setValueAlways} width="350px" />
      <Input value={valueAuto} onValueChange={setValueAuto} width="350px" selectAllOnFocus />
    </Gapped>
  );
```

### Префикс и суффикс

Внутри поля можно отобразить префикс  — через проп `prefix` или суффикс — `suffix`. Префикс отображает контент слева от вводимого текста, суффикс — справа.

```tsx
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <Input width={400} prefix="https://kontur.ru/search?query=" rightIcon={<IconSearchLoupeLight16 />} />
      <Input width={250} suffix="@example.ru" />
    </div>
  );
```

### Счётчик введённых символов

За отображение счётчика введённых символов отвечают пропсы:
- `showLengthCounter` — отображает счётчик символов.
- `lengthCounter` — допустимое количество символов в поле. Отображается в счётчике символов.
- `counterHelp` — добавляет подсказку к счётчику символов.

```tsx
const [value, setValue] = React.useState('');
return <Input showLengthCounter lengthCounter={10} counterHelp="Подсказка" value={value} onValueChange={setValue} />;
```

### Поле без обводки

Поле без обводки задаётся пропом `borderless`.

```tsx
const [valueAlways, setValueAlways] = React.useState('Обычное поле');
const [valueAuto, setValueAuto] = React.useState('Поле без обводки');
return (
    <Gapped gap={10} vertical>
      <Input value={valueAlways} onValueChange={setValueAlways} width="350px" />
      <Input value={valueAuto} onValueChange={setValueAuto} width="350px" borderless />
    </Gapped>
  );
```

### Тип

Проп `type` задаёт тип поля. По умолчанию `"text"`.
Это стандартные типы поля ввода в HTML. Тип наделяет компонент нативными свойствами, может влиять на отображение подсказок, валидацию, автоматическое переключение раскладки клавиатуры на мобильных устройствах и другие свойства поведения. Подробнее смотрите в [Справке по HTML](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input#type).
В сервисах Контура допустимо использовать только типы text и password, для остальных используйте компоненты из React UI.

```tsx
return (
    <Gapped vertical gap={20}>
      <Gapped gap={20}>
        <Input type="text" />
        <span>type = "text"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="number" />
        <span>type = "number"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="tel" />
        <span>type = "tel"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="search" />
        <span>type = "search"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="time" />
        <span>type = "time"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="date" />
        <span>type = "date"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="url" />
        <span>type = "url"</span>
      </Gapped>

      <Gapped gap={20}>
        <Input type="email" />
        <span>type = "email"</span>
      </Gapped>
    </Gapped>
  );
```

### Обработчик некорректного ввода

Проп `onUnexpectedInput` устанавливает обработчик на случай некорректного ввода. В примере ошибка возникнет при попытке ввести больше 3 символов.

```tsx
const [unexpectedInput, setUnexpectedInput] = React.useState('');
return (
    <Gapped>
      <Input maxLength={3} onUnexpectedInput={setUnexpectedInput} />
      {unexpectedInput ? <>Некорректный ввод: {unexpectedInput}</> : <>Данные в поле валидны</>}
    </Gapped>
  );
```

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

**Рекомендации**

- Указывайте `<label>` для каждого поля формы. Если поле нельзя обернуть в `<label>`, используйте атрибуты `htmlFor` и `id`:

  ```html
  <label htmlFor="input-id">Имя Фамилия</label> <input id="input-id" />
  ```

- Если у поля ввода нет лейбла, задайте его при помощи `aria-label`:

  ```html
  <input aria-label="Введите имя (обязательно)" />
  ```

- Если нет возможности обернуть `<Input />` в `<label>`, используйте `aria-labeledby`:

  ```html
  <label id="label">Лейбл</label> <input aria-labeledby="label" />
  ```

- Для блокировки поля ввода используйте `aria-disabled`, а визуально и интерактивно блокируйте элемент при помощи стилей и JS. Скринридер остановится на этом элементе, тогда как атрибут `disabled` скринридер проигнорирует:

  ```html
  <input aria-disabled="true" />
  ```

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Input/Input.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Input/Input.tsx)
