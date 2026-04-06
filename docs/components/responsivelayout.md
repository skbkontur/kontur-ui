# ResponsiveLayout

> Компонент `ResponsiveLayout` для определения текущего лэйаута.

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout_responsivelayout--docs)

## Props

- **onLayoutChange?**: Задает функцию, которая вызывается при изменении лейаута.
- **customMediaQueries?**: Позволяет кастомизировать возвращаемые флаги.

## Примеры

```ts static
interface ResponsiveLayoutFlags {
  isMobile: boolean;
}
```

### Компонент ожидает в себя функцию, в которую аргументом передается объект с флагом лэйаута.

```jsx static
import { ResponsiveLayout } from '@skbkontur/react-ui';

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

### Также существует проп `onLayoutChange`, который вызывает переданный в него коллбэк при изменении лэйаута. Аргументом передается объект с флагом.

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

### В компонент можно передать проп `customMediaQueries: MediaQueriesType`, который позволяет кастомизировать возвращаемые флаги:

```ts static
type MediaQueriesType = Record<string, string>;
```

### 3. При добавлении кастомного флага isMobile, значение дефолтного флага перезаписывается в пользу кастомного

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

Как альтернативу можно использовать хук [useResponsiveLayout](#/Mobiles).