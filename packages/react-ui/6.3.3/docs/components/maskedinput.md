# MaskedInput

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-maskedinput--docs)

Поле ввода, которое ограничивает формат вводимого значения по заданной маске. Такое поле облегчает пользователю ввод и снижает количество ошибок.

По умолчанию используется исправленная реализация MaskedInputV2. Для legacy-поведения включите фичафлаг `maskedInputUseLegacyBehavior` в {@link ReactUIFeatureFlagsContext}.

## Import

```tsx
import { MaskedInput } from '@skbkontur/react-ui';
jsx
import { MaskedInput, MaskedInputMasks, ReactUIFeatureFlagsContext } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `mask`

type: `string` · required

Шаблон ввода, определяющий допустимые символы.

### `maskChar`

type: `string` · optional · default: `_`

Плейсхолдер, который отображается на месте ещё не введённых пользователем символов.

### `formatChars`

type: `Record<string, string>` · optional · default: `{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }`

Словарь правил для настройки маски, где:
ключ — символ для использования в маске;
значение — регулярка-правило.

### `alwaysShowMask`

type: `boolean` · optional · default: `false`

Всегда показывать символы маски, независимо от фокуса в поле.

### `onUnexpectedInput`

type: `(value: string, blink: () => void) => void` · optional

Событие некорректного ввода.
Вторым аргументом передаётся метод вспыхивания рамки поля.

Если обработчик не задан, то при событии рамка всегда вспыхивает.
@param value значение поля
@param blink метод вспыхивания рамки поля

### `onBeforePasteValue`

type: `MaskedInputOnBeforePasteValue` · optional

Событие перед вставкой текста в поле.
Вызывается с аргументом value — текст из буфера.

Обработчик должен вернуть текст — он попадёт в поле.

При `type="tel"` и отсутствии обработчика применяется
`normalizeRussianPhonePaste` (только в MaskedInputV2).
@param value значение вставки.

### `unmask`

type: `boolean` · optional · default: `false`

Убирает из value символы маски, которые пользователь не вводил.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер поля.

### `value`

type: `string` · optional

Значение внутри поля.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `prefix`

type: `ReactNode` · optional

Устанавливает префикс `ReactNode` перед значением, но после иконки.

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

### `onValueChange`

type: `(value: string) => void` · optional

Событие изменения значения `value` в поле.

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

### `element`

type: `ReactElement<InputElementProps, string | JSXElementConstructor<any>>` · optional

Устанавливает элемент, заменяющий нативный input. Должен иметь пропсы `InputElementProps` и тип `InputElement`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Использование

Используйте поле с маской, когда нужно гарантировать строгий формат данных от пользователя, например: номер телефона, номер карты, стандартные идентификаторы.

Компонент наследует часть базовых пропcов от компонента Input — размер, ширина, иконка в поле и так далее. Они включены в таблицу пропсов выше.
Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/docs/components/input.md).
Из пропсов Input исключены некоторые неприменимые к полю с маской пропсы и сокращен список возможных значений для пропа `type`.

Для legacy-реализации маски включите фичафлаг `maskedInputUseLegacyBehavior` в `ReactUIFeatureFlagsContext`:

```jsx
<ReactUIFeatureFlagsContext.Provider value={{ maskedInputUseLegacyBehavior: true }}>
  <MaskedInput mask="+7 (999) 999-99-99" value={value} onValueChange={setValue} />
</ReactUIFeatureFlagsContext.Provider>
```

По умолчанию используется исправленная реализация MaskedInputV2 — провайдер не нужен.

**Когда не использовать**

Не используйте для свободного текстового ввода или сложных вариантов с большим количеством исключений.

## Примеры

### Номер телефона

Номер телефона по [гайду](https://guides.kontur.ru/components/input-fields/phone/).
Префикс `+7` всегда виден.
Остальные символы маски появляются только в фокусе.
Для телефона задавайте `type="tel"` и `autoComplete="tel"` — так браузер подставит номер из сохранённых контактов.
При `type="tel"` вставка российских номеров (`8…`, `+7…`, со скобками и пробелами)
нормализуется автоматически (`normalizeRussianPhonePaste`).

```tsx
const [value, setValue] = React.useState('');
return (
    <Gapped vertical>
      <label htmlFor="masked-input-phone">Номер телефона</label>
      <MaskedInput
        id="masked-input-phone"
        mask={MaskedInputMasks.PhoneRU}
        placeholder="+7"
        type="tel"
        autoComplete="tel"
        value={value}
        onValueChange={setValue}
      />
    </Gapped>
  );
