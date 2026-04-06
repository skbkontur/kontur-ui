# Select

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_select--docs)

## Import

```jsx
import { Select } from '@skbkontur/react-ui';
```

## Props

- **_renderButton?**: Отрисовывает кнопку.
- **defaultValue?**: Значение по умолчанию.
- **menuOffset?**: Смещение списка относительно поля по горизонтали. При нуле смещения нет, при положительном значении — список сдвигается вправо, при отрицательном — влево. (default: `0`)
- **disablePortal?**: По умолчанию список рендерится через [паттерн Portal](https://react.dev/reference/react-dom/createPortal). Проп отключает использование Portal и список рендерится как обычный блок с абсолютным позиционированием внутри компонента.
- **disabled?**: Блокирует раскрывающийся список.
- **error?**: Меняет визуальное отображение раскрывающегося списка на состояние ошибки. Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **filterItem?**: Отфильтровывает элементы по заданному паттерну.
- **items?**: Набор значений. Поддерживаются любые перечисляемые типы, в том числе `Array`, `Map`, `Immutable.Map`. Элементы воспринимаются следующим образом: - если элемент — это массив, то первый элемент является значением, второй — отображается в списке, а третий – комментарий; - если элемент не является массивом, то он используется и для отображения, и для значения. Для вставки разделителя между значениями можно использовать `Select.SEP`. Вставить невыделяемый элемент со своей разметкой можно так: ``` <Select ... items={[Select.staticElement(() => <div>My Element</div>)]} /> ``` Чтобы добавить стандартный отступ для статического элемента: ``` <Select.Item>My Element</Select.Item> ```
- **maxMenuHeight?**: Максимальная высота раскрывающегося списка.
- **maxWidth?**: Максимальная ширина кнопки.
- **positions?**: Список значений, определяющих расположение списка относительно кнопки. Если во всех позициях список выходит за пределы `viewport`, будет использована первая из этого списка. `"top left"`, `"top center"`, `"top right"`, `"right top"`, `"right middle"`, `"right bottom"`, `"bottom left"`, `"bottom center"`, `"bottom right"`, `"left top"`, `"left middle"`, `"left bottom"`. (default: `['bottom left', 'bottom right', 'top left', 'top right']`)
- **menuPos?**: Фиксирует расположение списка относительно кнопки.
- **menuAlign?**: Выравнивание списка.
- **menuWidth?**: Ширина списка.
- **onValueChange?**: Событие изменения значения (`value`) в поле.
- **onClose?**: Событие закрытия меню.
- **onMouseEnter?**: Событие наведения мышкой (событие `onmouseenter`). Смотрите разницу с `onMouseOver` в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave).
- **onMouseLeave?**: Событие ухода мышки с объекта (событие `onmouseleave`).
- **onMouseOver?**: Событие наведения мышкой (событие `onmouseover`).
- **onKeyDown?**: Событие нажатия кнопки на клавиатуре.
- **onOpen?**: Событие открытия меню.
- **placeholder?**: Текст, который отображается если не введено никакое значение.
- **renderItem?**: Отрисовывает элементы в списке.
- **renderValue?**: Отрисовывает выбранный элемент.
- **areValuesEqual?**: Сравнивает `value` с элементом из `items`.
- **search?**: Отображает строчку поиска в списке значений.
- **value?**: Задаёт значение.
- **theme?**: Объект с переменными темы.
- **width?**: Ширина раскрывающегося списка.
- **warning?**: Меняет визуальное отображение поля на состояние предупреждения. Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **use?**: Стиль кнопки. Примеры стилей смотрите [в документации компонента Button](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-button--docs).
- **size?**: Размер раскрывающегося списка. (default: `small`)
- **onFocus?**: HTML-событие `onfocus`.
- **onBlur?**: HTML-событие `onblur`.
- **mobileMenuHeaderText?**: Текст заголовка списка в мобильной версии.

## Использование

Используйте раскрывающийся список при:

