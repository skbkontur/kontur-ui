# ComboBox

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-combobox--docs)

Комбобокс — поле ввода с выпадающим списком подсказок, из которых пользователь может выбрать нужное. Открыть выпадающий список можно ещё до начала ввода значения, нажав на поле.

```jsx
import { ComboBox } from '@skbkontur/react-ui';
```

Значения определяются в пропе `getItems` — задаёт функцию поиска элементов, которая должна возвращать `Promise` с массивом значений. По умолчанию ожидаются объекты с типом `{ value: string, label: string }`.

## Все пропсы и методы

### `showClearIcon`

type: `"auto" | "always" | "never"` · optional · default: `never`

Показывает иконку очистки значения в заполненном поле.

### `align`

type: `"left" | "center" | "right"` · optional

Ввыравнивание текста в поле.

### `searchOnFocus`

type: `boolean` · optional · default: `true`

Вызывает функцию поиска `getItems` при фокусе и очистке поля ввода.

### `drawArrow`

type: `boolean` · optional · default: `true`

Отображает справа иконку в виде стрелки.

### `autoFocus`

type: `boolean` · optional

Устанавливает фокус на комбобоксе после окончания загрузки страницы.

### `borderless`

type: `boolean` · optional

Убирает обводку поля.

### `disablePortal`

type: `boolean` · optional

По умолчанию выпадающий список рендерится через [паттерн Portal](https://react.dev/reference/react-dom/createPortal). Проп отключает использование Portal и список рендерится как обычный блок с абсолютным позиционированием внутри компонента.

### `disabled`

type: `boolean` · optional

Блокирует комбобокс.

### `error`

type: `boolean` · optional

Переводит комбобокс в состояние ошибки.

### `leftIcon`

type: `InputIconType` · optional

Добавляет иконку слева.
При использовании `ReactNode` применяются дефолтные стили для иконки.
При использовании `() => ReactNode` применяются только стили для позиционирования.

### `rightIcon`

type: `InputIconType` · optional

Добавляет иконку справа.
При использовании `ReactNode` применяются дефолтные стили для иконки.
При использовании `() => ReactNode` применяются только стили для позиционирования.

### `getItems`

type: `(query: string) => Promise<ComboBoxExtendedItem<T>[]>` · required

Задаёт функцию поиска элементов, которая должна возвращать Promise с массивом значений.
По умолчанию ожидаются объекты с типом `{ value: string, label: string }`.
Элементы могут быть любого типа. В этом случае необходимо определить свойства `itemToId`, `renderValue`, `renderItem`, `valueToString`.

### `itemToId`

type: `(item: T) => string | number` · optional · default: `(item: ComboBoxItem) => item.value`

Сравнивает полученные результаты с `value`.

### `maxLength`

type: `number` · optional

Mаксимальная длина значения, которое пользователь может ввести в поле.

### `menuPos`

type: `"top" | "bottom"` · optional

Расположение выпадающего списка — над или под полем.

### `menuAlign`

type: `"left" | "right"` · optional · default: `left`

Выравнивание выпадающего меню.

### `onBlur`

type: `() => void` · optional

Событие потери комбобоксом фокуса.

### `onValueChange`

type: `(value: T) => void` · optional

Событие изменения значения (`value`) в поле.

### `onFocus`

type: `() => void` · optional

Событие получения комбобоксом фокуса.

### `onInputValueChange`

type: `(value: string) => string | void` · optional

Событие, которое вызывается при изменении текста в поле ввода, если результатом функции будет строка, то она станет следующим состоянием полем ввода.

**Не рекомендуется менять значение, передаваемое в проп `value`, внутри этой функции. Используйте для этих целей `onValueChange` или `onUnexpectedInput`. Иначе возможно неожиданное поведение компонента.**

### `onUnexpectedInput`

type: `(value: string) => void | T` · optional

Событие обработки ввода строки в поле ввода и последующей потерей фокуса компонентом.
Функция срабатывает с аргументом поля строки.
Если при потере фокуса в выпадающем списке будет только один элемент и результат `valueToString` с этим элементом будет совпадать со значение в текстовом поле, то сработает `onValueChange` со значением данного элемента.
Сама функция также может вернуть значение, не равное undefined, с которым будет вызван `onValueChange`. Если возвращаемое значение будет равно null, то сработает очистка текущего значения поля, а в режиме редактирования токен будет удален.

### `placeholder`

type: `string` · optional

Текст, который отображается если не введено никакое значение.

### `renderItem`

type: `(item: T, state?: MenuItemState) => ReactNode` · optional · default: `(item: ComboBoxItem) => item.label`

Отрисовывает элементы результата поиска.
Не применяется, если элемент является функцией или React-элементом.
@param item - элемент из результата поиска.
@param state ? - состояние элемента.
@returns React-элемент.

### `itemWrapper`

type: `(item: T) => ComponentType<{}>` · optional

Устанавливает компонент, заменяющий собой обёртку элементов результата поиска.
По умолчанию все элементы результата поиска оборачиваются в тег <button />.
@example itemWrapper={(item) => {
   if (item.value === 3) {
     return (props) => {
       return <a {...props} />
     }
   }
}}

### `renderNotFound`

type: `() => ReactNode` · optional

Отображает сообщение о пустом результате поиска. При `renderAddButton` не работает.

### `renderTotalCount`

type: `(found: number, total: number) => ReactNode` · optional

Отображает сообщение об общем количестве элементов.
@param found - количество элементов по результатам поиска. Учитывает только компонент MenuItem. Им "оборачиваются" элементы, возвращаемые `getItems()`.
@param total - количество всех элементов.

### `renderValue`

type: `(item: T) => ReactNode` · optional · default: `(item: ComboBoxItem) => item.label`

Отображает выбранное значение.

### `renderAddButton`

type: `(query?: string) => ReactNode` · optional

Отрисовывает кнопку добавления в выпадающем списке.

### `totalCount`

type: `number` · optional

Определяет общее количество элементов. Необходим для работы renderTotalCount.

### `value`

type: `T` · optional

Устанавливает выбранное в комбобоксе значение. Тип `value` совпадает с типом элементов в массиве, возвращаемом в `getItems`.

### `valueToString`

type: `(item: T) => string` · optional · default: `(item: ComboBoxItem) => item.label`

Возвращает строковое представление `value`. Необходимо при фокусировке.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер комбобокса.

### `warning`

type: `boolean` · optional

Переводит комбобокс в состояние предупреждения.

### `width`

type: `string | number` · optional

Ширина комбобокса.

### `maxMenuHeight`

type: `string | number` · optional

Максимальная высота выпадающего списка.

### `onMouseEnter`

type: `(e: MouseEvent<Element, MouseEvent>) => void` · optional

Событие наведения мышкой (событие `onmouseenter`). Смотрите разницу с `onMouseOver` в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave)

