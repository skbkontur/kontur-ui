# Sticky

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout_sticky--docs)

## Import

```jsx
import { Sticky } from '@skbkontur/react-ui';
```

## Props

- **side**: Задает сторону залипания.
- **offset?**: Задает отступ от края экрана в пикселях, на который сдвигается элемент в залипшем состоянии. (default: `0`)
- **getStop?**: Задает функцию, которая возвращает DOM-элемент, который нельзя пересекать.

### Example1

```tsx
const style = {
    padding: 10,
    background: '#f0f0f0',
  };

  let stop: HTMLElement | null = null;

  return (
    <div>
      <Sticky side="top" getStop={() => stop}>
        {(fixed) => (
          <div style={style}>
            Header
            <div>
              fixed: <b>{String(fixed)}</b>
            </div>
          </div>
        )}
      </Sticky>
      Content
      <div style={{ height: 1000 }} />
      <div
        ref={(el) => {
          stop = el;
        }}
        style={{ borderTop: '1px solid' }}
      />
      <div style={{ height: 1000 }} />
      <Sticky side="bottom" getStop={() => stop} offset={20}>
        {(fixed) => (
          <div style={style}>
            Footer
            <div>
              fixed: <b>{String(fixed)}</b>
            </div>
          </div>
        )}
      </Sticky>
      <div style={{ height: 100 }} />
    </div>
  );
```