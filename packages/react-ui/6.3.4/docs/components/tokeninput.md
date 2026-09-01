# TokenInput

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_input-data-tokeninput--docs)

Поле с токенами — это поле ввода со списком подсказок. Значения в поле отображаются в виде отдельных токенов.

```jsx
import { TokenInput } from '@skbkontur/react-ui';
```

Значения определяются в пропе `getItems` — задаёт функцию поиска элементов, которая должна возвращать `Promise` с массивом значений. По умолчанию ожидаются строки.

## Все пропсы и методы

### `selectedItems`

type: `T[]` · optional · default: `[]`

Токены, которые будут отображаться в поле ввода.

### `onValueChange`

type: `(items: T[]) => void` · optional · default: `() => void 0`

Событие добавления нового токена.

### `onKeyDown`

type: `KeyboardEventHandler<HTMLTextAreaElement>` · optional

HTML-событие `onkeydown`.

### `autoFocus`

type: `boolean` · optional

Устанавливает фокус на поле с токенами после окончания загрузки страницы.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер поля с токенами.

### `type`

type: `0 | 1 | 2` · optional

Тип инпута.
Возможные значения:
- `TokenInputType.Combined` — в поле можно выбирать значения из справочника и добавлять свои значения.
- `TokenInputType.WithReference` — можно только выбрать значения из справочника, но нельзя добавлять свои.
- `TokenInputType.WithoutReference` — можно добавлять любые значения, но подсказок из справочника нет.

### `menuWidth`

type: `Width<string | number>` · optional · default: `auto`

Ширина выпадающего списка.

### `menuAlign`

type: `"left" | "cursor"` · optional · default: `cursor`

Выравнивание выпадающего списка.

### `getItems`

type: `(query: string) => Promise<TokenInputExtendedItem<T>[]>` · optional

Задаёт функцию поиска значений, которая должна возвращать Promise с массивом значений. По умолчанию ожидаются строки.
Элементы могут быть любого типа. В этом случае необходимо определить свойства `renderItem`, `renderToken`, `valueToString` и `valueToItem`.

### `hideMenuIfEmptyInputValue`

type: `boolean` · optional

Ограничивает отображение выпадающего списка при фокусе на пустом поле: выпадающий список появится, только когда будет введён хотя бы один символ токена.

### `renderItem`

type: `(item: T, state: MenuItemState) => ReactNode` · optional · default: `<T extends unknown>(item: T): T => item`

Отрисовывает элемент списка.

### `renderValue`

type: `(item: T) => ReactNode` · optional · default: `<T extends unknown>(item: T): T => item`

Отрисовывает выбранное значение.
@deprecated Используйте `renderToken` для отрисовки выбранного значения и `valueToString` для преобразования значения в строку.

### `valueToString`

type: `(item: T) => string` · optional · default: `<T extends unknown>(item: T): T => item`

Возвращает строковое представление `value`. Необходимо при фокусировке.

### `renderTotalCount`

type: `(found: number, total: number) => ReactNode` · optional

Отрисовывает сообщение об общем количестве элементов.
@param found - количество элементов по результатам поиска. Учитывает только компонент MenuItem. Им оборачиваются элементы, возвращаемые `getItems()`.
@param total - количество всех элементов.

### `totalCount`

type: `number` · optional

Определяет общее количество элементов. Необходим для работы `renderTotalCount`.

### `renderNotFound`

type: `() => ReactNode` · optional

Отрисовывает сообщение о пустом результате поиска. При `renderAddButton` не работает.

### `valueToItem`

type: `(value: string) => T` · optional · default: `(item: string) => item`

Преобразовывает значение в элемент списка.

### `itemToId`

type: `(item: T) => string | number` · optional · default: `<T extends unknown>(item: T): T => item`

Сравнивает полученные результаты с `value`.

### `placeholder`

type: `string` · optional

Текст, который отображается если не введено никакое значение.

### `delimiters`

type: `string[]` · optional · default: `[',', TEMP_FAKE_FLAG]`

