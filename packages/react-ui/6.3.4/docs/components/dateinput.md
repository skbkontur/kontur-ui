# DateInput

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_date-components-dateinput--docs)

Поле ввода для выбора даты с клавиатуры. Используется в [поле с датой](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/datepicker.md).

```jsx
import { DateInput } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `autoFocus`

type: `boolean` · optional

Устанавливает фокус на поле после окончания загрузки страницы.

### `value`

type: `string` · optional · default: ``

Значение поля.

### `error`

type: `boolean` · optional

Меняет визуальное отображение поля на состояние ошибки.

### `warning`

type: `boolean` · optional

Меняет визуальное отображение поля на состояние предупреждения.

### `disabled`

type: `boolean` · optional

Блокирует поле.

### `minDate`

type: `string` · optional · default: `01.01.1900`

Минимальная дата в формате `dd.mm.yyyy`.

### `maxDate`

type: `string` · optional · default: `31.12.2099`

Максимальная дата в формате `dd.mm.yyyy`.

### `width`

type: `string | number` · optional · default: `125`

Ширина поля.

### `withIcon`

type: `boolean` · optional

Добавляет иконку календаря.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер поля.

### `onBlur`

type: `(x0: FocusEvent<HTMLElement, Element>) => void` · optional

Событие потери полем фокуса.

### `onClick`

type: `(x0: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Событие нажатия на поле.

### `onFocus`

type: `(x0: FocusEvent<HTMLElement, Element>) => void` · optional

Событие получения полем фокуса.

### `onValueChange`

type: `(value: string) => void` · optional

Событие изменения value.
@param value - строка в формате `dd.mm.yyyy`.

### `onKeyDown`

type: `(x0: KeyboardEvent<HTMLElement>) => void` · optional

Событие нажатия кнопки на клавиатуре.

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

Используйте поле с датой, когда нужно ввести дату в формате ДД.ММ.ГГГГ. Отличается от обычного поля ввода наличием маски даты.

Если вам нужно поле ввода даты не только с вводом с клавиатуры, но и с выбором в блоке календаря - используйте - [DatePicker](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/datepicker.md).

## Примеры

### ExampleBasic

```tsx
const [value, setValue] = React.useState<string | undefined>();
return <DateInput value={value} onValueChange={setValue} />;
```

### Размер

Проп `size` задаёт размер поля.

```tsx
const [value, setValue] = React.useState<string | undefined>();
return (
    <Gapped vertical>
      <DateInput value={value} onValueChange={setValue} size={'small'} />
      <DateInput value={value} onValueChange={setValue} size={'medium'} />
      <DateInput value={value} onValueChange={setValue} size={'large'} />
    </Gapped>
  );
```

### Ширина

Проп `width` задаёт ширину поля.

```tsx
const [value, setValue] = React.useState<string | undefined>();
return <DateInput value={value} onValueChange={setValue} width={250} />;
```

### Иконка календаря

Проп `withIcon` добавляет иконку календаря в поле.

```tsx
const [value, setValue] = React.useState<string | undefined>();
return <DateInput value={value} onValueChange={setValue} withIcon />;
```

### Минимальная и максимальная даты

С помощью пропсов `minDate` и `maxDate` можно задавать минимально и максимально возможную дату для выбора в поле. Подняться выше или ниже установленных дат при использовании стрелок на клавиатуре у пользователя не получится, но сами по себе пропсы не блокируют ручной ввод и вставку дат в поле вне заданных рамок.

```tsx
const [date, setDate] = React.useState('01.01.2026');
const [minDate] = React.useState('01.01.2000');
const [maxDate] = React.useState('01.01.2050');
return <DateInput value={date} onValueChange={setDate} minDate={minDate} maxDate={maxDate} />;
```

### Состояние блокировки

Проп `disabled` блокирует поле.

```tsx
return <DateInput disabled value="27.04.1992" />;
```

### Состояние ошибки

Проп `error` переводит поле в состояние ошибки.

```tsx
return <DateInput error value="27.04.1992" />;
```

### Состояние предупреждения

Проп `warning` переводит поле в состояние предупреждения.

```tsx
return <DateInput warning value="27.04.1992" />;
```

### Форматирование даты

Поле ввода даты может быть настроено с нужным порядком компонентов даты (год/месяц/день) и символом-разделителем.

```tsx
class DateInputFormatting extends React.Component<
    Record<string, never>,
    { order: DateOrder; separator: keyof typeof DateSeparator; value: string }
  > {
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
          <LocaleContext.Provider
            value={{
              locale: {
                DatePicker: {
                  separator: DateSeparator[this.state.separator],
                  order: this.state.order,
                },
              },
            }}
          >
            <DateInput onValueChange={(value) => this.setState({ value })} value={this.state.value} />
          </LocaleContext.Provider>
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
        </Gapped>
      );
    }
  }
return <DateInputFormatting />;
```

### Форматирование даты при смене локали

Формат даты зависит от локали в `LangCodes`.

```tsx
class DateInputFormatting2 extends React.Component<Record<string, never>, { langCode: LangCodes; value: string }> {
    constructor(props: Record<string, never>) {
      super(props);
      this.state = {
        langCode: LangCodes.ru_RU,
        value: '21.12.2012',
      };
    }

    render() {
      return (
        <Gapped vertical gap={10}>
          <div>
            <Select
              value={this.state.langCode}
              placeholder="Выбрать язык"
              items={Object.values(LangCodes)}
              onValueChange={(langCode) => this.setState({ langCode })}
            />
          </div>
          <LocaleContext.Provider value={{ langCode: this.state.langCode }}>
            <DateInput onValueChange={(value) => this.setState({ value })} value={this.state.value} />
          </LocaleContext.Provider>
        </Gapped>
      );
    }
  }
return <DateInputFormatting2 />;
```

## Валидация

Примеры обработок ошибок для поля смотрите на странице компонента [Поле с датой](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/datepicker.md) в блоке «Валидация».

## Адаптивность

По умолчанию поле ввода даты не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/DateInput/DateInput.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/DateInput/DateInput.tsx)
