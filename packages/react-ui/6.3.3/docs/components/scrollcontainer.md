# ScrollContainer

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_layout-scrollcontainer--docs)

Контейнер с кастомными полосами прокрутки при скролле.

## Import

```tsx
import { ScrollContainer } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `invert`

type: `boolean` · optional · default: `false`

Инвертирует цвет полосы прокрутки.

### `maxHeight`

type: `MaxHeight<string | number>` · optional

Максимальная высота скролл-контейнера.

### `maxWidth`

type: `MaxWidth<string | number>` · optional

Максимальная ширина скролл-контейнера.

### `preventWindowScroll`

type: `boolean` · optional · default: `false`

Отключает скролл окна, когда меню открыто.

### `scrollBehaviour`

type: `"auto" | "smooth"` · optional · default: `auto`

Поведение скролла. (https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

### `onScrollStateChangeX`

type: `(scrollState: ScrollContainerScrollStateX) => void` · optional

Событие скролла по горизонтали.

### `onScrollStateChangeY`

type: `(scrollState: ScrollContainerScrollStateY) => void` · optional

Событие скролла по вертикали.

### `onScroll`

type: `(e: UIEvent<HTMLDivElement, UIEvent>) => void` · optional

Событие скролла.

### `disabled`

type: `boolean` · optional

Отключает кастомный скролл.

### `offsetY`

type: `Partial<Record<OffsetCSSPropsY, string | number | (string & {})>>` · optional

Смещение вертикальной полосы прокрутки.

### `offsetX`

type: `Partial<Record<OffsetCSSPropsX, string | number | (string & {})>>` · optional

Смещение горизонтальной полосы прокрутки.

### `showScrollBar`

type: `"always" | "never" | "hover" | "scroll"` · optional · default: `always`

Определяет, нужно ли показывать полосу прокрутки.

### `hideScrollBarDelay`

type: `number` · optional · default: `500`

Устанавливает задержку в миллисекундах перед скрытием полосы прокрутки.
Работает только при hideScrollBar = true или showScrollBar = 'scroll' | 'hover'.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Примеры

### Базовый пример

```tsx
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    width: 200,
  };
return (
    <div style={containerStyle}>
      <ScrollContainer>
        {Array(30)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{i}</div>
          ))}
      </ScrollContainer>
    </div>
  );
```

### Высота скролл-контейнера

Проп `maxHeight` задаёт максимальную высоту скролл-контейнера.

```tsx
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    width: 200,
  };
const absStyle: React.CSSProperties = {
    border: '1px solid',
    boxSizing: 'border-box',
    position: 'absolute',
    width: 200,
  };
return (
    <div style={containerStyle}>
      <div style={absStyle}>
        <ScrollContainer maxHeight={100}>
          {Array(30)
            .fill(null)
            .map((_, i) => (
              <div key={i}>{i}</div>
            ))}
        </ScrollContainer>
      </div>
    </div>
  );
```

### Ширина скролл-контейнера

Проп `maxWidth` задаёт максимальную ширину скролл-контейнера.

```tsx
function items(count: number) {
    const items = [];
    for (let i = 0; i < count; ++i) {
      items.push(i);
    }
    return items;
  }
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    width: 200,
  };
const absStyle: React.CSSProperties = {
    border: '1px solid',
    boxSizing: 'border-box',
    position: 'absolute',
    height: 200,
  };
return (
    <div style={containerStyle}>
      <div style={absStyle}>
        <ScrollContainer maxWidth={150}>
          {items(20).map((i) => (
            <div key={i}>{`Очень длинный пункт меню`}</div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
```

### Инвертация полосы прокрутки

Проп `invert` инвертирует цвет полосы прокрутки.

```tsx
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    width: 200,
    background: '#888',
  };
return (
    <div style={containerStyle}>
      <ScrollContainer invert>
        {Array(30)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{i}</div>
          ))}
      </ScrollContainer>
    </div>
  );
```

### Смещение вертикальной полосы прокрутки

Проп `offsetY` смещает вертикальную полосу прокрутки от краёв контейнера.

```tsx
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    width: 200,
  };
const offsetY = {
    top: 8,
    bottom: 8,
    right: 8,
  };
return (
    <div style={containerStyle}>
      <ScrollContainer offsetY={offsetY}>
        {Array(30)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{i}</div>
          ))}
      </ScrollContainer>
    </div>
  );
```

### Горизонтальная полоса прокрутки

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    position: 'relative',
    verticalAlign: 'top',
    width: 200,
  };
function items(count: number) {
    const items = [];
    for (let i = 0; i < count; ++i) {
      items.push(i);
    }
    return items;
  }
const innerStyle = {
    width: 400,
  };
return (
    <div style={divStyle}>
      <ScrollContainer>
        {items(5).map((i) => (
          <div style={innerStyle} key={i}>
            {i}
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
```

### Смещение горизонтальной полосы прокрутки

Проп `offsetX` смещает горизонтальную полосу прокрутки от краёв контейнера.

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    position: 'relative',
    verticalAlign: 'top',
    width: 200,
  };
const offsetX = {
    bottom: 8,
    left: 8,
  };
function items(count: number) {
    const items = [];
    for (let i = 0; i < count; ++i) {
      items.push(i);
    }
    return items;
  }
const innerStyle = {
    width: 400,
  };
