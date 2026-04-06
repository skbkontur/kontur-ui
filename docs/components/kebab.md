# Kebab

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_kebab--docs)

## Props

- **size?**: Размер кнопки.
- **positions?**: Список доступных позиций выпадающего меню относительно кнопки. (default: `['bottom left', 'bottom right', 'top left', 'top right'].`)
- **menuMaxHeight?**: Максимальная высота меню.
- **disabled?**: Блокирует кнопку.
- **disableAnimations?**: Отключает анимацию выпадающего меню.
- **icon?**: Заменяет иконку кебаба у кнопки.

```jsx
import { Kebab } from '@skbkontur/react-ui';
```

## Использование

Используйте кебаб-меню, чтобы сэкономить место и скрыть малоиспользуемые ссылки и действия.

Не убирайте в кебаб-меню важные и часто используемые действия.

**Альтернативы и дополнения**

- [Dropdown](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-dropdown--docs) — если необходима кастомизируемая кнопка вместо простой иконки кебаба.
- [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-dropdownmenu--docs) — если необходим произвольный элемент `caption` вместо кнопки.

## Адаптивность

`Kebab` адаптивен: на мобильных устройствах выпадающее меню открывается модально по центру экрана. Сама кнопка не меняет внешний вид и поведение.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
return (
    <Kebab>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
    </Kebab>
  );
```

### ExampleSize

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

### ExamplePositions

Проп `positions` задаёт список доступных позиций выпадающего меню относительно кнопки. По умолчанию: `['bottom left', 'bottom right', 'top left', 'top right']`. Если во всех позициях в списке выпадающее меню вылезает за пределы `viewport`, будет использована первая.

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

### ExampleMaxHeight

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

### ExampleIconsOffset

Проп `preventIconsOffset` отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

```tsx
return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div>
        <span>preventIconsOffset="false"</span>
        <Kebab>
          <MenuHeader>Заголовок</MenuHeader>
          <MenuItem icon={<CheckAIcon16Light />}>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
      <div>
        <span>preventIconsOffset="true"</span>
        <Kebab preventIconsOffset>
          <MenuHeader>Заголовок</MenuHeader>
          <MenuItem icon={<CheckAIcon16Light />}>Действие 1</MenuItem>
          <MenuItem>Действие 2</MenuItem>
          <MenuItem>Действие 3</MenuItem>
        </Kebab>
      </div>
    </div>
  );
```

### ExampleIcon

Пропом `icon` можно задать свою иконку кнопке.

```tsx
return (
    <Kebab icon={<PlusIcon16Light />}>
      <MenuItem>Действие 1</MenuItem>
      <MenuItem>Действие 2</MenuItem>
      <MenuItem>Действие 3</MenuItem>
    </Kebab>
  );
```

### ExampleDisabled

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

### ExampleDisableAnimations

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

### ExampleOnOpenAndClose

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