Символы, которые разделяют введённый текст на токены. По умолчанию — запятая.

### `error`

type: `boolean` · optional

Меняет визуальное отображение токена на состояние «ошибка». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_displaying-getting-started--docs).

### `warning`

type: `boolean` · optional

Меняет визуальное отображение токена на состояние «предупреждение». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_displaying-getting-started--docs).

### `disabled`

type: `boolean` · optional

Блокирует поле с токенами.

### `width`

type: `string | number` · optional · default: `250 as string | number`

Ширина поля с токенами.

### `maxMenuHeight`

type: `string | number` · optional

Максимальная высота выпадающего списка.

### `renderToken`

type: `(item: T, props: Partial<TokenProps>, index: number) => ReactNode` · optional

Отрисовывает токен и даёт возможность кастомизировать внешний вид и поведение токена.

### `onInputValueChange`

type: `(value: string) => void` · optional

Событие изменения текста в поле ввода, если результатом функции будет строка, то она станет следующим состоянием полем ввода.

### `renderAddButton`

type: `(query?: string, onAddItem?: () => void) => ReactNode` · optional

Отрисовывает кнопку добавления нового токена в выпадающем списке.

### `onUnexpectedInput`

type: `(value: string) => void | T` · optional

Событие обработки ввода строки в поле ввода и последующая потеря фокуса компонентом.
Функция срабатывает с аргументом поля строки.
Если при потере фокуса в выпадающем списке будет только один элемент и результат `valueToString` с этим элементом будет совпадать со значением в текстовом поле, то сработает `onValueChange` со значением данного элемента.
Сама функция также может вернуть значение, не равное undefined, с которым будет вызван `onValueChange`. Если возвращаемое значение будет равно null, то сработает очистка текущего значения поля, а в режиме редактирования токен будет удален.

### `inputMode`

type: `"none" | "search" | "email" | "tel" | "text" | "url" | "numeric" | "decimal"` · optional

Задаёт типы вводимых данных. Передаёт браузеру информацию о том, какой набор символов показать при вводе данных в конкретное поле на устройствах с экранной клавиатурой.

### `maxHeight`

type: `number` · optional

Максимальная высота компонента. При её достижении появится скроллбар

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

Поле с токенами похоже на [комбобокс](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/combobox.md), но используется в случаях, когда нужно указать сразу много однородных элементов — токенов.

**Связанные компоненты**

Токен реализован через отдельный компонент `Token` (см.ниже).

```jsx
<TokenInput>
  <Token> // токен
```

## Примеры

### ExampleBasic

```tsx
const [selectedItems, setSelectedItems] = React.useState(['Красный', 'Синий']);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x === q,
      ),
    ).then(delay(500));
return (
    <TokenInput
      getItems={getItems}
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
      placeholder="Выберите или введите значения"
    />
  );
```

### Размер

Проп `size` задаёт размер поля с токенами.

```tsx
const [selectedItemsSmall, setSelectedItemsSmall] = React.useState(['Маленький']);
const [selectedItemsMedium, setSelectedItemsMedium] = React.useState(['Средний']);
const [selectedItemsLarge, setSelectedItemsLarge] = React.useState(['Большой']);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Маленький', 'Средний', 'Большой'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x.toString() === q,
      ),
    ).then(delay(500));
return (
    <Gapped vertical>
      <TokenInput
        size={'small'}
        placeholder="Введите значение"
        getItems={getItems}
        selectedItems={selectedItemsSmall}
        onValueChange={setSelectedItemsSmall}
      />
      <TokenInput
        size={'medium'}
        placeholder="Введите значение"
        getItems={getItems}
        selectedItems={selectedItemsMedium}
        onValueChange={setSelectedItemsMedium}
      />
      <TokenInput
        size={'large'}
        placeholder="Введите значение"
        getItems={getItems}
        selectedItems={selectedItemsLarge}
        onValueChange={setSelectedItemsLarge}
      />
    </Gapped>
  );
```

### Ширина поля с токенами

Проп `width` задаёт ширину поля с токенами.

