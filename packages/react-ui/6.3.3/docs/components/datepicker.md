# DatePicker

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_date-components-datepicker--docs)

Поле с датой помогает вводить дату с клавиатуры или выбирать её с помощью мыши.

```jsx
import { DatePicker } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `autoFocus`

type: `boolean` · optional

Устанавливает фокус на поле с датой после окончания загрузки страницы.

### `disabled`

type: `boolean` · optional

Блокирует поле с датой. Поле становится недоступно для редактирования.

### `enableTodayLink`

type: `boolean` · optional

Отображает в календаре кнопку «Сегодня», которая меняет выбранное значение на текущую дату.

### `error`

type: `boolean` · optional

Меняет визуальное отображение поля на состояние «ошибка».

### `menuPos`

type: `"top" | "bottom"` · optional

Расположение календаря — над или под полем.

### `menuAlign`

type: `"left" | "right"` · optional

Выравнивание выпадающего окна с календарём.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер поля с датой.

### `value`

type: `string` · optional

Значение поля в формате `dd.mm.yyyy`.

### `warning`

type: `boolean` · optional

Меняет визуальное отображение поля на состояние «предупреждение».

### `width`

type: `string | number` · optional

Ширина поля с датой.

### `onBlur`

type: `() => void` · optional

Задает функцию, которая вызывается при потере датапикером фокуса.

### `onValueChange`

type: `(value: string) => void` · required

Задает функцию, вызывающуюся при изменении value.
@param value - строка в формате `dd.mm.yyyy`.

### `onFocus`

type: `() => void` · optional

Задает функцию, которая вызывается при получении датапикером фокуса.

### `onKeyDown`

type: `(e: KeyboardEvent<any>) => void` · optional

Задает функцию, которая вызывается при нажатии кнопки на клавиатуре.

### `onMouseEnter`

type: `(e: MouseEvent<any, MouseEvent>) => void` · optional

Задает функцию, которая вызывается при наведении мышкой (событие `onmouseenter`). См разницу с onMouseOver в [документации](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave)

### `onMouseLeave`

type: `(e: MouseEvent<any, MouseEvent>) => void` · optional

Задает функцию, которая вызывается при уходе мышки с объекта (событие `onmouseleave`).

### `onMouseOver`

type: `(e: MouseEvent<any, MouseEvent>) => void` · optional

Задает функцию, которая вызывается при наведении мышкой (событие `onmouseover`).

### `useMobileNativeDatePicker`

type: `boolean` · optional

Позволяет использовать на мобильных устройствах нативный календарь для выбора дат.
На iOS нативный календарь не умеет работать с minDate и maxDate.

### `minDate`

type: `string` · optional · default: `01.01.1900`

Минимальная дата в формате `dd.mm.yyyy`.

### `maxDate`

type: `string` · optional · default: `31.12.2099`

Максимальная дата в формате `dd.mm.yyyy`.

### `isHoliday`

type: `(day: string, isWeekend: boolean) => boolean` · optional · default: `(_day, isWeekend) => isWeekend.`

Определение праздничных дней.
@param day - строка в формате `dd.mm.yyyy`.
@param isWeekend - флаг выходного (суббота или воскресенье).
@returns `true` для выходного или `false` для рабочего дня.

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

## Использование

Используйте поле с датой, когда нужно ввести дату в формате ДД.ММ.ГГГГ. Отличается от обычного поля ввода наличием иконки, маски и блока календаря.

Составной компонент, включает в себя:

- [DateInput](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/dateinput.md) — компонент поля с маской для выбора даты с клавиатуры.
- [Calendar](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/calendar.md) — компонент календаря для выбора даты с помощью мыши.

## Примеры

### ExampleBasic

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} />;
```

### Размер

Проп `size` задаёт размер поля с датой.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return (
    <Gapped vertical>
      <DatePicker value={value} onValueChange={setValue} size={'small'} />
      <DatePicker value={value} onValueChange={setValue} size={'medium'} />
      <DatePicker value={value} onValueChange={setValue} size={'large'} />
    </Gapped>
  );
```

### Ширина

Проп `width` задаёт ширину поля с датой.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} width={'300px'} />;
```

### Кнопка «Сегодня»

Проп `enableTodayLink` добавляет в календарь кнопку «Сегодня», которая меняет выбранное значение на текущую дату.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} enableTodayLink />;
```

### Расположение календаря

Проп `menuPos` фиксирует расположение выпадающего окна с календарём. Оно может быть под полем — `"bottom"` или над ним — `"top"`.
По умолчанию календарь отображается под полем, а если не хватает места, то динамически меняет расположение и показывается над полем.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} menuPos={'top'} />;
```

### Выравнивание календаря

Проп `menuAlign` выравнивает выпадающее окно с календарём. Оно может быть прикреплено к левому краю — `"left"` или к правому — `"right"`.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} menuAlign={'right'} />;
```

### Состояние блокировки

Проп `disabled` переводит поле в состояние блокировки. Поле визуально приглушается и становится недоступно для редактирования.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} disabled />;
```

### Состояние ошибки

Проп `error` переводит поле в состояние ошибки.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} error />;
```

### Состояние предупреждения

Проп `warning` переводит поле в состояние предупреждения.

```tsx
const [value, setValue] = React.useState('12.05.2026');
return <DatePicker value={value} onValueChange={setValue} warning />;
```

### Выходные и праздничные дни

В проп `isHoliday` можно передать функцию, которая будет получать день строкой формата `dd.mm.yyyy` и флаг `isWeekend` из [компонента дня](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_date-components-calendarday--docs).
Функция должна вернуть `true` для выходного дня и `false` — для рабочего.

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

### Форматирование даты

В примере показано, как менять формат отображения даты в рантайме: порядок компонентов день/месяц/год и разделитель между ними.

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

### Кастомизация: рендер дня

Вы можете кастомизировать части поля с датой. В примере ниже задан кастомный вид для дня календаря. Ещё примеры кастомизации смотрите в компоненте [Calendar](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/calendar.md).

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

## Валидация

Для сравнения и валидации дат в строках формата `DD.MM.YYYY` доступен набор утилит [Date Utilities](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_date-components-date-utilities--docs).

Пример с обработкой ошибок, когда пользователь ввёл невалидную дату.

## Адаптивность

Поле с датой адаптивно: на мобильных устройствах блок календаря открывается на весь экран устройства и становится фокусным активным элементом, что упрощает работу с ним. Мобильный режим активируется при ширине вьюпорта < `768px`.

Через проп `useMobileNativeDatePicker` можно изменить режим на нативный календарь мобильного устройства.
Обратите внимание, что [календарь в iOS не поддерживает](https://bugs.webkit.org/show_bug.cgi?id=225639) `minDate` и `maxDate`.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/DatePicker/DatePicker.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/DatePicker/DatePicker.tsx)
