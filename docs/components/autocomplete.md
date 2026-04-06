# Autocomplete

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_autocomplete--docs)

## Props

- **renderItem?**: Отрисовывает элементы результата поиска.
- **source?**: Задаёт функцию поиска элементов, которая должна возвращать Promise с массивом значений.
- **disablePortal?**: По умолчанию выпадающий список рендерится через [паттерн Portal](https://react.dev/reference/react-dom/createPortal). Проп отключает использование Portal и список рендерится как обычный блок с абсолютным позиционированием внутри компонента.
- **hasShadow?**: Определяет, нужно ли показывать тень у выпадающего списка.
- **menuAlign?**: Выравнивание выпадающего списка.
- **menuMaxHeight?**: Максимальная высота выпадающего списка.
- **menuWidth?**: Ширина выпадающего списка.
- **preventWindowScroll?**: Отключает скролл окна, когда выпадающий список раскрыт.
- **onValueChange**: Событие изменения `value`.
- **onBlur?**: Событие потери автокомплитом фокуса.
- **size?**: Размер автокомплита.
- **value**: Значение автокомплита.
- **mobileMenuHeaderText?**: Текст заголовка выпадающего списка в мобильной версии.
- **menuPos?**: Расположение выпадающего списка — над или под полем.

```jsx
import { Autocomplete } from '@skbkontur/react-ui';
```

## Использование

В отличие от [комбобокса](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-combobox--docs) у поля нет стрелки и список со значениями нельзя открыть вручную. Подробнее об отличиях читайте в [Гайде](https://guides.kontur.ru/components/input-fields/combobox).

Подсказки определяются в пропе `source` — задаёт функцию поиска элементов, которая должна возвращать `Promise` с массивом значений.

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

Автокомплит адаптивен: на мобильных устройствах поле с выпадающим список открывается на весь экран устройства и становится фокусным активным элементом, что упрощает работу с ним. Мобильный режим активируется при ширине вьюпорта `(max-width: 576px)` и наличии сенсорного экрана `(pointer: coarse)`. Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs).

### ExampleBasic

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];

  const [value, setValue] = React.useState('');

  return <Autocomplete source={items} value={value} onValueChange={setValue} placeholder="Введите город на букву А" />;
```

### ExampleSize

Размер автокомплита задаётся пропом `size`. По умолчанию `"small"`.

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

### ExampleMenuWidth

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

### ExampleMenuMaxHeight

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

### ExampleMenuPos

По умолчанию список раскрывается под полем, а если список находится близко к нижней границе страницы, то он динамически меняет расположение и раскрывается над полем. Расположение выпадающего списка можно зафиксировать вручную через проп `menuPos`. Оно может быть под полем — `"bottom"` или над полем — `"top"`. В таком случае расположение будет зафиксировано и не будет меняться при близости к границе страницы.

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

### ExampleMenuAlign

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

### ExampleBorderless

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

### ExampleAlign

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

### ExampleMask

Для автокомплита может быть задана маска. Автокомплит наследует от [MaskedInput](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-maskedinput--docs) пропсы: - `mask` — определяет шаблон маски, используемый для форматирования и проверки корректности вводимых данных в поле. - `maskChar` — задаёт cимвол маски. Он отображается в шаблоне маски в качестве плейсхолдера - `formatChars` — задаёт словарь символов-регулярок. С помощью него вы можете настроить собственный словарь символов.

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

### ExampleSelectAllOnFocus

Проп `selectAllOnFocus` добавляет автовыделение значения: всё значение внутри поля выделяется при фокусе на нем. Может быть полезно для полей, в которых пользователи могут часто копировать значение.

```tsx
const items = ['Абакан', 'Алексин', 'Алматы', 'Альметьевск', 'Алтайский край', 'Амурская область'];

  const [value, setValue] = React.useState('Амурская область');

  return <Autocomplete source={items} value={value} onValueChange={setValue} selectAllOnFocus />;
```

### ExampleIcon

В поле можно передать иконку. Иконка может находиться в начале поля — проп `leftIcon`, в конце — проп `rightIcon`. Под разный размер полей используйте подходящие начертания и размер иконок: - Small — Light 16 - Medium — Light 20 - Large — Regular 24

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
        leftIcon={<SearchLoupeIcon16Light />}
      />
      <Autocomplete
        source={items}
        value={valueRight}
        onValueChange={setValueRight}
        placeholder="Введите город на букву А"
        rightIcon={<SearchLoupeIcon16Light />}
      />
    </Gapped>
  );
```

### ExampleClear

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

### ExampleShowClearIcon

Проп `showClearIcon` добавляет в поле иконку очистки, по нажатию на иконку поле будет очищаться. Доступные значения: - `"always"` — всегда показывает иконку очистки в заполненном поле, при очистке значения возвращается стрелка для раскрытия списка; - `"auto"` — показывает иконку в заполненном поле, только когда оно в состоянии hover или focus; - `"never"` (по умолчанию) — не показывает иконку очистки. При одновременной настройке `rightIcon` и `showClearIcon` иконка очистки заменит иконку справа.

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
        rightIcon={<UiFilterFunnelIcon16Regular />}
      />
    </Gapped>
  );
```