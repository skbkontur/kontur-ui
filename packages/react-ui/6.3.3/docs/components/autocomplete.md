# Autocomplete

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-autocomplete--docs)

Автокомплит — поле ввода с выпадающим списком подсказок. Подсказки отображаются пользователю, когда он начинает вводить значение в поле.

```jsx
import { Autocomplete } from '@skbkontur/react-ui';
```

Подсказки определяются в пропе `source` — задаёт функцию поиска элементов, которая должна возвращать `Promise` с массивом значений.

## Все пропсы и методы

### `menuPos`

type: `"top" | "bottom"` · optional

Расположение выпадающего списка — над или под полем.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `alwaysShowMask`

type: `boolean` · optional · default: `false`

Всегда показывать символы маски, независимо от фокуса в поле.

### `mask`

type: `string` · optional

Шаблон ввода, определяющий допустимые символы.

### `maskChar`

type: `string` · optional · default: `_`

Плейсхолдер, который отображается на месте ещё не введённых пользователем символов.

### `type`

type: `"number" | "search" | "email" | "tel" | "password" | "text" | "time" | "date" | "url"` · optional

Тип поля ввода.

### `prefix`

type: `ReactNode` · optional

Устанавливает префикс `ReactNode` перед значением, но после иконки.

### `showClearIcon`

type: `"auto" | "always" | "never"` · optional · default: `never`

Показывает иконку очистки значения в заполненном поле.

### `leftIcon`

type: `InputIconType` · optional

Добавляет иконку слева.
При использовании `ReactNode` применяются дефолтные стили для иконки.
При использовании `() => ReactNode` применяются только стили для позиционирования.

### `rightIcon`

type: `InputIconType` · optional

Добавляет иконку справа.
При использовании `ReactNode` применяются дефолтные стили для иконки.
При использовании `() => ReactNode` применяются только стили для позиционирования.

### `error`

type: `boolean` · optional

Переводит поле в состояние ошибки.

### `warning`

type: `boolean` · optional

Переводит поле в состояние предупреждения.

### `borderless`

type: `boolean` · optional

Убирает обводку поля.

### `align`

type: `"left" | "center" | "right"` · optional

Выравнивает контент внутри поля.

### `suffix`

type: `ReactNode` · optional

Устанавливает суффикс `ReactNode` после значения, но перед правой иконкой.

### `selectAllOnFocus`

type: `boolean` · optional

Выделяет введённое значение при фокусе в поле. Работает с типами `text`, `password`, `tel`, `search`, `url`.

### `showLengthCounter`

type: `boolean` · optional

Отображает счётчик введённых символов.

### `lengthCounter`

type: `number` · optional · default: `maxLength`

Допустимое количество символов в поле. Отображается в счётчике символов.

### `counterHelp`

type: `ReactNode | (() => ReactNode)` · optional

Подсказка для счётчика символов.

Если передать `ReactNode`, рисует тултип со встроенной иконкой.
Если передать функцию, рисует произвольный элемент.
@example ```
counterHelp={() => <Hint text="..."><Icon /></Hint>}
```

### `onUnexpectedInput`

type: `(value: string) => void` · optional

Устанавливает обработчик на случай некорректного ввода.
Если передан onUnexpectedInput, он будет вызван при ошибке, а эффект мигания можно запустить вручную через публичный метод blink.
@param value - значение поля.

### `element`

type: `ReactElement<InputElementProps, string | JSXElementConstructor<any>>` · optional

Устанавливает элемент, заменяющий нативный input. Должен иметь пропсы `InputElementProps` и тип `InputElement`.

### `renderItem`

type: `(item: string) => ReactNode` · optional

Отрисовывает элементы результата поиска.

### `source`

type: `string[] | ((patter: string) => Promise<string[]>)` · optional

Задаёт функцию поиска элементов, которая должна возвращать Promise с массивом значений.

### `disablePortal`

type: `boolean` · optional · default: `false`

