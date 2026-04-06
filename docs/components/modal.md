# Modal

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay_modal_modal--docs)

## Props

- **disableClose?**: Отключает событие `onClose` и блокирует кнопку закрытия модального окна.
- **alignTop?**: Выравнивает модальное окно по верху страницы.
- **ignoreBackgroundClick?**: Оставляет модальное окно открытым, когда пользователь кликнул на фон вне модального окна.
- **noClose?**: Скрывает крестик для закрытия модального окна.
- **width?**: Ширина модального окна.
- **onClose?**: Событие закрытия модального окна. Вызывается при клике на фон или крестик, и при нажатии Esc.
- **disableFocusLock?**: Выключает ограничение на фокус. По умолчанию модальное окно не позволяет установить фокус за переделами своего содержимого.
- **theme?**: Объект с переменными темы. Он будет объединён с темой из `<ThemeContext>`. Общие переменные темы и переменные для модального окна (с префиксом modal) смотрите на странице [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-themeplayground--docs).
- **mobileAppearance?**: Задаёт внешний вид модального окна в мобильном режиме. Работает с версией темы >= 5_2. - `"auto"` — если футера нет, модальное окно распологается в центре экрана, если есть — модальное окно растягивается на весь экран с отступами и закругленными краями. - `"top"` — модальное окно располагается сверху независимо от наличия футера. - `"center"` — модальное окно располагается в центре независимо от наличия футера. - `"bottom"` — модальное окно располагается снизу независимо от наличия футера. - `"fullscreen-spacing"` — модальное окно растягивается на весь экран с отступами и закругленными краями. - `"fullscreen"` — модальное окно растягивается на весь экран. (default: `auto`)

```jsx
import { Modal } from '@skbkontur/react-ui';
```

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

## Адаптивность

Мобильный режим модального окна активируется при ширине вьюпорта `(max-width: 576px)` и наличии сенсорного экрана `(pointer: coarse)`.

С помощью пропа `mobileAppearance` можно определять внешний вид модального окна в мобильном режиме. Работает с версией темы >= 5_2.

Доступные значения:

- `"auto"` — если футера нет, модальное окно распологается в центре экрана, если есть — модальное окно растягивается на весь экран с отступами и закругленными краями.
- `"top"` — модальное окно располагается сверху независимо от наличия футера.
- `"center"` — модальное окно располагается в центре независимо от наличия футера.
- `"bottom"` — модальное окно располагается снизу независимо от наличия футера.
- `"fullscreen-spacing"` — модальное окно растягивается на весь экран с отступами и закругленными краями.
- `"fullscreen"` — модальное окно растягивается на весь экран.

Для просмотра примера на десктопе активируйте мобильный режим в браузере через инструменты разработчика.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs).

### ExampleBasic

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleWidth

Проп `width` задаёт ширину модального окна.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal width={'400px'} onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExamplePanel

Проп `panel` для [Modal.Footer](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-modal-modalfooter--docs) визуально отделяет футер от остальной части модального окна с помощью разделителя.

```tsx
const [opened, setOpened] = React.useState(false);
  const [panel, setPanel] = React.useState(true);

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>

          <div>
            <Toggle checked={panel} onValueChange={setPanel} /> "panel" {panel ? 'enabled' : 'disabled'}
          </div>
        </Modal.Body>
        <Modal.Footer panel={panel}>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleStickyHeader

Проп `sticky` для [Modal.Header](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-modal-modalheader--docs) закрепляет заголовок вверху модального окна.

```tsx
const [opened, setOpened] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header sticky={sticky}>Заголовок</Modal.Header>
        <Modal.Body>
          <Gapped vertical>
            <div>
              <Toggle checked={sticky} onValueChange={setSticky} /> "sticky" {sticky ? 'true' : 'false'}
            </div>
            <div
              style={{
                width: 300,
                height: 1700,
                backgroundColor: '#eee',
                background: 'repeating-linear-gradient(-45deg, #ccc, #ccc 25px, #eee 25px, #eee 225px)',
              }}
            />
          </Gapped>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleCutHeader

Проп `cutTitleOnStuck` для [Modal.Header](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-modal-modalheader--docs) обрезает часть длинного заголовка, если включен проп закрепления — `sticky`

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close} width={'400px'}>
        <Modal.Header sticky cutTitleOnStuck>
          Очень длинный заголовок в несколько строк
        </Modal.Header>
        <Modal.Body>
          <Gapped vertical>
            <div
              style={{
                width: 300,
                height: 1700,
                backgroundColor: '#eee',
                background: 'repeating-linear-gradient(-45deg, #ccc, #ccc 25px, #eee 25px, #eee 225px)',
              }}
            />
          </Gapped>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleStickyFooter

Проп `sticky` для [Modal.Footer](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-modal-modalfooter--docs) закрепляет футер снизу модального окна. На десктопе — `true`, на мобильных — `false`.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <Gapped vertical>
            <div
              style={{
                width: 300,
                height: 1700,
                backgroundColor: '#eee',
                background: 'repeating-linear-gradient(-45deg, #ccc, #ccc 25px, #eee 25px, #eee 225px)',
              }}
            />
          </Gapped>
        </Modal.Body>
        <Modal.Footer sticky>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleGap

Проп `gap` задаёт расстояние между элементами футера в пикселях.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer gap={15}>
          <Button use="primary" onClick={close}>
            Отправить
          </Button>
          <Button onClick={close}>Отменить</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleAlignTop

Проп `alignTop` перемещает модальное окно в верхнюю часть страницы.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal alignTop onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleOnClose

Cобытие `onClose` задаёт функцию, которая вызывается, когда пользователь запросил закрытие окна — нажал на фон, Escape или крестик.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleDisableClose

Отключает событие `onClose` и блокирует кнопку закрытия модального окна.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close} disableClose>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleIgnoreBackgroundClick

Проп `ignoreBackgroundClick` оставляет модальное окно открытым, когда пользователь кликнул на фон.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close} ignoreBackgroundClick>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```

### ExampleNoClose

Проп `noClose` скрывает крестик закрытия.

```tsx
const [opened, setOpened] = React.useState(false);

  function renderModal() {
    return (
      <Modal onClose={close} noClose>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <p>Контент-зона модального окна</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
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
      {opened && renderModal()}
      <Button onClick={open}>Открыть модальное окно</Button>
    </div>
  );
```