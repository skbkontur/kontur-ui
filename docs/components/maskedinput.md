# MaskedInput

> Поле ввода, которое ограничивает формат вводимого значения по заданной маске. Такое поле облегчает пользователю ввод и снижает количество ошибок.

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_maskedinput--docs)

## Props

- **mask**: Шаблон ввода, определяющий допустимые символы.
- **maskChar?**: Плейсхолдер, который отображается на месте ещё не введённых пользователем символов. (default: `_`)
- **formatChars?**: Словарь правил для настройки маски, где: ключ — символ для использования в маске; значение — регулярка-правило. (default: `{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }`)
- **alwaysShowMask?**: Всегда показывать символы маски, независимо от фокуса в поле. (default: `false`)
- **onUnexpectedInput?**: Событие некорректного ввода. Вторым аргументом передаётся метод вспыхивания рамки поля. Если обработчик не задан, то при событии рамка всегда вспыхивает.
- **onBeforePasteValue?**: Событие перед вставкой текста в поле. Вызывается с аргументом value — текст из буфера. Обработчик должен вернуть текст — он попадёт в поле.
- **unmask?**: Убирает из value символы маски, которые пользователь не вводил. (default: `false`)

```jsx
import { MaskedInput } from '@skbkontur/react-ui';
```

## Использование

Используйте поле с маской, когда нужно гарантировать строгий формат данных от пользователя, например: номер телефона, номер карты, стандартные идентификаторы.
Не используйте для свободного текстового ввода или сложных вариантов с большим количеством исключений.

Компонент наследует часть базовых пропcов от компонента Input — размер, ширина, иконка в поле и так далее. Они включены в таблицу пропсов выше.  
Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).
Из пропсов Input исключены некоторые неприменимые к полю с маской пропсы и сокращен список возможных значений для пропа `type`.

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const [value, setValue] = React.useState('');

  return (
    <Gapped vertical>
      <label htmlFor="input-id">Номер телефона</label>
      <MaskedInput mask="+7 (999) 999-99-99" type="tel" value={value} onValueChange={setValue} />
    </Gapped>
  );
```

### ExampleMask

Проп `mask` определяет шаблон маски, используемый для форматирования и проверки корректности вводимых данных в поле.

```tsx
const [valueLetter, setValueLetter] = React.useState('');
  const [valueNumber, setValueNumber] = React.useState('');
  const [valueAny, setValueAny] = React.useState('');

  return (
    <Gapped vertical>
      <MaskedInput
        mask="aaaa aaaa aaaa aaaa"
        placeholder="Только буквы (латиница)"
        value={valueLetter}
        onValueChange={setValueLetter}
      />
      <MaskedInput
        mask="9999 9999 9999 9999"
        placeholder="Только цифры"
        inputMode="numeric"
        value={valueNumber}
        onValueChange={setValueNumber}
      />
      <MaskedInput
        mask="**** **** **** ****"
        placeholder="Буквы и цифры"
        value={valueAny}
        onValueChange={setValueAny}
      />
    </Gapped>
  );
```

### ExampleMaskChar

Проп `maskChar` задаёт символ маски. Он отображается в шаблоне маски в качестве плейсхолдера. Символом маски может быть любой символ.

```tsx
const [value, setValue] = React.useState('');

  return (
    <MaskedInput
      mask="9999 9999 9999 9999"
      maskChar="×"
      alwaysShowMask
      value={value}
      inputMode="numeric"
      onValueChange={setValue}
    />
  );
```

### ExampleFormatChars

Проп `formatChars` задаёт словарь символов-регулярок. Вы можете настроить собственный словарь символов. Каждая запись описывает один токен маски: допустимые символы или регулярное выражение.

```tsx
const [value, setValue] = React.useState('');

  return (
    <MaskedInput
      mask="Hh:Mm:Ss"
      alwaysShowMask
      formatChars={{
        H: '[0-2]',
        h: value.startsWith('2') ? '[0-3]' : '[0-9]',
        M: '[0-5]',
        m: '[0-9]',
        S: '[0-5]',
        s: '[0-9]',
      }}
      value={value}
      onValueChange={setValue}
    />
  );
