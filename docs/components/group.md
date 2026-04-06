# Group

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout_group--docs)

## Import

```jsx
import { Group } from '@skbkontur/react-ui';
```

## Props

- **width?**: Задает длину компонента Group.

### BasicExample

```tsx
const [value, setValue] = React.useState('Foo');

  return (
    <Group width={350}>
      <Button>
        <MathFunctionIcon />
      </Button>
      <Input value={value} width="100%" onValueChange={setValue} />
      <Button>
        <SearchLoupeIcon />
      </Button>
      <Button>Foo</Button>
    </Group>
  );
```

### UsageInDateRangePicker

Пример с группой полей без разделителя в `DateRangePicker`.

```tsx
const [valueStart, setValueStart] = React.useState('');
  const [valueEnd, setValueEnd] = React.useState('');

  return (
    <DateRangePicker>
      <Group>
        <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
        <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
      </Group>
    </DateRangePicker>
  );
```

### WithHint

```tsx
const [value, setValue] = React.useState('Foo');

  return (
    <Group width={350}>
      <Button>
        <MathFunctionIcon />
      </Button>
      <Input value={value} width="100%" onValueChange={setValue} />
      <Tooltip render={() => 'Hi!'} trigger="opened" pos="bottom">
        <Button>
          <SearchLoupeIcon />
        </Button>
      </Tooltip>
      <Hint text="Hello!">
        <Button>Hover me</Button>
      </Hint>
    </Group>
  );
```