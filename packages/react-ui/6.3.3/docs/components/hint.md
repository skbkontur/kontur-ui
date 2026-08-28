# Hint

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-hint--docs)

Краткая подсказка, которая объясняет контрол, иконку и добавляет контекста.
Всплывает при наведении на элемент.

```jsx
import { Hint } from '@skbkontur/react-ui';
```

## Все пропсы

### `text`

type: `ReactNode` · required

Текст подсказки.

### `maxWidth`

type: `MaxWidth<string | number>` · optional · default: `200`

Максимальная ширина подсказки.

### `pos`

type: `"top" | "bottom" | "left" | "right" | "top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom"` · optional

Приоритетное расположение подсказки относительно текста.

### `allowedPositions`

type: `("top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom")[]` · optional

Список позиций, которые может занимать подсказка. В списке обязательно должна быть позиция из пропа `pos`.

### `manual`

type: `boolean` · optional · default: `false`

Переводит отображение подсказки в ручной режим, где состояние контролируется значением пропа `opened`.

### `opened`

type: `boolean` · optional · default: `false`

Открывает подсказку. Работает только при `manual=true`.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию.

### `useWrapper`

type: `boolean` · optional · default: `false`

Оборачивает вложенные элементы в `<span />`.

_Примечание_: при двух и более вложенных элементах обёртка будет добавлена автоматически.

### `onMouseEnter`

type: `(event: MouseEventType) => void` · optional

Вызывается при наведении курсора (событие `onmouseenter`).

### `onMouseLeave`

type: `(event: MouseEventType) => void` · optional

Вызывается при уходе курсора с объекта (событие `onmouseleave`).

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

Используйте на элементах, которые не вмещают полное название или требуют небольшого пояснения.
Например:

- панель действий;
- иконки без текста;
- полный текст сокращённых названий в таблице.

**Альтернативы и дополнения**

Используйте [Tooltip](https://tech.skbkontur.ru/kontur-ui/docs/components/tooltip.md) в случаях, когда нужна:

- подсказка c инструкцией или с интерактивными элементами внутри;
- подсказка по клику или фокусу.

## Примеры

### Базовый пример

```tsx
return <Hint text="Подсказка">Элемент</Hint>;
```

### Максимальная ширина

Проп `maxWidth` задаёт максимальную ширину подсказки

```tsx
return (
    <Hint maxWidth="150px" text="Очень длинная подсказка, описывающая этот непонятный элемент">
      Элемент
    </Hint>
  );
```

### Позиционирование

Проп `pos` позиционирует подсказку относительно элемента.
Возможные значения:
+ `top`, `top center`, `top left`, `top right`;
+ `bottom`, `bottom center`, `bottom left`, `bottom right`;
+ `left`, `left middle`, `left top`, `left bottom`;
+ `right`, `right middle`, `right top`, `right bottom`.

```tsx
return (
    <Hint pos={'right'} text="Всплывает справа">
      Элемент
    </Hint>
  );
```

### Доступные позиции для отображения

С помощью пропа `allowedPositions` можно определить список доступных позиций для отображения подсказки.
Если подсказка в определенной позиции выходит за край экрана, используется следующая.
Попробуйте пример ниже с разным положением элемента относительно краёв экрана.

```tsx
return (
    <Hint
      pos={'right middle'}
      allowedPositions={['right middle', 'top center', 'bottom center']}
      text="Подсказка, которая может вылезти за экран"
    >
      <div style={{ border: '1px black solid', padding: '4px', textAlign: 'center' }}>Элемент</div>
    </Hint>
  );
```

### Ручное управление

Через проп `manual` можно управлять отображением подсказки вручную. Для этого нужно передавать значения в проп `opened`.

```tsx
const [isOpen, setIsOpen] = React.useState(false);
return (
    <Hint opened={isOpen} manual text="Подсказка">
      <Button onClick={() => setIsOpen(!isOpen)}>{`${isOpen ? 'Скрыть' : 'Показать'} подсказку`}</Button>
    </Hint>
  );
```

### Всплытие без анимации

Проп `disableAnimations` отключает анимацию всплывающей подсказки.

```tsx
return (
    <Hint disableAnimations text={'Подсказка'}>
      Элемент
    </Hint>
  );
```

### Встроенная обёртка

С помощью пропа `useWrapper` можно обернуть вложенные элементы в `<span />`.
Это особенно полезно в двух сценариях:
+ для правильного позиционирования двух или более вложенных объектов;
+ для отображения подсказки у отключённых нативных элементов (аттрибут `disabled` блокирует события мыши).

```tsx
return (
    <Hint useWrapper text="Подсказка">
      <button disabled>Нативная кнопка</button>
    </Hint>
  );
```

### Кастомизация: собственная обёртка

Поскольку встроенная обёртка из пропа `useWrapper` — это простой `<span />` без стилей, она может работать некорректно.
В таких случаях стоит использовать собственную обёртку:

```tsx
return (
    <Gapped vertical>
      <Hint useWrapper text="Подсказка">
        <button disabled style={{ height: 40 }}>
          Проп useWrapper
        </button>
      </Hint>

      <Hint text="Подсказка">
        <span style={{ display: 'inline-block' }}>
          <button disabled style={{ height: 40 }}>
            Своя обёртка
          </button>
        </span>
      </Hint>
    </Gapped>
  );
```

## Адаптивность

По умолчанию подсказка не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Hint/Hint.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Hint/Hint.tsx)
