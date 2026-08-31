# Tooltip

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_overlay-tooltip--docs)

Подсказка, которая объясняет состояние контрола или даёт контекстную справку.

Открывается по клику, фокусу на элемент или наведению.
Может содержать изображения, кнопки, ссылки и прочие интерактивные элементы.

```jsx
import { Tooltip } from '@skbkontur/react-ui';
```

## Все пропсы

### `render`

type: `() => ReactNode` · optional

Функция, возвращающая содержимое тултипа. При возврате `null` тултип не показывается.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер тултипа.

### `pos`

type: `"top" | "bottom" | "left" | "right" | "top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right"` · optional

Приоритетное расположение тултипа относительно элемента.

### `allowedPositions`

type: `("top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right")[]` · optional

Список позиций, которые может занимать тултип. В списке обязательно должна быть позиция из пропа `pos`.

### `trigger`

type: `"manual" | "hover" | "opened" | "click" | "focus" | "hover&focus" | "closed" | "hoverAnchor"` · optional · default: `hover`

Триггер открытия тултипа.

### `closeButton`

type: `boolean` · optional

Показывает крестик для закрытия тултипа.
По умолчанию крестик показывается, если проп `trigger` не равен `hover` или `focus`.

### `anchorElement`

type: `HTMLElement` · optional

Элемент, относительно которого позиционируется тултип.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию.

### `useWrapper`

type: `boolean` · optional · default: `false`

Оборачивает вложенные элементы в `<span />`.

_Примечание_: при двух и более вложенных элементах обёртка будет добавлена автоматически.

### `delayBeforeShow`

type: `number` · optional · default: `100`

Задержка в миллисекундах до появления тултипа.

### `onCloseClick`

type: `MouseEventHandler<HTMLElement>` · optional

Событие нажатия на крестик.

### `onCloseRequest`

type: `(event?: Event | MouseEvent<Element, MouseEvent>) => void` · optional

Событие нажатия на крестик или снаружи тултипа.

### `onClose`

type: `() => void` · optional

Событие закрытия тултипа.

### `onOpen`

type: `() => void` · optional

Событие открытия тултипа.

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

Используйте, когда нужно дать более подробную контекстную справку, или в подсказке имеются интерактивные элементы: кнопки, ссылки, изображения.

**Альтернативы и дополнения**

Если для пояснения требуется большой объём текста, лучше написать статью и дать в тултипе ссылку на неё.

Для краткой текстовой подсказки по наведению используйте [Hint](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/hint.md).

## Примеры

### Базовый пример

```tsx
return (
    <Tooltip render={() => 'Тултип'}>
      <IconQuestionCircleLight20 />
    </Tooltip>
  );
```

### Содержимое тултипа

Главное отличие тултипа от хинта — возможность рендерить подсказку с любым содержимым с помощью пропа `render`.

```tsx
const tooltipContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
      Контекстная справка
      <Button>Кнопка</Button>
    </div>
  );
return (
    <Tooltip render={tooltipContent}>
      <Button disabled icon={<IconSecurityLockClosedLight20 />}>
        Кнопка
      </Button>
    </Tooltip>
  );
```

### Размер

Проп `size` задаёт размер.

```tsx
const tooltipContent = () => <div style={{ width: '150px' }}>Справка, которая поможет понять сценарий</div>;
return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '8px' }}>
      <Tooltip render={tooltipContent} size="small">
        <Button size="small">small</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} size="medium">
        <Button size="medium">medium</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} size="large">
        <Button size="large">large</Button>
      </Tooltip>
    </div>
  );
```

### Позиционирование

Можно позиционировать тултип относительно элемента пропом `pos`.
Возможные значения:
+ `top`, `top center`, `top left`, `top right`,
+ `bottom`, `bottom center`, `bottom left`, `bottom right`,
+ `left`, `left middle`, `left top`, `left bottom`,
+ `right`, `right middle`, `right top`, `right bottom`.

```tsx
return (
    <Tooltip pos={'bottom'} render={() => 'Тултип снизу'}>
      <IconQuestionCircleLight20 />
    </Tooltip>
  );
```

### Триггер открытия