```

### Базовый пример

```tsx
const [value, setValue] = React.useState('');
return (
    <Gapped vertical>
      <label htmlFor="input-id">Маска</label>
      <MaskedInput id="input-id" mask="9999 9999 9999 9999" value={value} onValueChange={setValue} />
    </Gapped>
  );
```

### Типичные форматы

Типичные форматы для форм
Для ИНН длина значения может быть 10 или 12 цифр — по [гайдам](https://guides.kontur.ru/components/input-fields/mask/#Opisanie_raboti) маску в пустом поле не показывают, чтобы не путать пользователя.

```tsx
const [inn, setInn] = React.useState('');
const [kpp, setKpp] = React.useState('');
const [ogrn, setOgrn] = React.useState('');
const [snils, setSnils] = React.useState('');
const [passport, setPassport] = React.useState('');
const [passportCode, setPassportCode] = React.useState('');
return (
    <Gapped vertical gap={20}>
      <Gapped gap={20}>
        <Gapped vertical>
          <label htmlFor="masked-input-inn">ИНН</label>
          <MaskedInput
            id="masked-input-inn"
            mask="999999999999"
            placeholder="10 или 12 цифр"
            inputMode="numeric"
            width={150}
            value={inn}
            onValueChange={setInn}
          />
        </Gapped>
        <Gapped vertical>
          <label htmlFor="masked-input-kpp">КПП</label>
          <MaskedInput
            id="masked-input-kpp"
            mask="9999 99 999"
            inputMode="numeric"
            width={130}
            value={kpp}
            onValueChange={setKpp}
          />
        </Gapped>
        <Gapped vertical>
          <label htmlFor="masked-input-ogrn">ОГРН</label>
          <MaskedInput
            id="masked-input-ogrn"
            mask="9 99 99 9999999"
            inputMode="numeric"
            width={170}
            value={ogrn}
            onValueChange={setOgrn}
          />
        </Gapped>
      </Gapped>

      <Gapped gap={20}>
        <Gapped vertical>
          <label htmlFor="masked-input-snils">СНИЛС</label>
          <MaskedInput
            id="masked-input-snils"
            mask="999-999-999 99"
            inputMode="numeric"
            width={170}
            value={snils}
            onValueChange={setSnils}
          />
        </Gapped>
        <Gapped vertical>
          <label htmlFor="masked-input-passport">Паспорт РФ</label>
          <MaskedInput
            id="masked-input-passport"
            mask="99 99 999999"
            placeholder="Серия и номер"
            inputMode="numeric"
            width={150}
            value={passport}
            onValueChange={setPassport}
          />
        </Gapped>
        <Gapped vertical>
          <label htmlFor="masked-input-passport-code">Код подразделения</label>
          <MaskedInput
            id="masked-input-passport-code"
            mask="999-999"
            inputMode="numeric"
            width={90}
            value={passportCode}
            onValueChange={setPassportCode}
          />
        </Gapped>
      </Gapped>
    </Gapped>
  );
```

### Маска

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

### Символ маски

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

### Словарь символов-регулярок

Проп `formatChars` задаёт словарь символов-регулярок. Вы можете настроить собственный словарь символов.
Каждая запись описывает один токен маски: допустимые символы или регулярное выражение. Например для ввода кириллицы или времени.

```tsx
const [valueTime, setValueTime] = React.useState('');
const [valueCyrillic, setValueCyrillic] = React.useState('');
return (
    <Gapped vertical>
      <MaskedInput
        mask="cccc"
        placeholder="Только кириллица"
        formatChars={{ c: '[а-яА-ЯёЁ]' }}
        value={valueCyrillic}
        onValueChange={setValueCyrillic}
      />
      <MaskedInput
        mask="Hh:Mm:Ss"
        placeholder="ЧЧ:мм:сс"
        alwaysShowMask
        inputMode="numeric"
        formatChars={{
          H: '[0-2]',
          h: valueTime.startsWith('2') ? '[0-3]' : '[0-9]',
          M: '[0-5]',
          m: '[0-9]',
          S: '[0-5]',
          s: '[0-9]',
        }}
        value={valueTime}
        onValueChange={setValueTime}
      />
    </Gapped>
  );
