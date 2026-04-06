# DateRangePicker

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_date-components_daterangepicker--docs)

## Import

```jsx
import { DateRangePicker } from '@skbkontur/react-ui';
```

## Props

- **menuAnchorElement?**: Элемент относительно которого открывается календарь, Если передать значение `focused` - меню будет открываться у зафокусированного элемента. Если передать ссылку на DOM элемент или ref - меню откроется относительно переданного элемента.
- **children**: Элементы DateRangePicker: `<DateRangePicker.Start />` `<DateRangePicker.Separator />` `<DateRangePicker.End />`

Компонент выбора периода состоит из 3-х дочерних компонентов:

- `<DateRangePicker.Start>` — начало периода с настройками как у `DateInput`
- `<DateRangePicker.End>` — окончание периода с настройками как у `DateInput`
- `<DateRangePicker.Separator>` — разделитель между полями

Значения задается через пропсы у компонентов `Start` и `End`:

- 2 значения указываются в пропах `value={'dd.mm.yyyy'}` (формат настраивается)
- Пустыми значениями считаются `""`, `null` и `undefined`
- Минимальная дата задаётся в `Start` через `minDate`, максимальная — в `End` через `maxDate`

## Адаптивность

На мобильных устройствах доступны 2 варианта отображения:

- Адаптивная версия в попапе (по умолчанию)

- 2 нативных календаря через `useMobileNativeDatePicker`. <br /> Ограничение: [календарь в iOS не поддерживает параметры min и max](https://bugs.webkit.org/show_bug.cgi?id=225639)

## Локали по умолчанию

```typescript static
interface DateRangePickerLocale {
  today?: string;
  months?: string[];
  order?: DateOrder;
  separator?: DateSeparator;
  todayAriaLabel?: string;
  selectMonthAriaLabel?: string;
  selectYearAriaLabel?: string;
  selectChosenAriaLabel?: string;
  dayCellChooseDateAriaLabel?: string;
  startDateLabel?: string;
  endDateLabel?: string;
  startDateEmpty?: string;
  endDateEmpty?: string;
}

const ru_RU = {
  today: 'Сегодня',
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  order: DateOrder.DMY,
  separator: DateSeparator.Dot,
  todayAriaLabel: 'Перейти к сегодняшней дате',
  selectMonthAriaLabel: 'месяц',
  selectYearAriaLabel: 'год',
  selectChosenAriaLabel: 'Выбранный',
  dayCellChooseDateAriaLabel: 'Выбрать дату',
  startDateLabel: 'Дата начала',
  endDateLabel: 'Дата окончания',
  startDateEmpty: 'Без первой даты',
  endDateEmpty: 'Без второй даты',
};

const en_GB = {
  today: 'Endday',
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  order: DateOrder.MDY,
  separator: DateSeparator.Slash,
  todayAriaLabel: "Go end today's date",
  selectMonthAriaLabel: 'month',
  selectYearAriaLabel: 'year',
  selectChosenAriaLabel: 'Chosen',
  dayCellChooseDateAriaLabel: 'Choose date',
  startDateLabel: 'Start date',
  endDateLabel: 'End date',
  startDateEmpty: 'No start date',
  endDateEmpty: 'No end date',
};
```

### ExamplePrices

Для валидаций используйте `DateRangePicker.validate(startValue, endValue, options)`, который принимает: - `startValue` и `endValue` — проверяемые значения `'dd.mm.yyyy'` - `options` — объект с настройками `{ startOptional, endOptional, minDate, maxDate }` Возвращается валидация полей `Start` и `End` в формате `[true, false]` / export const Validations = ValidationsStory; Validations.storyName = 'Валидации'; /** Пример с кастомизацией темы и кастомным рендером дня

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

### ExampleCustomOptional

Для полей достпен параметр `optional`, чтобы указывать открытые диапазоны

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

### ExampleDateFormat

```tsx
const [valueStart, setValueStart] = React.useState('');
  const [valueEnd, setValueEnd] = React.useState('');
  const [order, setOrder] = React.useState(DateOrder.YMD);
  const [separator, setSeparator] = React.useState<keyof typeof DateSeparator>(
    Object.keys(DateSeparator)[0] as keyof typeof DateSeparator,
  );

  return (
    <Gapped vertical gap={10}>
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
    </Gapped>
  );
```

### ExampleCustomMenuAnchorElement

```tsx
const customRef = React.createRef<HTMLDivElement>();

  const [valueStart, setValueStart] = React.useState<string>('');
  const [valueEnd, setValueEnd] = React.useState<string>('');

  return (
    <Gapped vertical gap={100}>
      <DateRangePicker menuAnchorElement="focused">
        <span style={{ width: 300 }}>
          menuAnchorElement="focused" меню для выбора даты будет открываться у зафокусированного элемента
        </span>
        <div style={{ display: 'flex', rowGap: 150, alignItems: 'baseline', justifyContent: 'space-between' }}>
          <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
        </div>
      </DateRangePicker>

      <div style={{ display: 'flex', gap: 100 }}>
        <div ref={customRef}>customRef</div>
        <DateRangePicker menuAnchorElement={customRef}>
          <span>menuAnchorElement="customRef" меню для выбора даты будет открываться у элемента "customRef"</span>
          <DateRangePicker.Start value={valueStart} onValueChange={setValueStart} />
          <DateRangePicker.Separator />
          <DateRangePicker.End value={valueEnd} onValueChange={setValueEnd} />
        </DateRangePicker>
      </div>
    </Gapped>
  );
```