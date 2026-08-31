# Kebab

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_menu-kebab--docs)

Кебаб-меню содержит действия с объектом.

```jsx
import { Kebab } from '@skbkontur/react-ui';
```

## Все пропсы

### `size`

type: `"small" | "medium" | "large"` · optional

Размер кнопки.

### `positions`

type: `("top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right")[]` · optional · default: `['bottom left', 'bottom right', 'top left', 'top right']`

Список доступных позиций выпадающего меню относительно кнопки.

### `menuMaxHeight`

type: `string | number` · optional

Максимальная высота меню.

### `disabled`

type: `boolean` · optional

Блокирует кнопку.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию выпадающего меню.

### `icon`

type: `ReactNode` · optional

Заменяет иконку кебаба у кнопки.

### `preventIconsOffset`

type: `boolean` · optional

Отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

### `onClose`

type: `() => void` · optional · default: `() => undefined`

Действие при закрытии меню.

### `onOpen`

type: `() => void` · optional · default: `() => undefined`

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

Используйте кебаб-меню, чтобы сэкономить место и скрыть малоиспользуемые ссылки и действия.

**Когда не использовать**

Не убирайте в кебаб-меню важные и часто используемые действия.

**Альтернативы и дополнения**

- [Dropdown](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/dropdown.md) — если необходима кастомизируемая кнопка вместо простой иконки кебаба.
- [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/dropdownmenu.md) — если необходим произвольный элемент `caption` вместо кнопки.
- [MenuItem](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/menuitem.md), [MenuSeparator](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/menuseparator.md), [MenuHeader](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/menuheader.md), [MenuFooter](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/menufooter.md) — элементы внутри меню.

## Примеры

### Базовый пример

```tsx
return (
    <Kebab>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
    </Kebab>
  );
```

### Размер

Проп `size` задаёт размер кнопки. По умолчанию: `'small'`.

```tsx
return (
    <div style={{ display: 'flex', alignItems: 'end', gap: '24px' }}>
      <Kebab size="small">
        <MenuItem>Действие 1</MenuItem>
        <MenuItem>Действие 2</MenuItem>
        <MenuItem>Действие 3</MenuItem>
      </Kebab>
      <Kebab size="medium">
        <MenuItem>Действие 1</MenuItem>
        <MenuItem>Действие 2</MenuItem>
        <MenuItem>Действие 3</MenuItem>
      </Kebab>
      <Kebab size="large">
        <MenuItem>Действие 1</MenuItem>
        <MenuItem>Действие 2</MenuItem>
        <MenuItem>Действие 3</MenuItem>
      </Kebab>
    </div>
  );
```

### Позиционирование

Проп `positions` задаёт список доступных позиций выпадающего меню относительно кнопки.
По умолчанию: `['bottom left', 'bottom right', 'top left', 'top right']`.
Если во всех позициях в списке выпадающее меню вылезает за пределы `viewport`, будет использована первая.

```tsx
return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div>
        <span>bottom left</span>
        <Kebab positions={['bottom left']}>
          <MenuItem>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
      <div>
        <span>top center</span>
        <Kebab positions={['top center']}>
          <MenuItem>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
      <div>
        <span>right bottom</span>
        <Kebab positions={['right bottom']}>
          <MenuItem>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
    </div>
  );
```

### Максимальная высота меню

Пропом `menuMaxHeight` можно задать максимальную высоту выпадающего меню в пикселях.

```tsx
return (
    <Kebab menuMaxHeight={200}>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
      <MenuItem>Действие 4</MenuItem>
      <MenuItem>Действие 5</MenuItem>
      <MenuItem>Действие 6</MenuItem>
      <MenuItem>Действие 7</MenuItem>
      <MenuItem>Действие 8</MenuItem>
      <MenuItem>Действие 9</MenuItem>
    </Kebab>
  );
```

### Выравнивание пунктов меню

Проп `preventIconsOffset` отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

```tsx
return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div>
        <span>preventIconsOffset="false"</span>
        <Kebab>
          <MenuHeader>Заголовок</MenuHeader>
          <MenuItem icon={<IconCheckALight16 />}>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
      <div>
        <span>preventIconsOffset="true"</span>
        <Kebab preventIconsOffset>
          <MenuHeader>Заголовок</MenuHeader>
          <MenuItem icon={<IconCheckALight16 />}>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
    </div>
  );
```

### Кастомная иконка у кнопки

Пропом `icon` можно задать свою иконку кнопке.

```tsx
return (
    <Kebab icon={<IconPlusLight16 />}>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
    </Kebab>
  );
```

### Состояние блокировки

Проп `disabled` блокирует кнопку, делая её недоступной для нажатия.

```tsx
return (
    <Kebab disabled>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
    </Kebab>
  );
```

### Отключение анимации

Проп `disableAnimations` отключает анимацию выпадающего меню.

```tsx
return (
    <Kebab disableAnimations>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
    </Kebab>
  );
```

### События открытия и закрытия

Коллбеки `onOpen` и `onClose` вызываются при открытии и закрытии кебаб-меню.

```tsx
const [isOpened, setIsOpened] = React.useState(false);
return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span>Кебаб-меню {isOpened ? 'открыто' : 'закрыто'}.</span>
      <Kebab onOpen={() => setIsOpened(true)} onClose={() => setIsOpened(false)}>
        <MenuItem>Действие 1</MenuItem>
        <MenuItem>Действие 2</MenuItem>
        <MenuItem>Действие 3</MenuItem>
      </Kebab>
    </div>
  );
```

## Адаптивность

`Kebab` адаптивен: на мобильных устройствах выпадающее меню открывается модально по центру экрана. Сама кнопка не меняет внешний вид и поведение.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Kebab/Kebab.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Kebab/Kebab.tsx)
