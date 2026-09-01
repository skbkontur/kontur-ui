# TimePicker

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-timepicker--docs)

Поле с временем помогает пользователю быстро и удобно указать время в правильном формате.
В поле можно ввести время с клавиатуры либо выбрать из выпадающего списка,
передав массив или функцию в проп `source`.

```jsx
import { TimePicker } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `format`

type: `"HH:mm" | "HH:mm:ss"` · optional · default: `HH:mm`

Устанавливает формат времени

### `source`

type: `TimePickerSource<string>` · optional

Задает источник элементов выпадающего списка: массив либо функцию запроса,
которая возвращает массив или Promise с массивом.
Запрос — это введенные цифры сегментов с сохранением их позиций: `12`, `12:3`, а если заполнены только минуты — `:30`.
Элементы задаются либо строками со временем — `'09:00'`, — либо объектами `{ value, label?, disabled? }`
с любыми дополнительными полями; смешивать формы в одном источнике нельзя, это ошибка типов.
В `onValueChange` приходит только время выбранного элемента: сам элемент можно найти в `source` по нему.
Кроме значений времени можно передать React-элементы — например `MenuHeader` или `MenuItem`:
они отображаются в меню, но не участвуют в фильтрации и выборе значения.
Фильтрацию, индикацию загрузки и повторные запросы компонент берет на себя,
подробности — в разделе документации про выпадающий список.
Замена самой функции уже открытый список не перезапрашивает: как в `ComboBox`,
актуальная функция используется при следующем запросе.

### `renderItem`

type: `(item: string, state: MenuItemState) => ReactNode` · optional

Отрисовывает элемент со временем в выпадающем списке. Не применяется к React-элементам из `source`.
Время элемента приведено к формату поля, как и везде в компоненте:
элемент `'9:00'` приходит как `'09:00'`, а `{ value: '09:00:00' }` в формате `HH:mm` — как `{ value: '09:00' }`.
Остальные поля элемента сохраняются.

### `minTime`

type: `string` · optional

Задает нижнюю границу времени. Элементы за границей становятся заблокированными.

### `maxTime`

type: `string` · optional

Задает верхнюю границу времени. Элементы за границей становятся заблокированными.

### `value`

type: `string` · optional

Задает значение поля: время в формате `HH:mm[:ss]`.
Пустое значение можно передать как `''` или `null`.
Если проп не задан, компонент неконтролируемый: он хранит значение сам и сообщает о нем через `onValueChange`.

### `autoFocus`

type: `boolean` · optional · default: `false`

Устанавливает фокус на поле ввода после окончания загрузки страницы

### `disabled`

type: `boolean` · optional

Делает компонент заблокированным.

### `error`

type: `boolean` · optional

Переводит контрол в состояние валидации ошибки.

### `warning`

type: `boolean` · optional

Переводит контрол в состояние валидации предупреждения.

### `useMobileNativeTimePicker`

type: `boolean` · optional

Включает нативный системный выбор времени в мобильной верстке.
Мобильная верстка определяется медиавыражением темы, как в остальных адаптивных контролах.

### `menuPos`

type: `"top" | "bottom"` · optional

Расположение выпадающего меню.

### `menuAlign`

type: `"left" | "right"` · optional

Выравнивание выпадающего меню.

### `menuWidth`

type: `string | number` · optional

Ширина выпадающего меню. По умолчанию — минимальная ширина поля ввода, расширяется по контенту.

### `width`

type: `string | number` · optional

Задает ширину поля.

### `rightIcon`

type: `ReactNode | (() => ReactNode)` · optional

Переопределяет иконку или скрывает, если передать `null`.
Пока элементы уже показаны, а новый запрос к функции-источнику еще выполняется,
вместо иконки показывается индикатор загрузки.

### `suffix`

type: `ReactNode` · optional

Устанавливает суффикс после значения и перед иконкой.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер поля ввода и выпадающего меню.

### `onClick`

type: `(event: MouseEvent<HTMLElement, MouseEvent>) => void` · optional

Задает функцию, которая вызывается при нажатии на контрол.

### `onValueChange`

type: `(time: string) => void` · optional

Событие изменения значения `value`.
Вызывается при коммите значения: потере фокуса, нажатии Enter, выборе элемента из списка
или изменении в нативном пикере.
Время полностью нормализовано до формата `HH:mm[:ss]`, а пустое значение приходит пустой строкой.
Элементы-объекты из `source` наружу не приходят: по времени их можно найти в самом `source`.

### `onInputValueChange`

type: `(value: string) => void` · optional

Событие изменения значения в процессе ввода.
Значение частично нормализуется по сегментам, например `1` => `01`, незаполненный хвост отбрасывается.
Промежуточное значение может не соответствовать полной форме `HH:mm[:ss]`, поэтому тип — произвольная строка.

### `onUnexpectedInput`

type: `(value: string, blink: () => void) => string | void` · optional

Событие некорректного ввода: пользователь ввел или вставил значение, которое не может быть временем.
Вызывается с нажатой клавишей — например `а` или `,` — либо со значением из буфера,
из которого не получилось собрать время.
Значение вне диапазона `minTime`/`maxTime` некорректным вводом не считается,
его можно проверить через `TimePicker.validate`.
Вторым аргументом передается метод вспыхивания рамки поля.
Если обработчик не задан, поле вспыхивает само.
Обработчик может подставить значение вместо некорректного ввода — например разобрать вставку
в собственном формате: возвращенное время коммитится и приходит в `onValueChange`,
`null` очищает поле, а `undefined` оставляет значение прежним.

### `onBlur`

type: `(event: FocusEvent<HTMLElement, Element>) => void` · optional

Событие потери фокуса.
Вызывается после коммита значения и следующего за ним рендера,
поэтому обработчик видит уже измененное значение — например при выборе элемента в мобильном попапе.
Из-за этого событие приходит отложенно и его `currentTarget` уже пуст: элемент читайте из `target`.

### `onFocus`

type: `(event: FocusEvent<HTMLElement, Element>) => void` · optional

Событие получения фокуса.

### `onKeyDown`

type: `(event: KeyboardEvent<HTMLElement>) => void` · optional

Событие нажатия клавиши.

### `onPaste`

type: `(event: ClipboardEvent<HTMLElement>) => void` · optional

Событие вставки из буфера.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### Публичные ref-методы

Через `ref` доступны методы:

- `focus(options?)` — устанавливает фокус на поле. С `{ withoutOpenDropdown: true }` фокус не открывает выпадающее меню.
- `blur()` — снимает фокус с поля.
- `open()` — открывает выпадающее меню, установив фокус на поле. В режиме `useMobileNativeTimePicker` открывает системный пикер.
- `close()` — закрывает выпадающее меню, не снимая фокус с поля.
- `blink()` — запускает анимацию blink.
- `getRootNode()` — возвращает корневой DOM-узел компонента.

## Использование

Используйте поле времени, когда нужно ввести значение в формате `HH:mm` или `HH:mm:ss`. Проп `format` принимает эти же строковые маски. Компонент поддерживает сегментный ввод с клавиатуры и, если передан непустой `source`, выбор элемента из выпадающего меню.

Проп `source` принимает массив элементов или функцию, которая получает текущий запрос и возвращает элементы синхронно или через Promise, например с сервера. Полученные элементы `TimePicker` фильтрует по началу сегментов времени, а индикацию загрузки и повтор упавшего запроса берёт на себя.

Элементы задаются либо строками со временем — `'09:00'`, — либо объектами, расширяющими `{ value: string }`: у объекта можно задать `label`, `disabled` и любые свои бизнес-поля. Смешивать строки и объекты в одном источнике нельзя. Кроме значений времени в массив можно передать компоненты меню — `MenuHeader`, `MenuSeparator`, `MenuItem`, `MenuFooter`.

Время элементов приводится к формату поля, поэтому в меню и в `renderItem` оно всегда выглядит одинаково: `'9:00'` показывается как `09:00`, а `{ value: '09:00:00' }` в формате `HH:mm` — как `09:00`. Остальные поля элемента при этом сохраняются.

Значение поля — всегда время строкой: и `value`, и `onValueChange` работают со строкой в формате `HH:mm[:ss]`, а пустое значение — это пустая строка. Тип элементов виден только в `source` и `renderItem`, наружу элементы не приходят: если продукту нужен сам элемент со всеми бизнес-полями, он находит его в `source` по времени.

Если проп `value` не задан, компонент неконтролируемый: он хранит значение сам и сообщает о нём через `onValueChange`.

**Альтернативы и дополнения**

[Input](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/input.md) — если пользователю достаточно свободного текстового ввода без форматных ограничений.

[DatePicker](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/datepicker.md) — если вместе со вводом нужно выбирать дату в календаре.

## Примеры

## Кастомизация

Для кастомизации компонента через theme доступны переменные с префиксом `timePicker*`, которые можно найти в [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-themeplayground--docs).

## Доступность

Интерактивная часть компонента имеет роль `textbox` и поддерживает `aria-describedby` и `aria-label`. Выпадающее меню — это `listbox`, его элементы — `option` с `aria-selected` у выбранного времени.

**Рекомендации**

- Связывайте поле с подписью через `<label htmlFor>` и `id`.
- Если у поля нет видимого лейбла, задавайте его через `aria-label`.
- `ArrowLeft` и `ArrowRight` переключают активный сегмент времени.
- `ArrowUp` и `ArrowDown` изменяют значение активного сегмента или перемещают выделение по элементам выпадающего меню.
- `Backspace` и `Delete` очищают активный сегмент, а `Ctrl + A` выделяет всё значение поля.
- `Enter` выбирает активный элемент из выпадающего меню, а если элемент не выбран, коммитит введённое значение.
- `Escape` закрывает выпадающее меню.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Валидация

Компонент не позволяет ввести с клавиатуры невалидное время, например `25:88`: некорректный ввод не попадает в поле, а рамка вспыхивает. Ввод, который временем быть не может — буква, знак или вставка вроде `2026-08-01`, — уходит в `onUnexpectedInput`. Обработчик может разобрать такую вставку сам и вернуть значение вместо неё.

Во время ввода `onInputValueChange` возвращает частично нормализованное значение сегмента, например `1` => `01`. Событие `onValueChange` срабатывает при коммите значения — потере фокуса, нажатии Enter, выборе элемента из списка или изменении в нативном пикере — и возвращает полностью нормализованное время, например `01:00`, а при пустом значении — пустую строку.

Вставка из буфера принимается, если это время — `12:30`, `9:5`, `12.30`, `1230`, — и сразу нормализуется к ближайшему валидному значению, например `25:88` → `23:59`.

На уровне продукта можно дополнительно валидировать пустое обязательное поле и проверять, что значение попадает в допустимый диапазон времени. Для этого есть статический метод `TimePicker.validate(value, { format, minTime, maxTime })` — он принимает время строкой.

### Обязательное поле

### Допустимый диапазон

### Валидация времени

Проверка времени `TimePicker.validate(value, options)`

- `value` — проверяемое время строкой
- `options.format` — формат времени
- `options.minTime` и `options.maxTime` — границы диапазона; перед сравнением они приводятся к `options.format`. Если `minTime` больше `maxTime`, диапазон считается переходящим через полночь

## Адаптивность

Мобильный режим включается медиазапросом темы `mobileMediaQuery`, то есть по ширине вьюпорта, а не по устройству. Выглядит поле в мобильном режиме так же, как в десктопном, и без `source` так же работает: время набирается прямо в поле.

Если передан непустой `source`, то в мобильном режиме выпадающее меню открывается в `MobilePopup` со списком элементов и полем ввода времени, а ввод по самому полю только открывает попап.

В мобильном режиме можно включить нативный системный выбор времени через проп `useMobileNativeTimePicker`. В этом режиме `minTime` и `maxTime` дополнительно передаются в нативный `input[type='time']` как ограничения браузера.

Обратите внимание, что в iOS нативный пикер [может не учитывать](https://bugs.webkit.org/show_bug.cgi?id=223128) `min`/`max`, позволяя выбирать время вне диапазона.

Также на iPhone/iOS нативный `input[type='time']` может не поддерживать редактирование секунд для формата `HH:mm:ss` даже при `step=1`: это ограничение платформенного пикера, а не логики `TimePicker` ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/time), [Stackoverflow](https://stackoverflow.com/questions/23222876/how-do-i-alter-the-step-for-time-input-for-ios)).

<br />

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## FAQ

<details>
  <summary>Почему `minTime` и `maxTime` не ограничивают ручной ввод?</summary>

Эти пропы влияют только на доступность переданных элементов в выпадающем меню.
Значение, введённое вручную, валидируется на уровне продукта — например через `TimePicker.validate(value, { minTime, maxTime })`.

Исключение — мобильный режим с `useMobileNativeTimePicker`: там `minTime` и `maxTime` дополнительно передаются в нативный `input[type='time']`.

</details>

<details>
  <summary>В какой форме приходит значение в `onValueChange`?</summary>

Всегда строкой с полностью нормализованным временем — `09:00`, — независимо от того, заданы элементы `source` строками или объектами.
Пустое значение приходит пустой строкой. Это же значение можно передать обратно в `value`.

</details>

<details>
  <summary>Как получить элемент `source`, который выбрал пользователь?</summary>

Найдите его в `source` по времени из `onValueChange`. Сам компонент элементы наружу не отдаёт: `source` может быть асинхронным,
а его содержимое зависит от текущего запроса, поэтому у введённого вручную времени элемента может не быть вовсе —
и продукт решает такой случай сам.

</details>

<details>
  <summary>Что будет с элементом `source`, у которого секунды не совпадают с форматом поля?</summary>

Время элемента приводится к формату поля: в `HH:mm:ss` элемент `'09:00'` показывается как `09:00:00`,
а в `HH:mm` элемент `'09:00:30'` — как `09:00`. Элементы при этом не схлопываются:
`'09:00:30'` и `'09:00:45'` в формате `HH:mm` останутся двумя пунктами меню с одинаковым временем.

</details>

<details>
  <summary>Почему `25:88` после вставки превращается в `23:59`?</summary>

Вставка похожа на время, поэтому компонент нормализует её к ближайшему валидному времени.
Строки, не похожие на время, — например дата `2026-08-01` — в поле не попадают вовсе: они уходят в `onUnexpectedInput`.

</details>

## Examples

### ExampleBasic

```tsx
const [time, setTime] = React.useState('');
const items: TimeItem[] = [{ value: '08:00' }, { value: '09:00' }, { value: '10:00' }, { value: '11:00' }];
return <TimePicker value={time} source={items} onValueChange={setTime} />;
```

### Размер

Проп `size` задаёт размер поля.

```tsx
const [valueL, setValueL] = React.useState('');
const [valueM, setValueM] = React.useState('');
const [valueS, setValueS] = React.useState('');
return (
    <Gapped vertical gap={16}>
      <TimePicker size={'large'} value={valueL} onValueChange={setValueL} />
      <TimePicker size={'medium'} value={valueM} onValueChange={setValueM} />
      <TimePicker size={'small'} value={valueS} onValueChange={setValueS} />
    </Gapped>
  );
