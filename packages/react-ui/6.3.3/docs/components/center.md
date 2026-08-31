# Center

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_layout-center--docs)

Контейнер, который центрирует элементы внутри себя.

Выравнивание задаётся пропом `align`: слева, по центру или справа.

```jsx
import { Center } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `align`

type: `"left" | "center" | "right"` · optional · default: `center`

Выравнивает контент по горизонтали: слева, по центру или справа.

## Examples

### Пример использования

```tsx
const [alignAt, setAlignAt] = React.useState<'left' | 'center' | 'right'>('center');
return (
    <Gapped vertical gap={12}>
      <Switcher
        items={[
          { label: 'Слева', value: 'left' },
          { label: 'По центру', value: 'center' },
          { label: 'Справа', value: 'right' },
        ]}
        value={alignAt}
        onValueChange={(value) => setAlignAt(value as 'left' | 'center' | 'right')}
      />

      <Center align={alignAt} style={{ background: '#fdd', height: 150 }}>
        <div style={{ background: 'black', width: 30, height: 30 }} />
      </Center>
    </Gapped>
  );
```

## Source

[`components/Center/Center.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Center/Center.tsx)
