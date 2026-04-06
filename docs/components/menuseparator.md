# MenuSeparator

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_menuseparator--docs)

## Import

```jsx
import { MenuSeparator } from '@skbkontur/react-ui';
```

### Example1

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с разделителями</Button>}>
      <MenuItem>У меня есть разделитель</MenuItem>
      <MenuSeparator />
      <MenuItem>У меня тоже!</MenuItem>
      <MenuSeparator />
      <MenuItem>А у меня нет :(</MenuItem>
      <MenuItem>Как и у меня :(</MenuItem>
    </DropdownMenu>
  );
```