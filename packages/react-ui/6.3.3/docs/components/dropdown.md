# Dropdown

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-dropdown--docs)

Кнопка-меню содержит несколько команд, объединенных по смыслу..

```jsx
import { Dropdown } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `caption`

type: `ReactNode` · required

Текст кнопки-меню.

### `icon`

type: `ReactElement<unknown, string | JSXElementConstructor<any>>` · optional

Добавляет иконку слева от текста кнопки.

### `width`

type: `Width<string | number>` · optional

Ширина кнопки-меню. Если `menuWidth` не задан, такая же минимальная ширина применяется к раскрывающемуся меню.

### `disablePortal`

type: `boolean` · optional

Отключает использование портала.

### `disabled`

type: `boolean` · optional

Блокирует компонент.

### `error`

type: `boolean` · optional

Переводит кнопку-меню в состояние ошибки.

### `warning`

type: `boolean` · optional

Переводит кнопку-меню в состояние предупреждения.

### `maxMenuHeight`

type: `number` · optional

Ограничивает максимальную высоту раскрывающегося меню.

### `menuPos`

type: `"top" | "bottom"` · optional

Фиксирует положение раскрывающегося меню относительно кнопки-меню.

### `menuAlign`

type: `"left" | "right"` · optional

Выравнивает раскрывающееся меню относительно кнопки-меню.

### `menuWidth`

type: `string | number` · optional

Ширина раскрывающегося меню.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер кнопки-меню.

### `use`

type: `"link" | "text" | "fill" | "default" | "outline" | "accent" | "danger" | "success" | "pay" | "backless" | "primary"` · optional

Визуальный стиль кнопки-меню.

### `onClose`

type: `() => void` · optional

Событие закрытия раскрывающегося меню.

### `onOpen`

type: `() => void` · optional

Событие открытия раскрывающегося меню.

### `onMouseEnter`

type: `(event: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие наведения курсора (событие `onmouseenter`). Разницу с `onMouseOver` смотрите в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave).

### `onMouseLeave`

