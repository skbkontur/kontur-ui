# Sticky

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_layout-sticky--docs)

`Sticky` позволяет закреплять элемент интерфейса в определенной позиции на экране при прокрутке страницы.
Это полезно для создания «прилипающих» элементов, которые должны оставаться видимыми при прокрутке содержимого.

```jsx
import { Sticky } from '@skbkontur/react-ui';
```

- `side` определяет край, к которому будет закрепляться элемент.
- `offset` задаёт отступ от края экрана в пикселях, на который сдвигается элемент в закреплённом состоянии.
- `getStop` задаёт функцию, которая возвращает DOM-элемент, который нельзя пересекать.

## Все пропсы и методы

### `side`

type: `"top" | "bottom"` · required

Край, к которому будет закреплен элемент.

### `offset`

type: `number` · optional · default: `0`

Отступ от края экрана в пикселях, на который сдвигается элемент в закреплённом состоянии.

### `getStop`

type: `() => HTMLElement` · optional

Задаёт функцию, которая возвращает DOM-элемент, который нельзя пересекать.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

## Examples

### Базовый пример

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
            Закреплённый заголовок
            <div>
              fixed: <b>{String(fixed)}</b>
            </div>
          </div>
        )}
      </Sticky>
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
            Закреплённый футер
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

## Source

[`components/Sticky/Sticky.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Sticky/Sticky.tsx)
