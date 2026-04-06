# MenuHeader

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_menuheader--docs)

## Import

```jsx
import { MenuHeader } from '@skbkontur/react-ui';
```

## Props

- **_enableIconPadding?**: Добавляет отступ иконке.
- **size?**: Задает размер.

### Example1

```tsx
return (
    <DropdownMenu menuMaxHeight="10rem" caption={<Button use="primary">Сотрудники компании</Button>}>
      <MenuHeader>Разработчики</MenuHeader>
      <MenuItem>Вася</MenuItem>
      <MenuItem>Петя</MenuItem>
      <MenuItem>Маша</MenuItem>
      <MenuHeader>Дизайнеры</MenuHeader>
      <MenuItem>Галя</MenuItem>
      <MenuItem>Гриша</MenuItem>
      <MenuItem>Гена</MenuItem>
      <MenuHeader>Продакты</MenuHeader>
      <MenuItem>Валя</MenuItem>
      <MenuItem>Аля</MenuItem>
      <MenuItem>Артём</MenuItem>
    </DropdownMenu>
  );
```

### Example2

```tsx
return (
    <Gapped vertical>
      <MenuHeader size={'small'}>Маленький</MenuHeader>
      <MenuHeader size={'medium'}>Средний</MenuHeader>
      <MenuHeader size={'large'}>Большой</MenuHeader>
    </Gapped>
  );
```