type: `(event: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие ухода курсора с элемента (событие `onmouseleave`).

### `onMouseOver`

type: `(event: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие движения курсора над элементом (событие `onmouseover`).

### `preventIconsOffset`

type: `boolean` · optional

Отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

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

Используйте кнопку-меню, если:

- не хватает места для нескольких кнопок;
- названия действий очень длинные;
- действия редко используются или объединены по смыслу.

**Альтернативы и дополнения**

- [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/dropdownmenu.md) — выбирайте, когда нужен более гибкий сценарий:
  произвольный `caption` (в том числе render-function), кастомные `header`/`footer`, управление `positions`.
- [TooltipMenu](https://tech.skbkontur.ru/kontur-ui/docs/components/tooltipmenu.md) — используйте, если меню должно отображаться в тултипе.
- [Kebab](https://tech.skbkontur.ru/kontur-ui/docs/components/kebab.md) — используйте узкую кнопку для малоиспользуемых ссылок и действий.
- [Select](https://tech.skbkontur.ru/kontur-ui/docs/components/select.md) — используйте для выбора значения из набора вариантов.
- [MenuItem](https://tech.skbkontur.ru/kontur-ui/docs/components/menuitem.md), [MenuSeparator](https://tech.skbkontur.ru/kontur-ui/docs/components/menuseparator.md), [MenuHeader](https://tech.skbkontur.ru/kontur-ui/docs/components/menuheader.md), [MenuFooter](https://tech.skbkontur.ru/kontur-ui/docs/components/menufooter.md) — элементы внутри меню.

## Примеры

### Базовый пример

Базовый пример с подписью и элементами меню в `children`.

```tsx
return (
    <Dropdown caption="Открыть меню">
      <MenuHeader>Действия</MenuHeader>
      <MenuSeparator />
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem comment="С дополнительным описанием">Пункт 2</MenuItem>
      <MenuSeparator />
      <MenuItem>Пункт 3</MenuItem>
    </Dropdown>
  );
```

### Размер

Проп `size` задаёт размер кнопки-меню.

```tsx
return (
    <Gapped vertical>
      <Dropdown caption="Маленький" size="small">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Средний" size="medium">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Большой" size="large">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Стиль кнопки

Проп `use` задаёт визуальный стиль кнопки-меню.
Доступные стили соответствуют кнопке, подробнее в [Button](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-button--docs#%D1%81%D1%82%D0%B8%D0%BB%D1%8C).

```tsx
return (
    <Gapped>
      <Dropdown caption="Accent" use="accent">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Outline" use="outline">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Success" use="success">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Иконка

Проп `icon` добавляет иконку слева от подписи кнопки.

```tsx
return (
    <Dropdown caption="С иконкой" icon={<IconUiFilterFunnelRegular16 />}>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
    </Dropdown>
  );
```

### Ширина кнопки

Проп `width` задаёт ширину кнопки-меню. Может быть в пикселях, процентах или других конкретных единицах. Заданная ширина применяется к полю и выпадающему списку.

```tsx
return (
    <Gapped>
      <Dropdown caption="Кнопка шириной 220px" width={220}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Кнопка шириной 50%" width={'50%'}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Ширина меню

Проп `menuWidth` задаёт ширину выпадающего меню.

```tsx
return (
    <Gapped>
      <Dropdown caption="Ширина меню 320px" menuWidth={320}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Ширина меню 150%" menuWidth={'150%'}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Максимальная высота меню

Проп `maxMenuHeight` ограничивает максимальную высоту меню.

```tsx
return (
    <Dropdown caption="Высота меню" maxMenuHeight={120}>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
      <MenuItem>Пункт 3</MenuItem>
      <MenuItem>Пункт 4</MenuItem>
      <MenuItem>Пункт 5</MenuItem>
      <MenuItem>Пункт 6</MenuItem>
      <MenuItem>Пункт 7</MenuItem>
      <MenuItem>Пункт 8</MenuItem>
    </Dropdown>
  );
```

### Расположение выпадающего меню

Проп `menuPos` фиксирует расположение выпадающего меню. Оно может быть под полем — `"bottom"` или над полем — `"top"`.
По умолчанию меню раскрывается под полем, а если меню находится близко к нижней границе страницы, то оно динамически меняет расположение и раскрывается над полем.

```tsx
return (
    <Gapped>
      <Dropdown caption="Меню снизу" menuPos="bottom">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Меню сверху" menuPos="top">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Выравнивание выпадающего меню

Проп `menuAlign` выравнивает выпадающий список. Выпадающий список может быть прикреплен к левому краю — `"left"` или к правому — `"right"`.

```tsx
return (
    <Gapped>
      <Dropdown caption="Выравнивание слева" menuAlign="left" menuWidth={260}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Выравнивание справа" menuAlign="right" menuWidth={260}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Выравнивание пунктов меню

Проп `preventIconsOffset` отключает выравнивание текста пунктов меню относительно иконок в других пунктах.

```tsx
return (
    <Gapped>
      <Dropdown caption="Без выравнивания" preventIconsOffset>
        <MenuItem icon={<IconNatureFxLightningALight16 />}>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
        <MenuItem>Пункт 3</MenuItem>
      </Dropdown>
      <Dropdown caption="С выравниванием">
        <MenuItem icon={<IconNatureFxLightningALight16 />}>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
        <MenuItem>Пункт 3</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### Отключение портала

Проп `disablePortal` отключает рендер через портал.

```tsx
return (
    <Dropdown caption="Без портала" disablePortal>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
    </Dropdown>
  );
```

### Состояние блокировки

Проп `disabled` переводит компонент в недоступное состояние.

```tsx
return (
    <Dropdown caption="Недоступно" disabled>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
    </Dropdown>
  );
```

### Состояние ошибки

Проп `error` показывает состояние ошибки.

```tsx
return (
    <Dropdown caption="Ошибка" error>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
    </Dropdown>
  );
```

### Состояние предупреждения

Проп `warning` показывает состояние предупреждения.

```tsx
return (
    <Dropdown caption="Предупреждение" warning>
      <MenuItem>Пункт 1</MenuItem>
      <MenuItem>Пункт 2</MenuItem>
    </Dropdown>
  );
```

### События открытия и закрытия

Коллбеки `onOpen` и `onClose` вызываются при открытии и закрытии меню.

```tsx
const [status, setStatus] = React.useState('Закрыто');
return (
    <Gapped vertical>
      <Dropdown caption="Открыть" onOpen={() => setStatus('Открыто')} onClose={() => setStatus('Закрыто')}>
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <span>{`Статус меню: ${status}`}</span>
    </Gapped>
  );
```

### Кастомизация: управление через ref

Публичные методы `open()` и `close()` доступны через `ref`.

```tsx
const dropdownRef = React.useRef<Dropdown>(null);
return (
    <Gapped>
      <Dropdown ref={dropdownRef} caption="Меню">
        <MenuItem>Пункт 1</MenuItem>
        <MenuItem>Пункт 2</MenuItem>
      </Dropdown>
      <button type="button" onClick={() => dropdownRef.current?.open()}>
        Открыть через ref
      </button>
      <button type="button" onClick={() => dropdownRef.current?.close()}>
        Закрыть через ref
      </button>
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

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

`Dropdown` адаптивен: на мобильных устройствах раскрывающееся меню открывается в мобильном попапе (`MobilePopup`).

Мобильный режим активируется при ширине вьюпорта < `768px`.

Если нужно настроить пороги переключения между десктопным и мобильным режимами, используйте настройки из раздела [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/Dropdown/Dropdown.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Dropdown/Dropdown.tsx)
