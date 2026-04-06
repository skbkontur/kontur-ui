# Gapped

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout_gapped--docs)

## Import

```jsx
import { Gapped } from '@skbkontur/react-ui';
```

## Props

- **gap?**: Задает расстояние между элементами в пикселях.
- **verticalAlign?**: Задает вертикальное выравнивание.
- **vertical?**: Располагает элементы по вертикали.
- **wrap?**: Переносит элементы на новую строку при горизонтальном расположении.

### Example1

```tsx
return (
    <Gapped gap={20}>
      <Button use="primary">Сохранить</Button>
      <Button>Отмена</Button>
    </Gapped>
  );
```

### Example2

```tsx
return (
    <Gapped vertical gap={20}>
      <Checkbox checked>Write todos</Checkbox>
      <Checkbox initialIndeterminate>Work in progress</Checkbox>
      <Checkbox>Make things done</Checkbox>
    </Gapped>
  );
```

### Example3

По умолчанию `Gapped` выстраивает элементы в одну строчку, но с помощью свойства `wrap` можно включить перенос элементов на новую строку. При этом между строчками будет отступ равный значению свойста `gap` В таком случае из-за особенности верстки `Gapped` может перекрывать элементы расположенные сверху-слева.

```tsx
return (
    <>
      {"U Can't Touch This! => "}
      <Toggle />

      <div style={{ paddingTop: '10px', position: 'relative', width: '250px' }}>
        <Gapped wrap gap={50}>
          <Button use="primary">Сохранить</Button>
          <Button>Отмена</Button>
          <Checkbox>Я не робот</Checkbox>
        </Gapped>
      </div>
    </>
  );
```