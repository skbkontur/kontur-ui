# Spinner

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data_spinner--docs)

## Props

- **caption?**: Подпись спиннера
- **type?**: Размер индикатора и текста (default: `normal`)
- **color?**: Одноцветный режим. Удобная альтернатива пропа `dimmed`
- **inline?**: Уменьшает размер индикатора для работы в строках. Если задан, то размер индикитора из `type` игнорируется (default: `false`)
- **width?**: Толщина индикатора в пикселях. (default: `2`)
- **dimmed?**: Одноцветный режим. Цвет спиннера не переливается. Можно кастомизировать переменной `spinnerDimmedColor` (default: `false`)

```jsx
import { Spinner } from '@skbkontur/react-ui';
```

## Использование

Используйте `Spinner`, чтобы показать, что система выполняет команду, которую дал пользователь.

Не применяйте `Spinner` для заполнения паузы при загрузке контента, для этого предназначен [GlobalLoader](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-globalloader--docs).

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

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs), [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Адаптивность

По умолчанию лоадер не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleType

Проп `type` меняет размер индикатора и текста.

```tsx
return (
    <Gapped>
      <Spinner type="big" />
      <Spinner type="normal" />
      <Spinner type="mini" />
    </Gapped>
  );
```

### ExampleCaption

Проп `width` задаёт толщину индикатора в пикселях. / export const ExampleWidth: Story = () => <Spinner width={5} type="mini" />; ExampleWidth.storyName = 'Толщина индикатора'; /** Проп `caption` добавляет текст рядом с индикатором.

```tsx
return (
    <Gapped>
      <Spinner type="big" caption="big" />
      <Spinner type="normal" caption="normal" />
      <Spinner type="mini" caption="mini" />
    </Gapped>
  );
```

### ExampleInline

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

### ExampleColor

Проп `color` делает индикатор одноцветным, позволяя напрямую задать цвет. Альтернативой является проп `dimmed`, который включает одноцветный режим. По умолчанию цвета становятся приглушёнными, но их можно изменить через тему.

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