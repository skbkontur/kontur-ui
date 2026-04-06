# PasswordInput

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_passwordinput--docs)

## Props

- **detectCapsLock?**: Визуально показывает, что активен CapsLock.

```jsx
import { PasswordInput } from '@skbkontur/react-ui';
```

## Использование

Не используйте такое поле для ввода одноразовых СМС-кодов, так как пользователю нужно видеть вводимые цифры для самопроверки. Для этого лучше подойдет [MaskedInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-maskedinput--docs).

Компонент наследует часть базовых пропcов (размер, ширина, иконка в поле и т.д.) от компонента Input, они включены <a href="#все-пропсы-и-методы" target="-_self"> в таблицу пропсов </a>. Примеры для базовых пропсов вы можете посмотреть на странице [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Доступность

Для компонента действуют все те же рекомендации по доступности, что и для компонента [Input](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-input--docs).

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs) можно добавить валидацию для поля.

## Адаптивность

По умолчанию поле ввода не меняет свой вид и поведение на мобильных устройствах.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
return <PasswordInput />;
```

### ExampleDetectCapsLock

Проп `detectCapsLock` визуально покажет пользователю, что клавиша CapsLock активна.

```tsx
return <PasswordInput detectCapsLock />;
```