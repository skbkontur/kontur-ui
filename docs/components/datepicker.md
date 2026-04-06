# DatePicker

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_date-components_datepicker--docs)

## Import

```jsx
import { DatePicker } from '@skbkontur/react-ui';
```

## Props

- **autoFocus?**: Устанавливает фокус на контроле после окончания загрузки страницы.
- **disabled?**: Делает компонент недоступным.
- **enableTodayLink?**: Отображает кнопку "Сегодня" в календаре.
- **error?**: Переводит контрол в состояние валидации "ошибка".
- **menuPos?**: Задает nекущую позицию выпадающего окна вручную.
- **menuAlign?**: Задает выравнивание меню.
- **size?**: Задает размер контрола.
- **value?**: Строка формата `dd.mm.yyyy` Задает значение автокомплита.
- **warning?**: Переводит контрол в состояние валидации "предупреждение".
- **width?**: Задает ширину автокомплита.
- **onBlur?**: Задает функцию, которая вызывается при потере датапикером фокуса.
- **onValueChange**: Задает функцию, вызывающуюся при изменении value.
- **onFocus?**: Задает функцию, которая вызывается при получении датапикером фокуса.
- **onKeyDown?**: Задает функцию, которая вызывается при нажатии кнопки на клавиатуре.
- **onMouseEnter?**: Задает функцию, которая вызывается при наведении мышкой (событие `onmouseenter`). См разницу с onMouseOver в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave)
- **onMouseLeave?**: Задает функцию, которая вызывается при уходе мышки с объекта (событие `onmouseleave`).
- **onMouseOver?**: Задает функцию, которая вызывается при наведении мышкой (событие `onmouseover`).
- **useMobileNativeDatePicker?**: Позволяет использовать на мобильных устройствах нативный календарь для выбора дат. На iOS нативный календарь не умеет работать с minDate и maxDate.

### Example1

Пример с обработкой ошибок, когда пользователь ввел невалидную дату.

```tsx
const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [tooltip, setTooltip] = React.useState(false);

  const minDate = '22.12.2012';
  const maxDate = '02.05.2018';

  const unvalidate = () => {
    setError(false);
    setTooltip(false);
  };

  const validate = () => {
    const errorNew = !!value && !DatePicker.validate(value, { minDate, maxDate });
    setError(errorNew);
    setTooltip(errorNew);
  };

  const removeTooltip = () => setTooltip(false);

  return (
    <Gapped gap={10} vertical>
      <ViewDateInputValidateChecks value={value} minDate={minDate} maxDate={maxDate} />
      <pre>
        minDate = {minDate}
        <br />
        maxDate = {maxDate}
      </pre>

      <Tooltip trigger={tooltip ? 'opened' : 'closed'} render={() => 'Невалидная дата'} onCloseClick={removeTooltip}>
        <DatePicker
          error={error}
          value={value}
          onValueChange={setValue}
          onFocus={unvalidate}
          onBlur={validate}
          minDate={minDate}
          maxDate={maxDate}
          enableTodayLink
        />
      </Tooltip>
    </Gapped>
  );
```

### Example2

В компонент можно передать функцию `isHoliday`, которая будет получать день строкой формата `dd.mm.yyyy` и флаг `isWeekend`, и должна вернуть `true` для выходного и `false` для рабочего дня.

```tsx
const [value, setValue] = React.useState('');

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

  return <DatePicker isHoliday={isHoliday} value={value} onValueChange={setValue} enableTodayLink />;
```

### Example4

```tsx
class DatePickerFormatting extends React.Component<any, any> {
    constructor(props: Record<string, never>) {
      super(props);
      this.state = {
        order: DateOrder.YMD,
        separator: 'Dot',
        value: '21.12.2012',
      };
    }

    render() {
      return (
        <Gapped vertical gap={10}>
          <div>
            <span style={{ width: '300px', display: 'inline-block' }}>
              Порядок компонентов (<code>DateOrder</code>)
            </span>
            <Select
              value={this.state.order}
              items={Object.keys(DateOrder)}
              onValueChange={(order) => this.setState({ order })}
            />
          </div>
          <div>
            <span style={{ width: '300px', display: 'inline-block' }}>
              Разделитель (<code>DateSeparator</code>)
            </span>
            <Select
              value={this.state.separator}
              items={Object.keys(DateSeparator)}
              onValueChange={(separator) => this.setState({ separator })}
            />
          </div>
          <LocaleContext.Provider
            value={{
              langCode: LangCodes.ru_RU,
              locale: {
                DatePicker: {
                  separator: DateSeparator[this.state.separator as keyof typeof DateSeparator],
                  order: this.state.order,
                },
              },
            }}
          >
            <DatePicker onValueChange={(value) => this.setState({ value })} value={this.state.value} />
          </LocaleContext.Provider>
        </Gapped>
      );
    }
  }

  return <DatePickerFormatting />;
```

### Example5

Подробный пример в компоненте Calendar.

```tsx
const [value, setValue] = React.useState('12.05.2022');

  const renderDay = (props: CalendarDayProps) => {
    const [date] = props.date.split('.').map(Number);
    const isEven = date % 2 === 0;

    if (isEven) {
      return <CalendarDay {...props} style={{ background: '#e9f8e3' }} />;
    }

    return <CalendarDay {...props} />;
  };

  return <DatePicker value={value} onValueChange={setValue} renderDay={renderDay} />;
```