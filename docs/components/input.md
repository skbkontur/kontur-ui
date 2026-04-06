# Input

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_input--docs)

## Props

- **showClearIcon?**: Показывает иконку очистки значения в заполненном поле. (default: `never`)
- **leftIcon?**: Добавляет иконку слева. При использовании `ReactNode` применяются дефолтные стили для иконки. При использовании `() => ReactNode` применяются только стили для позиционирования.
- **rightIcon?**: Добавляет иконку справа. При использовании `ReactNode` применяются дефолтные стили для иконки. При использовании `() => ReactNode` применяются только стили для позиционирования.
- **error?**: Меняет визуальное отображение поля на состояние «ошибка». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **warning?**: Меняет визуальное отображение поля на состояние «предупреждение». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **borderless?**: Убирает обводку поля.
- **align?**: Выравнивает контент внутри поля.
- **size?**: Размер поля. (default: `small`)
- **onValueChange?**: Событие изменения значения `value` в поле.
- **type?**: Тип поля ввода.
- **value?**: Значение внутри поля.
- **prefix?**: Устанавливает префикс `ReactNode` перед значением, но после иконки.
- **suffix?**: Устанавливает суффикс `ReactNode` после значения, но перед правой иконкой.
- **selectAllOnFocus?**: Выделяет введённое значение при фокусе в поле. Работает с типами `text`, `password`, `tel`, `search`, `url`.
- **onUnexpectedInput?**: Устанавливает обработчик на случай некорректного ввода. Если передан onUnexpectedInput, он будет вызван при ошибке, а эффект мигания можно запустить вручную через публичный метод blink.
- **element?**: Устанавливает элемент, заменяющий нативный input. Должен иметь пропсы `InputElementProps` и тип `InputElement`.

```jsx
import { Input } from '@skbkontur/react-ui';
```

## Использование

Используйте поле ввода для коротких текстовых или цифровых значений без предсказуемого формата — не больше 5 слов.

По умолчанию поле ввода принимает все стандартные атрибуты, которые доступны для обычного [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input).

**Альтернативы и дополнения**

Для полей с длинными текстовыми комментариями используйте [Textarea](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-textarea--docs).

Для ввода значений в определенном формате, используйте специальную версию поля:

- [PasswordInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-passwordinput--docs) — поле для ввода пароля, в котором символы заменяются на точки.
- [CurrencyInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-currencyinput--docs) — поле для ввода денежных сумм в разной валюте.
- [MaskedInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-maskedinput--docs) — поле с маской.
- [FxInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-fxinput--docs) — автополе.

Если же список значений заранее определен и должен отображаться пользователю для выбора, подойдут поля с подсказками:

- [Autocomplete](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-autocomplete--docs)
- [Combobox](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-combobox--docs)
- [TokenInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-tokeninput-tokeninput--docs)

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

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
return <Input />;
```

### ExampleLabel

Название к полю можно добавить через `label`. Для названия поля есть рекомендации по соблюдению доступности, изучите раздел <a href="#доступность" target="-_self"> Доступность </a>.

```tsx
return (
    <Gapped>
      <label htmlFor="input-id">Название поля</label>
      <Input />
    </Gapped>
  );
```

### ExampleSize

Размер поля задаётся пропом `size`. По умолчанию `"small"`.

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

### ExampleWidth

Ширину поля можно задать с помощью пропа `width`. Может принимать как абсолютные значения — например, 150, так и относительные — например, 50%.

```tsx
return (
    <Gapped vertical>
      <Input width={'150px'} />
      <Input width={'50%'} />
    </Gapped>
  );
```

### ExamplePlaceholder

Добавить плейсхолдер можно через `placeholder`. Добавляет подсказку, которая отображается внутри поля, пока оно не заполнено.

```tsx
return <Input placeholder=" Подсказка" />;
```

### ExampleAlign

Выравнивание текста задаётся пропом `align`.

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

### ExampleClear

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

### ExampleIcon

В поле ввода можно передать иконку. Иконка может находиться в начале поля — проп `leftIcon`, в конце — проп `rightIcon`. Под разный размер полей используйте подходящие начертания и размер иконок: - Small — Light 16 - Medium — Light 20 - Large — Regular 24

```tsx
return (
    <Gapped vertical>
      <Gapped>
        <Input size="small" leftIcon={<SearchLoupeIcon16Light />} />
        <Input size="small" rightIcon={<SearchLoupeIcon16Light />} />
      </Gapped>
      <Gapped>
        <Input size="medium" leftIcon={<SearchLoupeIcon20Light />} />
        <Input size="medium" rightIcon={<SearchLoupeIcon20Light />} />
      </Gapped>
      <Gapped>
        <Input size="large" leftIcon={<SearchLoupeIcon24Regular />} />
        <Input size="large" rightIcon={<SearchLoupeIcon24Regular />} />
      </Gapped>
    </Gapped>
  );
```

### ExampleShowClearIcon

По умолчанию очистить поле ввода можно с помощью пустой строки. Дополнительно можно добавить проп `showClearIcon`, по нажатию на иконку очистки поле будет очищаться. По умолчанию `"never"`. Может отображаться в разных вариантах: - `"always"` — всегда показывает иконку очистки в заполненном поле; - `"auto"` — показывает иконку в заполненном поле, когда поле ввода в состоянии hover или focus; - `"never"` (по умолчанию) — не показывает. При одновременной настройке `rightIcon` и `showClearIcon` иконка очистки заменит иконку справа. В таких ситуациях не используйте для `rightIcon` интерактивную иконку, а значение для `showClearIcon` выбирайте `"auto"`.

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
        rightIcon={<SearchLoupeIcon16Light />}
      />
    </Gapped>
  );
```

### ExampleSelectAllOnFocus

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

### ExamplePrefixSuffix

Внутри поля можно отобразить префикс  — через проп `prefix` или суфикс — `suffix`. Префикс отображает контент слева от вводимого текста, суфикс — справа.

```tsx
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <Input width={400} prefix="https://kontur.ru/search?query=" rightIcon={<SearchLoupeIcon16Light />} />
      <Input width={250} suffix="@example.ru" />
    </div>
  );
```

### ExampleBorderless

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

### ExampleType

Тип поля задаётся пропом `type`. По умолчанию `"text"`. Это стандартные типы поля ввода в HTML. Тип наделяет компонент нативными свойствами, может влиять на отображение подсказок, валидацию, автоматическое переключение раскладки клавиатуры на мобильных устройствах и другие свойства поведения. Подробнее смотрите в [Справке по HTML](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input#type). В сервисах Контура допустимо использовать только типы text и password, для остальных используйте компоненты из React UI.

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

### ExampleOnUnexpectedInput

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

### ExampleCounter

```tsx
const maxLength = 15;
  const [value, setValue] = React.useState('Очень длинная строка');
  const theme = React.useContext(ThemeContext);
  const charsRemaining = maxLength - value.length;
  const suffixColor = charsRemaining >= 0 ? theme.gray : theme.errorText;
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      suffix={
        <span style={{ color: suffixColor, fontVariantNumeric: 'tabular-nums' }}>
          &nbsp;&nbsp;{String(charsRemaining).replace('-', '−')}
        </span>
      }
    />
  );
```