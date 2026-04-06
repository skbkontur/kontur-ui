# Textarea

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_textarea--docs)

## Import

```jsx
import { Textarea } from '@skbkontur/react-ui';
```

## Props

- **error?**: Меняет визуальное отображение поля на состояние ошибки.
- **warning?**: Меняет визуальное отображение поля на состояние предупреждения.
- **disabled?**: Блокирует поле.
- **size?**: Размер многострочного поля.
- **autoResize?**: Выполняет автоматический ресайз в зависимости от количества текста в поле. Связан с пропом `extraRow`, который всегда добавляет дополнительную пустую строку.
- **rows?**: Высота поля — число видимых строк. При превышении этой высоты появляется скролл.
- **maxRows?**: Максимальное число видимых строк при автоматическом ресайзе.
- **resize?**: Направление ресайза поля. Попадает в `style`. Описание всех значений смотрите [в документации MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/resize).
- **width?**: Ширина многострочного поля.
- **onValueChange?**: Событие изменения `value`.
- **selectAllOnFocus?**: Выделяет введённое значение при фокусе в поле. Работает с типами `text`, `password`, `tel`, `search`, `url`.
- **showLengthCounter?**: Отображает счётчик введённых символов.
- **lengthCounter?**: Допустимое количество символов в поле. Отображается в счётчике символов. (default: `maxLength`)
- **counterHelp?**: Добавляет подсказку к счётчику символов. По умолчанию - тултип с содержимым из пропа, если передан `ReactNode`. Передав функцию, можно переопределить подсказку целиком, вместе с иконкой. ``` counterHelp={() => <Tooltip render={...}><HelpIcon /></Tooltip>} ```
- **extraRow?**: Добавляет дополнительную свободную строку при автоматическом ресайзе.
- **disableAnimations?**: Отключает анимацию при автоматическом ресайзе. Автоматически отключается, когда в `extraRow` передан `false`.
- **align?**: Выравнивание текста в поле.

## Использование

Принимает все атрибуты `React.TextareaHTMLAttributes<HTMLTextAreaElement>`.
Пропсы `className` и `style` игнорируются.

Используйте многострочное поле, если пользователю нужно ввести много слов. Если значение чаще всего состоит из 1–3 слов, следует использовать обычное поле ввода [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию многострочное поле не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const [value, setValue] = React.useState('');

  return (
    <Textarea
      value={value}
      onValueChange={setValue}
      placeholder="Используйте многострочное поле для ввода больших текстов"
    />
  );
```

### ExampleSize

```tsx
const [value, setValue] = React.useState('');
  return (
    <Gapped vertical>
      <Textarea size="small" value={value} onValueChange={setValue} placeholder="Маленький" />
      <Textarea size="medium" value={value} onValueChange={setValue} placeholder="Средний" />
      <Textarea size="large" value={value} onValueChange={setValue} placeholder="Большой" />
    </Gapped>
  );
```

### ExampleWidth

```tsx
const [valuePercent, setValuePercent] = React.useState('');
  const [valueNumber, setValueNumber] = React.useState('');

  return (
    <Gapped vertical>
      <Textarea
        width={'40%'}
        value={valuePercent}
        onValueChange={setValuePercent}
        placeholder="Задана ширина в процентах"
      />
      <Textarea
        width={'150px'}
        value={valueNumber}
        onValueChange={setValueNumber}
        placeholder="Задана ширина в пикселях"
      />
    </Gapped>
  );
```

### ExampleRows

Проп `rows` задаёт высоту поля, которая равна количеству видимых строк. При превышении этой высоты появляется скролл.

```tsx
const [value, setValue] = React.useState('');

  return (
    <Textarea
      rows={3}
      value={value}
      onValueChange={setValue}
      placeholder="Используйте многострочное поле для ввода больших текстов"
    />
  );
```

### ExampleResize

Проп `resize` определяет, в какую сторону или стороны будет расширяться поле. По умолчанию многострочное поле может изменять свой размер, если потянуть за нижний правый угол. Основные значения: - none — размеры изменять нельзя; - both — размеры можно изменять по горизонтали и вертикали; - horizontal — размер можно изменять по горизонтали; - vertical — размер можно изменять по вертикали. Описания для экспериментальных значений смотрите [в документации MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/resize).

```tsx
const [value, setValue] = React.useState('');
  return (
    <Gapped vertical>
      <Textarea width="auto" resize="none" value={value} onValueChange={setValue} placeholder="resize: none" />
      <Textarea width="auto" resize="both" value={value} onValueChange={setValue} placeholder="resize: both" />
      <Textarea
        width="auto"
        resize="horizontal"
        value={value}
        onValueChange={setValue}
        placeholder="resize: horizontal"
      />
      <Textarea width="auto" resize="vertical" value={value} onValueChange={setValue} placeholder="resize: vertical" />
    </Gapped>
  );
```

### ExampleAutoResize

Проп `autoResize` автоматически увеличивает поле под его содержимое. Связан с пропом `extraRow`, который всегда добавляет дополнительную пустую строку, и пропом `maxRows` — максимальное число видимых строк.

```tsx
const [value, setValue] = React.useState('');

  return (
    <Textarea
      autoResize
      rows={3}
      maxRows={15}
      value={value}
      onValueChange={setValue}
      placeholder="Используйте многострочное поле для ввода больших текстов"
    />
  );
```

### ExampleAlign

Проп `align` выравнивает текст в поле.

```tsx
const [value, setValue] = React.useState('');
  return (
    <Gapped vertical>
      <Textarea align="left" value={value} onValueChange={setValue} placeholder="Слева" />
      <Textarea align="center" value={value} onValueChange={setValue} placeholder="По центру" />
      <Textarea align="right" value={value} onValueChange={setValue} placeholder="Справа" />
    </Gapped>
  );
```

### ExampleClear

Очистить значение в поле можно только с помощью пустой строки.

```tsx
const [value, setValue] = React.useState('Значение');

  return (
    <Gapped vertical gap={30}>
      <Textarea value={value} onValueChange={setValue} autoResize rows={1} placeholder="Плейсхолдер" />
      <Button onClick={() => setValue('')}>Передать пустую строку</Button>
    </Gapped>
  );
```

### ExampleCounter

За отображение счётчика введённых символов отвечают пропсы: - `showLengthCounter` — отображает счётчик символов. - `lengthCounter` — допустимое количество символов в поле. Отображается в счётчике символов. - `counterHelp` — добавляет подсказку к счётчику символов.

```tsx
const [value, setValue] = React.useState('');

  return (
    <Textarea
      value={value}
      onValueChange={setValue}
      placeholder="Счётчик появляется при фокусе"
      lengthCounter={10}
      showLengthCounter
      counterHelp="Текст подсказки"
    />
  );
```

### ExampleDisabled

Проп `disabled` блокирует поле.

```tsx
const [value, setValue] = React.useState('');

  return (
    <Textarea
      disabled
      value={value}
      onValueChange={setValue}
      placeholder="Используйте многострочное поле для ввода больших текстов"
    />
  );
```

### ExampleError

Пропсы `error` и `warning` используются для валидации.

```tsx
const [valid, setValid] = React.useState();
  const [value, setValue] = React.useState('');

  return (
    <Gapped vertical>
      <Switcher items={['error', 'warning']} onValueChange={setValid} value={valid} />
      <Textarea
        {...{ [valid]: valid }}
        value={value}
        onValueChange={setValue}
        placeholder="Используйте многострочное поле для ввода больших текстов"
      />
    </Gapped>
  );
```