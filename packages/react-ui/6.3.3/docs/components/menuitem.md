# MenuItem

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-menuitem--docs)

Пункт меню `MenuItem` — интерактивный элемент выполнения действий или навигации.

```jsx
import { MenuItem } from '@skbkontur/react-ui';
```

Используется в компонентах [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/dropdownmenu.md), [Kebab](https://tech.skbkontur.ru/kontur-ui/docs/components/kebab.md), [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/tooltipmenu.md) и [Select](https://tech.skbkontur.ru/kontur-ui/docs/components/select.md).

## Все пропсы и методы

### `comment`

type: `ReactNode` · optional

Описание пункта меню.

### `disabled`

type: `boolean` · optional

Блокирует пункт и перекрашивает в серый.

### `icon`

type: `ReactElement<unknown, string | JSXElementConstructor<any>>` · optional

Добавляет иконку слева от текста.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер кнопки.

### `target`

type: `HTMLAttributeAnchorTarget` · optional

Задает HTML-атрибут `target`.

### `title`

type: `string` · optional

Задает HTML-атрибут `title`.

### `href`

type: `string` · optional

Задает HTML-атрибут `href` - адрес, на который следует перейти.

### `rel`

type: `string` · optional

Задает HTML-атрибут `rel`. Для внешних ссылок аттрибут rel по умолчанию равен "noopener noreferrer".

### `component`

type: `ComponentType<any>` · optional

Заменяет корневой элемент, на компонент переданный в проп.
По умолчанию корневой элемент рендерится как `button`. <br />Если передан `href`, то вместо `button` рендерится `a`.

### `isNotSelectable`

type: `boolean` · optional

Запрещает выделение и выбор данного пункта меню.

### `isMobile`

type: `boolean` · optional

Устанавливает стиль для отображения в мобильной версии.

### `onClick`

type: `(event: SyntheticEvent<HTMLElement, Event>) => void` · optional

`HTML`-событие `onclick`.

### `onMouseEnter`

type: `MouseEventHandler<Element>` · optional

`HTML`-событие `onmouseenter`.

### `onMouseLeave`

type: `MouseEventHandler<Element>` · optional

`HTML`-событие `onmouseleave`.

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

### Меню с базовыми элементами меню

```tsx
return (
    <DropdownMenu caption={<Button use="accent">Открыть меню</Button>}>
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
        <MenuItem size="large">Пункт 1</MenuItem>
        <MenuItem size="large">Пункт 2</MenuItem>
      </DropdownMenu>
    </Gapped>
  );
```

### Описание элементов

Проп `comment` добавляет описания к пунктам.

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuItem comment="Описание пункта">Пункт меню</MenuItem>
      <MenuItem comment="Описание пункта">Пункт меню</MenuItem>
      <MenuItem comment="Описание пункта">Пункт меню</MenuItem>
      <MenuItem comment="Описание пункта">Пункт меню</MenuItem>
      <MenuItem comment="Описание пункта">Пункт меню</MenuItem>
      <MenuItem comment="Описание пункта">Пункт меню</MenuItem>
    </DropdownMenu>
  );
```

### Заблокированные пункты

Проп `disabled` делает пункты неактивными и перекрашивает в серый цвет.

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuItem>Пункт меню</MenuItem>
      <MenuItem>Пункт меню</MenuItem>
      <MenuItem disabled>Заблокированный пункт меню</MenuItem>
      <MenuItem disabled>И снова заблокированный</MenuItem>
      <MenuItem>Пункт меню</MenuItem>
    </DropdownMenu>
  );
```

### Запрет выделения

Проп `isNotSelectable` запрещает выделение и выбор пункта меню.

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuItem>Пункт меню</MenuItem>
      <MenuItem>Пункт меню</MenuItem>
      <MenuItem isNotSelectable>Пункт меню без выделения и выбора</MenuItem>
      <MenuItem isNotSelectable>Пункт меню без выделения и выбора</MenuItem>
    </DropdownMenu>
  );
```

### Иконки в элементах

Проп `icon` добавляет иконку слева.

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с иконками</Button>}>
      <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
      <MenuItem icon={<IconTechPhoneSmartRegular16 />} comment="Подпись">
        Пункт меню
      </MenuItem>
      <MenuItem disabled icon={<IconHandThumbDownRegular16 />}>
        Пункт меню
      </MenuItem>
    </DropdownMenu>
  );
```

### Ссылки

Для указания ссылки используйте `href`. Рекомендуется выделять такие элементы иконками.

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню со ссылкой</Button>}>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuSeparator />
      <MenuItem
        icon={<IconArrowUiCornerOutUpRightRegular16 />}
        href="https://guides.kontur.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Подробнее в Контур Гайдах
      </MenuItem>
    </DropdownMenu>
  );
```

## Доступность

Компонент таба по умолчанию имеет семантику кнопки (`component="button"`), подразумевая, что действие происходит на текущей странице. Если при клике на элемент происходит переход на другую страницу или на другую часть страницы, используйте ссылку `component="a"` и `href="..."`.

**Заблокированный пункт**

За блокировку кнопки отвечает специальный атрибут `disabled`. Однако этот атрибут скрывает кнопку от скринридеров — а это не подходит в случаях, когда кнопка разблокируется при заполнении обязательных полей. Для такого случая добавьте атрибуты `aria-disabled=”true”`.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию пункт меню не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/MenuItem/MenuItem.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/MenuItem/MenuItem.tsx)