### `onMouseOver`

type: `(e: MouseEvent<Element, MouseEvent>) => void` · optional

Событие наведения мышкой (событие `onmouseover`).

### `onMouseLeave`

type: `(e: MouseEvent<Element, MouseEvent>) => void` · optional

Событие ухода мышки с объекта (событие `onmouseleave`).

### `onInputKeyDown`

type: `(e: KeyboardEvent<HTMLElement>) => void` · optional

Событие нажатия кнопки на клавиатуре.

### `inputMode`

type: `"none" | "search" | "email" | "tel" | "text" | "url" | "numeric" | "decimal"` · optional

Задаёт типы вводимых данных.

### `onBeforePasteInMask`

type: `MaskedInputOnBeforePasteValue` · optional

Событие вставки значения в поле с маской.

### `viewMode`

type: `"singleline" | "multiline" | "multiline-editing"` · optional · default: `singleline`

Режим отображения комбобокса:
- `"singleline"` — однострочное поле;
- `"multiline"` — многострочное поле;
- `"multiline-editing"` — поле становится многострочным только при редактировании.

Многострочные режимы не работают, если указан проп `mask`. В таком случае будет отображаться однострочное поле.

### `maxRows`

type: `number` · optional

Максимальное количество отображаемых строк, если для поля добавлен проп многострочного режима  — `"multiline"` или `"multiline-editing"`.

### `preventIconsOffset`

type: `boolean` · optional

Отключает выравнивание текста пунктов списка относительно иконок в других пунктах.

### `mask`

type: `string` · optional

Шаблон ввода, определяющий допустимые символы.

### `maskChar`

type: `string` · optional · default: `_`

Плейсхолдер, который отображается на месте ещё не введённых пользователем символов.

### `formatChars`

type: `Record<string, string>` · optional · default: `{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }`

Словарь правил для настройки маски, где:
ключ — символ для использования в маске;
значение — регулярка-правило.

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

В комбобоксе пользователь может сразу раскрыть весь список значений из справочника и выбрать нужное. Когда пользователь начинает вводить значение, список динамически фильтруется. Можно также разрешить пользователям добавлять свои значения в справочник, если их ещё там нет.

**Альтернативы и дополнения**

- [Autocomplete](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/autocomplete.md) — поле ввода со списком подсказок. Отличается от комбобокса тем, что в нём выпадающий список появляется только после ввода первого символа или изменении уже введенного значения, а в поле нет стрелки для раскрытия списка.
- [Select](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/select.md) — используйте раскрывающийся список, если среди значений не больше 25 вариантов.
- [RadioGroup](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/radiogroup.md) — используйте группу радиокнопок, если значений не больше 5.

