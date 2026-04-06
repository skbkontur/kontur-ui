# MenuFooter

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_menufooter--docs)

## Import

```jsx
import { MenuFooter } from '@skbkontur/react-ui';
```

## Props

- **_enableIconPadding?**: Добавляет отступ иконке.
- **size?**: Задает размер.

### Example1

```tsx
return (
    <DropdownMenu menuMaxHeight="10rem" caption={<Button use="primary">Сотрудники компании</Button>}>
      <MenuItem>Вася</MenuItem>
      <MenuItem>Петя</MenuItem>
      <MenuItem>Маша</MenuItem>
      <MenuFooter>Всего 3 человека</MenuFooter>
    </DropdownMenu>
  );
```

### Example2

```tsx
return (
    <Gapped vertical>
      <MenuFooter size={'small'}>Маленький</MenuFooter>
      <MenuFooter size={'medium'}>Средний</MenuFooter>
      <MenuFooter size={'large'}>Большой</MenuFooter>
    </Gapped>
  );
```