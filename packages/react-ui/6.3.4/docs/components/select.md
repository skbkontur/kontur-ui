# Select

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-select--docs)

Раскрывающийся список позволяет выбрать значение из заранее известного набора вариантов.

## Import

```tsx
import { Select } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `_renderButton`

type: `(params: ButtonParams) => ReactNode` · optional

Отрисовывает кнопку.

### `defaultValue`

type: `TValue` · optional

Значение по умолчанию.

### `menuOffset`

type: `number` · optional · default: `0`

Смещение списка относительно поля по горизонтали. При нуле смещения нет, при положительном значении — список сдвигается вправо, при отрицательном — влево.

### `disablePortal`

type: `boolean` · optional

По умолчанию список рендерится через [паттерн Portal](https://react.dev/reference/react-dom/createPortal). Проп отключает использование Portal и список рендерится как обычный блок с абсолютным позиционированием внутри компонента.

### `disabled`

type: `boolean` · optional

Блокирует раскрывающийся список.

### `error`

type: `boolean` · optional

Переводит компонент в состояние ошибки.

### `filterItem`

type: `(value: TValue, item: TItem, pattern: string) => boolean` · optional

Отфильтровывает элементы по заданному паттерну.

### `items`

type: `SelectItem<TValue, TItem>[]` · optional

Набор значений. Поддерживаются любые перечисляемые типы, в том числе `Array`, `Map`, `Immutable.Map`.

Элементы воспринимаются следующим образом:
- если элемент — это массив, то первый элемент является значением, второй — отображается в списке, а третий – комментарий;
- если элемент не является массивом, то он используется и для отображения, и для значения.

Для вставки разделителя между значениями можно использовать `Select.SEP`.
@example Вставить невыделяемый элемент со своей разметкой можно так:
```
<Select ...
  items={[Select.staticElement(() => <div>My Element</div>)]}
/>
```
@example Чтобы добавить стандартный отступ для статического элемента:
```
<Select.Item>My Element</Select.Item>
```

### `maxMenuHeight`

type: `number` · optional

Максимальная высота раскрывающегося списка.

### `maxWidth`

type: `MaxWidth<string | number>` · optional

Максимальная ширина кнопки.

### `positions`

type: `("top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right")[]` · optional · default: `['bottom left', 'bottom right', 'top left', 'top right']`

Список значений, определяющих расположение списка относительно кнопки. Если во всех позициях список выходит за пределы `viewport`, будет использована первая из этого списка.

`"top left"`, `"top center"`, `"top right"`, `"right top"`, `"right middle"`, `"right bottom"`, `"bottom left"`, `"bottom center"`, `"bottom right"`, `"left top"`, `"left middle"`, `"left bottom"`.

### `menuPos`

type: `"top" | "bottom" | "middle"` · optional

Фиксирует расположение списка относительно кнопки.

### `menuAlign`

type: `"left" | "right"` · optional

Выравнивание списка.

### `menuWidth`

type: `Width<string | number>` · optional

Ширина списка.

### `onValueChange`

type: `(value: TValue) => void` · optional

Событие изменения значения (`value`) в поле.

### `onClose`

type: `() => void` · optional

Событие закрытия меню.

### `onMouseEnter`

type: `(e: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие наведения мышкой (событие `onmouseenter`). Смотрите разницу с `onMouseOver` в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave).

### `onMouseLeave`

type: `(e: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие ухода мышки с объекта (событие `onmouseleave`).

### `onMouseOver`

type: `(e: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие наведения мышкой (событие `onmouseover`).

### `onKeyDown`

type: `(e: KeyboardEvent<HTMLElement>) => void` · optional

Событие нажатия кнопки на клавиатуре.

### `onOpen`

type: `() => void` · optional

Событие открытия меню.

### `placeholder`

type: `ReactNode` · optional

Текст, который отображается если не введено никакое значение.

### `renderItem`

type: `(value: TValue, item?: TItem) => ReactNode` · optional

Отрисовывает элементы в списке.

### `renderValue`

type: `(value: TValue, item?: TItem) => ReactNode` · optional

Отрисовывает выбранный элемент.

### `areValuesEqual`

type: `(value1: TValue, value2: TValue) => boolean` · optional

Сравнивает `value` с элементом из `items`.

### `search`

type: `boolean` · optional

Отображает строчку поиска в списке значений.

### `value`

type: `TValue` · optional

Задаёт значение.

### `theme`

type: `Partial<typeof BasicThemeClass> | Readonly<typeof BasicThemeClass>` · optional

Объект с переменными темы.

### `width`

type: `string | number` · optional

Ширина раскрывающегося списка.

### `warning`

type: `boolean` · optional

Переводит компонент в состояние предупреждения.

### `use`

type: `"link" | "text" | "fill" | "default" | "outline" | "accent" | "danger" | "success" | "pay" | "backless" | "primary"` · optional · default: `default`

Стиль кнопки. Примеры стилей смотрите [в документации компонента Button](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/button.md).

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер раскрывающегося списка.

### `onFocus`

type: `FocusEventHandler<HTMLElement>` · optional

HTML-событие `onfocus`.

### `onBlur`

type: `FocusEventHandler<HTMLElement>` · optional

HTML-событие `onblur`.

### `mobileMenuHeaderText`

type: `string` · optional

Текст заголовка списка в мобильной версии.

### `preventIconsOffset`

type: `boolean` · optional

Отключает выравнивание текста элементов в списке относительно иконок в других элементах.

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

Используйте раскрывающийся список при:

- заполнении форм, например, для выбора месяца;
- переключении состояний, например, фильтра;
- выборе предустановленных настроек, например, частоты уведомлений или часового пояса.

**Когда не использовать**

Не используйте раскрывающийся список для выбора элементов меню. В таком случае воспользуйтесь компонентом [Dropdown](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/dropdown.md).

## Примеры

### ExampleBasic

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} />;
```

### Размер

Проп `size` задаёт размер раскрывающегося списка.

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

### Фиксированная ширина

Проп `width` задаёт фиксированную ширину раскрывающегося списка, в том числе ширину кнопки.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} width={250} />;
```

