# MenuFooter

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_menu-menufooter--docs)

Футер меню — надпись в нижней части меню.

```jsx
import { MenuFooter } from '@skbkontur/react-ui';
```

Используется в компонентах [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/dropdownmenu.md), [Kebab](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/kebab.md), [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/tooltipmenu.md) и [Select](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/select.md).

## Все пропсы и методы

### `size`

type: `"small" | "medium" | "large"` · optional

Размер надписи.

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
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuItem>Пункт 3</MenuItem>
      <MenuFooter>Всего 3 пункта</MenuFooter>
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
        <MenuItem size="small">Пункт 1</MenuItem>
        <MenuItem size="small">Пункт 2</MenuItem>
        <MenuItem size="small">Пункт 3</MenuItem>
        <MenuFooter size="small">Размер small</MenuFooter>
      </DropdownMenu>

      <DropdownMenu
        caption={
          <Button size="medium" use="accent">
            Средний
          </Button>
        }
      >
        <MenuItem size="medium">Пункт 1</MenuItem>
        <MenuItem size="medium">Пункт 2</MenuItem>
        <MenuItem size="medium">Пункт 3</MenuItem>
        <MenuFooter size="medium">Размер medium</MenuFooter>
      </DropdownMenu>

      <DropdownMenu
        caption={
          <Button size="large" use="accent">
            Большой
          </Button>
        }
      >
        <MenuItem size="large">Пункт 1</MenuItem>
        <MenuItem size="large">Пункт 2</MenuItem>
        <MenuItem size="large">Пункт 3</MenuItem>
        <MenuFooter size="large">Размер large</MenuFooter>
      </DropdownMenu>
    </Gapped>
  );
```

## Адаптивность

По умолчанию надпись в подвале не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/MenuFooter/MenuFooter.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/MenuFooter/MenuFooter.tsx)
