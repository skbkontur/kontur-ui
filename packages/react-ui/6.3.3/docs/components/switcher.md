# Switcher

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-switcher--docs)

Переключатель используется для выбора одного значения из нескольких. Похож на [группу радиокнопок](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-radiogroup--docs), но более компактный.

```jsx
import { Switcher } from '@skbkontur/react-ui';
```

Подпись к свитчеру указывается в пропе `caption`.

## Все пропсы и методы

### `items`

type: `SwitcherItems[]` · required

Задаёт список элементов в свитчере. Это массив строк или объектов типа `{ label: string, value: string, buttonProps?: Partial<ButtonProps> }`

### `value`

type: `string` · optional

Значение свитчера.

### `onValueChange`

type: `(value: string) => void` · optional

Событие изменения значения свитчера (value).

### `caption`

type: `string` · optional

Подпись около свитчера.

### `error`

type: `boolean` · optional

Переводит свитчер в состояние ошибки.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер свитчера.

### `width`

type: `Width<string | number>` · optional

Ширина свитчера. С этим пропом элементы внутри автоматически равномерно растянутся.

### `disabled`

type: `boolean` · optional

Блокирует свитчер.

### `renderItem`

type: `(label: string, value: string, buttonProps: ButtonProps, renderDefault: () => ReactNode, ariaLabel?: string) => ReactNode` · optional

Задаёт функцию отрисовки элемента. Параметр `renderDefault` - это встроенная дефолтная функция отрисовки элемента, которую можно вызывать в `renderItem`.

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

Переключатель используют, когда вариантов выбора немного: от трёх до пяти.

**Когда не использовать**

- Старайтесь не использовать переключатель из двух значений — пользователи не понимают, какой из пунктов выбран.
- Не используйте переключатель в качестве навигации, для этого лучше подходят [Tabs](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-tabs-tabs--docs).

## Примеры

### Базовый пример

```tsx
const [value, setValue] = React.useState('');
return (
    <Switcher caption="Выбери вариант" items={['Первый', 'Второй', 'Третий']} value={value} onValueChange={setValue} />
  );
```

### Размер

Проп `size` задаёт размер свитчера.

```tsx
const [valueFirst, setValueFirst] = React.useState('');
const [valueSecond, setValueSecond] = React.useState('');
const [valueThird, setValueThird] = React.useState('');
const items = ['Первый', 'Второй', 'Третий'];
return (
    <Gapped vertical gap={16}>
      <Switcher size="small" items={items} value={valueFirst} onValueChange={setValueFirst} />
      <Switcher size="medium" items={items} value={valueSecond} onValueChange={setValueSecond} />
      <Switcher size="large" items={items} value={valueThird} onValueChange={setValueThird} />
    </Gapped>
  );
```

### Ширина

Проп `width` задаёт ширину свитчера.

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

### Состояние блокировки

Проп `disabled` блокирует свитчер.

```tsx
const [value, setValue] = React.useState('');
return (
    <Switcher
      caption="Выбери вариант"
      items={['Первый', 'Второй', 'Третий']}
      value={value}
      onValueChange={setValue}
      disabled
    />
  );
```

### Состояние ошибки

Проп `error` переводит свитчер в состояние ошибки.

```tsx
const [value, setValue] = React.useState('');
return (
    <Switcher
      caption="Выбери вариант"
      items={['Первый', 'Второй', 'Третий']}
      value={value}
      onValueChange={setValue}
      error
    />
  );
```

### items в виде объектов

В примере задан случай, когда `items` принимает объект типа `{ label: string, value: string }`.

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

### Кастомизация кнопки

Пример с `items` с полем `buttonProps`, который позволяет кастомизировать кнопку.

```tsx
const [value, setValue] = React.useState('system');
const items: SwitcherItems[] = [
    {
      label: '',
      value: 'light',
      buttonProps: {
        icon: <IconWeatherSunLight16 />,
      },
    },
    {
      label: '',
      value: 'system',
      buttonProps: {
        icon: <IconTechScreenMonitorLight16 />,
      },
    },
    {
      label: '',
      value: 'dark',
      buttonProps: {
        icon: <IconWeatherMoonLight16 />,
      },
    },
  ];
return <Switcher items={items} value={value} onValueChange={setValue} />;
```

### Кастомизация items

Пример с методом `renderItem` для кастомизации `items`.

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

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию свитчер не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Switcher/Switcher.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Switcher/Switcher.tsx)
