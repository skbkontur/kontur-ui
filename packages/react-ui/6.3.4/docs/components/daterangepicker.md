# DateRangePicker

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_date-components-daterangepicker--docs)

Поле выбора периода дат.

```jsx
import { DateRangePicker } from '@skbkontur/react-ui';
```

Составной компонент, включает в себя:

- `<DateRangePicker.Start>` — начало периода с настройками как у [DateInput](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/dateinput.md).
- `<DateRangePicker.End>` — окончание периода с настройками как у [DateInput](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/dateinput.md).
- `<DateRangePicker.Separator>` — разделитель между полями.

Значения задается через пропсы у компонентов `Start` и `End`:

- 2 значения указываются в пропcах `value={'dd.mm.yyyy'}` (формат настраивается)
- Пустыми значениями считаются `""`, `null` и `undefined`.

## Все пропсы и методы

### `menuAnchorElement`

type: `Element | ReactNode | RefObject<any>` · optional

Элемент, относительно которого открывается календарь.
Если передать значение `focused` — меню будет открываться у зафокусированного элемента.
Если передать ссылку на DOM элемент или ref — меню откроется относительно переданного элемента.

### `children`

type: `ReactNode` · required

Элементы DateRangePicker:
`<DateRangePicker.Start />`
`<DateRangePicker.Separator />`
`<DateRangePicker.End />`

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер поля с датой.

### `width`

type: `string | number` · optional

Ширина поля с датой.

### `menuAlign`

type: `"left" | "right"` · optional

Выравнивание выпадающего окна с календарём.

### `menuPos`

type: `"top" | "bottom"` · optional

Расположение календаря — над или под полем.

### `renderDay`

type: `(props: CalendarDayProps) => ReactElement<unknown, string | JSXElementConstructor<any>>` · optional · default: `(props: CalendarDayProps) => <CalendarDay {...props} />`

Отрисовка дат в календаре.
@param props - параметры дня.
@returns элемент, который отрисовывает контент числа месяца.

### `onMonthChange`

type: `(changeInfo: CalendarMonthChangeInfo) => void` · optional

Событие изменения месяца.
@param changeInfo - информация об изменении отображаемого месяца, где
`month: number` - номер текущего отображаемого месяца от 1 до 12,
`year: number` - отображаемый год.

### `enableTodayLink`

type: `boolean` · optional

Отображает в календаре кнопку «Сегодня», которая меняет выбранное значение на текущую дату.

### `useMobileNativeDatePicker`

type: `boolean` · optional

Позволяет использовать на мобильных устройствах нативный календарь для выбора дат.
На iOS нативный календарь не умеет работать с minDate и maxDate.

### ExampleBasic

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
return (
    <DateRangePicker>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
    </DateRangePicker>
  );
```

### Размер

Проп `size` задаёт размер поля. С помощью токенов `calendar*` можно управлять размерами календаря.

```tsx
const [valueStartS, setValueStartS] = React.useState('');
const [valueEndS, setValueEndS] = React.useState('');
const [valueStartM, setValueStartM] = React.useState('');
const [valueEndM, setValueEndM] = React.useState('');
const [valueStartL, setValueStartL] = React.useState('');
const [valueEndL, setValueEndL] = React.useState('');
const theme = React.useContext(ThemeContext);
const createTheme = (tokens: ThemeIn) => ThemeFactory.create(tokens, theme);
return (
    <Gapped vertical gap={16}>
      <ThemeContext.Provider value={createTheme({ calendarCellWidth: '44px', calendarCellHeight: '44px' })}>
        <DateRangePicker>
          <DateRangePicker.Start value={valueStartL} size="large" onValueChange={setValueStartL} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEndL} size="large" onValueChange={setValueEndL} />
        </DateRangePicker>
      </ThemeContext.Provider>

      <ThemeContext.Provider value={createTheme({ calendarCellWidth: '36px', calendarCellHeight: '36px' })}>
        <DateRangePicker>
          <DateRangePicker.Start value={valueStartM} size="medium" onValueChange={setValueStartM} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEndM} size="medium" onValueChange={setValueEndM} />
        </DateRangePicker>
      </ThemeContext.Provider>

      <DateRangePicker>
        <DateRangePicker.Start value={valueStartS} onValueChange={setValueStartS} size="small" />
        <DateRangePicker.Separator />
        <DateRangePicker.End value={valueEndS} onValueChange={setValueEndS} size="small" />
      </DateRangePicker>
    </Gapped>
  );