## Примеры

### ExampleBasic

```tsx
const delay =
    (time: number) =>
    (args: Selected[]): Promise<Selected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
const maybeReject = (x: Selected[]) => (Math.random() * 3 < 1 ? Promise.reject() : Promise.resolve(x));
const getItems = (q: string): Promise<Selected[]> =>
    Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
        { value: 7, label: 'Анадырь' },
        { value: 8, label: 'Анапа' },
        { value: 9, label: 'Архангельск' },
        { value: 10, label: 'Архангельская область' },
        { value: 11, label: 'Астраханская область' },
        { value: 12, label: 'Астрахань' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    )
      .then(delay(500))
      .then(maybeReject);
const [selected, setSelected] = React.useState<Nullable<Selected>>({ value: 1, label: 'Абакан' });
const [error, setError] = React.useState(false);
const handleValueChange = (value: Selected) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
return (
    <Tooltip closeButton={false} render={() => 'Выберите значение из списка'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Введите или выберите из списка"
        value={selected}
      />
    </Tooltip>
  );
```

### Размер

Проп `size` задаёт размер комбобокса. По умолчанию `"small"`.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Маленький' },
        { value: 2, label: 'Средний' },
        { value: 3, label: 'Большой' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [valueSmall, setValueSmall] = React.useState({ value: 1, label: 'Маленький' });
const [valueMedium, setValueMedium] = React.useState({ value: 2, label: 'Средний' });
const [valueLarge, setValueLarge] = React.useState({ value: 3, label: 'Большой' });
return (
    <Gapped vertical>
      <ComboBox
        getItems={getItems}
        onValueChange={setValueSmall}
        placeholder="Введите размер"
        value={valueSmall}
        size={'small'}
      />
      <ComboBox
        getItems={getItems}
        onValueChange={setValueMedium}
        placeholder="Выберите размер"
        value={valueMedium}
        size={'medium'}
      />
      <ComboBox
        getItems={getItems}
        onValueChange={setValueLarge}
        placeholder="Выберите размер"
        value={valueLarge}
        size={'large'}
      />
    </Gapped>
  );
```

### Ширина комбобокса

Проп `width` задаёт ширину комбобокса. Может быть в пикселях, процентах или других конкретных единицах.
Заданная ширина применяется к полю и выпадающему списку.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [valuePercent, setValuePercent] = React.useState({ value: 1, label: 'Абакан' });
const [valueNumber, setValueNumber] = React.useState({ value: 2, label: 'Амурская область' });
return (
    <Gapped vertical>
      <ComboBox
        getItems={getItems}
        onValueChange={setValuePercent}
        placeholder="Выберите значение"
        value={valuePercent}
        width={'150px'}
      />
      <ComboBox
        getItems={getItems}
        onValueChange={setValueNumber}
        placeholder="Выберите значение"
        value={valueNumber}
        width={'40%'}
      />
    </Gapped>
  );
```

### Многострочное поле

Проп `viewMode` позволяет сделать поле многострочным.
Доступные значения:
- `"singleline"` (по умолчанию) — однострочное поле;
- `"multiline"` — многострочное поле;
- `"multiline-editing"` — поле становится многострочным только при редактировании.
Для многострочных полей можно дополнительно ограничить количество отображаемых строк через проп `maxRows`.
Многострочные режимы не работают, если указан проп `mask`. В таком случае будет отображаться однострочное поле.

```tsx
const items: Record<string, string> = {
    1: 'Начос кукурузные ДЕЛИКАДОС с кусочками оливок и паприкой 150 г',
    2: 'Плетенка с изюмом ИВАНОВСКАЯ с корицей и лимонной цедрой 300 г',
    3: `Булочка с корицей ПЕКАРНЯ АРОМА с глазурью и изюмом, нежная внутри и с тонким ароматом корицы, идеально подходит к чаю или кофе 90 г`,
  };
const getItems = (q: string) => {
    return Promise.resolve(Object.keys(items).filter((key) => items[key].toLowerCase().includes(q.toLowerCase())));
  };
const render = (v: string) => items[v];
const [valueMultilineEditing, setValueMultilineEditing] = React.useState('1');
const [valueMultiline, setValueMultiline] = React.useState('2');
const [valueMultilineRestricted, setValueMultilineRestricted] = React.useState('3');
return (
    <Gapped vertical>
      <Gapped>
        <ComboBox
          getItems={getItems}
          onValueChange={setValueMultilineEditing}
          value={valueMultilineEditing}
          renderValue={render}
          valueToString={render}
          renderItem={render}
          viewMode="multiline-editing"
          showClearIcon="auto"
        />
        <span>viewMode="multiline-editing"</span>
      </Gapped>
      <Gapped>
        <ComboBox
          getItems={getItems}
          onValueChange={setValueMultiline}
          value={valueMultiline}
          renderValue={render}
          valueToString={render}
          renderItem={render}
          viewMode="multiline"
          showClearIcon="auto"
        />
        <span>viewMode="multiline"</span>
      </Gapped>
      <Gapped>
        <ComboBox
          getItems={getItems}
          onValueChange={setValueMultilineRestricted}
          value={valueMultilineRestricted}
          renderValue={render}
          valueToString={render}
          renderItem={render}
          viewMode="multiline"
          showClearIcon="auto"
          maxRows={3}
        />
        <span>viewMode="multiline" maxRows={3}</span>
      </Gapped>
    </Gapped>
  );
```

### Высота выпадающего списка

Проп `maxMenuHeight` фиксирует максимальную высоту выпадающего списка.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [value, setValue] = React.useState({ value: 2, label: 'Амурская область' });
return (
    <ComboBox
      getItems={getItems}
      onValueChange={setValue}
      placeholder="Выберите значение"
      value={value}
      maxMenuHeight={'150px'}
    />
  );
```

### Расположение выпадающего списка

Проп `menuPos` фиксирует расположение выпадающего списка. Оно может быть под полем — `"bottom"` или над полем — `"top"`.
По умолчанию список раскрывается под полем, а если список находится близко к нижней границе страницы, то он динамически меняет расположение и раскрывается над полем.

```tsx
const delay =
    (time: number) =>
    (args: Selected[]): Promise<Selected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
const maybeReject = (x: Selected[]) => (Math.random() * 3 < 1 ? Promise.reject() : Promise.resolve(x));
const getItems = (q: string) =>
    Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    )
      .then(delay(500))
      .then(maybeReject);
