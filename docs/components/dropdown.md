# Dropdown

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu_dropdown--docs)

## Props

- **caption**: Текст кнопки-меню.
- **icon?**: Добавляет иконку слева от текста кнопки.
- **width?**: Ширина кнопки-меню. Если `menuWidth` не задан, такая же минимальная ширина применяется к раскрывающемуся меню.
- **disablePortal?**: Отключает использование портала.
- **disabled?**: Блокирует компонент.
- **error?**: Показывает состояние ошибки.
- **warning?**: Показывает состояние предупреждения.
- **maxMenuHeight?**: Ограничивает максимальную высоту раскрывающегося меню.
- **menuPos?**: Фиксирует положение раскрывающегося меню относительно кнопки-меню.
- **menuAlign?**: Выравнивает раскрывающееся меню относительно кнопки-меню.
- **menuWidth?**: Ширина раскрывающегося меню.
- **size?**: Размер кнопки-меню.
- **use?**: Визуальный стиль кнопки-меню.
- **onClose?**: Вызывается при закрытии раскрывающегося меню.
- **onOpen?**: Вызывается при открытии раскрывающегося меню.
- **onMouseEnter?**: Вызывается при наведении курсора (событие `onmouseenter`). Разницу с `onMouseOver` смотрите в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave).
- **onMouseLeave?**: Вызывается при уходе курсора с элемента (событие `onmouseleave`).
- **onMouseOver?**: Вызывается при движении курсора над элементом (событие `onmouseover`).

```jsx
import { Dropdown } from '@skbkontur/react-ui';
```

Кнопка-меню `Dropdown` объединяет действия и открывает раскрывающееся меню.

## Использование

Используйте кнопку-меню:

- когда не хватает места для нескольких кнопок;
- когда названия действий очень длинные;
- когда действия редко используются или объединены по смыслу.

## Альтернативы и дополнения

- [DropdownMenu](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-dropdownmenu--docs) — выбирайте, когда нужен более гибкий сценарий:
  произвольный `caption` (в том числе render-function), кастомные `header`/`footer`, управление `positions`.
- [Select](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-select--docs) — используйте для выбора значения из набора вариантов.

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

`Dropdown` адаптивен: на мобильных устройствах раскрывающееся меню открывается в мобильном попапе (`MobilePopup`). Поведение включается настройками адаптивности React UI.

Если нужно настроить пороги переключения между десктопным и мобильным режимами, используйте настройки из раздела [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs).

### ExampleBasic

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

### ExampleSize

Проп `size` задаёт размер кнопки-меню.

