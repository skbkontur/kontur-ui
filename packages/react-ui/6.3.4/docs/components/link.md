# Link

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_button-link--docs)

С помощью ссылки пользователь может перейти на другую страницу, раздел приложения или внешний URL.

```jsx
import { Link } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `disabled`

type: `boolean` · optional

Ссылка меняет цвет на серый и становится недоступна для нажатия.

### `icon`

type: `ReactElement<unknown, string | JSXElementConstructor<any>>` · optional

Добавляет иконку слева от ссылки.

### `rightIcon`

type: `ReactElement<unknown, string | JSXElementConstructor<any>>` · optional

Добавляет иконку справа от ссылки.

### `use`

type: `"default" | "danger" | "success" | "grayed"` · optional · default: `default`

Стиль ссылки.

### `tabIndex`

type: `any` · optional

HTML-атрибут `tabindex`.

### `loading`

type: `boolean` · optional

Переводит ссылку в состояние загрузки.

### `theme`

type: `Partial<typeof BasicThemeClass>` · optional

Объект с переменными темы.

### `error`

type: `boolean` · optional

Переводит ссылку в состояние валидации "Ошибка".

### `warning`

type: `boolean` · optional

Переводит ссылку в состояние валидации "Предупреждение".

### `className`

type: `any` · optional

HTML-атрибут `class`.

### `style`

type: `any` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `component`

type: `ButtonLinkAllowedValues` · optional · default: `a`

Компонент, используемый в качестве корневого узла.

## Использование

Ссылка используется для навигации на другие разделы или внешние страницы.

Для ссылки нет отдельных пропсов для размерности. На размер отображаемой ссылки влияет размер шрифта (font-size) и высота строки (line-height).

**Когда не использовать**

Не используйте ссылку для действий на странице, для этого подойдёт [кнопка](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/button.md), в том числе кнопка в стиле Text, если нужна более легкая версия кнопки.

Если же вам нужно сохранить нативные свойства ссылки, но визуально она должна выглядеть как кнопка, вы можете переопределить корневой элемент ссылки, см. пример [Управление корневым элементом](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/link.md#управление-корневым-элементом).

## Примеры

### Базовый пример

```tsx
return (
    <Link href="https://kontur.ru" target="_blank">
      Обычная ссылка
    </Link>
  );
```

### Стили

Проп `use` задаёт стиль ссылки.
Стиль влияет на внешний вид cсылки. По умолчанию: `'default'`.
Доступны стили:
- Default — чёрная ссылка.
- Grayed — серая ссылка.
- Success — зелёная ссылка на действие с положительной окраской.
- Danger — красная ссылка для необратимых или негативных по смыслу действий.

```tsx
return (
    <Gapped gap={15}>
      <Link use="default">Перейти</Link>
      <Link use="grayed">Перейти</Link>
      <Link use="success">Принять</Link>
      <Link use="danger">Удалить</Link>
    </Gapped>
  );
```

### Иконка

В ссылку можно передать иконку.
Иконка может находиться слева от ссылки — проп `icon`, справа — проп `rightIcon`.

```tsx
return (
    <Gapped gap={20}>
      <Link icon={<IconCheckALight16 />}>Ссылка с иконкой слева</Link>
      <Link rightIcon={<IconCheckALight16 />}>Ссылка с иконкой справа</Link>
    </Gapped>
  );
```

### Открытие ссылок на внешние ресурсы

По умолчанию ссылка открывается в текущей открытой вкладке. Переопределить это поведение можно с помощью нативного атрибута `target="_blank"` — ссылка будет открываться в новой вкладке.
Если ссылка ведёт на внешний URL, компонент автоматически добавит атрибут `rel` с необходимым значением, чтобы защитить от проблем безопасности и утечки реферера. При этом не будет меняться или добавляться атрибут `target`.

```tsx
return (
    <Gapped>
      <Link href="https://kontur.ru">
        Откроется <span style={{ color: '#e3071c' }}>в этой</span> вкладке
      </Link>
      <Link target="_blank" href="https://kontur.ru">
        Откроется <span style={{ color: '#3f9726' }}>в новой</span> вкладке
      </Link>
    </Gapped>
  );
