# PasswordInput

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-passwordinput--docs)

Однострочное поле для ввода пароля, в котором символы заменяются на точки.

```jsx
import { PasswordInput } from '@skbkontur/react-ui';
```

## Все пропсы

### `detectCapsLock`

type: `boolean` · optional

Визуально показывает, что активен CapsLock.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер поля.

### `type`

type: `"number" | "search" | "email" | "tel" | "password" | "text" | "time" | "date" | "url"` · optional

Тип поля ввода.

### `value`

type: `string` · optional

Значение внутри поля.

### `prefix`

type: `ReactNode` · optional

Устанавливает префикс `ReactNode` перед значением, но после иконки.

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

### `onUnexpectedInput`

type: `(value: string) => void` · optional

Устанавливает обработчик на случай некорректного ввода.
Если передан onUnexpectedInput, он будет вызван при ошибке, а эффект мигания можно запустить вручную через публичный метод blink.
@param value - значение поля.

### `element`

type: `ReactElement<InputElementProps, string | JSXElementConstructor<any>>` · optional

Устанавливает элемент, заменяющий нативный input. Должен иметь пропсы `InputElementProps` и тип `InputElement`.

## Использование

Компонент наследует часть базовых пропcов (размер, ширина, иконка в поле и т.д.) от компонента Input, они включены <a href="#все-пропсы-и-методы" target="-_self"> в таблицу пропсов </a>. Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/docs/components/input.md).

**Когда не использовать**

Не используйте такое поле для ввода одноразовых СМС-кодов, так как пользователю нужно видеть вводимые цифры для самопроверки. Для этого лучше подойдет [MaskedInput](https://tech.skbkontur.ru/kontur-ui/docs/components/maskedinput.md).

## Примеры

### Базовый пример

```tsx
return <PasswordInput />;
```

### Индикатор включения CapsLock

Проп `detectCapsLock` визуально покажет пользователю, что клавиша CapsLock активна.

```tsx
return <PasswordInput detectCapsLock />;
```

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/docs/components/input.md).

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs) можно добавить валидацию для поля.

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/PasswordInput/PasswordInput.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/PasswordInput/PasswordInput.tsx)