По умолчанию выпадающий список рендерится через [паттерн Portal](https://react.dev/reference/react-dom/createPortal). Проп отключает использование Portal и список рендерится как обычный блок с абсолютным позиционированием внутри компонента.

### `hasShadow`

type: `boolean` · optional · default: `true`

Определяет, нужно ли показывать тень у выпадающего списка.

### `menuAlign`

type: `"left" | "right"` · optional

Выравнивание выпадающего списка.

### `menuMaxHeight`

type: `string | number` · optional · default: `300`

Максимальная высота выпадающего списка.

### `menuWidth`

type: `string | number` · optional

Ширина выпадающего списка.

### `preventWindowScroll`

type: `boolean` · optional · default: `true`

Отключает скролл окна, когда выпадающий список раскрыт.

### `onValueChange`

type: `(value: string) => void` · required

Событие изменения `value`.

### `onBlur`

type: `() => void` · optional

Событие потери автокомплитом фокуса.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер автокомплита.

### `value`

type: `string` · required

Значение автокомплита.

### `mobileMenuHeaderText`

type: `string` · optional

Текст заголовка выпадающего списка в мобильной версии.

## Использование

В отличие от [комбобокса](https://tech.skbkontur.ru/kontur-ui/docs/components/combobox.md) у поля нет стрелки и список со значениями нельзя открыть вручную. Подробнее об отличиях читайте в [Гайде](https://guides.kontur.ru/components/input-fields/combobox).

## Примеры

### ExampleBasic

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [value, setValue] = React.useState('');
return <Autocomplete source={items} value={value} onValueChange={setValue} placeholder="Введите город на букву А" />;
```

### Размер

Проп `size` задаёт размер автокомплита.

```tsx
const items = ['Маленький', 'Средний', 'Большой'];
const [valueSmall, setValueSmall] = React.useState('Маленький');
const [valueMedium, setValueMedium] = React.useState('Средний');
const [valueLarge, setValueLarge] = React.useState('Большой');
return (
    <Gapped vertical>
      <Autocomplete source={items} value={valueSmall} onValueChange={setValueSmall} size={'small'} />
      <Autocomplete source={items} value={valueMedium} onValueChange={setValueMedium} size={'medium'} />
      <Autocomplete source={items} value={valueLarge} onValueChange={setValueLarge} size={'large'} />
    </Gapped>
  );
```

### Ширина выпадающего списка

Проп `menuWidth` задаёт ширину выпадающего списка.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [valuePercent, setValuePercent] = React.useState('');
const [valueNumber, setValueNumber] = React.useState('');
return (
    <Gapped vertical>
      <Autocomplete
        source={items}
        value={valuePercent}
        onValueChange={setValuePercent}
        placeholder="Введите город на букву А"
        menuWidth={'120%'}
      />
      <Autocomplete
        source={items}
        value={valueNumber}
        onValueChange={setValueNumber}
        placeholder="Введите город на букву А"
        menuWidth={'300px'}
      />
    </Gapped>
  );
```

### Высота выпадающего списка

Проп `menuMaxHeight` фиксирует максимальную высоту выпадающего списка.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [value, setValue] = React.useState('');
return (
    <Autocomplete
      source={items}
      value={value}
      onValueChange={setValue}
      placeholder="Введите город на букву А"
      menuMaxHeight={'100px'}
    />
  );
```

### Расположение выпадающего списка

Проп `menuPos` фиксирует расположение выпадающего списка. Оно может быть под полем — `"bottom"` или над полем — `"top"`.
По умолчанию список раскрывается под полем, а если список находится близко к нижней границе страницы, то он динамически меняет расположение и раскрывается над полем.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [value, setValue] = React.useState('');
return (
    <Autocomplete
      source={items}
      value={value}
      onValueChange={setValue}
      placeholder="Введите город на букву А"
      menuPos={'top'}
    />
  );
```

### Выравнивание выпадающего списка

Проп `menuAlign` выравнивает выпадающий список. Выпадающий список может быть прикреплен к левому краю — "left" или к правому — "right".

```tsx
const items = ['Выпадающее меню выравнивается по левому краю', 'Выпадающее меню выравнивается по правому краю'];
const [valueLeft, setValueLeft] = React.useState('Выпадающее меню выравнивается по левому краю');
const [valueRight, setValueRight] = React.useState('Выпадающее меню выравнивается по правому краю');
return (
    <Gapped vertical>
      <Autocomplete source={items} value={valueLeft} onValueChange={setValueLeft} menuAlign="left" />
      <Autocomplete source={items} value={valueRight} onValueChange={setValueRight} menuAlign="right" />
    </Gapped>
  );
```

### Поле без обводки

Проп `borderless` убирает обводку у поля.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [value, setValue] = React.useState('Амурская область');
return (
    <Autocomplete
      source={items}
      value={value}
      onValueChange={setValue}
      placeholder="Введите город на букву А"
      borderless
    />
  );
```

### Выравнивание текста в поле

Проп `align` задаёт выравнивание текста в поле. Выравнивается только текст внутри поля, проп не влияет на выравнивание значений в выпадающем списке.

```tsx
const items = ['Слева', 'По центру', 'Справа'];
const [valueSmall, setValueSmall] = React.useState('Слева');
const [valueMedium, setValueMedium] = React.useState('По центру');
const [valueLarge, setValueLarge] = React.useState('Справа');
return (
    <Gapped vertical>
      <Autocomplete source={items} value={valueSmall} onValueChange={setValueSmall} align="left" />
      <Autocomplete source={items} value={valueMedium} onValueChange={setValueMedium} align="center" />
      <Autocomplete source={items} value={valueLarge} onValueChange={setValueLarge} align="right" />
    </Gapped>
  );
```

### Маска ввода

Для автокомплита может быть задана маска. Автокомплит наследует от [MaskedInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-maskedinput--docs) пропсы:
- `mask` — определяет шаблон маски, используемый для форматирования и проверки корректности вводимых данных в поле.
- `maskChar` — задаёт cимвол маски. Он отображается в шаблоне маски в качестве плейсхолдера
- `formatChars` — задаёт словарь символов-регулярок. С помощью него вы можете настроить собственный словарь символов.

```tsx
const [value, setValue] = React.useState<string>('');
const getOnlyDigits = (value: string) => value.match(/\d+/g)?.join('') || '';
const items: string[] = ['+7 912 043-98-27', '+7 912 999-11-22', '+7 912 444-55-99'];
return (
    <Autocomplete
      value={value}
      width="150"
      mask="+7 999 999-99-99"
      placeholder="+7"
      alwaysShowMask
      source={(pattern) => {
        const numbers = getOnlyDigits(pattern);
        return new Promise((resolve) => {
          resolve(items.filter((item) => getOnlyDigits(item).startsWith(numbers)));
        });
      }}
      onValueChange={setValue}
    />
  );
```

### Выделение всего значения при фокусе

Проп `selectAllOnFocus` добавляет автовыделение значения: всё значение внутри поля выделяется при фокусе на нем. Может быть полезно для полей, в которых пользователи могут часто копировать значение.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [value, setValue] = React.useState('Амурская область');
return <Autocomplete source={items} value={value} onValueChange={setValue} selectAllOnFocus />;
```

### Иконка

В поле можно передать иконку.
Иконка может находиться в начале поля — проп `leftIcon`, в конце — проп `rightIcon`.
Под разный размер полей используйте подходящие начертания и размер иконок:
- Small — Light 16
- Medium — Light 20
- Large — Regular 24

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [valueLeft, setValueLeft] = React.useState('');
const [valueRight, setValueRight] = React.useState('');
return (
    <Gapped>
      <Autocomplete
        source={items}
        value={valueLeft}
        onValueChange={setValueLeft}
        placeholder="Введите город на букву А"
        leftIcon={<IconSearchLoupeLight16 />}
      />
      <Autocomplete
        source={items}
        value={valueRight}
        onValueChange={setValueRight}
        placeholder="Введите город на букву А"
        rightIcon={<IconSearchLoupeLight16 />}
      />
    </Gapped>
  );
```

### Очистка поля

Очистить значение в поле можно только с помощью пустой строки.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];
const [value, setValue] = React.useState('Алматы');
return (
    <Gapped>
      <Autocomplete source={items} value={value} onValueChange={setValue} />
      <Button onClick={() => setValue('')}>Передать пустое значение</Button>
    </Gapped>
  );
```

### Иконка очистки поля

Проп `showClearIcon` добавляет в поле иконку очистки, по нажатию на иконку поле будет очищаться.
Доступные значения:
- `"always"` — всегда показывает иконку очистки в заполненном поле, при очистке значения возвращается стрелка для раскрытия списка;
- `"auto"` — показывает иконку в заполненном поле, только когда оно в состоянии hover или focus;
- `"never"` (по умолчанию) — не показывает иконку очистки.
При одновременной настройке `rightIcon` и `showClearIcon` иконка очистки заменит иконку справа.

```tsx
const items = [
    'showClearIcon="auto"',
    'showClearIcon="always"',
    'showClearIcon="never"',
    'showClearIcon="auto" + rightIcon',
  ];
const [valueAlways, setValueAlways] = React.useState(items[0]);
const [valueAuto, setValueAuto] = React.useState(items[1]);
const [valueNever, setValueNever] = React.useState(items[2]);
const [valueWithIcon, setValueWithIcon] = React.useState(items[3]);
return (
    <Gapped vertical>
      <Autocomplete
        showClearIcon="always"
        source={items}
        value={valueAlways}
        onValueChange={setValueAlways}
        width="350px"
      />
      <Autocomplete showClearIcon="auto" source={items} value={valueAuto} onValueChange={setValueAuto} width="350px" />
      <Autocomplete
        showClearIcon="never"
        source={items}
        value={valueNever}
        onValueChange={setValueNever}
        width="350px"
      />
      <br />
      <Autocomplete
        showClearIcon="auto"
        source={items}
        value={valueWithIcon}
        onValueChange={setValueWithIcon}
        width="350px"
        rightIcon={<IconUiFilterFunnelRegular16 />}
      />
    </Gapped>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

Автокомплит адаптивен: на мобильных устройствах поле с выпадающим списком открывается модально в нижней части экрана. Мобильный режим активируется при ширине вьюпорта < `768px`.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/Autocomplete/Autocomplete.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Autocomplete/Autocomplete.tsx)
