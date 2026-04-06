# MenuItem

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_menuitem--docs)

## Import

```jsx
import { MenuItem } from '@skbkontur/react-ui';
```

## Props

- **comment?**: Добавляет описание для элемента меню.
- **disabled?**: Делает компонент недоступным.
- **icon?**: Добавляет иконку элементу меню.
- **size?**: Задает размер контрола.
- **onClick?**: Задает функцию, которая вызывается при клике.
- **onMouseEnter?**: Задает функцию, которая вызывается при наведении мышкой (событие `onmouseenter`).
- **onMouseLeave?**: Задает функцию, которая вызывается при уходе мышки с объекта (событие `onmouseleave`).
- **target?**: Задает HTML-атрибут `target`.
- **title?**: Задает HTML-атрибут `title`.
- **href?**: Задает HTML-атрибут `href` - адрес, на который следует перейти.
- **rel?**: Задает HTML-атрибут `rel`. Для внешних ссылок аттрибут rel по умолчанию равен "noopener noreferrer".
- **component?**: Заменяет корневой элемент, на компонент переданный в проп. По умолчанию корневой элемент рендерится как `button`. <br />Если передан `href`, то вместо `button` рендерится `a`.
- **isNotSelectable?**: Запрещает выделение и выбор данного пункта меню.
- **isMobile?**: Устанавливает стиль для отображения в мобильной версии.

### Example1

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с базовыми элементами меню</Button>}>
      <MenuItem>Базовый элемент меню</MenuItem>
      <MenuItem>Ещё один базовый элемент меню</MenuItem>
      <MenuItem>И ещё один</MenuItem>
    </DropdownMenu>
  );
```

### Example2

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с базовыми и заблокированными элементами</Button>}>
      <MenuItem>Это базовый элемент меню</MenuItem>
      <MenuItem disabled>А это заблокированный</MenuItem>
      <MenuItem>А это снова базовый</MenuItem>
      <MenuItem disabled>И снова заблокированный</MenuItem>
      <MenuItem disabled>И вот ещё один заблокированный</MenuItem>
    </DropdownMenu>
  );
```

### Example3

В пункты меню можно передать проп `isNotSelectable`, чтобы запретить выделение и выбор этого пункта меню

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с базовыми и отключёнными элементами</Button>}>
      <MenuItem>Это базовый элемент меню</MenuItem>
      <MenuItem isNotSelectable>А это отключённый</MenuItem>
      <MenuItem>А это снова базовый</MenuItem>
      <MenuItem isNotSelectable>И снова отключённый</MenuItem>
      <MenuItem isNotSelectable>И вот ещё один отключённый</MenuItem>
    </DropdownMenu>
  );
```

### Example4

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с причастными к Pied Piper</Button>}>
      <MenuItem comment="Системный инженер">Bertram Gilfoyle</MenuItem>
      <MenuItem comment="Hooli CEO">Gavin Belson</MenuItem>
      <MenuItem comment="Java-разработчик">Dinesh Chugtai</MenuItem>
      <MenuItem comment="Основатель Pied Piper">Richard Hendricks</MenuItem>
      <MenuItem comment="Владелец инкубатора">Erlich Bachman</MenuItem>
    </DropdownMenu>
  );
```

### Example5

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с иконками</Button>}>
      <MenuItem icon={<CheckAIcon />}>Базовый элемент меню c иконкой</MenuItem>
      <MenuItem disabled icon={<HandThumbDownIcon />}>
        Отключённый элемент меню с иконкой
      </MenuItem>
      <MenuItem icon={<TechPhoneSmartIcon />} comment="А слева вы можете видеть икону 21-го века">
        Элемент меню с описанием и иконкой
      </MenuItem>
    </DropdownMenu>
  );
```

### Example6

В элементы меню можно передавать проп `href`, чтобы превратить их в ссылку. Лучше выделять такие элементы иконками.

```tsx
return (
    <DropdownMenu caption={<Button use="primary">Открыть меню с ссылками</Button>}>
      <MenuItem href="http://tech.skbkontur.ru/kontur-ui/" target="_blank" rel="noopener noreferrer">
        Начало документации
      </MenuItem>
      <MenuItem
        href="https://github.com/skbkontur/retail-ui/graphs/contributors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Список прекрасных людей
      </MenuItem>
      <MenuSeparator />
      <MenuItem
        icon={<ArrowUiCornerOutUpRightIcon />}
        href="https://guides.kontur.ru/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Подробнее в Контур Гайдах
      </MenuItem>
    </DropdownMenu>
  );
```

### Example7

```tsx
return (
    <Gapped vertical>
      <MenuItem size={'small'}>Маленький</MenuItem>
      <MenuItem size={'medium'}>Средний</MenuItem>
      <MenuItem size={'large'}>Большой</MenuItem>
    </Gapped>
  );
```