```tsx
const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string): Promise<string[]> =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x.toString() === q,
      ),
    ).then(delay(500));
return (
    <TokenInput
      width={'350px'}
      placeholder="Введите значения через запятую"
      getItems={getItems}
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
    />
  );
```

### Высота поля с токенами

Проп `maxHeight` ограничивает высоту поля с токенами. При достижении этой высоты будет появляться скроллбар.

```tsx
const items = Array(30)
    .fill('')
    .map(
      (t, i1) =>
        i1 +
        Array(5 + (i1 % 10))
          .fill('')
          .map((_, i2) => i2)
          .join(''),
    );
const [value, setValue] = React.useState<string[]>(items);
const getItems = (query: string) => {
    return Promise.resolve(items.filter((item) => item.includes(query)));
  };
return (
    <TokenInput<string>
      maxHeight={200}
      width={350}
      type={TokenInputType.Combined}
      getItems={getItems}
      selectedItems={value}
      onValueChange={setValue}
    />
  );
```

### Ширина выпадающего списка

Проп `menuWidth` задаёт максимальную ширину выпадающего списка. Может быть `auto` — по ширине текста, в пикселях, процентах от ширины поля и других конкретных единицах.
Проп зависит от другого пропа `menuAlign`. Ширина выпадающего списка всегда будет равна `"auto"`, когда  'menuAlign'='cursor' — для поля с токенами является значением по умолчанию.

```tsx
const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x.toString() === q,
      ),
    ).then(delay(500));
return (
    <Gapped vertical>
      <TokenInput
        placeholder="Введите значение"
        menuWidth="auto"
        getItems={getItems}
        selectedItems={selectedItems}
        onValueChange={setSelectedItems}
      />
      <TokenInput
        placeholder="Введите значение"
        menuAlign="left"
        menuWidth={'200px'}
        getItems={getItems}
        selectedItems={selectedItems}
        onValueChange={setSelectedItems}
      />
      <TokenInput
        placeholder="Введите значение"
        menuAlign="left"
        menuWidth={'120%'}
        getItems={getItems}
        selectedItems={selectedItems}
        onValueChange={setSelectedItems}
      />
    </Gapped>
  );
```

### Высота выпадающего списка

Проп `maxMenuHeight` задаёт максимальную высоту выпадающего списка.

```tsx
const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x.toString() === q,
      ),
    ).then(delay(500));
return (
    <TokenInput
      placeholder="Введите значение"
      maxMenuHeight={'100px'}
      getItems={getItems}
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
    />
  );
```

### Выравнивание выпадающего списка

Проп `menuAlign` выравнивает выпадающий список. По умолчанию `cursor` — выпадающий список отображается по линии текущего положения курсора в поле с токенами. Можно закрепить строго по левому краю через значение `"left"`.

```tsx
const [selectedItems, setSelectedItems] = React.useState(['Красный']);
const [selectedItemsLeft, setSelectedItemsLeft] = React.useState(['Красный']);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x.toString() === q,
      ),
    ).then(delay(500));
return (
    <Gapped vertical>
      <Gapped>
        <TokenInput
          placeholder="Введите значение"
          menuAlign="cursor"
          getItems={getItems}
          selectedItems={selectedItems}
          onValueChange={setSelectedItems}
        />
        <span>menuAlign="cursor"</span>
      </Gapped>
      <Gapped>
        <TokenInput
          placeholder="Введите значение"
          menuAlign="left"
          getItems={getItems}
          selectedItems={selectedItemsLeft}
          onValueChange={setSelectedItemsLeft}
        />
        <span>menuAlign="left"</span>
      </Gapped>
    </Gapped>
  );
```

### Скрытие выпадающего списка до ввода первого символа

По умолчанию выпадающий список с подсказками появляется сразу при фокусе в поле и продолжает отображаться всё время, пока пользователь вводит в поле токены.
Проп `hideMenuIfEmptyInputValue` отключает это поведение. Такой режим похож на работу [автокомплита](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/autocomplete.md). Выпадающий список появляется, когда введён первый символ первого или последующего токена.