```

### Ширина

Проп `width` задаёт ширину полей.

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
return (
    <DateRangePicker width={'400px'}>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
    </DateRangePicker>
  );
```

### Расположение календаря

Проп `menuPos` фиксирует расположение выпадающего окна с календарём. Оно может быть под полем — `"bottom"` или над ним — `"top"`.
По умолчанию календарь отображается под полем, а если не хватает места, то динамически меняет расположение и показывается над полем.

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
return (
    <DateRangePicker menuPos={'top'}>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
    </DateRangePicker>
  );
```

### Выравнивание календаря

Проп `menuAlign` выравнивает выпадающее окно с календарём. Оно может быть прикреплено к левому краю — `"left"` или к правому — `"right"`.

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
return (
    <DateRangePicker menuAlign={'right'}>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
    </DateRangePicker>
  );
```

### Минимальная и максимальная даты

Минимальная дата задаётся в `Start` через `minDate`, максимальная — в `End` через `maxDate`.

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
const minDate = '08.07.2024';
const maxDate = '18.08.2024';
return (
    <DateRangePicker>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} minDate={minDate} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} maxDate={maxDate} />
    </DateRangePicker>
  );
```

### Открытые даты начала или конца

Проп `optional` позволяет указывать открытые диапазоны дат.

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
return (
    <DateRangePicker>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} optional />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} optional />
    </DateRangePicker>
  );
```

### Настройка позиционирования меню

```tsx
const customRef = React.createRef<HTMLDivElement>();
const [valueStart, setValueStart] = React.useState<string>('');
const [valueEnd, setValueEnd] = React.useState<string>('');
return (
    <Gapped vertical gap={100}>
      <DateRangePicker menuAnchorElement="focused">
        <span style={{ width: 300 }}>
          menuAnchorElement="focused": меню для выбора даты будет открываться у зафокусированного элемента
        </span>
        <div style={{ display: 'flex', rowGap: 150, alignItems: 'baseline', justifyContent: 'space-between' }}>
          <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
        </div>
      </DateRangePicker>

      <div style={{ display: 'flex', gap: 100 }}>
        <DateRangePicker menuAnchorElement={customRef}>
          <span>menuAnchorElement="customRef": меню для выбора даты будет открываться у элемента "customRef"</span>
          <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
        </DateRangePicker>
        <div ref={customRef}>customRef</div>
      </div>
    </Gapped>
  );
```

### Кнопка «Сегодня»

Проп `enableTodayLink` добавляет кнопку для выбора сегодяшней даты.

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
const minDate = '08.07.2024';
const maxDate = '18.08.2024';
return (
    <DateRangePicker enableTodayLink>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} minDate={minDate} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} maxDate={maxDate} />
    </DateRangePicker>
  );
```

### Форматирование даты

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
const [order, setOrder] = React.useState(DateOrder.YMD);
const [separator, setSeparator] = React.useState<keyof typeof DateSeparator>(
    Object.keys(DateSeparator)[0] as keyof typeof DateSeparator,
  );
return (
    <Gapped vertical gap={10}>
      <LocaleContext.Provider
        value={{
          locale: {
            DatePicker: {
              separator: DateSeparator[separator],
              order,
            },
          },
        }}
      >
        <DateRangePicker>
          <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
        </DateRangePicker>
      </LocaleContext.Provider>
      <div>
        <span style={{ width: '300px', display: 'inline-block' }}>
          Порядок компонентов (<b>DateOrder</b>)
        </span>
        <Select value={order} items={Object.keys(DateOrder)} onValueChange={(order) => setOrder(order)} />
      </div>
      <div>
        <span style={{ width: '300px', display: 'inline-block' }}>
          Разделитель (<b>DateSeparator</b>)
        </span>
        <Select
          value={separator}
          items={Object.keys(DateSeparator)}
          onValueChange={(separator) => setSeparator(separator)}
        />
      </div>
    </Gapped>
  );
```

