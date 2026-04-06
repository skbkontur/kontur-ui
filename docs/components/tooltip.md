# Tooltip

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay_tooltip--docs)

## Import

```jsx
import { Tooltip } from '@skbkontur/react-ui';
```

## Props

- **anchorElement?**: Указывает элемент, относительно которого позиционировать тултип.
- **className?**: Задает HTML-атрибут class.
- **closeButton?**: Отображает крестик для закрытия тултипа. По умолчанию крестик виден, если проп *trigger* не равен `hover` или `focus`.
- **render?**: Задает функцию, которая возвращает содержимое тултипа. Если функция вернула `null`, то тултип не показывается.
- **pos?**: Задает приоритетное расположение подсказки относительно текста.
- **size?**: Задает размер тултипа. (default: `'small'`)
- **trigger?**: Задает триггер открытия тултипа.
- **onCloseClick?**: Задает хендлер, который вызывается при клике по крестику.
- **onCloseRequest?**: Задает хендлер, который вызывается при клике по крестику или снаружи тултипа.
- **onClose?**: Задает хендлер, который вызывается при закрытии тултипа.
- **onOpen?**: Задает хендлер, который вызывается при открытии тултипа.
- **allowedPositions?**: Задает список позиций, которые тултип будет занимать. Если положение тултипа в определенной позиции будет выходить за край экрана, то будет выбрана следующая позиция. Обязательно должен включать позицию указанную в `pos`.
- **disableAnimations?**: Отключает анимацию. (default: `false`)
- **useWrapper?**: Явно указывает, что вложенные элементы должны быть обёрнуты в `<span/>`. Используется для корректного позиционирования тултипа при двух и более вложенных элементах. _Примечание_: при **двух и более** вложенных элементах обёртка будет добавлена автоматически.
- **delayBeforeShow?**: Устанавливает задержку в миллисекундах до появления лоадера.

### BasicExample

```tsx
const tooltipContent = () => <div style={{ width: 150 }}>Подсказка, которая поможет понять сценарий</div>;

  return (
    <div>
      <Gapped vertical gap={16}>
        <Gapped gap={32}>
          <div style={{ width: 60 }}>hover</div>
          <Tooltip render={tooltipContent}>
            <QuestionCircleIcon20Light />
          </Tooltip>
          <Tooltip render={tooltipContent} pos="right top">
            <Input placeholder="По наведению" />
          </Tooltip>
        </Gapped>
        <Gapped gap={32}>
          <div style={{ width: 60 }}>click</div>
          <Tooltip render={tooltipContent} trigger="click">
            <Link component="button">
              <QuestionCircleIcon20Light />
            </Link>
          </Tooltip>
          <Tooltip render={tooltipContent} trigger="click" pos="right top">
            <Input placeholder="По нажатию" />
          </Tooltip>
        </Gapped>
        <Gapped gap={32}>
          <div style={{ width: 60 }}>focus</div>
          <Tooltip render={tooltipContent} trigger="focus">
            <Link component="button">
              <QuestionCircleIcon20Light />
            </Link>
          </Tooltip>
          <Tooltip render={tooltipContent} trigger="focus" pos="right top">
            <Input placeholder="По фокусу" />
          </Tooltip>
        </Gapped>
      </Gapped>
    </div>
  );
```

### WithSizeExample

```tsx
const tooltipContent = () => <div style={{ width: 150 }}>Подсказка, которая поможет понять сценарий</div>;

  return (
    <Gapped vertical gap={16}>
      <Gapped gap={32}>
        <div style={{ width: 60 }}>small</div>
        <Tooltip render={tooltipContent} trigger="hover&focus" pos="right top">
          <Input placeholder="Маленький" />
        </Tooltip>
      </Gapped>
      <Gapped gap={32}>
        <div style={{ width: 60 }}>medium</div>
        <Tooltip render={tooltipContent} trigger="hover&focus" pos="right top" size="medium">
          <Input placeholder="Средний" size="medium" />
        </Tooltip>
      </Gapped>
      <Gapped gap={32}>
        <div style={{ width: 60 }}>large</div>
        <Tooltip render={tooltipContent} trigger="hover&focus" pos="right top" size="large">
          <Input placeholder="Большой" size="large" />
        </Tooltip>
      </Gapped>
    </Gapped>
  );
```

