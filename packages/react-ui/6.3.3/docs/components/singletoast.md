# SingleToast

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_overlay-singletoast--docs)

Короткое немодальное уведомление, которое сообщает пользователю о результате выполнения его команды.
Результат может быть положительным, отрицательным или нейтральным.

Компонент позволяет управлять тостом из любого места приложения статическими методами `SingleToast.push` и `SingleToast.close`.

```jsx
import { SingleToast } from '@skbkontur/react-ui';
```

Позволяет вызывать тосты с помощью статических методов.
Для корректной работы `<SingleToast />` должен быть отрисован только **один раз** на странице. После чего его можно вызывать из любого места приложения методом `SingleToast.push()`. Однако, переданные в компонент пропсы, такие как `theme`, `onPush` и остальные, будут применяться ко всем вызовам.

## Все пропсы и методы

### `onPush`

type: `(notification: string, action?: Action) => void` · optional

Событие появления уведомления.

### `onClose`

type: `(notification: string, action?: Action) => void` · optional

Событие закрытия уведомления.

### `theme`

type: `Partial<typeof BasicThemeClass>` · optional

Переменные темы поверх значений из контекста.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Использование

Подходит, когда нужны те же короткие уведомления, что и у [Toast](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/toast.md), но вызывать их из разных модулей без прокидывания `ref`: один раз монтируете `SingleToast` (обычно в корне приложения) и дальше пользуетесь `SingleToast.push` и `SingleToast.close`.

Для корректной работы `SingleToast` должен быть отрисован только **один раз** на странице. После чего его можно вызывать из любого места приложения методом `SingleToast.push`.
Однако, переданные в компонент пропсы, такие как `theme`, `onPush` и остальные, будут применяться ко всем вызовам.

**Связанные компоненты**

- [Toast](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/toast.md) — свой экземпляр в дереве и вызовы `push` / `close` через `ref`, если уведомление привязано к части интерфейса.

**Альтернативы и дополнения**

- Долгие операции и уход фокуса с экрана — [Loader](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/loader.md) и сообщение на месте операции.
- Ошибки полей формы — [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui-validations_displaying-getting-started--docs), а не тост вместо валидации.

**Когда не использовать**

- Как единственный канал для критичных ошибок, которые пользователь обязан увидеть и подтвердить (лучше модальный сценарий или устойчивое сообщение в контенте).
- Как замену валидации полей.

## Примеры

## Доступность

Под капотом рендерится [Toast](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/toast.md): семантика, кнопка действия, крестик и подписи совпадают с документацией `Toast`. Задавайте `aria-label` на `SingleToast` и при необходимости `action['aria-label']` так же, как для обычного `Toast`.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/accessibility--docs)

## Адаптивность

Поведение как у `Toast`: увеличенный шрифт, фиксированное положение у верхнего края экрана с отступами, текст длиннее трёх строк обрезается многоточием.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## FAQ

- **Сколько раз монтировать `SingleToast`?** Один раз на страницу / приложение; иначе несколько слоёв и неочевидное поведение.
- **Чем отличается от `Toast`?** `Toast` — свой `ref` и свой экземпляр в дереве. `SingleToast` — один общий экземпляр и вызовы `SingleToast.push` / `SingleToast.close` из любого места.
- **Распространяются ли пропы на все `push`?** Да: `theme`, `onPush`, `onClose`, `aria-label`, `className`, `style`, `data-tid` и т.д. задаются на смонтированном `SingleToast` и действуют на последующие показы.
- **Что делает `SingleToast.push` перед показом?** Сначала вызывается `close` у текущего тоста, затем показывается новое уведомление.
- **Сколько тост показывается по умолчанию?** Как у `Toast`: около 3 секунд без `action` и около 7 секунд с `action`; своё время — через `showTime` в конфиге `push`.

## Source

[`components/SingleToast/SingleToast.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/SingleToast/SingleToast.tsx)