```

### Тип

Проп `type` задаёт тип.
Это стандартные типы поля ввода в HTML. Тип наделяет компонент нативными свойствами, может влиять на отображение подсказок, валидацию, автоматическое переключение раскладки клавиатуры на мобильных устройствах и другие свойства поведения. Подробнее смотрите в [Справке по HTML](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input#type).
Для `type="tel"` также задайте `autoComplete="tel"`, чтобы браузер предлагал автозаполнение номера.
Полный список значений для типа смотрите в таблице пропсов.

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
        <MaskedInput
          mask="+7 999 999-99-99"
          type="tel"
          autoComplete="tel"
          value={valueTel}
          onValueChange={setValueTel}
        />
        <span>type = "tel"</span>
      </Gapped>
    </Gapped>
  );
```

### Показывать маску всегда

По умолчанию маска показывается только после того, как поле получает фокус. Это поведение рекомендуемое и закреплено в [Гайдах](https://guides.kontur.ru/components/input-fields/mask/#Opisanie_raboti).
Но если вам необходимо переопределить стандартное поведение, используйте проп `alwaysShowMask`. Маска будет отображаться независимо от фокуса в поле.

```tsx
return <MaskedInput mask={MaskedInputMasks.PhoneRU} placeholder="+7" alwaysShowMask />;
```

### Чистое значение

Проп `unmask` позволяет сразу получать value, в котором будет только введённое пользователем значение, без символов маски.

```tsx
const [value, setValue] = React.useState('');
const [valueUnMask, setValueUnMask] = React.useState('');
return (
    <Gapped vertical gap={20}>
      <Gapped gap={20}>
        <MaskedInput
          mask={MaskedInputMasks.PhoneRU}
          placeholder="+7"
          alwaysShowMask
          type="tel"
          autoComplete="tel"
          value={value}
          onValueChange={setValue}
        />
        <span>value по умолчанию: "{value}"</span>
      </Gapped>

      <Gapped gap={20}>
        <MaskedInput
          mask={MaskedInputMasks.PhoneRU}
          placeholder="+7"
          unmask
          alwaysShowMask
          type="tel"
          autoComplete="tel"
          value={valueUnMask}
          onValueChange={setValueUnMask}
        />
        <span>value c unmask: "{valueUnMask}"</span>
      </Gapped>
    </Gapped>
  );
```

### Чистое значение, но с выбранными символами

Проп `unmask` позволяет выбрать, какие символы из маски должны быть переданы в `value`. Для этого в маске оберните в фигурные скобки нужные символы.

```tsx
const [value, setValue] = React.useState('');
return (
    <Gapped gap={20}>
      <MaskedInput
        mask="+{7} 999 999-99-99"
        unmask
        alwaysShowMask
        type="tel"
        autoComplete="tel"
        value={value}
        onValueChange={setValue}
      />
      <span>value: "{value}"</span>
    </Gapped>
  );
```

### Фильтрация значения при вставке из буфера обмена

При `type="tel"` вставка российских номеров нормализуется по умолчанию (`normalizeRussianPhonePaste`):
убираются нецифровые символы и код страны `7`/`8` у 11+ значных номеров.
Проп `onBeforePasteValue` полностью переопределяет эту логику — используйте его для нестандартных кейсов.
В примере ниже явно применяется тот же хелпер (эквивалент дефолтного поведения).

```tsx
const [value, setValue] = React.useState('');
return (
    <MaskedInput
      mask={MaskedInputMasks.PhoneRU}
      placeholder="+7"
      unmask
      type="tel"
      autoComplete="tel"
      value={value}
      onBeforePasteValue={normalizeRussianPhonePaste}
      onValueChange={setValue}
    />
  );
```

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/docs/components/input.md).

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/MaskedInput/MaskedInput.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/MaskedInput/MaskedInput.tsx)
