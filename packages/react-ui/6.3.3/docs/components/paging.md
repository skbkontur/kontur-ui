# Paging

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-paging--docs)

Постраничная навигация `Paging` (пейджинг или пагинация) — способ представления большого количества однородной информации, когда контент разбивается на страницы.

```jsx
import { Paging } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `pagesCount`

type: `number` · required

Количество страниц.

### `activePage`

type: `number` · required

Номер текущей страницы.

### `onPageChange`

type: `(pageNumber: number) => void` · required

Событие переключения страницы.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `'small'`

Размер пейджинга.

*Проп поддерживается начиная с версии 5.3.*

### `disabled`

type: `boolean` · optional

Делает компонент недоступным.

### `caption`

type: `string` · optional

Подпись у кнопки перехода на следующую страницу.

### `component`

type: `ComponentType<ItemComponentProps>` · optional · default: `({
  onClick,
  className,
  children,
  ...rest
}: PagingDefaultComponentProps): React.JSX.Element => {
  const { dataProps } = extractDataProps(rest);

  return (
    <span onClick={onClick} className={className} {...dataProps}>
      {children}
    </span>
  );
}`

Компонент обёртки страниц.

### `withoutNavigationHint`

type: `boolean` · optional

Отключает навигационные подсказки.
По умолчанию подсказки появляются, когда доступно управление с клавиатуры (либо контрол в фокусе, либо globalListeners === true).

### `useGlobalListener`

type: `boolean` · optional · default: `false`

Включает глобальный слушатель `keyDown`, для навигации клавишами без фокуса на контроле.

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

Пейджинг используют для навигации по длинным спискам, таблицам и другим наборам однотипных данных, разбитых на страницы.

Рекомендации по использованию:

- храните текущую страницу в состоянии и синхронизируйте её через `activePage` и `onPageChange`;
- используйте `caption`, если нужна явная подпись у кнопки перехода вперед;
- включайте `useGlobalListener`, только когда пользователю действительно нужна навигация стрелками без фокуса на компоненте.

## Примеры

### Базовый пример

Базовый пример с обязательными пропсами `activePage`, `onPageChange` и `pagesCount`.

```tsx
const [activePage, setActivePage] = React.useState(1);
return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={30} />;
```

### Размер

Проп `size` задаёт размер пейджинга.

```tsx
const [activePage, setActivePage] = React.useState(1);
return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={30} size="small" />
      <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={30} size="medium" />
      <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={30} size="large" />
    </div>
  );
```

### Состояние блокировки

Проп `disabled` блокирует переключение страниц.

```tsx
const [activePage, setActivePage] = React.useState(3);
return <Paging disabled onPageChange={setActivePage} activePage={activePage} pagesCount={8} />;
```

### Подпись кнопки перехода вперёд

Проп `caption` задаёт подпись на кнопке перехода вперёд.

```tsx
const [activePage, setActivePage] = React.useState(1);
return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={12} caption="Следующая" />;
```

### Отключение подсказки навигации

Проп `withoutNavigationHint` отключает подсказку по навигации клавишами.

```tsx
const [activePage, setActivePage] = React.useState(7);
return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={20} withoutNavigationHint />;
```

### Глобальная навигация с клавиатуры

Проп `useGlobalListener` включает глобальную навигацию по стрелкам без фокуса на компоненте.

```tsx
const [activePage, setActivePage] = React.useState(4);
return (
    <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={18} useGlobalListener caption="Дальше" />
  );
```

### Кастомизация: пейджинг без последней страницы

Иногда у пейджинга не нужно показывать последнюю страницу заранее.
[Ссылка на гайд](https://guides.kontur.ru/components/navigation/paging/#Opisanie_raboti/Peidzhing_bez_poslednei_stranitsi).

```tsx
const { isMobile } = useResponsiveLayout();
const [activePage, setActivePage] = React.useState(1);
const totalPagesCount = 30;
const shouldShowLastPage = activePage > totalPagesCount - (isMobile ? 2 : 4);
const visiblePagesCount = shouldShowLastPage ? totalPagesCount : Infinity;
return (
    <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={visiblePagesCount} caption="Дальше" />
  );
```

### Кастомизация: кастомный компонент элемента

Проп `component` позволяет переопределить компонент элемента пагинации.

```tsx
const [activePage, setActivePage] = React.useState(1);
const CustomPagingItem = ({ children, className, onClick, tabIndex }: ItemComponentProps) => {
    return (
      <button className={className} onClick={onClick} tabIndex={tabIndex} style={{ borderRadius: 3, margin: 4 }}>
        {children}
      </button>
    );
  };
return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={10} component={CustomPagingItem} />;
```

### Кастомизация: использование isForward

Статический метод `Paging.isForward` определяет, является ли элемент кнопкой перехода вперед.

```tsx
const [activePage, setActivePage] = React.useState(1);
const CustomPagingItem = ({ children, pageNumber, className, onClick, tabIndex }: ItemComponentProps) => {
    return (
      <button
        className={className}
        onClick={onClick}
        tabIndex={tabIndex}
        style={{ borderRadius: 3, margin: 4, background: Paging.isForward(pageNumber) ? '#FECB41' : '#F0F0F0' }}
      >
        {children}
      </button>
    );
  };
return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={10} component={CustomPagingItem} />;
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

**Рекомендации**

- Обеспечьте видимый фокус при навигации с клавиатуры.
- Не отключайте подсказки клавиатурной навигации без необходимости.
- При кастомном `component` сохраняйте корректное поведение клавиатуры и `tabIndex`.
- Для блокировки используйте проп `disabled`: переходы между страницами и взаимодействие с элементами становятся недоступны.
- Если необходимо оставить элемент в доступности для скринридеров, используйте `aria-disabled="true"` и обрабатывайте блокировку действий вручную.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

Пейджинг адаптивен: на мобильных устройствах меняется отображение элементов управления и иконок. Мобильный режим работает при соответствующих медиазапросах адаптивного окружения React UI.

Если нужно скрывать «последнюю страницу» до определенного шага, используйте сценарий из примера «Пейджинг без последней страницы».

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Paging/Paging.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Paging/Paging.tsx)
