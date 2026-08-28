# DropdownMenu

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-dropdownmenu--docs)

Раскрывающееся меню.

Раскрывается по клику на переданный в `caption` элемент.
Поддерживает настройку `header`, `footer`, позиций открытия `positions` и другие настройки внешнего вида.

```jsx
import { DropdownMenu } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `menuMaxHeight`

type: `MaxWidth<string | number>` · optional

Максимальная высота меню.

### `menuWidth`

type: `Width<string | number>` · optional

Ширина раскрывающегося меню.

### `width`

type: `Width<string | number>` · optional

Ширина контейнера с `caption`.

### `caption`

type: `ReactNode | ((props: PopupMenuCaptionProps) => ReactNode)` · required

Элемент или render-функция, по которым открывается меню.

Если передать функцию, ей нужно самостоятельно вызвать `openMenu`, `closeMenu` или `toggleMenu`.

### `header`

type: `ReactNode` · optional

Рендерит произвольный элемент в шапке меню.

_Примечание_: `MenuHeader` передается только в `children` меню-контролов. Не передавайте `MenuHeader` в `header`.

### `footer`

type: `ReactNode` · optional

Рендерит произвольный элемент в подвале меню.

Перед элементом из `footer` автоматически добавляется `MenuSeparator`.

### `positions`

type: `("top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right")[]` · optional · default: `['bottom left', 'bottom right', 'top left', 'top right']`

Список допустимых положений раскрывающегося меню относительно `caption`.

Если меню выходит за пределы `viewport` во всех положениях, будет использовано первое положение из списка.

**Возможные значения**: `top left`, `top center`, `top right`, `right top`, `right middle`, `right bottom`, `bottom left`, `bottom center`, `bottom right`, `left top`, `left middle`, `left bottom`

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию раскрывающегося меню.

### `preventIconsOffset`

type: `boolean` · optional

Отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

### `onClose`

type: `() => void` · optional

Действие при закрытии меню.

### `onOpen`

type: `() => void` · optional

Действие при открытии меню.

### `popupMenuId`

type: `string` · optional

`id` выпадающего меню.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Использование

Используйте раскрывающееся меню, если:

- меню должно открываться не от стандартной кнопки, а от произвольного элемента с настраиваемым позиционированием открытия;
- названия действий очень длинные;
- действия редко используются или объединены по смыслу.

**Альтернативы и дополнения**

- [Dropdown](https://tech.skbkontur.ru/kontur-ui/docs/components/dropdown.md) — используйте упрощенную версию, если вам не требуется гибкость настройки `caption`, `header`, `footer`, `positions`.
- [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/dropdownmenu.md) — используйте, если вам нужно меню в тултипе.
- [Select](https://tech.skbkontur.ru/kontur-ui/docs/components/select.md) — используйте для выбора значения из набора вариантов.
- [MenuItem](https://tech.skbkontur.ru/kontur-ui/docs/components/menuitem.md), [MenuSeparator](https://tech.skbkontur.ru/kontur-ui/docs/components/menuseparator.md), [MenuHeader](https://tech.skbkontur.ru/kontur-ui/docs/components/menuheader.md), [MenuFooter](https://tech.skbkontur.ru/kontur-ui/docs/components/menufooter.md) — элементы внутри меню.

## Примеры

### Базовый пример

```tsx
return (
    <DropdownMenu caption={<Button use="accent">Открыть меню</Button>}>
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

### Кнопка открытия меню

В проп `caption` можно передать любой элемент для кнопки открытия.

```tsx
return (
    <DropdownMenu caption={<Button icon={<IconUiMenuBars3HRegular32 />} aria-label="Открыть меню" />} menuWidth="300px">
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Управление состоянием тултип-меню

В проп `caption` помимо компонента можно передать функцию, возвращающую компонент, с помощью которой можно управлять текущим состоянием тултип-меню через аргументы `opened`, `openMenu`, `closeMenu` и `toggleMenu`.

```tsx
return (
    <DropdownMenu
      caption={({ opened, openMenu, closeMenu, toggleMenu }) => {
        return (
          <Gapped vertical>
            <>DropdownMenu opened: {String(opened)}</>
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
    </DropdownMenu>
  );
```

### Ширина

Проп `width` управляет шиирой меню.

```tsx
return (
    <DropdownMenu menuWidth={350} caption={<Button use="accent">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuSeparator />
      <MenuItem>Пункт 3</MenuItem>
    </DropdownMenu>
  );
```

### Максимальная высота

Проп `menuMaxHeight` управляет максимальной высотой меню. Если элементы не помещаются, показывается кроллбар.

```tsx
return (
    <DropdownMenu caption={<Button use="accent">Открыть меню</Button>} menuMaxHeight={150}>
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

### Позиционирование

Проп `positions` определяет список позиций доступных для расположения выпадашки относительно `caption`

```tsx
return (
    <Gapped vertical>
      <DropdownMenu
        caption={<Button use="accent">Открыть меню "right top"</Button>}
        menuWidth="300px"
        positions={['right top', 'right middle', 'right bottom']}
      >
        <MenuItem>Раз</MenuItem>
        <MenuItem>Два</MenuItem>
        <MenuItem>Три</MenuItem>
      </DropdownMenu>

      <DropdownMenu
        caption={<Button use="accent">Открыть меню "top right"</Button>}
        menuWidth="300px"
        positions={['top right']}
      >
        <MenuItem>Раз</MenuItem>
        <MenuItem>Два</MenuItem>
        <MenuItem>Три</MenuItem>
      </DropdownMenu>
    </Gapped>
  );
```

### Шапка и подвал меню

В пропы `header` и `footer` вкладывается контент шапки и подвала.

```tsx
return (
    <DropdownMenu
      header={<p>Заголовок</p>}
      footer={<Button>Подвал</Button>}
      caption={<Button use="accent">Открыть меню</Button>}
    >
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Иконки и автовыравнивание

Проп `preventIconsOffset` отключает выравнивание иконок у пунктов. По умолчанию пункты без иконок выравниваются по тексту пунктов с иконками.

```tsx
return (
    <Gapped vertical>
      <DropdownMenu caption={<Button use="accent">Автовыравнивание иконок</Button>}>
        <MenuHeader>Заголовок</MenuHeader>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem>Пункт меню</MenuItem>
      </DropdownMenu>

      <DropdownMenu preventIconsOffset caption={<Button use="accent">Без автовыравнивания</Button>}>
        <MenuHeader>Заголовок</MenuHeader>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem icon={<IconCheckARegular16 />}>Пункт меню</MenuItem>
        <MenuItem>Пункт меню</MenuItem>
      </DropdownMenu>
    </Gapped>
  );
```

### Отключение анимации

Проп `disableAnimations` отключает анимацию открытия меню.

```tsx
return (
    <DropdownMenu disableAnimations caption={<Button use="accent">Открыть меню</Button>}>
      <MenuHeader>Заголовок меню</MenuHeader>
      <MenuSeparator />
      <MenuItem>Раз</MenuItem>
      <MenuItem>Два</MenuItem>
      <MenuItem>Три</MenuItem>
    </DropdownMenu>
  );
```

### Пункт без закрытия меню

Если клик по `MenuItem` не должен закрывать меню, вызовите `event.preventDefault()`.

```tsx
const [onlyActive, setOnlyActive] = React.useState(false);
const closeMenuRef = React.useRef<PopupMenuCaptionProps['closeMenu']>(() => undefined);
const renderCaption = ({ openMenu, closeMenu }: PopupMenuCaptionProps) => {
    closeMenuRef.current = closeMenu;

    return (
      <Button use="primary" onClick={() => openMenu()}>
        Настроить фильтр
      </Button>
    );
  };
return (
    <DropdownMenu caption={renderCaption}>
      <MenuItem
        onClick={(event) => {
          event.preventDefault();
          setOnlyActive(!onlyActive);
        }}
      >
        <Checkbox checked={onlyActive}>Только активные</Checkbox>
      </MenuItem>
      <MenuSeparator />
      <MenuItem
        onClick={(event) => {
          event.preventDefault();
          closeMenuRef.current();
        }}
      >
        Применить
      </MenuItem>
    </DropdownMenu>
  );
```

### События открытия и закрытия

Коллбеки `onOpen` и `onClose` вызываются при открытии и закрытии меню.

```tsx
const [status, setStatus] = React.useState('Закрыто');
return (
    <Gapped vertical>
      <DropdownMenu
        caption={<Button use="primary">Открыть меню</Button>}
        onOpen={() => setStatus('Открыто')}
        onClose={() => setStatus('Закрыто')}
      >
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </DropdownMenu>
      <span>{`Статус меню: ${status}`}</span>
    </Gapped>
  );
```

### Кастомизация: управление через ref

Публичные методы `open()` и `close()` доступны через `ref`.

```tsx
const dropdownMenuRef = React.useRef<DropdownMenu>(null);
return (
    <Gapped>
      <button type="button" onClick={() => dropdownMenuRef.current?.open()}>
        Открыть через ref
      </button>
      <button type="button" onClick={() => dropdownMenuRef.current?.close()}>
        Закрыть через ref
      </button>
      <DropdownMenu ref={dropdownMenuRef} caption={<Button use="primary">Меню</Button>}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </DropdownMenu>
    </Gapped>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

Рекомендации:

- задавайте понятный текст в `caption`, чтобы действие кнопки-меню было очевидно;
- если подпись недостаточно описательна, добавляйте `aria-label`;
- контролируйте фокус после открытия/закрытия меню в сложных сценариях;
- если используете render-функцию `caption`, вызывайте `openMenu`, `closeMenu` или `toggleMenu` из обработчиков элемента;
- для полного отключения используйте проп `disabled`: компонент становится недоступен для взаимодействия и клавиатурной навигации;
- если важно сохранить элемент в потоке озвучивания скринридером, используйте `aria-disabled="true"` и блокируйте действия логически;
- если клик по пункту не должен закрывать меню, вызывайте `event.preventDefault()` в обработчике `MenuItem`.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

`DropdownMenu` адаптивен: на мобильных устройствах раскрывающееся меню открывается в мобильном попапе (`MobilePopup`).

Мобильный режим активируется при ширине вьюпорта < `768px`.

В мобильном режиме настройки `menuWidth` и `menuMaxHeight` не ограничивают попап так же, как на десктопе: мобильное меню занимает доступное пространство попапа.

Если нужно настроить пороги переключения между десктопным и мобильным режимами, используйте настройки из раздела [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/DropdownMenu/DropdownMenu.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/DropdownMenu/DropdownMenu.tsx)
