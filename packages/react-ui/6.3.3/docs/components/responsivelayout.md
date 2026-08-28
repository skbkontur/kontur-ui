# ResponsiveLayout

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout-responsivelayout--docs)

`ResponsiveLayout` определяет текущий режим.

```jsx
import { ResponsiveLayout } from '@skbkontur/react-ui';
```

Компонент ожидает в себя функцию, в которую аргументом передаётся объект с флагами режима.

```jsx static
class SomeComponent {
  public render() {
    return (
      <ResponsiveLayout>
        {
          ({ isMobile }) => {
            /* ... */
          }
        }
      </ResponsiveLayout>
    )
  }
}
```

## Все пропсы

### `onLayoutChange`

type: `(layout: ResponsiveLayoutFlags<T>) => void` · optional

Событие изменения режима.

### `customMediaQueries`

type: `MediaQueriesType` · optional

Позволяет кастомизировать возвращаемые флаги.

## Использование

Как альтернативу можно использовать хук [useResponsiveLayout](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs#%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D0%B5%D0%BA%D1%83%D1%89%D0%B5%D0%B3%D0%BE-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC%D0%B0).

Проп `onLayoutChange` вызывает переданный в него коллбэк при изменении режима. Аргументом передаётся объект с флагом.

```jsx static
import { ResponsiveLayout } from '@skbkontur/react-ui';

class SomeComponent {
  public render() {
    return (
      <div>
        <ResponsiveLayout onLayoutChange={({ isMobile }) => console.log(isMobile)} />
      </div>
    )
  }
}
```

Проп `customMediaQueries: MediaQueriesType` позволяет кастомизировать возвращаемые флаги:

```ts static
type MediaQueriesType = Record<string, string>;
```

- Без кастомизации есть только флаг `isMobile`.

- Поля из `customMediaQueries` дополняют список возвращаемых флагов в `ResponsiveLayoutFlags`.

- При добавлении кастомного флага `isMobile`, значение дефолтного флага перезаписывается в пользу кастомного.

```jsx static
import { ResponsiveLayout } from '@skbkontur/react-ui';

const customMediaQueries = {
  isTablet: '(min-width: 577px)',
  isDesktop: '(min-width: 1280px)',
};

class SomeComponent {
  public render() {
    return (
      <ResponsiveLayout customMediaQueries={customMediaQueries}>
        {
          ({ isMobile, isTablet, isDesktop }) => {
            /* ... */
          }
        }
      </ResponsiveLayout>
    )
  }
}
```

## Source

[`components/ResponsiveLayout/ResponsiveLayout.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/ResponsiveLayout/ResponsiveLayout.tsx)