```tsx
const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x === q,
      ),
    ).then(delay(500));
return (
    <Gapped vertical>
      <Gapped>
        <TokenInput
          placeholder="Введите значение"
          getItems={getItems}
          selectedItems={selectedItems}
          onValueChange={setSelectedItems}
        />
        <span>Обычное поле</span>
      </Gapped>
      <Gapped>
        <TokenInput
          placeholder="Введите значение"
          hideMenuIfEmptyInputValue
          getItems={getItems}
          selectedItems={selectedItems}
          onValueChange={setSelectedItems}
        />
        <span>С пропом "hideMenuIfEmptyInputValue"</span>
      </Gapped>
    </Gapped>
  );
```

### Тип

Проп `type` задаёт тип поля:
- `TokenInputType.Combined` — можно и выбирать, и добавлять значения.
- `TokenInputType.WithReference` — в поле можно ввести только значения из справочника, но нельзя добавлять свои.
- `TokenInputType.WithoutReference` — можно добавлять любые значения, но подсказок из справочника нет.

```tsx
const [selectedItemsCombined, setSelectedItemsCombined] = React.useState<string[]>([]);
const [selectedItemsWithReference, setSelectedItemsWithReference] = React.useState<string[]>([]);
const [selectedItemsWithoutReference, setSelectedItemsWithoutReference] = React.useState<string[]>([]);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Маленький', 'Средний', 'Большой'].filter((x) => x.toLowerCase().includes(q.toLowerCase()) || x === q),
    ).then(delay(500));
return (
    <Gapped vertical>
      <Gapped>
        <TokenInput
          placeholder="Введите значение"
          type={TokenInputType.Combined}
          getItems={getItems}
          selectedItems={selectedItemsCombined}
          onValueChange={setSelectedItemsCombined}
        />
        <span>TokenInputType.Combined</span>
      </Gapped>
      <Gapped>
        <TokenInput
          placeholder="Введите значение"
          type={TokenInputType.WithReference}
          getItems={getItems}
          selectedItems={selectedItemsWithReference}
          onValueChange={setSelectedItemsWithReference}
        />
        <span>TokenInputType.WithReference</span>
      </Gapped>
      <Gapped>
        <TokenInput
          placeholder="Введите значение через запятую"
          type={TokenInputType.WithoutReference}
          getItems={getItems}
          selectedItems={selectedItemsWithoutReference}
          onValueChange={setSelectedItemsWithoutReference}
        />
        <span>TokenInputType.WithoutReference</span>
      </Gapped>
    </Gapped>
  );
```

### Знак разделителя

Проп `delimiters` определяет знак разделителя токенов при вводе. По умолчанию запятая.
Работает только с типами `TokenInputType.WithoutReference` и `TokenInputType.Combined`.
При смене разделителей смените текст для подсказки добавления нового токена, по умолчанию — «Нажмите запятую».

```tsx
const [selectedItems, setSelectedItems] = React.useState(['Красный', 'Синий']);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x === q,
      ),
    ).then(delay(500));
const customLocale = {
    TokenInput: {
      addButtonComment: 'Нажмите точку',
    },
  };
return (
    <LocaleContext.Provider
      value={{
        locale: customLocale,
      }}
    >
      <TokenInput
        getItems={getItems}
        selectedItems={selectedItems}
        onValueChange={setSelectedItems}
        type={TokenInputType.Combined}
        placeholder="Выберите или введите значения"
        delimiters={['.']}
      />
    </LocaleContext.Provider>
  );
```

### Состояние блокировки

Проп `disabled` блокирует поле с токенами. Поле меняет цвет на серый и становится недоступно для редактирования.

```tsx
const [selectedItems, setSelectedItems] = React.useState(['Красный', 'Синий']);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string): Promise<string[]> =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x.toString() === q,
      ),
    ).then(delay(500));
return (
    <TokenInput
      getItems={getItems}
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
      placeholder="Выберите или введите значения"
      disabled
    />
  );
```

### Состояние ошибки

