# Switcher

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button_switcher--docs)

## Import

```jsx
import { Switcher } from '@skbkontur/react-ui';
```

## Props

- **items**: Задает список элементов в свитчере. Это массив строк или объектов типа `{ label: string, value: string, buttonProps?: Partial<ButtonProps> }`
- **value?**: Устанавливает значение свитчера.
- **onValueChange?**: Задает функцию, которая вызывается при изменении значения свитчера (value).
- **caption?**: Задает подпись около свитчера.
- **error?**: Переводит контрол в состояние валидации "ошибка".
- **size?**: Задает размер контрола.
- **width?**: Задает ширину контрола. С этим пропом элементы внутри автоматически равномерно растянутся.
- **disabled?**: Делает компонент недоступным.
- **renderItem?**: Задает функцию отрисовки элемента. Параметр `renderDefault` - это встроенная дефолтная функция отрисовки элемента, которую можно вызывать в `renderItem`.

### BasicExample

```tsx
const [value, setValue] = React.useState('');

  return (
    <Switcher caption="Выбери вариант" items={['Первый', 'Второй', 'Третий']} value={value} onValueChange={setValue} />
  );
```

### WithItemsAsObjects

Случай, когда `items` принимает объект типа `{ label: string, value: string }`

```tsx
const [value, setValue] = React.useState('');
  const items: SwitcherItems[] = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
    },
  ];

  return (
    <Gapped gap={8} vertical>
      <Switcher caption="Отчет за" items={items} value={value} onValueChange={setValue} />
      <div>value: {value}</div>
    </Gapped>
  );
```

### WithCustomButtonProps

Вариант `items` с полем `buttonProps`, который позволяет кастомизировать кнопку

```tsx
const [value, setValue] = React.useState('system');
  const items: SwitcherItems[] = [
    {
      label: '',
      value: 'light',
      buttonProps: {
        icon: <WeatherSunIcon16Light />,
      },
    },
    {
      label: '',
      value: 'system',
      buttonProps: {
        icon: <TechScreenMonitorIcon16Light />,
      },
    },
    {
      label: '',
      value: 'dark',
      buttonProps: {
        icon: <WeatherMoonIcon16Light />,
      },
    },
  ];

  return <Switcher items={items} value={value} onValueChange={setValue} />;
```

### WithCustomRenderItem

Пример с методом `renderItem` для кастомизации `items`:

```tsx
const [value, setValue] = React.useState('');
  const items = ['Самовывоз', 'Постамат', 'Курьер'];

  const renderItem = (label: string, value: string, buttonProps: ButtonProps, renderDefault: () => React.ReactNode) => {
    if (value === 'Постамат') {
      return (
        <Hint pos="bottom" text="Доставим в удобный пункт выдачи">
          {renderDefault()}
        </Hint>
      );
    }
    if (value === 'Курьер') {
      return (
        <Tooltip
          pos="top left"
          trigger="click"
          render={() => (
            <div>
              Из-за повышенного объема заказов
              <br />
              возможно длительное ожидание
            </div>
          )}
        >
          {renderDefault()}
        </Tooltip>
      );
    }
    return renderDefault();
  };

  return (
    <Switcher caption="Способ получения" items={items} value={value} onValueChange={setValue} renderItem={renderItem} />
  );
```

### WithCustomWidth

Пример с разными значениями пропа `width`:

```tsx
const [valueFirst, setValueFirst] = React.useState('');
  const [valueSecond, setValueSecond] = React.useState('');
  const [valueThird, setValueThird] = React.useState('');
  const items = ['Первый', 'Второй', 'Третий'];

  return (
    <Gapped vertical gap={16}>
      <Switcher width={250} items={items} value={valueFirst} onValueChange={setValueFirst} />
      <Switcher width="50%" items={items} value={valueSecond} onValueChange={setValueSecond} />
      <Switcher width="100%" items={items} value={valueThird} onValueChange={setValueThird} />
    </Gapped>
  );
```