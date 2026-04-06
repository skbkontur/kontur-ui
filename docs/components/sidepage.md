# SidePage

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay_sidepage_sidepage--docs)

## Import

```jsx
import { SidePage } from '@skbkontur/react-ui';
```

## Props

- **blockBackground?**: Добавляет блокирующий фон, когда сайдпейдж открыт.
- **disableClose?**: Отключает событие onClose, также дизейблит кнопку закрытия сайдпейджа.
- **ignoreBackgroundClick?**: Оставляет окно открытым при клике на фон.
- **ignoreOutsideClick?**: Оставляет окно открытым при клике на фон.
- **width?**: Задает ширину сайдпейджа.
- **mobileWidth?**: Задает ширину сайдпейджаю на мобилке. По умолчанию ширина во весь экран.
- **onClose?**: Задает функцию, которая вызывается при запросе закрытия сайдпейджа пользователем (нажал на фон, на Escape или на крестик).
- **onOpened?**: Задает функцию, которая вызывается при завершении анимации открытия сайдпейджа.
- **fromLeft?**: Отображает сайдпэйдж слева.
- **disableAnimations?**: Отключает анимацию.
- **disableFocusLock?**: Отключает фокус-лок внутри сайдпейджа. Работает только при заблокированном фоне: `blockBackground = true`.
- **offset?**: Задает отступ от края экрана.
- **onOutsideClick?**: Задаёт функцию, которая вызывается при клике на фон.

### Example1

```tsx
const [opened, setOpened] = React.useState(false);

  function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground>
        <SidePage.Header>Title</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Use rxjs operators with react hooks</p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer panel>
          <Button onClick={close}>Close</Button>
        </SidePage.Footer>
      </SidePage>
    );
  }

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <div>
      {opened && renderSidePage()}
      <Button onClick={open}>Open</Button>
    </div>
  );
```

### Example2

Проп `cutTitleOnStuck` позволяет регулировать - нужно ли обрезать длинное название в шапке `<SidePage />` при прокрутке содержимого.

```tsx
const [opened, setOpened] = React.useState(false);
  const [cutTitleOnStuck, setСutTitleOnStuck] = React.useState(false);

  function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground>
        <SidePage.Header cutTitleOnStuck={cutTitleOnStuck}>
          Very very very very very very very very very very very very very very very very very very very very long title
        </SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 1600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>SidePage Body Content</p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer panel>
          <Button onClick={close}>Close</Button>
        </SidePage.Footer>
      </SidePage>
    );
  }

  function open(cutTitleOnStuck: boolean) {
    setOpened(true);
    setСutTitleOnStuck(cutTitleOnStuck);
  }

  function close() {
    setOpened(false);
  }

  return (
    <div>
      {opened && renderSidePage()}
      <Gapped>
        <Button onClick={() => open(true)}>With Title Cutting</Button>
        <Button onClick={() => open(false)}>Without Title Cutting</Button>
      </Gapped>
    </div>
  );
```

### Example3

При помощи пропа `sticky` можно регулировать - будет ли залипать `<SidePage.Header />` при прокрутке содержимого.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground>
        <SidePage.Header sticky={false}>Title</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 1600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>SidePage Body Content</p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer panel>
          <Button onClick={close}>Close</Button>
        </SidePage.Footer>
      </SidePage>
    );
  }

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <div>
      {opened && renderSidePage()}
      <Button onClick={open}>Open</Button>
    </div>
  );
```

### Example4

При помощи пропа `onOutsideClick` можно управлять поведением при клике по фону. Например, не закрывать при клике на определённый элемент.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderSidePage() {
    return (
      <SidePage onClose={close} onOutsideClick={handleIgnoredElementClick}>
        <SidePage.Header>Голова</SidePage.Header>
        <SidePage.Body>
          <div style={{ padding: 20 }}>Туловище</div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Close</Button>
        </SidePage.Footer>
      </SidePage>
    );
  }

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  function handleIgnoredElementClick(e: Event) {
    if (e.target instanceof HTMLElement) {
      const ignoredElement = e.target.closest('#bg-ignore');
      if (ignoredElement) {
        e.preventDefault();
      }
    }
  }

  return (
    <div>
      {opened && renderSidePage()}
      <Button type="submit" id="bg-ignore" onClick={open}>
        {opened ? `Will not close` : 'Open'}
      </Button>
    </div>
  );
```