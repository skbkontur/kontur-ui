# MenuHeader

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-menuheader--docs)

Заголовок меню используется для того, чтобы разграничивать элементы меню на категории.

```jsx
import { MenuHeader } from '@skbkontur/react-ui';
```

Используется в компонентах [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/dropdownmenu.md), [Kebab](https://tech.skbkontur.ru/kontur-ui/docs/components/kebab.md), [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/tooltipmenu.md) и [Select](https://tech.skbkontur.ru/kontur-ui/docs/components/select.md).

## Все пропсы и методы

### `size`

type: `"small" | "medium" | "large"` · optional

Размер заголовка.

### `_enableIconPadding`

type: `boolean` · optional

Добавляет отступ слева для выравнивания текста по иконкам MenuItem

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
return (
    <DropdownMenu caption={<Button use="accent">Открыть меню</Button>}>
      <MenuHeader>Заголовок 1</MenuHeader>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuItem>Пункт 3</MenuItem>
      <MenuHeader>Заголовок 2</MenuHeader>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuItem>Пункт 3</MenuItem>
    </DropdownMenu>
  );
```

### Размер

Проп `size` задаёт размер.

```tsx
return (
    <Gapped vertical gap={20}>
      <DropdownMenu
        caption={
          <Button size="small" use="accent">
            Маленький
          </Button>
        }
      >
        <MenuHeader size="small">Размер small</MenuHeader>
        <MenuItem size="small">Пункт 1</MenuItem>
        <MenuItem size="small">Пункт 2</MenuItem>
      </DropdownMenu>

      <DropdownMenu
        caption={
          <Button size="medium" use="accent">
            Средний
          </Button>
        }
      >
        <MenuHeader size="medium">Размер medium</MenuHeader>
        <MenuItem size="medium">Пункт 1</MenuItem>
        <MenuItem size="medium">Пункт 2</MenuItem>
      </DropdownMenu>

      <DropdownMenu
        caption={
          <Button size="large" use="accent">
            Большой
          </Button>
        }
      >
        <MenuHeader size="large">Размер large</MenuHeader>
        <MenuItem size="large">Пункт 1</MenuItem>
        <MenuItem size="large">Пункт 2</MenuItem>
      </DropdownMenu>
    </Gapped>
  );
```

## Адаптивность

По умолчанию заголовок не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/MenuHeader/MenuHeader.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/MenuHeader/MenuHeader.tsx)
