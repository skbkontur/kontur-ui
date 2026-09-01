# TooltipMenu

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_menu-tooltipmenu--docs)

Выпадающее меню в тултипе `TooltipMenu`. Раскрывается по клику на переданный в `caption` элемент.

Поддерживает настройку `header`, `footer`, позиций открытия `positions` и другие настройки внешнего вида.

```jsx
import { TooltipMenu } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `caption`

type: `ReactNode | ((props: PopupMenuCaptionProps) => ReactNode)` · required

Элемент или функция, которая возвращает кнопку-меню.
Примечание: при использовании функции, нее необходимо управлять открытием и закрытием меню.

### `menuMaxHeight`

type: `string | number` · optional

Максимальная высота меню.

### `menuWidth`

type: `string | number` · optional

Ширина меню.

### `header`

type: `ReactNode` · optional

Элемент, который будет отрендерен в шапке меню.
Примечание: не поддерживается компонент MenuHeader, который ожидается только в `children` меню.

### `footer`

type: `ReactNode` · optional

Элемент, который будет отрендерен в подвале меню.
Перед элементом переданным в `footer` будет отрендерен `MenuSeparator`.

### `positions`

type: `("top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right")[]` · optional

Список позиций для расположения выпадашки относительно caption.
Если во всех позициях выпадашка вылезает за пределы viewport, будет использована первая.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `preventIconsOffset`

type: `boolean` · optional

Отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

### `onClose`

type: `() => void` · optional

Действие при закрытии меню.

### `onOpen`

type: `() => void` · optional

Действие при открытии меню.

## Использование

Используйте тултип-меню:

- когда меню должно открываться не от стандартной кнопки, а от произвольного элемента с настраиваемым позиционированием открытия;
- когда названия действий очень длинные;
- когда действия редко используются или объединены по смыслу.

## Альтернативы и дополнения

- [Dropdown](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/dropdown.md) — используйте упрощенную версию не в тултипе, если вам не требуется гибкость настройки `caption`, `header`, `footer`, `positions`.
- [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/dropdownmenu.md) — используйте, если вам нужно гибкое меню, но не в тултипе.
- [Select](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/select.md) — используйте для выбора значения из набора вариантов.
- [MenuItem](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/menuitem.md), [MenuSeparator](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/menuseparator.md), [MenuHeader](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/menuheader.md), [MenuFooter](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/menufooter.md) — элементы внутри меню.

## Примеры

### Базовый пример

```tsx
return (
    <TooltipMenu caption={<Button use="accent">Открыть меню</Button>}>
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

### Кнопка открытия меню

В проп `caption` можно передать любой элемент для кнопки открытия.

```tsx
return (
    <TooltipMenu caption={<Button icon={<IconUiMenuBars3HRegular32 />} aria-label="Открыть меню" />} menuWidth="300px">
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Управление состоянием тултип-меню

В проп `caption` помимо компонента можно передать функцию, возвращающую компонент, с помощью которой можно управлять текущим состоянием тултип-меню через аргументы `opened`, `openMenu`, `closeMenu` и `toggleMenu`.

```tsx
return (
    <TooltipMenu
      caption={({ opened, openMenu, closeMenu, toggleMenu }) => {
        return (
          <Gapped vertical>
            <>TooltipMenu opened: {String(opened)}</>
            <Button onClick={() => toggleMenu()}>Переключить меню</Button>
            <Button onClick={() => openMenu()}>Открыть меню</Button>
            <Button onClick={() => closeMenu()}>Закрыть меню</Button>
          </Gapped>
        );
      }}
    >
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuSeparator />
      <MenuItem>Пункт 3</MenuItem>
    </TooltipMenu>
  );
```

### Ширина

Проп `width` управляет шиирой меню.

```tsx
return (
    <TooltipMenu menuWidth={350} caption={<Button use="accent">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuSeparator />
      <MenuItem>Пункт 3</MenuItem>
    </TooltipMenu>
  );
```

### Максимальная высота

Проп `menuMaxHeight` управляет максимальной высотой меню. Если элементы не помещаются, показывается кроллбар.

```tsx
return (
    <TooltipMenu caption={<Button use="accent">Открыть меню</Button>} menuMaxHeight={150}>
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

### Отключение анимации

Проп `disableAnimations` отключает анимацию открытия меню.

```tsx
return (
    <TooltipMenu disableAnimations caption={<Button use="accent">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Позиционирование

Проп `positions` определяет список позиций доступных для расположения выпадашки относительно `caption`.

```tsx
return (
    <Gapped vertical>
      <TooltipMenu
        caption={<Button use="accent">Открыть меню "right top"</Button>}
        menuWidth="300px"
        positions={['right top', 'right middle', 'right bottom']}
      >
        <MenuItem>Раз</MenuItem>
        <MenuItem>Два</MenuItem>
        <MenuItem>Три</MenuItem>
      </TooltipMenu>

      <TooltipMenu
        caption={<Button use="accent">Открыть меню "top right"</Button>}
        menuWidth="300px"
        positions={['top right']}
      >
        <MenuItem>Раз</MenuItem>
        <MenuItem>Два</MenuItem>
        <MenuItem>Три</MenuItem>
      </TooltipMenu>
    </Gapped>
  );
```

### Меню c шапкой и подвалом

В пропы `header` и `footer` вкладывается контент шапки и подвала.

```tsx
return (
    <TooltipMenu
      header={<p>Заголовок</p>}
      footer={<Button>Подвал</Button>}
      caption={<Button use="accent">Открыть меню</Button>}
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </TooltipMenu>
  );
```

### Иконки и автовыравнивание

Проп `preventIconsOffset` отключает выравнивание иконок у пунктов.

```tsx
return (
    <Gapped vertical>
      <TooltipMenu caption={<Button use="accent">Автовыравнивание иконок</Button>}>
        <MenuHeader>Заголовок</MenuHeader>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem>Пункт меню</MenuItem>
      </TooltipMenu>

      <TooltipMenu preventIconsOffset caption={<Button use="accent">Без автовыравнивания</Button>}>
        <MenuHeader>Заголовок</MenuHeader>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem>Пункт меню</MenuItem>
      </TooltipMenu>
    </Gapped>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

Рекомендации:

- задавайте понятный текст в `caption`, чтобы действие кнопки-меню было очевидно;
- если подпись недостаточно описательна, добавляйте `aria-label`;
- контролируйте фокус после открытия/закрытия меню в сложных сценариях;
- для полного отключения используйте проп `disabled`: компонент становится недоступен для взаимодействия и клавиатурной навигации;
- если важно сохранить элемент в потоке озвучивания скринридером, используйте `aria-disabled="true"` и блокируйте действия логически.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Адаптивность

`TooltipMenu` адаптивен: на мобильных устройствах раскрывающееся меню открывается в мобильном попапе (`MobilePopup`). Поведение включается настройками адаптивности React UI.

Если нужно настроить пороги переключения между десктопным и мобильным режимами, используйте настройки из раздела [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/TooltipMenu/TooltipMenu.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/TooltipMenu/TooltipMenu.tsx)
