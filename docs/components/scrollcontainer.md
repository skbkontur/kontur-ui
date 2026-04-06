# ScrollContainer

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout_scrollcontainer--docs)

## Import

```jsx
import { ScrollContainer } from '@skbkontur/react-ui';
```

## Props

- **invert?**: Инвертирует цвет скроллбара. (default: `false`)
- **maxHeight?**: Задает максимальную высоту.
- **maxWidth?**: Задает максимальную ширину.
- **preventWindowScroll?**: Отключает скролл окна, когда меню открыто. (default: `false`)
- **scrollBehaviour?**: Задает поведение скролла. (https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) (default: `'auto'`)
- **onScrollStateChangeX?**: Задает функцию, которая вызывается при скроле по горизонтали.
- **onScrollStateChangeY?**: Задает функцию, которая вызывается при скроле по вертикали.
- **onScroll?**: Задает функцию, которая вызывается при скроле.
- **disabled?**: Отключает кастомный скролл.
- **offsetY?**: Задает смещение вертикального скроллбара.
- **offsetX?**: Задает смещение горизонтального скроллбара.
- **showScrollBar?**: Определяет, нужно ли показывать скроллбар.
- **hideScrollBarDelay?**: Устанавливает задержку в миллисекундах перед скрытием скроллбара. Работает только при hideScrollBar = true или showScrollBar = 'scroll' | 'hover'.
- **disableAnimations?**: Отключает анимацию.

### Example1

```tsx
function items(count: number) {
    const items = [];
    for (let i = 0; i < count; ++i) {
      items.push(i);
    }
    return items;
  }

  const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #f99',
    height: 200,
    margin: 1,
    position: 'relative',
    verticalAlign: 'top',
    width: 200,
  };
  const absStyle: React.CSSProperties = {
    border: '1px solid',
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
  };

  return (
    <div>
      <div style={divStyle}>
        <ScrollContainer>
          {items(20).map((i) => (
            <div key={i}>{i}</div>
          ))}
        </ScrollContainer>
      </div>
      <div style={{ ...divStyle, background: '#888' }}>
        <ScrollContainer invert>
          {items(20).map((i) => (
            <div key={i}>{i}</div>
          ))}
        </ScrollContainer>
      </div>
      <div style={divStyle}>
        <div style={absStyle}>
          <ScrollContainer>
            {items(3).map((i) => (
              <div key={i}>{i}</div>
            ))}
          </ScrollContainer>
        </div>
      </div>
      <div style={divStyle}>
        <div style={absStyle}>
          <ScrollContainer maxHeight={150}>
            {items(30).map((i) => (
              <div key={i}>{i}</div>
            ))}
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
```

### Example2

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #f99',
    height: 200,
    margin: 1,
    position: 'relative',
    verticalAlign: 'top',
    width: 200,
  };
  const absStyle: React.CSSProperties = {
    border: '1px solid',
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
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
    <div>
      <div style={divStyle}>
        <ScrollContainer>
          {items(5).map((i) => (
            <div style={innerStyle} key={i}>
              {i}
            </div>
          ))}
        </ScrollContainer>
      </div>
      <div style={{ ...divStyle, background: '#888' }}>
        <ScrollContainer invert>
          {items(20).map((i) => (
            <div style={innerStyle} key={i}>
              {i}
            </div>
          ))}
        </ScrollContainer>
      </div>
      <div style={divStyle}>
        <div style={absStyle}>
          <ScrollContainer maxHeight={150}>
            {items(3).map((i) => (
              <div style={innerStyle} key={i}>
                {i}
              </div>
            ))}
          </ScrollContainer>
        </div>
      </div>
      <div style={divStyle}>
        <div style={absStyle}>
          <ScrollContainer maxHeight={150} maxWidth={200}>
            {items(30).map((i) => (
              <div style={innerStyle} key={i}>
                {i}
              </div>
            ))}
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
```

### Example3

```tsx
const containerStyle = {
    display: 'inline-block',
    border: '1px solid #f99',
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

### Example4

Проп `showScrollBar` со значением `scroll` скрывает скроллбар при отсутствии активности пользователя. Задержку на скрытие скроллбара можно регулировать пропом `hideScrollBarDelay` (по умолчанию 500ms)

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #f99',
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

### Example5

Проп `showScrollBar` со значением `hover` позволяет показывать скроллбар только когда курсор находится над скролл контейнером

```tsx
const divStyle: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid #f99',
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