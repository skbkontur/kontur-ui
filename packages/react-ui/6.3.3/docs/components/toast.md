# Toast

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_overlay-toast--docs)

Тост — это короткое немодальное уведомление о результате действия пользователя: успех, ошибка или нейтральный статус.

```jsx
import { Toast } from '@skbkontur/react-ui';
```

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

Подходит, когда обратную связь нельзя показать рядом с местом действия и фокусом внимания пользователя.

**Связанные компоненты**

- [SingleToast](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/singletoast.md) — тот же сценарий уведомлений без монтирования своего `Toast` и вызова через `ref`.

**Альтернативы и дополнения**

- Долгие операции и уход фокуса с экрана — [Loader](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/loader.md) и сообщение на месте операции.
- Ошибки полей формы — [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui-validations_displaying-getting-started--docs), а не тост вместо валидации.

**Когда не использовать**

- Как замену валидации полей.
- Как единственный канал для критичных ошибок, которые пользователь обязан увидеть и подтвердить. В таком случае лучше подойдет модальный сценарий или устойчивое сообщение в контенте.

## Примеры

## Доступность

- **Семантика:** контент тоста выводится внутри `div`/`span`; кнопка действия из `action` — нативный `button`. Закрытие по иконке реализовано отдельным контролом с подписью из локали.
- **ARIA:** при необходимости задайте `aria-label` на `Toast`, если короткий текст уведомления не раскрывает смысл. Для кнопки действия с неоднозначной подписью используйте `action['aria-label']`.
- **Клавиатура:** фокус по умолчанию не переносится внутрь тоста; кнопка действия доступна с клавиатуры, когда пользователь до неё доходит по `Tab`. Закрытие чаще всего по таймеру или клику мыши.
- **Скринридеры:** текст уведомления и подписи кнопок/закрытия озвучиваются как видимый и помеченный контент; дополнительные пояснения — через `aria-label` у тоста и у `action`.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/accessibility--docs)

## Адаптивность

Компонент адаптивен: на мобильных устройствах тост располагается у верха экрана по центру с фиксированными отступами сверху и по краям. Текст длиннее трёх строк обрезается многоточием. Шрифт увеличивается.
Мобильный режим активируется при ширине вьюпорта < `768px`. Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs).

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## FAQ

- **Чем `Toast` отличается от `SingleToast`?** `Toast` — свой экземпляр в дереве и вызов `push`/`close` через `ref`. `SingleToast` — один общий экземпляр и вызовы `SingleToast.push` / `SingleToast.close` из любого места.
- **Что будет при новом `push`, если тост уже открыт?** Предыдущий закрывается, затем показывается новое уведомление.
- **Сколько висит тост по умолчанию?** Около 3 секунд без `action` и около 7 секунд с `action`; своё время — через `showTime` в конфиге `push`.

## Source

[`components/Toast/Toast.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Toast/Toast.tsx)