Проп `trigger` задаёт событие, по которому открывается тултип.
Возможные значения:
+ `hover` — по наведению (вариант по умолчанию),
+ `click` — по нажатию,
+ `focus` — по фокусу,
+ `hover&focus` — по наведению или фокусу,
+ `hoverAnchor` — по наведению только на вложенный элемент, без учёта поверхности тултипа,
+ `opened` — статичное состояние с открытым тултипом,
+ `closed` — статичное состояние с закрытым тултипом,
+ `manual` — ручное управление через методы `show()` и `hide()`.

```tsx
const tooltipContent = () => <div style={{ width: '150px' }}>Справка, которая поможет понять сценарий</div>;
return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '8px' }}>
      <Tooltip render={tooltipContent} trigger="hover">
        <Button>hover</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} trigger="click">
        <Button>click</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} trigger="focus">
        <Button>focus</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} trigger="hover&focus">
        <Button>hover&focus</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} trigger="hoverAnchor">
        <Button>hoverAnchor</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} trigger="opened">
        <Button>opened</Button>
      </Tooltip>
      <Tooltip render={tooltipContent} trigger="closed">
        <Button>closed</Button>
      </Tooltip>
    </div>
  );
```

### Ручное управление

Подробный пример реализации тултипа с `trigger = "manual"` через `ref` и методы `show()` и `hide()`.

```tsx
const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
const tooltipRef = React.useRef<Tooltip>(null);
const handleButtonClick = () => {
    const tooltip = tooltipRef.current;
    if (!tooltip) {
      return;
    }

    if (isTooltipOpen) {
      tooltip.hide();
    } else {
      tooltip.show();
    }
    setIsTooltipOpen(!isTooltipOpen);
  };
return (
    <Tooltip trigger="manual" ref={tooltipRef} render={() => 'Тултип'} closeButton={false}>
      <Button onClick={handleButtonClick}>{`${isTooltipOpen ? 'Закрыть' : 'Открыть'} тултип`}</Button>
    </Tooltip>
  );
```

### Кнопка закрытия

С помощью пропа `closeButton` можно переопределить логику отображения кнопки-крестика, закрывающую тултип.
По умолчанию крестик показывается в тултипах с `trigger = "click" | "opened" | "manual"`.

```tsx
return (
    <Tooltip trigger="opened" closeButton={false} render={() => 'Тултип без крестика'}>
      <IconQuestionCircleLight20 />
    </Tooltip>
  );
```

### Якорный элемент

С помощью пропа `anchorElement` можно привязывать один тултип к разным элементам на странице.

```tsx
const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);
return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '8px' }}>
      {anchor && <Tooltip anchorElement={anchor} render={() => 'Тултип'} trigger="opened" closeButton={false} />}
      <div onMouseEnter={(event) => setAnchor(event.target as HTMLElement)} onMouseLeave={() => setAnchor(null)}>
        Anchor 1
      </div>
      <div onMouseEnter={(event) => setAnchor(event.target as HTMLElement)} onMouseLeave={() => setAnchor(null)}>
        Anchor 2
      </div>
      <div onMouseEnter={(event) => setAnchor(event.target as HTMLElement)} onMouseLeave={() => setAnchor(null)}>
        Anchor 3
      </div>
    </div>
  );
```

### Всплытие без анимации

Проп `disableAnimations` отключает анимацию всплывающего тултипа.

```tsx
return (
    <Tooltip disableAnimations render={() => 'Тултип'}>
      <IconQuestionCircleLight20 />
    </Tooltip>
  );
```

### Встроенная обёртка

С помощью пропа `useWrapper` можно обернуть вложенные элементы в `<span />`.
Это особенно полезно в двух сценариях:
+ для правильного позиционирования относительно двух или более вложенных объектов,
+ для отображения тултипа у отключённых нативных элементов (аттрибут `disabled` блокирует события мыши).

```tsx
return (
    <Tooltip useWrapper render={() => 'Тултип всё равно отображается'}>
      <button disabled>Нативная кнопка</button>
    </Tooltip>
  );
```

### Задержка перед появлением

Проп `delayBeforeShow` позволяет переопределить задержку перед появлением тултипа **по наведению**. По умолчанию: 100мс.