```

### Форматы

Проп `format` задаёт строковую маску времени: `HH:mm` или `HH:mm:ss`.

```tsx
const [valueHm, setValueHm] = React.useState('');
const [valueHms, setValueHms] = React.useState('');
return (
    <Gapped vertical gap={24}>
      Формат 'HH:mm'
      <TimePicker value={valueHm} onValueChange={setValueHm} />
      Формат 'HH:mm:ss'
      <TimePicker format={'HH:mm:ss'} value={valueHms} onValueChange={setValueHms} />
    </Gapped>
  );
```

### Выпадающее меню

Проп `source` задаёт элементы выпадающего меню: массив либо функцию запроса.
Элементы можно задать строками со временем или объектами `{ value, label?, disabled? }`
с любыми дополнительными полями — в `onValueChange` приходит только время выбранного элемента.

```tsx
const [time, setTime] = React.useState('');
const items: TimeItem[] = [
    { value: '08:00' },
    { value: '09:00' },
    { value: '10:00' },
    { value: '11:00' },
    { value: '12:00' },
    { value: '13:00' },
    { value: '14:00' },
    { value: '15:00' },
    { value: '16:00' },
    { value: '17:00' },
    { value: '18:00' },
    { value: '19:00' },
    { value: '20:00' },
  ];
