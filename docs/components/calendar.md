# Calendar

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_date-components_calendar--docs)

## Import

```jsx
import { Calendar } from '@skbkontur/react-ui';
```

## Props

- **onValueChange?**: Задает функцию, которая вызывается при изменении value.
- **value**: Задает текущую дату в формате `dd.mm.yyyy`.
- **maxDate?**: Задает максимальную возможную дату в формате `dd.mm.yyyy`.
- **minDate?**: Задает минимальную возможную дату в формате `dd.mm.yyyy`.
- **periodStartDate?**: Задает начальную дату периода в формате `dd.mm.yyyy`.
- **periodEndDate?**: Задает конечную дату периода в формате `dd.mm.yyyy`.
- **isHoliday?**: Задает функцию для определения праздничных дней. (default: `(_day, isWeekend) => isWeekend.`)
- **initialMonth?**: Задает начальный месяц.
- **initialYear?**: Задает начальный год.
- **renderDay?**: Задает метод отрисовки дат в календаре. (default: `(props: CalendarDayProps) => <CalendarDay {...props} />`)
- **onMonthChange?**: Задает функцию, которая вызывается при каждом изменении месяца. `month: number` - номер текущего отображаемого месяца от 1 до 12, `year: number` - отображаемый год.

### Example1

```tsx
const [date, setDate] = React.useState('01.11.2021');

  return <Calendar value={date} onValueChange={setDate} />;
```

### Example2

Вне зависимости от того, какая дата выбрана в календаре в данный момент - можно изменить отображение начального года и месяца с помощью пропсов `initialMonth` и `initialYear`

```tsx
const [date, setDate] = React.useState('11.12.2021');
  const initialMonth = 7;
  const initialYear = 2000;

  return (
    <div style={{ display: 'flex' }}>
      <Calendar value={date} onValueChange={setDate} initialMonth={initialMonth} initialYear={initialYear} />
      <div style={{ fontSize: '16px' }}>
        <p>Выбранная дата: {date}</p>
        <p>Начальный месяц: {initialMonth}</p>
        <p>Начальный год: {initialYear}</p>
      </div>
    </div>
  );
```

### Example3

В компонент можно передать функцию `isHoliday`, которая будет получать день строкой формата `dd.mm.yyyy` и флаг `isWeekend`, и должна вернуть `true` для выходного и `false` для рабочего дня.

```tsx
const [date, setDate] = React.useState<string | undefined>();

  const createRandomHolidays = () => {
    const holidays = new Array(10);
    const today = new Date();

    for (let index = 0; index < holidays.length; index++) {
      const day = new Date(today.setDate(today.getDate() + 1 + index).valueOf());

      const holiday = {
        date: day.getDate(),
        month: day.getMonth(),
        year: day.getFullYear(),
      };

      holidays[index] = DatePickerHelpers.formatDate(holiday);
    }

    return holidays;
  };
  const holidays = createRandomHolidays();

  const isHoliday = (day: string, isWeekend: boolean) => {
    if (holidays.includes(day)) {
      return !isWeekend;
    }

    return isWeekend;
  };

  return <Calendar isHoliday={isHoliday} value={date} onValueChange={setDate} />;
```

### Example4

Календарю можно задать кастомную высоту с помощью переменной темы `calendarWrapperHeight` - Базовая высота календаря - `330px` - Максимальная высота календаря - `450px`

```tsx
const [date, setDate] = React.useState('01.11.2021');
  const theme = React.useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={ThemeFactory.create({ calendarWrapperHeight: '450px' }, theme)}>
      <Calendar value={date} onValueChange={setDate} />
    </ThemeContext.Provider>
  );
```

### Example5

Для кастомнизации дней в календаре используется проп `renderDay`. Корректная работа подразумевает обязательное использование компонента `<CalendarDay />` и передачу в него всех приходящих в функцию пропсов: `<Calendar renderDay={(props) => <CalendarDay {...props} />} />`.

```tsx
const initialValue = '02.09.2023';

  const [value, setValue] = React.useState(initialValue);

  const renderDay = (props: CalendarDayProps) => {
    const [date, month] = props.date.split('.').map(Number);

    if (month === 9 && date > 12 && date < 16) {
      return (
        <Tooltip render={() => 'Кастомный день'}>
          <CalendarDay {...props} style={{ background: 'darkgray' }} />
        </Tooltip>
      );
    }

    if (month === 8 && date === 20) {
      return (
        <Hint text={date} pos="right middle">
          <CalendarDay {...props}>
            <b style={{ color: 'orange' }}>#</b>
          </CalendarDay>
        </Hint>
      );
    }

    return <CalendarDay {...props} />;
  };

  return <Calendar value={value} onValueChange={setValue} renderDay={renderDay} />;
```

### Example6

Пример с кастомизацией темы и кастомным рендером дня.

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

  const [value, setValue] = React.useState<string | null>(null);

  return (
    <ThemeContext.Provider
      value={ThemeFactory.create(
        {
          calendarCellWidth: '56px',
          calendarCellHeight: '56px',
          calendarCellLineHeight: '1.5',
          calendarWrapperHeight: '600px',
          calendarCellBorderRadius: '8px',
        },
        theme,
      )}
    >
      <Calendar value={value} renderDay={renderDay} onValueChange={setValue} />
    </ThemeContext.Provider>
  );
```

### Example8

```tsx
const initialValue = '02.09.2023';
  const [value, setValue] = React.useState(initialValue);
  const calendarRef = React.useRef<Calendar>(null);

  return (
    <>
      <Gapped gap={8} verticalAlign="top">
        <Calendar value={value} ref={calendarRef} onValueChange={setValue} />

        <Gapped vertical gap={8}>
          <Button onClick={() => calendarRef.current?.scrollToMonth(1, 2023)}>I квартал</Button>
          <Button onClick={() => calendarRef.current?.scrollToMonth(4, 2023)}>II квартал</Button>
          <Button onClick={() => calendarRef.current?.scrollToMonth(7, 2023)}>III квартал</Button>
          <Button onClick={() => calendarRef.current?.scrollToMonth(10, 2023)}>IV квартал</Button>
        </Gapped>
      </Gapped>
    </>
  );
```