const [selected, setSelected] = React.useState<Nullable<Selected>>();
const [error, setError] = React.useState(false);
const handleValueChange = (value: Selected) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
return (
    <Tooltip closeButton={false} render={() => 'Выберите значение из списка'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Введите или выберите из списка"
        value={selected}
        menuPos={'top'}
      />
    </Tooltip>
  );
```

### Выравнивание выпадающего списка

Проп `menuAlign` выравнивает выпадающий список. Выпадающий список может быть прикреплен к левому краю — `"left"` или к правому — `"right"`.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Булочка с корицей ПЕКАРНЯ АРОМА с глазурью и изюмом 90 г' },
        { value: 2, label: 'Плетенка с изюмом ИВАНОВСКАЯ с корицей и лимонной цедрой 300 г' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [valueLeft, setValueLeft] = React.useState({
    value: 1,
    label: 'Булочка с корицей ПЕКАРНЯ АРОМА с глазурью и изюмом 90 г',
  });
const [valueRight, setValueRight] = React.useState({
    value: 2,
    label: 'Плетенка с изюмом ИВАНОВСКАЯ с корицей и лимонной цедрой 300 г',
  });
return (
    <Gapped vertical>
      <ComboBox
        getItems={getItems}
        onValueChange={setValueLeft}
        placeholder="Выберите значение"
        value={valueLeft}
        menuAlign="left"
      />
      <ComboBox
        getItems={getItems}
        onValueChange={setValueRight}
        placeholder="Выберите значение"
        value={valueRight}
        menuAlign="right"
      />
    </Gapped>
  );
```

### Поле без обводки

Проп `borderless` убирает обводку у поля.

```tsx
const delay =
    (time: number) =>
    (args: Selected[]): Promise<Selected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
const maybeReject = (x: Selected[]) => (Math.random() * 3 < 1 ? Promise.reject() : Promise.resolve(x));
const getItems = (q: string) =>
    Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    )
      .then(delay(500))
      .then(maybeReject);
const [selected, setSelected] = React.useState<Nullable<Selected>>();
const [error, setError] = React.useState(false);
const handleValueChange = (value: Selected) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
return (
    <Tooltip closeButton={false} render={() => 'Выберите значение из списка'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Введите или выберите из списка"
        value={selected}
        borderless
      />
    </Tooltip>
  );
```

### Иконка

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [selected, setSelected] = React.useState<Nullable<Selected>>();
return (
    <ComboBox
      getItems={getItems}
      onValueChange={setSelected}
      placeholder="Введите или выберите значение"
      value={selected}
      leftIcon={<IconUiFilterFunnelRegular16 />}
    />
  );
```

### Выравнивание текста в поле

Проп `align` задаёт выравнивание текста в поле. Выравнивается только текст внутри поля, проп не влияет на выравнивание значений в выпадающем списке.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Слева' },
        { value: 2, label: 'По центру' },
        { value: 3, label: 'Справа' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [valueLeft, setValueLeft] = React.useState({ value: 1, label: 'Слева' });
const [valueCenter, setValueCenter] = React.useState({ value: 2, label: 'По центру' });
const [valueRight, setValueRight] = React.useState({ value: 3, label: 'Справа' });
return (
    <Gapped vertical>
      <ComboBox
        getItems={getItems}
        onValueChange={setValueLeft}
        placeholder="Выберите значение"
        value={valueLeft}
        align="left"
      />
      <ComboBox
        getItems={getItems}
        onValueChange={setValueCenter}
        placeholder="Выберите значение"
        value={valueCenter}
        align="center"
      />
      <ComboBox
        getItems={getItems}
        onValueChange={setValueRight}
        placeholder="Выберите значение"
        value={valueRight}
        align="right"
      />
    </Gapped>
  );
```

### Максимальная длина значения

Проп `maxLength` задаёт максимальную длину значения, которое пользователь может ввести в поле. Значение пропа должно быть целым числом.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [value, setValue] = React.useState<Nullable<Selected>>();
return (
    <ComboBox
      getItems={getItems}
      onValueChange={setValue}
      placeholder="Введите или выберите значение"
      value={value}
      maxLength={10}
    />
  );
```

### Маска ввода

Для комбобокса может быть задана маска. Комобобокс наследует от [MaskedInput](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/maskedinput.md) пропсы:
- `mask` — определяет шаблон маски, используемый для форматирования и проверки корректности вводимых данных в поле.
- `maskChar` — задаёт cимвол маски. Он отображается в шаблоне маски в качестве плейсхолдера
- `formatChars` — задаёт словарь символов-регулярок. С помощью него вы можете настроить собственный словарь символов.

```tsx
const [value, setValue] = React.useState<{ value: number; label: string } | null>(null);
const getOnlyDigits = (value: string) => value.match(/\d+/g)?.join('') || '';
const getItems = (q: string) => {
    const numbers = getOnlyDigits(q);
    return Promise.resolve(
      [
        {
          value: 79120439827,
          label: '+7 912 043-98-27',
        },
        {
          value: 79120432228,
          label: '+7 912 043-22-28',
        },
      ].filter((x) => x.value.toString().startsWith(numbers)),
    );
  };
return (
    <ComboBox
      showClearIcon="always"
      getItems={getItems}
      value={value}
      onValueChange={setValue}
      mask="+7 999 999-99-99"
      maskChar="_"
    />
  );
```

### Добавление значений в список

Проп `renderAddButton` позволяет разрешить пользователю добавлять свои значения в список.
Используйте проп `renderAddButton`, в котором задаётся функция отрисовки кнопки добавления в выпадающем списке.
Проп `preventIconsOffset` отключает выравнивание текста пунктов списка относительно иконок в других пунктах.
С его помощью можно отключить смещение пунктов в списке, если в кнопке есть иконка "+".

```tsx
const delay =
    (time: number) =>
    (args: Selected[]): Promise<Selected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
interface ComboboxExampleState {
    items: Selected[];
    query: string;
    selected: Nullable<Selected>;
    error: boolean;
    shouldRenderAddButton: boolean;
  }
class ComboboxExample extends React.Component<Record<string, never>, ComboboxExampleState> {
    comboBoxElement: ComboBox<Nullable<Selected>> | null = null;
    constructor(props: Record<string, never>) {
      super(props);

      this.state = {
        items: [
          { value: 1, label: 'Абакан' },
          { value: 2, label: 'Алексин' },
          { value: 3, label: 'Алматы' },
          { value: 4, label: 'Альметьевск' },
          { value: 5, label: 'Алтайский край' },
          { value: 6, label: 'Амурская область' },
        ],
        query: '',
        selected: { value: 3, label: 'Алматы' },
        error: false,
        shouldRenderAddButton: false,
      };

      this.comboBoxElement = null;

      this.getItems = this.getItems.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.handleInputValueChange = this.handleInputValueChange.bind(this);
      this.renderAddButton = this.renderAddButton.bind(this);
      this.refComboBox = this.refComboBox.bind(this);
      this.addItem = this.addItem.bind(this);
    }

    render() {
      return (
        <ComboBox
          preventIconsOffset
          error={this.state.error}
          getItems={this.getItems}
          onValueChange={this.handleValueChange}
          onFocus={this.handleFocus}
          placeholder="Enter number"
          value={this.state.selected}
          onInputValueChange={this.handleInputValueChange}
          renderAddButton={this.renderAddButton}
          ref={this.refComboBox}
        />
      );
    }

    getItems(q: string): Promise<Selected[]> {
      return Promise.resolve(
        this.state.items.filter(
          (x: Selected) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q,
        ),
      ).then(delay(500));
    }

    handleInputValueChange(query: string) {
      const isItemExists = this.state.items.find((x) => x.label.toLowerCase() === query.toLowerCase());
      this.setState({ query, shouldRenderAddButton: !isItemExists });
    }

    handleValueChange(value: Nullable<Selected>) {
      this.setState({ selected: value, error: false, shouldRenderAddButton: false });
    }

    handleFocus() {
      this.setState({ error: false });
    }

    renderAddButton() {
      if (!this.state.shouldRenderAddButton) {
        return null;
      }
      return (
        <MenuItem onClick={this.addItem} icon={<IconPlusLight16 />}>
          Добавить «{this.state.query}»
        </MenuItem>
      );
    }

    refComboBox(element: ComboBox<Nullable<Selected>> | null) {
      this.comboBoxElement = element;
    }

    addItem() {
      this.setState((currentState) => {
        const newItem = {
          value: Math.max(...currentState.items.map(({ value }) => value)) + 1,
          label: currentState.query,
        };

        return {
          items: [...currentState.items, newItem],
          selected: newItem,
          error: false,
          shouldRenderAddButton: false,
        };
      });
    }
  }
return <ComboboxExample />;
```

### Очистка поля

Очистить значение в поле можно с помощью пустой строки, `null` или `undefined`.

```tsx
const [value, setValue] = React.useState<Nullable<Selected | string>>({ value: 2, label: 'Алексин' });
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
return (
    <Gapped gap={30}>
      <ComboBox getItems={getItems} onValueChange={setValue} placeholder="Выберите значение" value={value} />
      <Gapped>
        <label htmlFor="combobox-id">Передать:</label>
        <Button onClick={() => setValue(null)}>Null</Button>
        <Button onClick={() => setValue(undefined)}>Undefined</Button>
        <Button onClick={() => setValue('')}>Пустая строка</Button>
      </Gapped>
    </Gapped>
  );
```

### Иконка очистки поля

Проп `showClearIcon` добавляет в поле иконку очистки, по нажатию на иконку поле будет очищаться.
Доступные значения:
- `"never"` (по умолчанию) — не показывает иконку очистки;
- `"always"` — всегда показывает иконку очистки в заполненном поле, при очистке значения возвращается стрелка для раскрытия списка;
- `"auto"` — показывает иконку в заполненном поле, только когда оно в состоянии hover или focus.

```tsx
const items = [
    { value: 'always', label: 'showClearIcon="always"' },
    { value: 'auto', label: 'showClearIcon="auto"' },
    { value: 'never', label: 'showClearIcon="never"' },
  ];
const [valueAlways, setValueAlways] = React.useState(items[0]);
const [valueAuto, setValueAuto] = React.useState(items[1]);
const [valueNever, setValueNever] = React.useState(items[2]);
const getItems = (q: string) => Promise.resolve(items.filter((x) => x.label.toLowerCase().includes(q.toLowerCase())));
return (
    <Gapped vertical>
      <ComboBox
        showClearIcon="always"
        value={valueAlways}
        onValueChange={setValueAlways}
        getItems={getItems}
        width="375px"
      />
      <ComboBox showClearIcon="auto" getItems={getItems} value={valueAuto} onValueChange={setValueAuto} width="375px" />
      <ComboBox
        showClearIcon="never"
        value={valueNever}
        onValueChange={setValueNever}
        getItems={getItems}
        width="375px"
      />
    </Gapped>
  );
```

### Сброс значения

Метод `reset()` позволяет сбросить введённое пользователем вручную значение без изменения `value`.

```tsx
const [selected, setSelected] = React.useState({ value: 2, label: 'Алексин' });
const ref = React.useRef<ComboBox<Selected>>(null);
const handleReset = () => {
    if (ref.current) {
      ref.current.reset();
    }
  };
const getItems = (q: string) =>
    Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
return (
    <Gapped>
      <ComboBox
        ref={ref}
        getItems={getItems}
        onValueChange={setSelected}
        placeholder="Выберите значение"
        value={selected}
      />
      <Button onClick={handleReset}>Вызвать Reset</Button>
    </Gapped>
  );
```

### Состояние блокировки

Проп `disabled` переводит комбообокс в состояние блокировки. Поле визуально приглушается и становится недоступно для редактирования.

```tsx
const getItems = (q: string) => {
    return Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    );
  };