### Кастомизация: рендер дня

Вы можете кастомизировать части поля. В примере ниже задан кастомный вид для дня календаря. Ещё примеры кастомизации смотрите на странице компонента [Calendar](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/calendar.md).

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
const renderDay = (props: CalendarDayProps) => {
    const [date] = props.date.split('.').map(Number);
    const isEven = date % 2 === 0;

    if (isEven) {
      return <CalendarDay {...props} style={{ background: '#e9f8e3' }} />;
    }

    return <CalendarDay {...props} />;
  };
return (
    <DateRangePicker renderDay={renderDay}>
      <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
      <DateRangePicker.Separator />
      <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
    </DateRangePicker>
  );
```

### Кастомизация: поля без тире

У дочерних элементов могут быть настроены `width`, `className`, `style`, `withIcon` и другие настройки `<DateInput>`

```tsx
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
return (
    <DateRangePicker>
      <Group>
        <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
        <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
      </Group>
    </DateRangePicker>
  );
```

### Кастомизация: выбор дат с ценами

Пример с кастомизацией темы и кастомным рендером дня

```tsx
const theme = React.useContext(ThemeContext);
function renderDay(props: CalendarDayProps) {
    const [date, month] = props.date.split('.').map(Number);
    const randomDay = date % 6 === 0 || date % 7 === 0 || date % 8 === 0;
    const randomPrice = Math.round((date / month) * 1000);

    return (
      <CalendarDay {...props}>
        <div style={{ fontSize: theme.calendarCellFontSize }}>{date}</div>
        <div style={{ fontSize: '11px', fontFeatureSettings: 'tnum', fontVariantNumeric: 'tabular-nums' }}>
          {randomDay ? <>{randomPrice}&thinsp;₽</> : <span style={{ color: theme.tokenTextColorDisabled }}>—</span>}
        </div>
      </CalendarDay>
    );
  }
const [valueStart, setValueStart] = React.useState('');
const [valueEnd, setValueEnd] = React.useState('');
const minDate = '08.07.2024';
const maxDate = '18.08.2024';
return (
    <ThemeContext.Provider
      value={ThemeFactory.create(
        {
          calendarCellWidth: '48px',
          calendarCellHeight: '48px',
          calendarCellLineHeight: '18px',
          calendarWrapperHeight: '700px',
          calendarCellBorderRadius: '10px',
        },
        theme,
      )}
    >
      <DateRangePicker size="medium" renderDay={renderDay}>
        <DateRangePicker.Start value={valueStart} minDate={minDate} onValueChange={setValueStart} />
        <DateRangePicker.Separator />
        <DateRangePicker.End value={valueEnd} maxDate={maxDate} onValueChange={setValueEnd} />
      </DateRangePicker>
    </ThemeContext.Provider>
  );
```

## Валидация

Для валидаций используйте `DateRangePicker.validate(startValue, endValue, options)`, который принимает:

- `startValue` и `endValue` — проверяемые значения `'dd.mm.yyyy'`
- `options` — объект с настройками `{ startOptional, endOptional, minDate, maxDate }`

Возвращается валидация полей `Start` и `End` в формате `[true, false]`.

## Адаптивность

Поле адаптивно: на мобильных устройствах блок календаря открывается на весь экран устройства и становится фокусным активным элементом, что упрощает работу с ним. Мобильный режим активируется при ширине вьюпорта < `768px`.

Через проп `useMobileNativeDatePicker` можно изменить режим на нативный календарь мобильного устройства.
Обратите внимание, что [календарь в iOS не поддерживает](https://bugs.webkit.org/show_bug.cgi?id=225639) `minDate` и `maxDate`.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/DateRangePicker/DateRangePicker.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/DateRangePicker/DateRangePicker.tsx)