Проп `error` переводит поле с токенами в состояние ошибки. Поле подсвечивается красной рамкой.

```tsx
const [selectedItems, setSelectedItems] = React.useState(['Красный', 'Синий']);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getItems = (q: string) =>
    Promise.resolve(
      ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'].filter(
        (x) => x.toLowerCase().includes(q.toLowerCase()) || x === q,
      ),
    ).then(delay(500));
return (
    <TokenInput
      getItems={getItems}
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
      placeholder="Выберите или введите значения"
      error
    />
  );
```

### Поле с кастомными токенами

Проп `renderToken` задаёт функцию, которая отображает токен и даёт возможность кастомизировать внешний вид и поведение токена.

```tsx
const [selectedItems, setSelectedItems] = React.useState(['Красный', 'Синий', 'Зелёный']);
async function getItems(query: string): Promise<string[]> {
    return ['Красный', 'Синий', 'Зелёный'].filter((s) => s.includes(query));
  }
return (
    <TokenInput
      type={TokenInputType.Combined}
      getItems={getItems}
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
      renderToken={(item, tokenProps) => (
        <Token key={item.toString()} {...tokenProps} disabled={item === 'Синий' || tokenProps.disabled}>
          {item}
        </Token>
      )}
    />
  );
```

### Счётчик найденных значений и ограничение количества значений в выпадающем списке

Пропсы `totalCount` и `renderTotalCount` позволяют добавить в выпадающий список счётчик найденных значений.
- `renderTotalCount` — задаёт функцию, которая отображает сообщение о количестве значений.
- `totalCount` — определяет общее количество значений.
В примере также настроено ограничение количества значений в результате поиска.

```tsx
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const maxItems = 5;
const [totalCount, setTotalCount] = React.useState(cities.length);
const [value, setValue] = React.useState<string[]>([]);
const getItems = (query: string): Promise<string[]> => {
    const items = cities
      .map((x) => x.City)
      .filter((x) => x.toLowerCase().includes(query.toLowerCase()) || x.toString() === query);
    const result = items.slice(0, maxItems);
    setTotalCount(items.length);

    return Promise.resolve(result).then(delay(500));
  };
const renderTotalCount = (foundCount: number, totalCount: number) => (
    <span>
      Показано {foundCount} из {totalCount} найденных городов
    </span>
  );
return (
    <div style={{ width: '300px' }}>
      <TokenInput
        type={TokenInputType.Combined}
        selectedItems={value}
        onValueChange={setValue}
        getItems={getItems}
        placeholder="Выберите или введите значение"
        renderTotalCount={renderTotalCount}
        totalCount={totalCount}
      />
    </div>
  );
```

### Запрет ввода определённых символов

Проп `onKeyDown` вызывает HTML-событие `onkeydown`. Вызывая `preventDefault` на его события можно нативно блокировать ввод конкретных символов.

```tsx
const [value, setValue] = React.useState<string[]>([]);
const tokenInputRef = React.useRef<TokenInput>(null);
const items = ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'];
const getItems = (query: string) => {
    return Promise.resolve(items.filter((item) => item.includes(query)));
  };
return (
    <TokenInput<string>
      ref={tokenInputRef}
      selectedItems={value}
      onValueChange={setValue}
      getItems={getItems}
      placeholder="Запрещён символ @"
      onKeyDown={(e) => {
        if (e.key === '@') {
          e.preventDefault();
          tokenInputRef.current?.blink();
        }
      }}
    />
  );
```

### Кастомный тип элементов списка

В примере показано, как передать кастомный тип значений для справочника.

