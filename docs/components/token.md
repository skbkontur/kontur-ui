# Token

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_tokeninput_token--docs)

## Props

- **isActive?**: Делает токен активным.
- **error?**: Меняет визуальное отображение токена на состояние «ошибка». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **warning?**: Меняет визуальное отображение токена на состояние «предупреждение». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **disabled?**: Блокирует токен.
- **size?**: Размер токена.
- **onClick?**: Задаёт функцию, которая вызывается при клике на токен.
- **onDoubleClick?**: Задаёт функцию, которая вызывается при двойном клике на токен.
- **onRemove?**: Задаёт функцию, которая вызывается, когда токен удаляется.
- **onMouseEnter?**: Задаёт функцию, которая вызывается при наведении мышкой (событие `onmouseenter`).
- **onMouseLeave?**: Задаёт функцию, которая вызывается при уходе мышки с объекта (событие `onmouseleave`).
- **onFocus?**: Задаёт функцию, которая вызывается, когда токен получает фокус.
- **onBlur?**: Задаёт функцию, которая вызывается, когда токен теряет фокус.

```jsx
import { Token } from '@skbkontur/react-ui';
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию токен не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
return <Token>mail@example.ru</Token>;
```

### ExampleSize

Проп `size` задаёт размер токена. По умолчанию `"small"`.

```tsx
return (
    <Gapped vertical>
      <Token size="small">Маленький</Token>
      <Token size="medium">Средний</Token>
      <Token size="large">Большой</Token>
    </Gapped>
  );
```

### ExampleIsActive

Проп `isActive` переводит токен в активное состояние. По умолчанию, это происходит, когда токен находится в фокусе.

```tsx
return (
    <Gapped vertical>
      <Token>Обычный</Token>
      <Token isActive>Активный</Token>
    </Gapped>
  );
```

### ExampleDisabled

Проп `disabled` блокирует токен.

```tsx
return <Token disabled>mail@example.ru</Token>;
```

### ExampleErrorWarning

Проп `error` меняет визуальное отображение поля на состояние ошибки, а `warning` — на предупреждение.

```tsx
return (
    <Gapped gap={10}>
      <Token>Обычный</Token>
      <Token error>С ошибкой</Token>
      <Token warning>Предупреждающий</Token>
    </Gapped>
  );
```