```tsx
return (
    <Gapped vertical>
      <Dropdown caption="Маленький" size="small">
        <MenuItem>Small 1</MenuItem>
        <MenuItem>Small 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Средний" size="medium">
        <MenuItem>Medium 1</MenuItem>
        <MenuItem>Medium 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Большой" size="large">
        <MenuItem>Large 1</MenuItem>
        <MenuItem>Large 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### ExampleUse

Проп `use` задаёт визуальный стиль кнопки-меню. Доступные стили соответствуют кнопке, подробнее в [Button](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-button--docs#%D1%81%D1%82%D0%B8%D0%BB%D1%8C).

```tsx
return (
    <Gapped>
      <Dropdown caption="Default" use="default">
        <MenuItem>Default 1</MenuItem>
        <MenuItem>Default 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Primary" use="primary">
        <MenuItem>Primary 1</MenuItem>
        <MenuItem>Primary 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Danger" use="danger">
        <MenuItem>Danger 1</MenuItem>
        <MenuItem>Danger 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### ExampleIcon

Проп `icon` добавляет иконку слева от подписи кнопки.

```tsx
return (
    <Dropdown caption="С иконкой" icon={<UiFilterFunnelIcon16Regular />}>
      <MenuItem>Icon 1</MenuItem>
      <MenuItem>Icon 2</MenuItem>
    </Dropdown>
  );
```

### ExampleDisabled

Проп `disabled` переводит компонент в недоступное состояние.

```tsx
return (
    <Dropdown caption="Недоступно" disabled>
      <MenuItem>Disabled 1</MenuItem>
      <MenuItem>Disabled 2</MenuItem>
    </Dropdown>
  );
```

### ExampleError

Проп `error` показывает состояние ошибки.

```tsx
return (
    <Dropdown caption="Ошибка" error>
      <MenuItem>Error 1</MenuItem>
      <MenuItem>Error 2</MenuItem>
    </Dropdown>
  );
```

### ExampleWarning

Проп `warning` показывает состояние предупреждения.

```tsx
return (
    <Dropdown caption="Предупреждение" warning>
      <MenuItem>Warning 1</MenuItem>
      <MenuItem>Warning 2</MenuItem>
    </Dropdown>
  );
```

### ExampleWidth

Проп `width` задаёт ширину кнопки-меню. Может быть в пикселях, процентах или других конкретных единицах. Заданная ширина применяется к полю и выпадающему списку.

```tsx
return (
    <div>
      <Dropdown caption="Кнопка шириной 220px" width={220}>
        <MenuItem>Width 1</MenuItem>
        <MenuItem>Width 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Кнопка шириной 50%" width={'50%'}>
        <MenuItem>Width 1</MenuItem>
        <MenuItem>Width 2</MenuItem>
      </Dropdown>
    </div>
  );
```

### ExampleMenuWidth

Проп `menuWidth` задаёт ширину выпадающего меню.

```tsx
return (
    <div>
      <Dropdown caption="Ширина меню 320px" menuWidth={320}>
        <MenuItem>MenuWidth 1</MenuItem>
        <MenuItem>MenuWidth 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Ширина меню 150%" menuWidth={'150%'}>
        <MenuItem>MenuWidth 1</MenuItem>
        <MenuItem>MenuWidth 2</MenuItem>
      </Dropdown>
    </div>
  );
```

### ExampleMaxMenuHeight

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

### ExampleMenuPos

Проп `menuPos` фиксирует расположение выпадающего меню. Оно может быть под полем — `"bottom"` или над полем — `"top"`. По умолчанию меню раскрывается под полем, а если меню находится близко к нижней границе страницы, то оно динамически меняет расположение и раскрывается над полем.

```tsx
return (
    <Gapped>
      <Dropdown caption="Меню снизу" menuPos="bottom">
        <MenuItem>Bottom 1</MenuItem>
        <MenuItem>Bottom 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Меню сверху" menuPos="top">
        <MenuItem>Top 1</MenuItem>
        <MenuItem>Top 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### ExampleMenuAlign

Проп `menuAlign` выравнивает выпадающий список. Выпадающий список может быть прикреплен к левому краю — `"left"` или к правому — `"right"`.

```tsx
return (
    <Gapped>
      <Dropdown caption="Выравнивание слева" menuAlign="left" menuWidth={260}>
        <MenuItem>Left 1</MenuItem>
        <MenuItem>Left 2</MenuItem>
      </Dropdown>
      <Dropdown caption="Выравнивание справа" menuAlign="right" menuWidth={260}>
        <MenuItem>Right 1</MenuItem>
        <MenuItem>Right 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```

### ExampleDisablePortal

Проп `disablePortal` отключает рендер через портал.

```tsx
return (
    <Dropdown caption="Без портала" disablePortal>
      <MenuItem>Portal 1</MenuItem>
      <MenuItem>Portal 2</MenuItem>
    </Dropdown>
  );
```

### ExampleOpenCloseCallbacks

Коллбеки `onOpen` и `onClose` вызываются при открытии и закрытии меню.

```tsx
const [status, setStatus] = React.useState('Закрыто');

  return (
    <Gapped vertical>
      <Dropdown caption="Открыть" onOpen={() => setStatus('Открыто')} onClose={() => setStatus('Закрыто')}>
        <MenuItem>Callbacks 1</MenuItem>
        <MenuItem>Callbacks 2</MenuItem>
      </Dropdown>
      <span>{`Статус меню: ${status}`}</span>
    </Gapped>
  );
```

### ExampleRefMethods

Публичные методы `open()` и `close()` доступны через `ref`.

```tsx
const dropdownRef = React.useRef<Dropdown>(null);

  return (
    <Gapped>
      <button type="button" onClick={() => dropdownRef.current?.open()}>
        Открыть через ref
      </button>
      <button type="button" onClick={() => dropdownRef.current?.close()}>
        Закрыть через ref
      </button>
      <Dropdown ref={dropdownRef} caption="Меню">
        <MenuItem>Ref 1</MenuItem>
        <MenuItem>Ref 2</MenuItem>
      </Dropdown>
    </Gapped>
  );
```