```tsx
const [selectedItems, setSelectedItems] = React.useState<Array<{ id: string; value: string }>>([]);
const delay =
    (time: number) =>
    (args?: string[]): Promise<string[]> =>
      new Promise((resolve) => setTimeout(resolve, time, args));
const getGenericItems = () => [
    { id: '1', value: 'Красный' },
    { id: '2', value: 'Оранжевый' },
    { id: '3', value: 'Жёлтый' },
    { id: '4', value: 'Зелёный' },
  ];
const renderItem = (item: { id: string; value: string }) => item.value;
const valueToString = (value: { id: string; value: string }) => value.value;
const valueToItem = (value: string) => ({
    id: Math.random().toString(),
    value,
  });
const getModelItems = async (query: string): Promise<Array<{ id: string; value: string }>> => {
    await delay(400);
    return getGenericItems().filter((s) => s.value.includes(query));
  };
return (
    <div style={{ width: '300px' }}>
      <TokenInput
        selectedItems={selectedItems}
        renderItem={renderItem}
        valueToItem={valueToItem}
        valueToString={valueToString}
        getItems={getModelItems}
        onValueChange={setSelectedItems}
        placeholder="Выберите или введите значение"
        type={TokenInputType.Combined}
        renderToken={(item, tokenProps) => (
          <Token key={item.id} {...tokenProps}>
            {item.value}
          </Token>
        )}
      />
    </div>
  );
```

### Шапка, разделитель и футер в списке

В массиве, возвращаемом `getItems`, могут быть переданы React-компоненты:
`<MenuHeader>`, `<MenuFooter>`, `<MenuSeparator />` и любые другие.
В таких случаях поиск необходимо контролировать дополнительно.

```tsx
const [selectedItems, setSelectedItems] = React.useState<string[]>();
return (
    <TokenInput
      selectedItems={selectedItems}
      onValueChange={setSelectedItems}
      getItems={async (q: string) =>
        [
          <MenuHeader key="ext-header">MenuHeader</MenuHeader>,
          'Красный',
          'Синий',
          <MenuSeparator key="ext-sep" />,
          'Жёлтый',
          'Зелёный',
          <MenuFooter key="ext-footer">MenuFooter</MenuFooter>,
        ].filter((i) => (typeof i === 'string' ? i.toLowerCase().includes(q.toLowerCase()) : q === ''))
      }
    />
  );
```

### Кастомизация debounce-функции getItems()

Функция `debounce` из lodash некорректно работает с `async/promise`, поэтому лучше использовать кастомную функцию, как в примере ниже.

```tsx
const [value, setValue] = React.useState<string[]>([]);
function debounceAsync<T extends (...args: string[]) => Promise<string[]>>(callback: T, wait: number): T {
    let timeoutId: NodeJS.Timeout | null = null;

    return ((...args: string[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      return new Promise((resolve) => {
        const timeoutPromise = new Promise((resolve) => {
          timeoutId = setTimeout(resolve, wait);
        });
        timeoutPromise.then(async () => {
          resolve(await callback(...args));
        });
      });
    }) as T;
  }
const items = ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Синий', 'Фиолетовый'];
const getItems = async (query: string): Promise<string[]> => {
    console.log('query: ', query);
    return items.filter((item) => item.includes(query));
  };
return (
    <TokenInput
      style={{ width: '300px' }}
      type={TokenInputType.Combined}
      selectedItems={value}
      onValueChange={setValue}
      getItems={debounceAsync(getItems, 300)}
      placeholder="Выберите или введите значение"
    />
  );
```

## Token

```jsx
import { Token } from '@skbkontur/react-ui';
```

<details>
  <summary>Пропсы для Token </summary>
</details>

### Примеры

#### Размер

Проп `size` задаёт размер токена.

#### Активный токен

Проп `disabled` блокирует токен.

#### Состояния ошибки и предупреждения

Проп `error` меняет визуальное отображение поля на состояние ошибки, а `warning` — на предупреждение.

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

В примере добавлена комплексная валидация:

1.  Валидация обязательности ввода.
2.  Классическая валидация компонента: проверка пробелов в токене.
3.  Валидация каждого токена через `createValidator` и `renderToken`.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

Поле с токенами адаптивно: на мобильных устройствах поле с выпадающим списком открывается модально в нижней части экрана. Мобильный режим активируется при ширине вьюпорта `(max-width: 576px)`. Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs).

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/TokenInput/TokenInput.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/TokenInput/TokenInput.tsx)