return (
    <div style={divStyle}>
      <ScrollContainer offsetX={offsetX}>
        {items(5).map((i) => (
          <div style={innerStyle} key={i}>
            {i}
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
```

### Скрытие полосы прокрутки при бездействии

Проп `showScrollBar` со значением `scroll` скрывает полосу прокрутки при отсутствии активности пользователя. Задержку на скрытие полосы прокрутки можно регулировать пропом `hideScrollBarDelay` (по умолчанию 500ms).

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    position: 'relative',
    verticalAlign: 'top',
    width: 200,
  };
return (
    <div style={divStyle}>
      <ScrollContainer showScrollBar={'scroll'}>
        {Array(30)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{i}</div>
          ))}
      </ScrollContainer>
    </div>
  );
```

### Показ полосы прокрутки при наведении

Проп `showScrollBar` со значением `hover` позволяет показывать полосу прокрутки только когда курсор находится над скролл-контейнером.

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    position: 'relative',
    verticalAlign: 'top',
    width: 200,
  };
return (
    <span>
      <div style={divStyle}>
        <ScrollContainer showScrollBar={'hover'}>
          {Array(30)
            .fill(null)
            .map((_, i) => (
              <div key={i}>{i}</div>
            ))}
        </ScrollContainer>
      </div>
    </span>
  );
```

### Отключенная анимация

Проп `disableAnimations` отключает анимацию полосы прокрутки.
ℹ️ **Полезно:** [Глобальное отключение анимации](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-faq--docs#%D0%BE%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%B9-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F).

```tsx
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #25AD50',
    height: 200,
    margin: 1,
    width: 200,
  };
return (
    <div style={containerStyle}>
      <ScrollContainer disableAnimations>
        {Array(30)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{i}</div>
          ))}
      </ScrollContainer>
    </div>
  );
```

### Скролл к началу/концу контента или границе

С помощью методов `scrollTo` можно реализовать контрол для быстрого скролла к началу или концу контента в скролл-контейнере.

```tsx
function getItems(count: number) {
    const items = [];
    for (let i = 0; i < count; i += 1) {
      items.push(i);
    }
    return items;
  }
const wrapperStyle = {
    height: '200px',
    width: '100px',
    border: '1px solid #25AD50',
  };
const refScrollContainer = React.useRef<ScrollContainer>(null);
const countItems = 8;
const scrollTo = () => refScrollContainer.current?.scrollTo(document.getElementById(`-${countItems - 1}`));
const scrollToTop = () => refScrollContainer.current?.scrollToTop();
const scrollToLeft = () => refScrollContainer.current?.scrollToLeft();
const scrollToRight = () => refScrollContainer.current?.scrollToRight();
const scrollToBottom = () => refScrollContainer.current?.scrollToBottom();
return (
    <Gapped verticalAlign="top">
      <div id="test-container" style={wrapperStyle}>
        <ScrollContainer ref={refScrollContainer}>
          {getItems(countItems).map((i) => (
            <div key={i} style={{ display: 'flex', width: 300 }}>
              <div id={`${i}`} style={{ padding: 12, flexBasis: 150 }}>
                {-i}
              </div>
              <div id={`${-i}`} style={{ padding: 12, flexBasis: 150 }}>
                {i}
              </div>
            </div>
          ))}
        </ScrollContainer>
      </div>
      <Gapped>
        <button id="scrollTo" onClick={scrollTo}>
          Scroll to
        </button>
        <button id="scrollToTop" onClick={scrollToTop}>
          Scroll to top
        </button>
        <button id="scrollToBottom" onClick={scrollToBottom}>
          Scroll to bottom
        </button>
        <button id="scrollToLeft" onClick={scrollToLeft}>
          Scroll to left
        </button>
        <button id="scrollToRight" onClick={scrollToRight}>
          Scroll to right
        </button>
      </Gapped>
    </Gapped>
  );
```

### Событие onScroll

Событие `onScroll` даёт доступ к нативному событию, с помощью него можно получать точные координаты прокрутки.
Для простых сценариев можно использовать обработчики изменений прокрутки по вертикали (Y) — `onScrollStateChangeY`, и горизонтали (X) — `onScrollStateChangeX`.

```tsx
function getItems(count: number) {
    const items = [];
    for (let i = 0; i < count; i += 1) {
      items.push(i);
    }
    return items;
  }
const wideWrapperStyle = {
    height: '200px',
    width: '600px',
    border: '1px solid #000',
  };
const [scrollTop, setScrollTop] = React.useState(0);
const [edgeY, setEdgeY] = React.useState('top');
const [edgeX, setEdgeX] = React.useState('left');
return (
    <Gapped vertical>
      <div style={wideWrapperStyle}>
        <ScrollContainer
          maxHeight={200}
          maxWidth={600}
          onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
          onScrollStateChangeY={setEdgeY}
          onScrollStateChangeX={setEdgeX}
        >
          <div style={{ width: 1200 }}>
            {getItems(30).map((i) => (
              <div key={i} style={{ padding: 8 }}>
                {i}
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
      <Gapped vertical>
        <div>scrollTop: {Math.round(scrollTop)}</div>
        <div>vertical edge: {edgeY}</div>
        <div>horizontal edge: {edgeX}</div>
      </Gapped>
    </Gapped>
  );
```

## Source

[`components/ScrollContainer/ScrollContainer.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/ScrollContainer/ScrollContainer.tsx)