```tsx
const [delay, setDelay] = React.useState(100);
const handleDelayChange = (value: string) => {
    const valueAsNumber = Number(value);
    setDelay(isNaN(valueAsNumber) || valueAsNumber < 0 ? 0 : valueAsNumber);
  };
return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Tooltip render={() => `Тултип с задержкой в ${delay}мс`} delayBeforeShow={delay}>
        <IconQuestionCircleLight20 />
      </Tooltip>
      <span>
        Задержка: <Input value={delay.toString()} onValueChange={handleDelayChange} />
      </span>
    </div>
  );
```

### События открытия и закрытия

Колбэки `onOpen` и `onClose` вызываются при открытии и закрытии меню.

```tsx
const [tooltipState, setTooltipState] = React.useState('Закрыт');
return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Tooltip
        onOpen={() => setTooltipState('Открыт')}
        onClose={() => setTooltipState('Закрыт')}
        render={() => `Тултип`}
      >
        <IconQuestionCircleLight20 />
      </Tooltip>
      Состояние тултипа: {tooltipState}
    </div>
  );
```

### События нажатия на крестик и снаружи тултипа

Колбэк `onCloseClick` вызывается при нажатии на крестик, а `onCloseRequest` — ещё и при нажатии снаружи тултипа.

```tsx
return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '8px' }}>
      <SingleToast />
      <Tooltip onCloseClick={() => SingleToast.push('onCloseClick')} render={() => `Тултип`} trigger="click">
        <Button>onCloseClick</Button>
      </Tooltip>
      <Tooltip onCloseRequest={() => SingleToast.push('onCloseRequest')} render={() => `Тултип`} trigger="click">
        <Button>onCloseRequest</Button>
      </Tooltip>
    </div>
  );
```

### Кастомизация: тултип контекстного обучения

[Гайд про контекстное обучение](https://guides.kontur.ru/principles/onbording/contextual-hints/).

```tsx
const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
const tooltipTheme = ThemeFactory.create({
    tooltipBg: '#2291FF',
    tooltipTextColor: '#FFFFFF',
  });
const tooltipContentTheme = ThemeFactory.create({
    btnBacklessTextColor: '#FFFFFF',
    btnBacklessBorderColor: '#FFFFFF8A',
    btnBacklessHoverBg: '#FFFFFF0F',
    btnBacklessActiveBg: '#FFFFFF1A',
  });
const tooltipRef = React.useRef<Tooltip>(null);
const tooltipContent = () => (
    <ThemeContext.Provider value={tooltipContentTheme}>
      <Gapped vertical gap={16} style={{ width: 280 }}>
        <img
          src="https://kontur.ru/Files/userfiles/image/transparent-blank.png"
          alt="transparent-blank"
          width={280}
          height={184}
          style={{ borderRadius: '8px', backgroundColor: '#FFFFFF' }}
        />
        <Gapped vertical gap={6}>
          <b>Заголовок контекстного обучения</b>
          Дополнительный текст в несколько строк, описывающий новую возможность
        </Gapped>
        <Button use="backless" size="medium" onClick={handleHideClick}>
          Понятно
        </Button>
      </Gapped>
    </ThemeContext.Provider>
  );
const handleHideClick = () => {
    if (tooltipRef.current) {
      setIsTooltipVisible(false);
      tooltipRef.current.hide();
    }
  };
const handleShowClick = () => {
    if (tooltipRef.current) {
      setIsTooltipVisible(true);
      tooltipRef.current.show();
    }
  };
return (
    <ThemeContext.Provider value={tooltipTheme}>
      <Gapped vertical gap={16}>
        <Tooltip
          render={tooltipContent}
          pos="right top"
          size="medium"
          trigger="manual"
          ref={tooltipRef}
          closeButton={false}
        >
          <Button icon={<IconDocPlusLight16 />} use="text">
            Новое действие
          </Button>
        </Tooltip>
        <Button onClick={isTooltipVisible ? handleHideClick : handleShowClick} width={130}>
          {isTooltipVisible ? 'Скрыть' : 'Показать'} тултип
        </Button>
      </Gapped>
    </ThemeContext.Provider>
  );
```

## Адаптивность

По умолчанию тултип не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Tooltip/Tooltip.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Tooltip/Tooltip.tsx)
