# DropdownMenu

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_dropdownmenu--docs)

## Import

```jsx
import { DropdownMenu } from '@skbkontur/react-ui';
```

## Props

- **menuMaxHeight?**: Максимальная высота меню
- **menuWidth?**: Ширина меню
- **width?**: Ширина caption
- **caption**: Элемент или функция возвращающая элемент, если передана, используется вместо `caption`, в таком случае управлять открытием и закрытием меню придется в этой функции
- **header?**: Произвольный элемент, который будет отрендерен в шапке меню. _Примечание_: контрол MenuHeader передаётся только в `children` меню-контролов. Не стоит передавать `MenuHeader` в `header`.
- **footer?**: Произвольный элемент, который будет отрендерен в подвале меню. Перед элементом переданным в `footer` будет отрендерен MenuSeparator.
- **positions?**: Список позиций доступных для расположения выпадашки относительно `caption`. Если во всех позициях выпадашка вылезает за пределы `viewport`, будет использована первая из этого списка. **Возможные значения**: `top left`, `top center`, `top right`, `right top`, `right middle`, `right bottom`, `bottom left`, `bottom center`, `bottom right`, `left top`, `left middle`, `left bottom` (default: `['bottom left', 'bottom right', 'top left', 'top right']`)
- **disableAnimations?**: Не показывать анимацию

### Example1

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example2

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню c заданной шириной</Button>} menuWidth={350}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example3

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню c заданной высотой</Button>} menuMaxHeight={150}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example4

```tsx
return (
    <DropdownMenu positions={['left middle']} caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example5

```tsx
return (
    <DropdownMenu
      header={<p>Это шапка в виде обычного текста</p>}
      footer={<Button>А это подвал в виде кнопки</Button>}
      caption={<Button use="primary">Открыть меню</Button>}
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example6

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>MenuHeader</MenuHeader>
      <MenuItem icon={<CheckAIcon />}>MenuItem1</MenuItem>
      <MenuItem icon={<CheckAIcon />}>MenuItem2</MenuItem>
      <MenuItem>MenuItem3</MenuItem>
    </DropdownMenu>
  );
```

### Example7

```tsx
return (
    <DropdownMenu preventIconsOffset caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>MenuHeader</MenuHeader>
      <MenuItem icon={<CheckAIcon />}>MenuItem1</MenuItem>
      <MenuItem icon={<CheckAIcon />}>MenuItem2</MenuItem>
      <MenuItem>MenuItem3</MenuItem>
    </DropdownMenu>
  );
```

### Example8

```tsx
return (
    <DropdownMenu disableAnimations caption={<Button use="primary">Открыть меню без анимации</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example9

В `caption` можно передать любой элемент.

```tsx
return (
    <DropdownMenu
      caption={
        <span style={{ display: 'inline-block' }} tabIndex={0}>
          <UiMenuBars3HIcon32Regular />
        </span>
      }
      menuWidth="300px"
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Example10

```tsx
const [checked, setChecked] = React.useState(false);

  let close: () => void;

  const renderCaption = ({ openMenu, closeMenu }: { openMenu: () => void; closeMenu: () => void }) => {
    close = closeMenu;
    return (
      <Button onClick={openMenu} use="primary">
        Открыть меню
      </Button>
    );
  };

  return (
    <DropdownMenu caption={renderCaption}>
      <MenuItem onClick={(e) => e.preventDefault()}>Просто пункт</MenuItem>
      <ThemeContext.Provider value={ThemeFactory.create({ menuItemHoverBg: 'initial' })}>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            setChecked(!checked);
          }}
        >
          <Checkbox checked={checked}>с чекбоксом</Checkbox>
        </MenuItem>
      </ThemeContext.Provider>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          close();
        }}
      >
        Закрыть
      </MenuItem>
    </DropdownMenu>
  );
```

### Example11

(с сохранением поведения MenuItem)

```tsx
const [showItems, setShowItems] = React.useState(false);

  const hiddenItems = [
    <MenuSeparator />,
    <MenuItem>А я скрываюсь</MenuItem>,
    <MenuItem>И я</MenuItem>,
    <MenuItem>Я с вами</MenuItem>,
  ];

  return (
    <Gapped>
      <Button onClick={() => setShowItems(!showItems)}>{showItems ? 'Спрятать' : 'Показать'} элементы</Button>

      <DropdownMenu caption={<Button use="primary">Открыть меню</Button>}>
        <MenuItem>Меня видно всегда</MenuItem>
        <MenuItem>Меня тоже</MenuItem>
        <MenuItem>Ага, и меня!</MenuItem>
        {showItems && hiddenItems}
      </DropdownMenu>
    </Gapped>
  );
```