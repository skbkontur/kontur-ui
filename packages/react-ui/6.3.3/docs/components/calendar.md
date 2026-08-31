# Calendar

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_date-components-calendar--docs)

Блок календаря для выбора даты с помощью мыши. Используется в [поле с датой](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/datepicker.md).

```jsx
import { Calendar } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `onValueChange`

type: `(date: string) => void` · optional

Событие изменения value.
@param date - строка в формате `dd.mm.yyyy`.

### `value`

type: `string` · required

Текущая дата в формате `dd.mm.yyyy`.

### `maxDate`

type: `string` · optional · default: `Calendar.formatDate(MAX_DATE, MAX_MONTH, MAX_YEAR)`

Максимальная дата в формате `dd.mm.yyyy`.

### `minDate`

type: `string` · optional · default: `Calendar.formatDate(MIN_DATE, MIN_MONTH, MIN_YEAR)`

Минимальная дата в формате `dd.mm.yyyy`.

### `periodStartDate`

type: `string` · optional

Начальная дата периода в формате `dd.mm.yyyy`.

### `periodEndDate`

type: `string` · optional

Конечная дата периода в формате `dd.mm.yyyy`.

### `isHoliday`

type: `(day: string, isWeekend: boolean) => boolean` · optional · default: `(_day: string, isWeekend: boolean) => isWeekend`

Определение праздничных дней.
@param day - строка в формате `dd.mm.yyyy`.
@param isWeekend - флаг выходного (суббота или воскресенье).
@returns `true` для выходного или `false` для рабочего дня.

### `initialMonth`

type: `9 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12` · optional

Начальный месяц.

### `initialYear`

type: `number` · optional

Начальный год.

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

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Примеры

### ExampleBasic

```tsx
const [date, setDate] = React.useState('01.01.2026');
return <Calendar value={date} onValueChange={setDate} />;
```

### Минимальная и максимальная даты в календаре

С помощью пропсов `minDate` и `maxDate` можно задавать минимально и максимально возможную дату для выбора в календаре.

```tsx
const [date, setDate] = React.useState('01.01.2026');
const [minDate] = React.useState('01.01.2000');
const [maxDate] = React.useState('01.01.2050');
return <Calendar value={date} onValueChange={setDate} minDate={minDate} maxDate={maxDate} />;
```

### Начальные год и месяц

С помощью пропсов `initialMonth` и `initialYear` можно изменить отображение начального года и месяца. Вне зависимости от того, какая дата выбрана в календаре в данный момент.

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

### Выходные и праздничные дни

В проп `isHoliday` можно передать функцию, которая будет получать день строкой формата `dd.mm.yyyy` и флаг `isWeekend` из [компонента дня](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_date-components-calendarday--docs).
Функция должна вернуть `true` для выходного дня и `false` — для рабочего.

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

### Скролл к месяцу

С помощью метода `scrollToMonth` можно реализовать контрол для быстрого скролла к определённому месяцу года.

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

### Кастомизация: высота

Календарю можно задать кастомную высоту с помощью переменной темы `calendarWrapperHeight`:
- базовая высота календаря — `330px`
- максимальная высота календаря — `450px`

```tsx
const [date, setDate] = React.useState('01.11.2021');
const theme = React.useContext(ThemeContext);
return (
    <ThemeContext.Provider value={ThemeFactory.create({ calendarWrapperHeight: '450px' }, theme)}>
      <Calendar value={date} onValueChange={setDate} />
    </ThemeContext.Provider>
  );
```

### Кастомизация: рендер дня

Для кастомизации дней в календаре используется проп `renderDay`.
Для корректной работы компонента обязательно используйте компонент `<CalendarDay />` и передайте в него все приходящие в функцию пропсы: `<Calendar renderDay={(props) => <CalendarDay {...props} />} />`.

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

### Кастомизация: календарь с ценами

В примере кастомизирована тема календаря и рендер дня.

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

## Адаптивность

На мобильных устройствах блок календаря открывается на весь экран устройства и становится фокусным активным элементом, что упрощает работу с ним. Мобильный режим активируется при ширине вьюпорта < `768px`.

Через проп `useMobileNativeDatePicker` можно изменить режим на нативный календарь мобильного устройства.
Обратите внимание, что [календарь в iOS не поддерживает](https://bugs.webkit.org/show_bug.cgi?id=225639) `minDate` и `maxDate`.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/Calendar/Calendar.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Calendar/Calendar.tsx)
