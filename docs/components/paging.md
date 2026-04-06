# Paging

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data_paging--docs)

## Props

- **pagesCount**: Количество страниц.
- **activePage**: Номер текущей страницы.
- **onPageChange**: Вызывается при переключении страницы.
- **size?**: Размер пейджинга. *Проп поддерживается начиная с версии 5.3.* (default: `'small'`)
- **disabled?**: Делает компонент недоступным.
- **caption?**: Подпись у кнопки перехода на следующую страницу.
- **component?**: Компонент обёртки страниц. (default: `<span/>`)
- **withoutNavigationHint?**: Отключает навигационные подсказки. По умолчанию подсказки появляются, когда доступно управление с клавиатуры (либо контрол в фокусе, либо globalListeners === true).
- **useGlobalListener?**: Включает глобальный слушатель `keyDown`, для навигации клавишами без фокуса на контроле.

```jsx
import { Paging } from '@skbkontur/react-ui';
```

## Использование

Пейджинг используют для навигации по длинным спискам, таблицам и другим наборам однотипных данных, разбитых на страницы.

Рекомендации:

- храните текущую страницу в состоянии и синхронизируйте её через `activePage` и `onPageChange`;
- используйте `caption`, если нужна явная подпись у кнопки перехода вперед;
- включайте `useGlobalListener`, только когда пользователю действительно нужна навигация стрелками без фокуса на компоненте.

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

Рекомендации:

- обеспечьте видимый фокус при навигации с клавиатуры;
- не отключайте подсказки клавиатурной навигации без необходимости;
- при кастомном `component` сохраняйте корректное поведение клавиатуры и `tabIndex`;
- для блокировки используйте проп `disabled`: переходы между страницами и взаимодействие с элементами становятся недоступны;
- если необходимо оставить элемент в доступности для скринридеров, используйте `aria-disabled="true"` и обрабатывайте блокировку действий вручную.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

Пейджинг адаптивен: на мобильных устройствах меняется отображение элементов управления и иконок. Мобильный режим работает при соответствующих медиазапросах адаптивного окружения React UI.

Если нужно скрывать «последнюю страницу» до определенного шага, используйте сценарий из примера «Пейджинг без последней страницы».

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

Базовый пример с обязательными пропсами `activePage`, `onPageChange` и `pagesCount`.

```tsx
const [activePage, setActivePage] = React.useState(1);

  return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={30} />;
```

### ExampleSize

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

### ExampleDisabled

Проп `disabled` блокирует переключение страниц.

```tsx
const [activePage, setActivePage] = React.useState(3);

  return <Paging disabled onPageChange={setActivePage} activePage={activePage} pagesCount={8} />;
```

### ExampleCaption

Проп `caption` задаёт подпись на кнопке перехода вперёд.

```tsx
const [activePage, setActivePage] = React.useState(1);

  return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={12} caption="Следующая" />;
```

### ExampleWithoutNavigationHint

Проп `withoutNavigationHint` отключает подсказку по навигации клавишами.

```tsx
const [activePage, setActivePage] = React.useState(7);

  return <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={20} withoutNavigationHint />;
```

### ExampleUseGlobalListener

Проп `useGlobalListener` включает глобальную навигацию по стрелкам без фокуса на компоненте.

```tsx
const [activePage, setActivePage] = React.useState(4);

  return (
    <Paging onPageChange={setActivePage} activePage={activePage} pagesCount={18} useGlobalListener caption="Дальше" />
  );
```

### ExampleWithoutLastPage

Иногда у пейджинга не нужно показывать последнюю страницу заранее. [Ссылка на гайд](https://guides.kontur.ru/components/navigation/paging/#Opisanie_raboti/Peidzhing_bez_poslednei_stranitsi).

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

### ExampleCustomItemComponent

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

### ExampleIsForwardMethod

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