const [value, setValue] = React.useState<Nullable<Selected>>();
return (
    <ComboBox
      getItems={getItems}
      onValueChange={setValue}
      placeholder="Введите или выберите значение"
      value={value}
      disabled
    />
  );
```

### Состояние ошибки

Проп `error` переводит комбобокс в состояние ошибки.

```tsx
const delay =
    (time: number) =>
    (args: Selected[]): Promise<Selected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
const maybeReject = (x: Selected[]) => (Math.random() * 3 < 1 ? Promise.reject() : Promise.resolve(x));
const getItems = (q: string) =>
    Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
        { value: 7, label: 'Анадырь' },
        { value: 8, label: 'Анапа' },
        { value: 9, label: 'Архангельск' },
        { value: 10, label: 'Архангельская область' },
        { value: 11, label: 'Астраханская область' },
        { value: 12, label: 'Астрахань' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    )
      .then(delay(500))
      .then(maybeReject);
const [selected, setSelected] = React.useState<Nullable<Selected>>();
const [error, setError] = React.useState(true);
const handleValueChange = (value: Selected) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
return (
    <Tooltip closeButton={false} render={() => 'Выберите значение из списка'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Введите или выберите из списка"
        value={selected}
      />
    </Tooltip>
  );
```

### Cчётчик найденных значений

Пропсы `totalCount` и `renderTotalCount` позволяют добавить в выпадающий список счётчик найденных значений.
- `renderTotalCount` — задаёт функцию, которая отображает сообщение о количестве значений.
- `totalCount` — определяет общее количество значений.

```tsx
const [foundLength, setFoundLength] = React.useState(0);
const items: ComboBoxItem[] = [];
for (const key in document.body.style) {
    if (Object.hasOwnProperty.call(document.body.style, key)) {
      items.push({
        value: key,
        label: key,
      });
    }
  }
const getItems = (query: string) => {
    const found: Array<ComboBoxExtendedItem<ComboBoxItem>> = items.filter(({ value }) =>
      value.toLowerCase().includes(query.toLowerCase()),
    );
    const filtered = found.slice(0, 5);

    setFoundLength(found.length);

    return Promise.resolve(filtered);
  };
return (
    <ComboBox
      getItems={getItems}
      placeholder="Начните вводить свойство css"
      totalCount={foundLength}
      renderTotalCount={(found, total) => `Показано ${found} из ${total} найденных свойств`}
    />
  );
```

### Шапка, разделитель и футер в списке

В массиве, возвращаемом `getItems`, могут быть переданы React-компоненты:
`<MenuHeader>`, `<MenuFooter>`, `<MenuSeparator />` и любые другие.
В таких случаях поиск необходимо контролировать дополнительно.

```tsx
interface Item {
    value: number;
    label: string;
  }
const delay =
    (time: number) =>
    <T,>(args: T): Promise<T> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const maybeReject = <T,>(x: T) => (Math.random() * 3 < 1 ? Promise.reject() : Promise.resolve(x));
const getItems = (q: string): Promise<Array<ComboBoxExtendedItem<Item>>> =>
    Promise.resolve<Array<ComboBoxExtendedItem<Item>>>(
      [
        <MenuHeader key="ext-header">MenuHeader</MenuHeader>,
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
        <MenuSeparator key="ext-sep" />,
        { value: 7, label: 'Анадырь' },
        { value: 8, label: 'Анапа' },
        { value: 9, label: 'Архангельск' },
        { value: 10, label: 'Архангельская область' },
        { value: 11, label: 'Астраханская область' },
        { value: 12, label: 'Астрахань' },
        <MenuFooter key="ext-footer">MenuFooter</MenuFooter>,
      ].filter((x) => ('label' in x ? x.label.toLowerCase().includes(q.toLowerCase()) : q === '')),
    )
      .then(delay(500))
      .then(maybeReject);
const [selected, setSelected] = React.useState<Item | null>(null);
const [error, setError] = React.useState(false);
const handleValueChange = (value: Item | null) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
return (
    <Tooltip closeButton={false} render={() => 'Выберите значение из списка'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox<Item>
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Введите или выберите из списка"
        value={selected}
      />
    </Tooltip>
  );
```

### Кастомизация: переопределение `renderValue`, `renderItem` и `itemWrapper`

В примере с помощью пропсов `renderValue`, `renderItem` и `itemWrapper` переопределён внешний вид элементов списка и выбранного значения, задано отображение галочки для одобренных элементов.

```tsx
type ExtendedSelected = Selected & {
    approved: boolean;
    label: string;
    email: string;
  };
const delay =
    (time: number) =>
    (args: ExtendedSelected[]): Promise<ExtendedSelected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
const getItems = (q: string): Promise<ExtendedSelected[]> =>
    Promise.resolve(
      [
        { approved: true, value: 1, label: 'Леонид Долецкий', email: 'first@skbkontur.ru' },
        { approved: true, value: 2, label: 'Владислав Нашкодивший', email: 'second@skbkontur.ru' },
        { approved: false, value: 3, label: 'Розенкранц Харитонов', email: 'third@skbkontur.ru' },
        { approved: false, value: 4, label: 'Надежда Дубова', email: 'fourth@skbkontur.ru' },
        { approved: true, value: 5, label: 'Владислав Сташкеевич', email: 'fifth@skbkontur.ru' },
        { approved: true, value: 6, label: 'Василиса Александровна Поволоцкая', email: 'sixth@skbkontur.ru' },
      ].filter((x) => x.label.toLowerCase().includes(q.toLowerCase()) || x.value.toString(10) === q),
    ).then(delay(500));
const [selected, setSelected] = React.useState<Nullable<ExtendedSelected>>({
    approved: false,
    value: 3,
    label: 'Розенкранц Харитонов',
    email: 'third@skbkontur.ru',
  });
const [error, setError] = React.useState(false);
const handleValueChange = (value: ExtendedSelected) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
const customRenderItem = (item: ExtendedSelected) => (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '55%',
          display: 'flex',
        }}
      >
        <span
          style={{
            minWidth: '20px',
          }}
        >
          {item.approved ? <IconCheckARegular16 /> : null}
        </span>
        <span
          style={{
            flexGrow: '1',
          }}
        >
          {item.label}
        </span>
      </div>
      <div
        style={{
          opacity: '0.6',
          paddingLeft: '10px',
          boxSizing: 'border-box',
        }}
      >
        {item.email}
      </div>
    </div>
  );
