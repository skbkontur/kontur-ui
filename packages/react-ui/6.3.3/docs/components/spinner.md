# Spinner

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_display-data-spinner--docs)

Зацикленный индикатор, не отображающий прогресс выполнения задачи

```jsx
import { Spinner } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `caption`

type: `ReactNode` · optional

Подпись спиннера

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер спиннера

### `type`

type: `"big" | "mini" | "normal"` · optional

Размер спиннера
@deprecated Начиная с версии `6.1`, тип и проп устарели в пользу нового `SizeContext`. Они будут удалены в `7.0`.
@see {@link size }

### `inline`

type: `boolean` · optional · default: `false`

Уменьшает размер индикатора для работы в строках. Если задан, то размер спиннера из `size` игнорируется

### `width`

type: `number` · optional · default: `2`

Толщина индикатора в пикселях.

### `color`

type: `Color` · optional

Цвет спиннера в одноцветном режиме. Альтернатива пропа `dimmed`

### `dimmed`

type: `boolean` · optional · default: `false`

Включает одноцветный режим, в котором цвет спиннера не переливается. Можно кастомизировать переменной `spinnerDimmedColor`

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

Используйте `Spinner`, чтобы показать, что система выполняет команду, которую дал пользователь.

**Когда не использовать**

Не применяйте `Spinner` для заполнения паузы при загрузке контента, для этого предназначен [GlobalLoader](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/globalloader.md).

## Примеры

### Базовый пример

```tsx
return <Spinner />;
```

### Размер спиннера и текста

Проп `type` меняет размер индикатора и текста.

```tsx
return (
    <Gapped>
      <Spinner size="large" />
      <Spinner size="medium" />
      <Spinner size="small" />
    </Gapped>
  );
```

### Толщина индикатора

Проп `width` задаёт толщину индикатора в пикселях.

```tsx
return <Spinner width={5} size="small" />;
```

### Подпись

Проп `caption` добавляет текст рядом с индикатором.

```tsx
return (
    <Gapped>
      <Spinner size="large" caption="large" />
      <Spinner size="medium" caption="medium" />
      <Spinner size="small" caption="small" />
    </Gapped>
  );
```

### Инлайновый режим

Проп `inline` уменьшает размер индикатора для работы в строках.

```tsx
return (
    <span>
      <span>span </span>
      <Spinner inline />
      <span> span</span>
    </span>
  );
```

### Кастомизация: одноцветный режим

Проп `color` делает индикатор одноцветным, позволяя напрямую задать цвет.
Альтернативой является проп `dimmed`, который включает одноцветный режим.
По умолчанию цвета становятся приглушёнными, но их можно изменить через тему.

```tsx
return (
    <Gapped>
      <Spinner color="blue" caption="caption" />
      <Spinner dimmed caption="caption" />
      <ThemeContext.Provider
        value={ThemeFactory.create({
          spinnerCaptionColor: 'green',
          spinnerDimmedColor: 'green',
        })}
      >
        <Spinner dimmed caption="caption" />
      </ThemeContext.Provider>
    </Gapped>
  );
```

## Доступность

Для пользователей скринридеров можно использовать `live regions`.

Обычное использование cпиннера предполагает, что он удаляется, когда не нужен.
Но, чтобы информировать пользователя об отсутствии спиннера, необходим текст доступный для скринридера.

Пример ниже демонстрирует, как доступность можно реализовать через атрибут `aria-live="polite"` и некоторые приёмы вёрстки.

```jsx
const [active, setActive] = React.useState(false);

<>
  <Button onClick={() => setActive(!active)}>Spinner</Button>
  <div aria-live="polite">
    <span
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        border: 0,
      }}
    >
      Загрузка {active ? ' началась' : ' закончилась'}
    </span>
    {active && <Spinner />}
  </div>
</>;
```

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/accessibility--docs), [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Адаптивность

По умолчанию лоадер не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Spinner/Spinner.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Spinner/Spinner.tsx)
