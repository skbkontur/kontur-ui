# Group

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout-group--docs)

Контейнер используется для создания логически сгруппированных элементов, выровненных по горизонтали.

```jsx
import { Group } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `width`

type: `Width<string | number>` · optional

Ширина компонента.

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

### Базовый пример

```tsx
const [value, setValue] = React.useState('');
return (
    <Group>
      <Button>
        <IconMathFunctionRegular16 />
      </Button>
      <Input value={value} width="100%" onValueChange={setValue} />
      <Button>
        <IconSearchLoupeRegular16 />
      </Button>
      <Button>Кнопка</Button>
    </Group>
  );
```

### Ширина

Проп `width` задаёт ширину контейнера.

```tsx
const [value, setValue] = React.useState('');
return (
    <Group width={350}>
      <Button>
        <IconMathFunctionRegular16 />
      </Button>
      <Input value={value} width="100%" onValueChange={setValue} />
      <Button>
        <IconSearchLoupeRegular16 />
      </Button>
      <Button>Кнопка</Button>
    </Group>
  );
```

### Внутри контрола DateRangePicker

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

### С хинтом или тултипом

```tsx
const [value, setValue] = React.useState('');
return (
    <Group width={350}>
      <Button>
        <IconMathFunctionRegular16 />
      </Button>
      <Input value={value} width="100%" onValueChange={setValue} />
      <Tooltip render={() => 'Подсказка в тултипе'} trigger="opened" pos="bottom">
        <Button>
          <IconSearchLoupeRegular16 />
        </Button>
      </Tooltip>
      <Hint text="Подсказка">
        <Button>Наведи на меня</Button>
      </Hint>
    </Group>
  );
```

## Source

[`components/Group/Group.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Group/Group.tsx)
