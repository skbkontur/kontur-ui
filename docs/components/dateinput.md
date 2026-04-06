# DateInput

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_date-components_dateinput--docs)

## Import

```jsx
import { DateInput } from '@skbkontur/react-ui';
```

## Props

- **autoFocus?**: Устанавливает фокус на контроле после окончания загрузки страницы.
- **value?**: Устанавливает значение датаинпута.
- **error?**: Переводит контрол в состояние валидации "ошибка".
- **warning?**: Переводит контрол в состояние валидации "предупреждение".
- **disabled?**: Делает компонент недоступным.
- **minDate?**: Задает минимальную возможную дату в формате `dd.mm.yyyy`.
- **maxDate?**: Задает максимальную возможную дату в формате `dd.mm.yyyy`
- **width?**: Задает ширину поля.
- **withIcon?**: Добавляет иконку календаря.
- **size?**: Задает размер поля.
- **onBlur?**: Задает функцию, которая вызывается при потере датаинпутом фокуса.
- **onClick?**: Задает функцию, которая вызывается при клике на датаинпут.
- **onFocus?**: Задает функцию, которая вызывается при получении датаинпутом фокуса.
- **onValueChange?**: Задает функцию, которая вызывается при изменении value.
- **onKeyDown?**: Задает функцию, которая вызывается при нажатии кнопки на клавиатуре.

### Example1

```tsx
return <DateInput value="27.04.1992" />;
```

### Example2

```tsx
const [value, setValue] = React.useState<string | undefined>();

  return <DateInput value={value} onValueChange={setValue} />;
```

### Example3

```tsx
return <DateInput disabled value="27.04.1992" />;
```

### Example4

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
            <span style={{ width: '300px', display: 'inline-block' }}>
              Локаль (<code>LangCodes</code>)
            </span>
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

### Example5

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
        </Gapped>
      );
    }
  }

  return <DateInputFormatting />;
```