### Максимальная ширина

Проп `maxWidth` задаёт максимальную ширину кнопки, не влияет на ширину списка.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор', 'Универсальный передаточный документ (УПД)'];
return <Select items={items} value={value} onValueChange={setValue} maxWidth={150} />;
```

### Высота списка

Проп `maxMenuHeight` задаёт максимальную высоту списка.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} maxMenuHeight={100} />;
```

### Фиксированная ширина списка

Проп `menuWidth` задаёт фиксированную ширину списка, не влияет на ширину кнопки.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} menuWidth={180} />;
```

### Разделитель между значениями

Добавить визуальный разделитель между значениями можно через константу `Select.SEP` — рендерится как линия. Размещать разделитель можно в любом месте передаваемого массива.

```tsx
const [value, setValue] = React.useState();
const items = ['Любой', Select.SEP, 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} />;
```

### Расположение списка

Проп `menuPos` фиксирует расположение выпадающего списка. Он может быть под кнопкой — `"bottom"`, над ней — `"top"` или посередине — `"middle"`.
По умолчанию список отображается под кнопкой, а если не хватает места, то динамически меняет расположение и показывается над кнопкой.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} menuPos={'top'} />;
```

### Выравнивание списка

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

### Список позиций

Проп `positions` задаёт расположение и выравнивание списка относительно кнопки, можно передать одно значение или список значений — если во всех позициях список выходит за пределы `viewport`, будет использована первая из этого списка.
Возможные значения: `"top left"`, `"top center"`, `"top right"`, `"right top"`, `"right middle"`, `"right bottom"`, `"bottom left"`, `"bottom center"`, `"bottom right"`, `"left top"`, `"left middle"`, `"left bottom"`.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} positions={['right middle']} />;
```

### Смещение списка по горизонтали

Проп `menuOffset` смещает список относительно кнопки по горизонтали. При 0 — смещения нет, при положительном значении — список сдвигается влево, при отрицательном — вправо.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} menuOffset={20} />;
```

### Плейсхолдер

Проп `placeholder` переопределяет текст, который отображается если не введено никакое значение.

```tsx
const [value, setValue] = React.useState();
const items = ['Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} placeholder="Выберите" />;
```

### Строка поиска

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

### Очистка значения

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

### Запрет выделения и выбора

Проп `isNotSelectable` для Select.Item запрещает выделение и выбор этого значения из списка.

```tsx
const [value, setValue] = React.useState();
const items = [
    <Select.Item key="not-selectable" isNotSelectable>
      Невыбираемое значение
    </Select.Item>,
    'Счёт-фактура',
    'Акт',
    'Накладная',
    'Договор',
  ];
return <Select items={items} value={value} onValueChange={setValue} />;
```

### Состояние блокировки

Проп `disabled` блокирует раскрывающийся список.

```tsx
const [value, setValue] = React.useState();
const items = ['Любой', 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} disabled />;
```

### Состояние ошибки

Проп `error` переводит раскрывающийся список в состояние ошибки.

```tsx
const [value, setValue] = React.useState();
const items = ['Любой', 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
return <Select items={items} value={value} onValueChange={setValue} error />;
```

### Переопределение `renderValue`, `renderItem` и `areValuesEqual`

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

### Кастомизация кнопки

Проп `_renderButton` позволяет задать функцию отрисовки кнопки. В примере заданы параметры для отображения кнопки-ссылки с иконкой.

```tsx
const [value, setValue] = React.useState<string>();
const items = ['Любой', 'Счёт-фактура', 'Акт', 'Накладная', 'Договор'];
const renderLinkButton = (params: ButtonParams) => {
    const linkProps = {
      disabled: params.disabled,
      icon: <IconPeople3Regular16 />,
      _button: true,
      _buttonOpened: params.opened,

      onClick: params.onClick,
      onKeyDown: params.onKeyDown,
    };

    return <Link {...linkProps}>{params.label}</Link>;
  };
return <Select items={items} value={value} onValueChange={setValue} _renderButton={renderLinkButton} />;
```

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

## Адаптивность

Раскрывающийся список адаптивен: на мобильных устройствах он открывается на весь экран устройства и становится фокусным активным элементом, что упрощает работу с ним. Мобильный режим активируется при ширине вьюпорта < `768px`.

В мобильном режиме у раскрывающегося списка появляется заголовок, который необходимо передать через проп `mobileMenuHeaderText`. Полное описание адаптивного вида и поведения компонента смотрите в [Гайде](https://guides.kontur.ru/components/selection-elements/select/#Аdaptivnost').

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs).

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Source

[`components/Select/Select.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Select/Select.tsx)