```

### Состояние блокировки

Проп `disabled` переводит ссылку в состояние блокировки. Ссылка меняет цвет на серый и становится недоступна для нажатия.

```tsx
return <Link disabled>Заблокированная ссылка</Link>;
```

### Состояние загрузки

Проп `loading` переводит ссылку в состояние загрузки. При загрузке ссылка переходит в состояние блокировки и становится серой.
Если у ссылки есть иконка, она заменяется на спиннер.

```tsx
const [isLoading, setIsLoading] = React.useState(false);
return (
    <Gapped vertical gap={15}>
      <Gapped gap={20}>
        <Link loading={isLoading}>Обычная ссылка</Link>
        <Link loading={isLoading} icon={<IconCheckALight16 />}>
          С иконкой слева
        </Link>
        <Link loading={isLoading} rightIcon={<IconCheckALight16 />}>
          С иконкой справа
        </Link>
      </Gapped>
      <Button onClick={() => setIsLoading(!isLoading)}>{isLoading ? 'Остановить загрузку' : 'Начать загрузку'}</Button>
    </Gapped>
  );
```

### Состояние ошибки

Проп `error` переводит сслыку в  состояние ошибки.

```tsx
return (
    <Link error icon={<IconToolPencilLineLight16 />}>
      Заполнить адрес
    </Link>
  );
```

### Управление корневым элементом

Проп `component` позволяет переопределить корневой элемент.
Примеры:
- Ссылка может рендерить кнопку в качестве корневого элемента. Ссылка принимает все пропсы переданного компонента. Рекомендуется к использованию вместо кнопки с `use=link`, если нужна кнопка с визуалом ссылки.
- В `component` можно передать [Link из библиотеки React Router](https://reactrouter.com/api/components/Link), если нужен переход внутри одностраничного приложения без полной перезагрузки страницы.

```tsx
return <Link component="button">Кнопка, но выглядит как ссылка</Link>;
```

### Кастомизация: действие при нажатии

Вы можете управлять тем, какое именно действие присходит при нажатии на ссылку.

```tsx
return <Link onClick={() => SingleToast.push('Ты нажал на ссылку')}>Ссылка с кастомным действием</Link>;
```

### Кастомизация: цвет ссылки

Ссылки допускается выделять фирменным цветом продукта. Сделать это можно, изменяя свойства темы через проп `theme`. Заданные переменные будут объединены с темой из `<ThemeContext>`.
Общие переменные темы и переменные для ссылки (с префиксом `link`) смотрите на странице [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-themeplayground--docs).

```tsx
return (
    <Gapped>
      <Link theme={{ linkColor: '#00B59A', linkHoverColor: '#00B59A', linkActiveColor: '#00B59A' }}>
        Ссылка другого цвета
      </Link>
    </Gapped>
  );
```

### Кастомизация: вид ссылки

```tsx
const textDecorationStyles = {
    linkTextUnderlineOffset: '1px',
  };
const underlineOnHoverStyles = {
    linkTextDecorationColor: 'transparent',
  };
const differentColorStyles = {
    linkColor: '#1874CF',
    linkHoverColor: '#1874CF',
    linkActiveColor: '#1874CF',
  };
const stringify = (styles: Record<string, string>) => {
    return `${Object.entries(styles)
      .map(([key, value]) => `${key}: "${value}"`)
      .join(', ')}`;
  };
const copyStyles = (styles: Record<string, string>) => {
    navigator.clipboard.writeText(stringify(styles));
    SingleToast.push('Copied');
  };
const tableStyle: React.CSSProperties = {
    borderCollapse: 'collapse',
    width: '100%',
  };
const tdStyle = {
    border: '1px solid',
    padding: '8px',
  };
const renderExampleRow = (title: string, styles: Record<string, string>) => {
    return (
      <tr>
        <td style={tdStyle}>{title}</td>
        <td style={tdStyle}>
          <Link theme={styles}>Link</Link>
        </td>
        <td style={tdStyle}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '80%', whiteSpace: 'pre-line' }}>{stringify(styles).replace(/, /g, '\n')}</div>
            <Button icon={<IconCopyRegular16 />} use={'text'} onClick={() => copyStyles(styles)} />
          </div>
        </td>
      </tr>
    );
  };
return (
    <table style={tableStyle}>
      <tr style={{ textAlign: 'left' }}>
        <th style={tdStyle}></th>
        <th style={tdStyle}>Пример</th>
        <th style={tdStyle}>Переменные темы</th>
      </tr>
      {renderExampleRow('Ссылка с подчеркиванием без отступа', textDecorationStyles)}
      {renderExampleRow('Ссылка с подчеркиванием при наведении', underlineOnHoverStyles)}
      {renderExampleRow('Изменение цвета ссылки', differentColorStyles)}
    </table>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию ссылка не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Link/Link.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Link/Link.tsx)