return <TimePicker source={items} value={time} onValueChange={setTime} />;
```

### Элементы с дополнительной информацией

Элементы `source` могут содержать дополнительную подпись в поле `label`.

```tsx
const [time, setTime] = React.useState('');
const items: TimeItem[] = [
    { value: '08:00', label: '30 мин' },
    { value: '08:30', label: '1 ч' },
    { value: '09:00', label: '1 ч 30 мин' },
    { value: '09:30', label: '2 ч' },
    { value: '10:00', label: '2 ч 30 мин' },
    { value: '10:30', label: '3 ч' },
    { value: '11:00', label: '3 ч 30 мин' },
    { value: '11:30', label: '4 ч' },
    { value: '12:00', label: '4 ч 30 мин' },
    { value: '12:30', label: '5 ч' },
    { value: '13:00', label: '5 ч 30 мин' },
    { value: '13:30', label: '6 ч' },
    { value: '14:00', label: '6 ч 30 мин' },
    { value: '14:30', label: '7 ч' },
    { value: '15:00', label: '7 ч 30 мин' },
    { value: '15:30', label: '8 ч' },
    { value: '16:00', label: '8 ч 30 мин' },
    { value: '16:30', label: '9 ч' },
    { value: '17:00', label: '9 ч 30 мин' },
    { value: '17:30', label: '10 ч' },
    { value: '18:00', label: '10 ч 30 мин' },
    { value: '18:30', label: '11 ч' },
    { value: '19:00', label: '11 ч 30 мин' },
    { value: '19:30', label: '12 ч' },
    { value: '20:00', label: '12 ч 30 мин' },
  ];
