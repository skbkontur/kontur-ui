# Link

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button_link--docs)

```jsx
import { Link } from '@skbkontur/react-ui';
```

## Использование

Ссылка используется для навигации на другие разделы или внешние страницы.
Не используйте ссылку для действий на странице, для этого подойдёт [кнопка](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-button--docs), в том числе кнопка в стиле Text, если нужна более легкая версия кнопки.

Если же вам нужно сохранить нативные свойства ссылки, но визуально она должна выглядеть как кнопка, вы можете переопределить корневой элемент ссылки, см. пример [Управление корневым элементом](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-link--docs#управление-корневым-элементом).

Для ссылки нет отдельных пропсов для размерности. На размер отображаемой ссылки влияет размер шрифта (font-size) и высота строки (line-height).

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию ссылка не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
return (
    <Link href="https://kontur.ru" target="_blank">
      Обычная ссылка
    </Link>
  );
```

### ExampleStyle

Проп `use` задаёт стиль ссылки. Стиль влияет на внешний вид cсылки. По умолчанию: `'default'`. Доступны стили: - Default — чёрная ссылка. - Grayed — серая ссылка. - Success — зелёная ссылка на действие с положительной окраской. - Danger — красная ссылка для необратимых или негативных по смыслу действий.

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

### ExampleIcon

В ссылку можно передать иконку. Иконка может находиться слева от ссылки — проп `icon`, справа — проп `rightIcon`.

```tsx
return (
    <Gapped gap={20}>
      <Link icon={<CheckAIcon16Light />}>Ссылка с иконкой слева</Link>
      <Link rightIcon={<CheckAIcon16Light />}>Ссылка с иконкой справа</Link>
    </Gapped>
  );
```

### ExampleExternal

По умолчанию ссылка открывается в текущей открытой вкладке. Переопределить это поведение можно с помощью нативного атрибута `target="_blank"` — ссылка будет открываться в новой вкладке. Если ссылка ведёт на внешний URL, компонент автоматически добавит атрибут `rel` с необходимым значением, чтобы защитить от проблем безопасности и утечки реферера. При этом не будет меняться или добавляться атрибут `target`.

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

### ExampleDisabled

Проп `disabled` переводит ссылку в состояние блокировки. Ссылка меняет цвет на серый и становится недоступна для нажатия.

```tsx
return <Link disabled>Заблокированная ссылка</Link>;
```

### ExampleSpinner

Проп `loading` переводит ссылку в состояние загрузки. При загрузке ссылка переходит в состояние блокировки и становится серой. Если у ссылки есть иконка, она заменяется на спиннер.

```tsx
const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Gapped vertical gap={15}>
      <Gapped gap={20}>
        <Link loading={isLoading}>Обычная ссылка</Link>
        <Link loading={isLoading} icon={<CheckAIcon16Light />}>
          С иконкой слева
        </Link>
        <Link loading={isLoading} rightIcon={<CheckAIcon16Light />}>
          С иконкой справа
        </Link>
      </Gapped>
      <Button onClick={() => setIsLoading(!isLoading)}>{isLoading ? 'Остановить загрузку' : 'Начать загрузку'}</Button>
    </Gapped>
  );
```

### ExampleError

Проп `error` переводит сслыку в  состояние ошибки.

```tsx
return (
    <Link error icon={<ToolPencilLineIcon16Light />}>
      Заполнить адрес
    </Link>
  );
```

### ExampleButton

Проп `component` позволяет переопределить корневой элемент. Примеры: - Ссылка может рендерить кнопку в качестве корневого элемента. Ссылка принимает все пропсы переданного компонента. Рекомендуется к использованию вместо кнопки с `use=link`, если нужна кнопка с визуалом ссылки. - В `component` можно передать [Link из библиотеки React Router](https://reactrouter.com/api/components/Link), если нужен переход внутри одностраничного приложения без полной перезагрузки страницы.

```tsx
return <Link component="button">Кнопка, но выглядит как ссылка</Link>;
```

### ExampleClickCustom

Вы можете управлять тем, какое именно действие присходит при нажатии на ссылку.

```tsx
return <Link onClick={() => SingleToast.push('Ты нажал на ссылку')}>Ссылка с кастомным действием</Link>;
```

### ExampleTheme

Ссылки допускается выделять фирменным цветом продукта. Сделать это можно, изменяя свойства темы через проп `theme`. Заданные переменные будут объединены с темой из `<ThemeContext>`. Общие переменные темы и переменные для ссылки (с префиксом `link`) смотрите на странице [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-themeplayground--docs).

```tsx
return (
    <Gapped>
      <Link theme={{ linkColor: '#00B59A', linkHoverColor: '#00B59A', linkActiveColor: '#00B59A' }}>
        Ссылка другого цвета
      </Link>
    </Gapped>
  );
```

### ExampleCustomLink

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
            <Button icon={<CopyIcon16Regular />} use={'text'} onClick={() => copyStyles(styles)} />
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