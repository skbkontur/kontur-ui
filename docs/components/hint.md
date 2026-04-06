# Hint

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay_hint--docs)

## Import

```jsx
import { Hint } from '@skbkontur/react-ui';
```

## Props

- **manual?**: Переводит отображение подсказки в _"ручной режим"_. В _"ручном режиме"_ подсказку можно активировать только задав значение пропу `opened`.
- **maxWidth?**: Задает максимальную ширину подсказки.
- **onMouseEnter?**: Задает функцию, которая вызывается при наведении мышкой (событие `onmouseenter`).
- **onMouseLeave?**: Задает функцию, которая вызывается при уходе мышки с объекта (событие `onmouseleave`).
- **opened?**: Открывает подсказку. Работает только при `manual=true`.
- **pos?**: Задает приоритетное расположение подсказки относительно текста.
- **text**: Задает текст подсказки.
- **allowedPositions?**: Задает список позиций, которые будет занимать хинт. Если положение хинта в определенной позиции будет выходить за край экрана, то будет выбрана следующая позиция. Обязательно должен включать позицию указанную в `pos`.
- **disableAnimations?**: Отключает анимацию.
- **useWrapper?**: Явно указывает, что вложенные элементы должны быть обёрнуты в `<span/>`. Используется для корректного позиционирования хинта при двух и более вложенных элементах. _Примечание_: при **двух и более** вложенных элементах обёртка будет добавлена автоматически.

### Example1

```tsx
return <Hint text="Подсказка">Базовая</Hint>;
```

### Example2

```tsx
return (
    <Hint text="Редактирование">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M13 12V12.998H8V12H13ZM3 13V11L9 4.99999L11 6.99999L5 13H3ZM13 5L11.5 6.5L9.5 4.5L11 3L13 5Z"
          clipRule="evenodd"
        />
      </svg>
    </Hint>
  );
```

### Example3

```tsx
return (
    <Hint pos={'left'} text="Подсказка слева">
      Всегда всплывает слева
    </Hint>
  );
```

### Example4

```tsx
return (
    <Hint maxWidth="150px" text="Очень много текста, рассказывающего про этот очень непонятный элемент">
      Очень непонятный элемент
    </Hint>
  );
```

### Example5

```tsx
const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Hint opened={isOpen} manual text="Подсказка">
      <Button onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
        {isOpen ? 'Закрыть подсказку' : 'Открыть подсказку'}
      </Button>
    </Hint>
  );
```

### Example6

```tsx
return (
    <Hint disableAnimations text={'Нет анимации :('}>
      Есть анимация?
    </Hint>
  );
```

### Example7

Подсказка должна отображаться даже на отключённых компонентах. Из коробки это работает только с контролами `react-ui`. Нативные элементы, поддерживающие атрибут `disabled`, отключают необходимые события мыши. В подобных случаях следуют использовать проп `useWrapper`:

```tsx
return (
    <Hint useWrapper text="Подсказка всё равно отображается">
      <button disabled>native button</button>
    </Hint>
  );
```

### Example8

Т.к. встроённая обёртка это `<span>` без стилей, то она может работать некорректно в определённых ситуациях. В таких случаях стоит использовать собственную обётку:

```tsx
return (
    <>
      <Hint useWrapper text="Подсказка">
        <button disabled style={{ height: 40 }}>
          useWrapper prop
        </button>
      </Hint>
      <Hint text="Подсказка">
        <span style={{ display: 'inline-block' }}>
          <button disabled style={{ height: 40 }}>
            custom wrapper
          </button>
        </span>
      </Hint>
    </>
  );
```