# MenuSeparator

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_menu-menuseparator--docs)

Разделитель между элементами меню.

```jsx
import { MenuSeparator } from '@skbkontur/react-ui';
```

Используется в компонентах [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/dropdownmenu.md), [Kebab](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/kebab.md), [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/tooltipmenu.md) и [Select](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/select.md).

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

## Адаптивность

По умолчанию разделитель в меню не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Examples

### Меню с разделителями

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuItem>У меня есть разделитель</MenuItem>
      <MenuSeparator />
      <MenuItem>У меня тоже!</MenuItem>
      <MenuSeparator />
      <MenuItem>А у меня нет :(</MenuItem>
      <MenuItem>Как и у меня :(</MenuItem>
    </DropdownMenu>
  );
```

## Source

[`components/MenuSeparator/MenuSeparator.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/MenuSeparator/MenuSeparator.tsx)
