# Gapped

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_layout-gapped--docs)

Контейнер, с помощью которого можно располагать элементы горизонтально или вертикально с нужным расстоянием между элементами.

По умолчанию располагает элементы горизонтально в одну строку. Расстояние между элементами указывается в пропе `gap`.

## Import

```tsx
import { Gapped } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `gap`

type: `number` · optional

Расстояние между элементами в пикселях.

### `verticalAlign`

type: `"top" | "bottom" | "middle" | "baseline"` · optional · default: `baseline`

Выравнивает элементы при вертикальном расположении по нужной линии: сверху, снизу, по базовой линии или посередине.

### `vertical`

type: `boolean` · optional · default: `false`

Располагает элементы по вертикали.

### `wrap`

type: `boolean` · optional · default: `false`

Переносит элементы на новую строку при горизонтальном расположении.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Примеры

### ExampleBasic

```tsx
return (
    <Gapped gap={20}>
      <Button use="primary">Элемент 1</Button>
      <Button>Элемент 2</Button>
    </Gapped>
  );
```

### Вертикальное расположение

Проп `vertical` выстраивает элементы вертикально.

```tsx
return (
    <Gapped gap={20} vertical>
      <Button use="primary">Элемент 1</Button>
      <Button>Элемент 2</Button>
    </Gapped>
  );
```

### Выравнивание по вертикали

Проп `verticalAlign` задаёт расположение элементов относительно вертикальной оси: прижаты к верхней, нижней, базовой линии или находятся посередине.

```tsx
return (
    <Gapped gap={10} vertical>
      <b>verticalAlign="top</b>
      <Gapped gap={10} verticalAlign="top">
        <div
          style={{
            width: 300,
            height: 200,
            backgroundColor: '#eee',
            background: 'repeating-linear-gradient(-45deg, #ccc, #ccc 25px, #eee 25px, #eee 225px)',
          }}
        />
        <Gapped gap={20}>
          <Button use="primary">"Элемент 1"</Button>
          <Button>Элемент 2</Button>
        </Gapped>
      </Gapped>
      <b>verticalAlign="middle"</b>
      <Gapped gap={10} verticalAlign="middle">
        <div
          style={{
            width: 300,
            height: 200,
            backgroundColor: '#eee',
            background: 'repeating-linear-gradient(-45deg, #ccc, #ccc 25px, #eee 25px, #eee 225px)',
          }}
        />
        <Gapped gap={20}>
          <Button use="primary">"Элемент 1"</Button>
          <Button>Элемент 2</Button>
        </Gapped>
      </Gapped>
      <b>verticalAlign="bottom"</b>
      <Gapped gap={10} verticalAlign="bottom">
        <div
          style={{
            width: 300,
            height: 200,
            backgroundColor: '#eee',
            background: 'repeating-linear-gradient(-45deg, #ccc, #ccc 25px, #eee 25px, #eee 225px)',
          }}
        />
        <Gapped gap={20}>
          <Button use="primary">"Элемент 1"</Button>
          <Button>Элемент 2</Button>
        </Gapped>
      </Gapped>
    </Gapped>
  );
```

### Перенос элементов на новую строку

Проп `wrap` включает перенос элементов на новую строку, работает при горизонтальном расположении.
Между строчками будет отступ заданный в пропе `gap`.
В такой настройке из-за особенности верстки `Gapped` может перекрывать элементы расположенные сверху-слева.

```tsx
return (
    <>
      {'Элемент 1 '}
      <Toggle />

      <div style={{ paddingTop: '10px', position: 'relative', width: '250px' }}>
        <Gapped wrap gap={50}>
          <Button use="primary">Элемент 2</Button>
          <Button>Элемент 3</Button>
          <Checkbox>Элемент 3</Checkbox>
        </Gapped>
      </div>
    </>
  );
```

## Source

[`components/Gapped/Gapped.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Gapped/Gapped.tsx)