- заполнении форм, например, для выбора месяца;
- переключении состояний, например, фильтра;
- выборе предустановленных настроек, например, частоты уведомлений или часового пояса.

Не используйте раскрывающийся список для выбора элементов меню. В таком случае воспользуйтесь компонентом [Dropdown](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_menu-dropdown--docs).

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

## Адаптивность

Раскрывающийся список адаптивен: на мобильных устройствах он открывается на весь экран устройства и становится фокусным активным элементом, что упрощает работу с ним. Мобильный режим активируется при ширине вьюпорта `(max-width: 576px)` и наличии сенсорного экрана `(pointer: coarse)`.

В мобильном режиме у раскрывающегося списка появляется заголовок, который необходимо передать через проп `mobileMenuHeaderText`. Полное описание адаптивного вида и поведения компонента смотрите в [Гайде](https://guides.kontur.ru/components/selection-elements/select/#Аdaptivnost').

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs).

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

### ExampleBasic

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} />;
```

### ExampleSize

Проп `size` задаёт размер раскрывающегося списка. По умолчанию `"small"`.

```tsx
const [valueSmall, setValueSmall] = React.useState('Маленький');
  const [valueMedium, setValueMedium] = React.useState('Средний');
  const [valueLarge, setValueLarge] = React.useState('Большой');

  const items = ['Маленький', 'Средний', 'Большой'];

  return (
    <Gapped vertical>
      <Select items={items} value={valueSmall} onValueChange={setValueSmall} size={'small'} />
      <Select items={items} value={valueMedium} onValueChange={setValueMedium} size={'medium'} />
      <Select items={items} value={valueLarge} onValueChange={setValueLarge} size={'large'} />
    </Gapped>
  );
```

### ExampleWidth

Проп `width` задаёт фиксированную ширину раскрывающегося списка, в том числе ширину кнопки.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} width={250} />;
```

### ExampleMaxWidth

Проп `maxWidth` задаёт максимальную ширину кнопки, не влияет на ширину списка.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор', 'Универсальный передаточный документ (УПД)'];

  return <Select items={items} value={value} onValueChange={setValue} maxWidth={150} />;
```

### ExampleMaxMenuHeight

Проп `maxMenuHeight` задаёт максимальную высоту списка.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} maxMenuHeight={100} />;
```

### ExampleMenuWidth

Проп `menuWidth` задаёт фиксированную ширину списка, не влияет на ширину кнопки.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} menuWidth={180} />;
```

### ExampleSelectSep

Добавить визуальный разделитель между значениями можно через константу `Select.SEP` — рендерится как линия. Размещать разделитель можно в любом месте передаваемого массива.

```tsx
const [value, setValue] = React.useState();

  const items = ['Любой', Select.SEP, 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} />;
```

### ExampleMenuPos

Проп `menuPos` фиксирует расположение выпадающего списка. Он может быть под кнопкой — `"bottom"`, над ней — `"top"` или посередине — `"middle"`. По умолчанию список отображается под кнопкой, а если не хватает места, то динамически меняет расположение и показывается над кнопкой.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} menuPos={'top'} />;
```

### ExampleMenuAlign

Проп `menuAlign` выравнивает список. Список может быть прикреплен к левому краю кнопки — "left" или к правому — "right".

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return (
    <Gapped vertical>
      <Gapped>
        <Select items={items} value={value} onValueChange={setValue} menuAlign={'left'} menuWidth={120} />
        <span>"left"</span>
      </Gapped>
      <Gapped>
        <Select items={items} value={value} onValueChange={setValue} menuAlign={'right'} menuWidth={120} />
        <span>"right"</span>
      </Gapped>
    </Gapped>
  );
```

### ExamplePositions

Проп `positions` задаёт расположение и выравнивание списка относительно кнопки, можно передать одно значение или список значений — если во всех позициях список выходит за пределы `viewport`, будет использована первая из этого списка. Возможные значения: `"top left"`, `"top center"`, `"top right"`, `"right top"`, `"right middle"`, `"right bottom"`, `"bottom left"`, `"bottom center"`, `"bottom right"`, `"left top"`, `"left middle"`, `"left bottom"`.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} positions={['right middle']} />;
```

