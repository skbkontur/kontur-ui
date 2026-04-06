# TooltipMenu

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_tooltipmenu--docs)

## Import

```jsx
import { TooltipMenu } from '@skbkontur/react-ui';
```

## Props

- **menuMaxHeight?**: Задает максимальную высоту меню.
- **menuWidth?**: Задает ширину меню.
- **caption**: Задает элемент или функцию возвращающую элемент, которые используется вместо `caption`. В случае функции, внутри нее необходимо управлять открытием и закрытием меню.
- **header?**: Задает элемент, который будет отрендерен в шапке меню. _Примечание_: контрол MenuHeader передаётся только в `children` меню-контролов. Не стоит передавать `MenuHeader` в `header`.
- **footer?**: Задает элемент, который будет отрендерен в подвале меню. Перед элементом переданным в `footer` будет отрендерен MenuSeparator.
- **positions?**: Определяет список позиций, доступных для расположения выпадашки относительно caption. Если во всех позициях выпадашка вылезает за пределы `viewport`, будет использована первая из этого списка.
- **disableAnimations?**: Отключает анимацию.

### Example1

```tsx
return (
    <TooltipMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example2

В проп `caption` помимо компонента можно передать функцию, возвращающую компонент, с помощью которой можно управлять текущим состоянием тултип-меню.

```tsx
return (
    <TooltipMenu
      caption={({ opened, openMenu, closeMenu, toggleMenu }) => {
        return (
          <>
            <p>Сейчас тултип-меню {opened ? 'окрыто' : 'закрыто'}</p>
            <Button onClick={() => toggleMenu()}>Переключить меню</Button>
            <Button onClick={() => openMenu()}>Открыть меню</Button>
            <Button onClick={() => closeMenu()}>Закрыть меню</Button>
          </>
        );
      }}
    >
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example3

```tsx
return (
    <TooltipMenu caption={<Button use="primary">Открыть меню с заданной шириной</Button>} menuWidth={350}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example4

```tsx
return (
    <TooltipMenu caption={<Button use="primary">Открыть меню с заданной высотой</Button>} menuMaxHeight={150}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example5

```tsx
return (
    <TooltipMenu disableAnimations caption={<Button use="primary">Открыть меню без анимации</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example6

В `caption` можно передать любой элемент.

```tsx
return (
    <TooltipMenu
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
    </TooltipMenu>
  );
```

### Example7

```tsx
return (
    <TooltipMenu
      caption={
        <span style={{ display: 'inline-block' }} tabIndex={0}>
          <LightbulbIcon32Regular />
        </span>
      }
      menuWidth="300px"
      positions={['right top', 'right middle', 'right bottom']}
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example8

```tsx
return (
    <TooltipMenu
      caption={
        <span style={{ display: 'inline-block' }} tabIndex={0}>
          <LightbulbIcon32Regular />
        </span>
      }
      menuWidth="300px"
      positions={['top right']}
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example9

```tsx
return (
    <TooltipMenu
      header={<p>Это шапка в виде обычного текста</p>}
      footer={<Button>А это подвал в виде кнопки</Button>}
      caption={<Button use="primary">Открыть меню</Button>}
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Example10

```tsx
return (
    <TooltipMenu caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>MenuHeader</MenuHeader>
      <MenuItem icon={<CheckAIcon />}>MenuItem1</MenuItem>
      <MenuItem icon={<CheckAIcon />}>MenuItem2</MenuItem>
      <MenuItem>MenuItem3</MenuItem>
    </TooltipMenu>
  );
```

### Example11

```tsx
return (
    <TooltipMenu preventIconsOffset caption={<Button use="primary">Открыть меню</Button>}>
      <MenuHeader>MenuHeader</MenuHeader>
      <MenuItem icon={<CheckAIcon />}>MenuItem1</MenuItem>
      <MenuItem icon={<CheckAIcon />}>MenuItem2</MenuItem>
      <MenuItem>MenuItem3</MenuItem>
    </TooltipMenu>
  );
```

### Example12

(с сохранением поведения [MenuItem](#/Components/MenuItem)).

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

      <TooltipMenu caption={<Button use="primary">Открыть меню</Button>}>
        <MenuItem>Меня видно всегда</MenuItem>
        <MenuItem>Меня тоже</MenuItem>
        <MenuItem>Ага, и меня!</MenuItem>
        {showItems ? <>{hiddenItems}</> : <></>}
      </TooltipMenu>
    </Gapped>
  );
```