```

### ExampleType

Проп `type` задаёт тип. Это стандартные типы поля ввода в HTML. Тип наделяет компонент нативными свойствами, может влиять на отображение подсказок, валидацию, автоматическое переключение раскладки клавиатуры на мобильных устройствах и другие свойства поведения. Подробнее смотрите в [Справке по HTML](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input#type). Полный список значений для типа смотрите в таблице пропсов.

```tsx
const [valueTel, setValueTel] = React.useState('');
  const [valueLetter, setValueLetter] = React.useState('');

  return (
    <Gapped vertical gap={20}>
      <Gapped gap={20}>
        <MaskedInput
          mask="aaaa"
          type="text"
          placeholder="Буквенный код (латиница)"
          value={valueLetter}
          onValueChange={setValueLetter}
        />
        <span>type = "text"</span>
      </Gapped>

      <Gapped gap={20}>
        <MaskedInput mask="+7 (999) 999-99-99" type="tel" value={valueTel} onValueChange={setValueTel} />
        <span>type = "tel"</span>
      </Gapped>
    </Gapped>
  );
```

### ExampleAlwaysShowMask

По умолчанию маска показывается только после того, как поле получает фокус. Это поведение рекомендуемое и закреплено в [Гайдах](https://guides.kontur.ru/components/input-fields/mask/#Opisanie_raboti). Но если вам необходимо переопределить стандартное поведение, используйте проп `alwaysShowMask`. Маска будет отображаться независимо от фокуса в поле.

```tsx
return <MaskedInput mask="+7 (999) 999-99-99" alwaysShowMask />;
```

### ExampleUnMask

Проп `unmask` позволяет сразу получать value, в котором будет только введённое пользователем значение, без символов маски.

```tsx
const [value, setValue] = React.useState('');
  const [valueUnMask, setValueUnMask] = React.useState('');

  return (
    <Gapped vertical gap={20}>
      <Gapped gap={20}>
        <MaskedInput mask="+7 (999) 999-99-99" alwaysShowMask type="tel" value={value} onValueChange={setValue} />
        <span>value по умолчанию: "{value}"</span>
      </Gapped>

      <Gapped gap={20}>
        <MaskedInput
          mask="+7 (999) 999-99-99"
          unmask
          alwaysShowMask
          type="tel"
          value={valueUnMask}
          onValueChange={setValueUnMask}
        />
        <span>value c unmask: "{valueUnMask}"</span>
      </Gapped>
    </Gapped>
  );
```

### ExampleUnMaskPlus

Проп `unmask` позволяет выбрать, какие символы из маски должны быть переданы в `value`. Для этого в маске оберните в фигурные скобки нужные символы.

```tsx
const [value, setValue] = React.useState('');

  return (
    <Gapped gap={20}>
      <MaskedInput
        mask="+{7} (999) 999-99-99"
        unmask
        alwaysShowMask
        type="tel"
        value={value}
        onValueChange={setValue}
      />
      <span>value: "{value}"</span>
    </Gapped>
  );
```

### ExampleonBeforePasteValue

Проп `onBeforePasteValue` вызывает обработчик при вставке значения. В него передаётся текст из буфера, а то, что он вернёт — попадёт в поле. Используйте для очистки или фильтрации вставки. В примере при вставке удалятся символы, не являющиеся цифрами, и первый символ полученной строки.

```tsx
const [value, setValue] = React.useState('');

  return (
    <MaskedInput
      mask="+7 (999) 999-99-99"
      unmask
      alwaysShowMask
      type="tel"
      value={value}
      onBeforePasteValue={(value) => value.replace(/\D/g, '').slice(1)}
      onValueChange={setValue}
    />
  );
```