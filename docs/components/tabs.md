# Tabs

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data_tabs_tabs--docs)

## Props

- **indicatorClassName?**: Кастомный класс для индикатора (подчёркивания) активного таба.
- **size?**: Размер табов.
- **value**: Идентификатор активного таба. Совпадает с `id` выбранного `<Tab />`.
- **onValueChange?**: Вызывается при смене активного таба.
- **vertical?**: Располагает табы вертикально. (default: `false`)
- **width?**: Ширина компонента.

```jsx
import { Tabs } from '@skbkontur/react-ui';
```

## Использование

Используйте `Tabs` для второстепенной навигации, для группировки или фильтрации контента.

**Когда не использовать:**

- Для основной навигации. Для этого лучше подходит главное меню на цветной плашке — оно более заметно на странице.
- Для состояний — для этого есть [RadioGroup](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-radiogroup--docs), [Toggle](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-toggle--docs) и [Switcher](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-switcher--docs).

## Доступность

Компонент поддерживает управление с клавиатуры - при переходе к группе табов клавишей `Tab` первый таб получает фокус. Стрелками можно перемещать фокус между табами. При нажатии клавиши `Enter` таб с фокусом становится активным.

**Рекомендации**

- Используйте `aria-describedby` для связи группы табов с элементом, содержащим дополнительное, развёрнутое описание.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию группа табов не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### BasicExample

```tsx
const [active, setActive] = React.useState('inbox');

  return (
    <Tabs value={active} onValueChange={setActive}>
      <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
      <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
    </Tabs>
  );
```

### SizeExample

Проп `size` задаёт размер табов в группе. По умолчанию: `'large'`.

```tsx
const [active, setActive] = React.useState('inbox');
  const renderCaption = (caption: string) => <span style={{ display: 'inline-block', width: 60 }}>{caption}</span>;
  return (
    <div>
      <div>
        {renderCaption('small')}
        <Tabs value={active} onValueChange={setActive} size="small">
          <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
          <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
        </Tabs>
      </div>
      <div>
        {renderCaption('medium')}
        <Tabs value={active} onValueChange={setActive} size="medium">
          <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
          <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
        </Tabs>
      </div>
      <div>
        {renderCaption('large')}
        <Tabs value={active} onValueChange={setActive} size="large">
          <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
          <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
```

### AlignmentExample

Компонент может отображать табы двумя способами: горизонтально (по умолчанию) и вертикально.

```tsx
const [active, setActive] = React.useState('inbox');

  return (
    <Tabs vertical value={active} onValueChange={setActive}>
      <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
      <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
    </Tabs>
  );
```

### WidthExample

Проп `width` задаёт ширину группы табов.

```tsx
const [active, setActive] = React.useState('inbox');

  return (
    <Tabs style={{ backgroundColor: 'lightgreen' }} width={150} value={active} onValueChange={setActive}>
      <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
      <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
    </Tabs>
  );
```

### CustomizationExample

Проп `indicatorClassName` задаёт кастомный класс подчёркивания табов.

```tsx
const [active, setActive] = React.useState('inbox');
  const emotion = useEmotion();

  return (
    <Tabs indicatorClassName={getStyles(emotion).customizationExample()} value={active} onValueChange={setActive}>
      <Tabs.Tab id="inbox">Входящие</Tabs.Tab>
      <Tabs.Tab id="sent">Отправленные</Tabs.Tab>
    </Tabs>
  );
```