const customItemWrapper = (item: { value: number }) => {
    if (item.value === 3) {
      return (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />;
    }

    return (props: React.HTMLAttributes<HTMLButtonElement>) => <button {...props} />;
  };
const customRenderValue = (item: { label: string; email: string }) => (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '55%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {item.label}
      </div>
      <div
        style={{
          opacity: '0.6',
          paddingLeft: '10px',
          boxSizing: 'border-box',
        }}
      >
        {item.email}
      </div>
    </div>
  );
return (
    <Tooltip closeButton={false} render={() => 'Item must be selected!'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox<ExtendedSelected>
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        placeholder="Введите или выберите значение"
        value={selected}
        renderItem={customRenderItem}
        itemWrapper={customItemWrapper}
        renderValue={customRenderValue}
        width="400px"
      />
    </Tooltip>
  );
```

### Кастомизация: подсветка совпадающей части в результате поиска

В примере настроено кастомное поведение, которое при поиске подсвечивает совпадающие части в значениях.

```tsx
const delay =
    (time: number) =>
    (args: Selected[]): Promise<Selected[]> =>
      new Promise((resolve) => setTimeout(() => resolve(args), time));
const getItems = (query: string): Promise<Selected[]> =>
    Promise.resolve(
      [
        { value: 1, label: 'Абакан' },
        { value: 2, label: 'Алексин' },
        { value: 3, label: 'Алматы' },
        { value: 4, label: 'Альметьевск' },
        { value: 5, label: 'Алтайский край' },
        { value: 6, label: 'Амурская область' },
        { value: 7, label: 'Анадырь' },
        { value: 8, label: 'Анапа' },
        { value: 9, label: 'Архангельск' },
        { value: 10, label: 'Архангельская область' },
        { value: 11, label: 'Астраханская область' },
        { value: 12, label: 'Астрахань' },
      ]
        .filter((x) => x.label.toLowerCase().includes(query.toLowerCase()) || x.value.toString(10) === query)
        .map(({ label, ...rest }) => {
          const start = label.toLowerCase().indexOf(query.toLowerCase());
          const end = start + query.length;

          return {
            ...rest,
            label,
            highlightedLabel:
              start >= 0 ? (
                <span>
                  {label.substring(0, start)}
                  <strong
                    style={{
                      fontSize: '1.1em',
                    }}
                  >
                    {label.substring(start, end)}
                  </strong>
                  {label.substring(end)}
                </span>
              ) : null,
          };
        }),
    ).then(delay(500));
const [selected, setSelected] = React.useState<Nullable<Selected>>();
const [error, setError] = React.useState(false);
const handleValueChange = (value: Nullable<Selected>) => {
    setSelected(value);
    setError(false);
  };
const handleUnexpectedInput = () => {
    setSelected(null);
    setError(true);
  };
const handleFocus = () => setError(false);
const renderItem = (item: Selected & { highlightedLabel?: React.ReactNode }) => {
    if (item.highlightedLabel) {
      return item.highlightedLabel;
    }

    return item.label;
  };
return (
    <Tooltip closeButton={false} render={() => 'Выберите значение'} trigger={error ? 'opened' : 'closed'}>
      <ComboBox
        error={error}
        getItems={getItems}
        onValueChange={handleValueChange}
        onFocus={handleFocus}
        onUnexpectedInput={handleUnexpectedInput}
        value={selected}
        renderItem={renderItem}
        placeholder="Введите город на букву А"
      />
    </Tooltip>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

Комбобокс адаптивен: на мобильных устройствах поле с выпадающим списком открывается модально в нижней части экрана.

Мобильный режим активируется при ширине вьюпорта < `768px`. Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/ComboBox/ComboBox.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/ComboBox/ComboBox.tsx)
