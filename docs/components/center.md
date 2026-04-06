# Center

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout_center--docs)

## Import

```jsx
import { Center } from '@skbkontur/react-ui';
```

## Props

- **align?**: Задает выравнивание контента по горизонтали

### Example1

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