### ExampleMenuOffset

Проп `menuOffset` смещает список относительно кнопки по горизонтали. При 0 — смещения нет, при положительном значении — список сдвигается влево, при отрицательном — вправо.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} menuOffset={20} />;
```

### ExamplePlaceholder

Проп `placeholder` переопределяет текст, который отображается если не введено никакое значение.

```tsx
const [value, setValue] = React.useState();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} placeholder="Выберите" />;
```

### ExampleSearch

Проп `search` отображает строчку поиска в списке значений. Дополнительно через проп `filterItem` можно фильтровать элементы по заданному паттерну.

```tsx
const [value, setValue] = React.useState<string>();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  const filterItem = (value: string | undefined, item: string, pattern: string) => {
    console.log({ value, pattern, item });
    if (!pattern) {
      return true;
    }

    const normalize = (s: string) =>
      String(s)
        .toLowerCase()
        .replace(/ё/g, 'е')
        .replace(/[^а-яa-z0-9]+/g, '');

    return normalize(item).includes(normalize(pattern));
  };

  return <Select items={items} value={value} onValueChange={setValue} search filterItem={filterItem} />;
```

### ExampleClear

Очистить выбранное значение в раскрывающемся списке можно только с помощью `null`.

```tsx
const [value, setValue] = React.useState<string | null>();

  const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return (
    <Gapped>
      <Select items={items} value={value} onValueChange={setValue} />
      <Button onClick={() => setValue(null)}>Передать null</Button>
    </Gapped>
  );
```

### ExampleIsNotSelectable

Проп `isNotSelectable` для Select.Item запрещает выделение и выбор этого значения из списка.

```tsx
const [value, setValue] = React.useState();

  const items = [
    <Select.Item isNotSelectable>Невыбираемое значение</Select.Item>,
    'Счёт-фактура',
    'Акт',
    'Накладная',
    'Договор',
  ];

  return <Select items={items} value={value} onValueChange={setValue} />;
```

### ExampleDisabled

Проп `disabled` блокирует раскрывающийся список.

```tsx
const [value, setValue] = React.useState();

  const items = ['Любой', 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} disabled />;
```

### ExampleError

Проп `error` переводит раскрывающийся список в состояние ошибки.

```tsx
const [value, setValue] = React.useState();

  const items = ['Любой', 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  return <Select items={items} value={value} onValueChange={setValue} error />;
```

### ExampleCustomValue

Если элемент в пропе `items` имеет кастомный тип, то компоненту нужны подсказки по работе с ним.

```tsx
const [value, setValue] = React.useState<{ color: string; hex: string }>({
    color: 'Красный',
    hex: '#f00',
  });

  return (
    <Select<{ color: string; hex: string }>
      items={[
        { color: 'Красный', hex: '#f00' },
        { color: 'Синий', hex: '#00f' },
        { color: 'Зелёный', hex: '#0f0' },
      ]}
      value={value}
      onValueChange={setValue}
      areValuesEqual={(a, b) => a.hex === b.hex}
      renderValue={(item) => item.color}
      renderItem={(item) => (
        <>
          {item.color} <span style={{ color: item.hex }}>◼</span>
        </>
      )}
    />
  );
```

### ExampleRenderButton

Проп `_renderButton` позволяет задать функцию отрисовки кнопки. В примере заданы параметры для отображения кнопки-ссылки с иконкой.

```tsx
const [value, setValue] = React.useState<string>();

  const items = ['Любой', 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];

  const renderLinkButton = (params: ButtonParams) => {
    const linkProps = {
      disabled: params.disabled,
      icon: <People3Icon />,
      _button: true,
      _buttonOpened: params.opened,

      onClick: params.onClick,
      onKeyDown: params.onKeyDown,
    };

    return <Link {...linkProps}>{params.label}</Link>;
  };

  return <Select items={items} value={value} onValueChange={setValue} _renderButton={renderLinkButton} />;
```