return <TimePicker source={items} value={time} onValueChange={setTime} />;
```

### Заблокированные значения

Элемент из `source` можно сделать недоступным через `disabled`.

```tsx
const [time, setTime] = React.useState('');
const items: TimeItem[] = [
    { value: '08:00' },
    { value: '09:00' },
    { value: '10:00', disabled: true },
    { value: '11:00' },
    { value: '12:00' },
    { value: '13:00', disabled: true },
    { value: '14:00' },
    { value: '15:00' },
    { value: '16:00', disabled: true },
    { value: '17:00' },
    { value: '18:00' },
    { value: '19:00', disabled: true },
    { value: '20:00' },
  ];
return <TimePicker source={items} value={time} onValueChange={setTime} />;
```

### Ограничение минимального и максимального значений

Пропы `minTime` и `maxTime` ограничивают только доступность элементов в выпадающем меню.
Ручной ввод они не ограничивают — его можно проверить через `TimePicker.validate`.

```tsx
const [time, setTime] = React.useState('');
const items: TimeItem[] = [
    { value: '08:00' },
    { value: '09:00' },
    { value: '10:00' },
    { value: '11:00' },
    { value: '12:00' },
    { value: '13:00' },
    { value: '14:00' },
    { value: '15:00' },
    { value: '16:00' },
    { value: '17:00' },
    { value: '18:00' },
    { value: '19:00' },
    { value: '20:00' },
  ];