### WithButtonInsideExample

```tsx
const tooltipContent = () => (
    <Gapped vertical gap={12} style={{ width: 200 }}>
      Эта функциональность недоступна на вашем тарифе
      <Button use="pay">Купить тариф Премиум</Button>
    </Gapped>
  );

  return (
    <Tooltip render={tooltipContent} pos="right top">
      <Button disabled icon={<SecurityLockClosedIcon20Light />}>
        Что-то классное
      </Button>
    </Tooltip>
  );
```

### PositioningExample

Тултип может располагаться в одной из 12 позиций.

```tsx
const S = 80;
  const tooltipContent = (pos: string) => (
    <div>
      Позиция
      <br />'{pos}'
    </div>
  );

  const absoluteAnchor = (top: number, left: number, pos: string) => (
    <Tooltip render={() => tooltipContent(pos)} pos={pos} trigger="opened" closeButton={false}>
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          top,
          left,
          height: S - 5,
          width: S - 5,
          border: 'solid 1px',
        }}
      />
    </Tooltip>
  );

  const blocks = [
    { top: S, left: S * 2, pos: 'top left' },
    { top: S, left: S * 4, pos: 'top center' },
    { top: S, left: S * 6, pos: 'top right' },
    { top: S * 2, left: S * 7, pos: 'right top' },
    { top: S * 4, left: S * 7, pos: 'right middle' },
    { top: S * 6, left: S * 7, pos: 'right bottom' },
    { top: S * 7, left: S * 6, pos: 'bottom right' },
    { top: S * 7, left: S * 4, pos: 'bottom center' },
    { top: S * 7, left: S * 2, pos: 'bottom left' },
    { top: S * 6, left: S, pos: 'left bottom' },
    { top: S * 4, left: S, pos: 'left middle' },
    { top: S * 2, left: S, pos: 'left top' },
  ];
  return (
    <div
      style={{
        width: S * 9,
        height: S * 9,
        position: 'relative',
      }}
    >
      {blocks.map((block) => absoluteAnchor(block.top, block.left, block.pos))}
    </div>
  );
```

### ContextualHintsExample

Пример реализации тултипа [контекстного обучения](https://guides.kontur.ru/principles/onbording/contextual-hints/).

```tsx
const [tooltipVisible, setTooltipVisible] = React.useState(false);

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
      setTooltipVisible(false);
      tooltipRef.current.hide();
    }
  };
  const handleShowClick = () => {
    if (tooltipRef.current) {
      setTooltipVisible(true);
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
          <Button icon={<DocPlusIcon16Light />} use="text">
            Добавить запись
          </Button>
        </Tooltip>
        <Button onClick={tooltipVisible ? handleHideClick : handleShowClick} width={130}>
          {tooltipVisible ? 'Скрыть' : 'Показать'} тултип
        </Button>
      </Gapped>
    </ThemeContext.Provider>
  );
```

### CustomDelayExample

Тултипы, которые открываются по наведению, появляются и скрываются с задержкой в 100 миллисекунд. Задержку перед появлением можно переопределить с помощью пропа `delayBeforeShow`.

```tsx
const [delay, setDelay] = React.useState(100);

  const tooltipContent = () => `Я показался с задержкой в ${delay}мс`;
  const handleDelayChange = (value: string) => {
    const valueAsNumber = Number(value);
    setDelay(isNaN(valueAsNumber) || valueAsNumber < 0 ? 0 : valueAsNumber);
  };

  return (
    <Gapped vertical>
      <Gapped>
        Задержка: <Input value={delay.toString()} onValueChange={handleDelayChange} />
      </Gapped>
      <Tooltip render={tooltipContent} delayBeforeShow={delay} pos="right top">
        <QuestionCircleIcon20Light />
      </Tooltip>
    </Gapped>
  );
```