return (
    <Gapped vertical gap={24}>
      Минимальное время 12:00, максимальное 16:00
      <TimePicker source={items} minTime={'12:00'} maxTime={'16:00'} value={time} onValueChange={setTime} />
    </Gapped>
  );
```

### Пропы rightIcon и suffix

По умолчанию `TimePicker` показывает иконку часов справа.
Через `rightIcon` её можно заменить или скрыть, передав `null`.
Через `suffix` можно добавить дополнительный контент справа от значения, например часовой пояс.

```tsx
const [withoutIconValue, setWithoutIconValue] = React.useState('12:30');
const [withSuffixValue, setWithSuffixValue] = React.useState('12:30');
const [withCustomIconValue, setWithCustomIconValue] = React.useState('12:30');
const [withCustomIconAndSuffixValue, setWithCustomIconAndSuffixValue] = React.useState('12:30');
return (
    <Gapped vertical gap={24}>
      Без иконки
      <TimePicker rightIcon={null} value={withoutIconValue} onValueChange={setWithoutIconValue} />С кастомной иконкой
      <TimePicker
        rightIcon={<IconTimeClockStopwatchLight16 />}
        value={withCustomIconValue}
        onValueChange={setWithCustomIconValue}
      />
      С suffix
      <TimePicker rightIcon={null} suffix={'МСК'} value={withSuffixValue} onValueChange={setWithSuffixValue} />С
      кастомной иконкой и suffix
      <TimePicker
        rightIcon={<IconTimeClockStopwatchLight16 />}
        suffix={'МСК'}
        value={withCustomIconAndSuffixValue}
        onValueChange={setWithCustomIconAndSuffixValue}
      />
    </Gapped>
  );
```

### Состояние ошибки

Проп `error` переводит поле в состояние ошибки.

```tsx
const [value, setValue] = React.useState('12:30');
return <TimePicker error value={value} onValueChange={setValue} />;
```

### Состояние предупреждения

Проп `warning` переводит поле в состояние предупреждения.

```tsx
const [value, setValue] = React.useState('12:30');
return <TimePicker warning value={value} onValueChange={setValue} />;
```

### Нативный редактор на мобильных устройствах

Проп `useMobileNativeTimePicker` включает нативный редактор времени в мобильной вёрстке.
Вёрстка определяется медиазапросом темы, поэтому нативный пикер включится и в узком окне десктопного браузера.

```tsx
const [value, setValue] = React.useState('');
return <TimePicker useMobileNativeTimePicker value={value} onValueChange={setValue} />;
```

## Source

[`components/TimePicker/TimePicker.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/TimePicker/TimePicker.tsx)
