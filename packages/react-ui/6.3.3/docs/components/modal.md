# Modal

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_overlay-modal--docs)

Модальное окно — это эмуляция диалогового окна браузера, оно появляется поверх страницы в ответ на действия пользователя и блокирует доступ к основному содержимому страницы.

```jsx
import { Modal } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `disableClose`

type: `boolean` · optional

Отключает событие `onClose` и блокирует кнопку закрытия модального окна.

### `alignTop`

type: `boolean` · optional

Выравнивает модальное окно по верху страницы.

### `ignoreBackgroundClick`

type: `boolean` · optional

Оставляет модальное окно открытым, когда пользователь кликнул на фон вне модального окна.

### `noClose`

type: `boolean` · optional

Скрывает крестик для закрытия модального окна.

### `width`

type: `string | number` · optional

Ширина модального окна.

### `onClose`

type: `() => void` · optional

Событие закрытия модального окна. Вызывается при клике на фон или крестик, и при нажатии Esc.

### `disableFocusLock`

type: `boolean` · optional · default: `false`

Выключает ограничение на фокус. По умолчанию модальное окно не позволяет установить фокус за переделами своего содержимого.

### `theme`

type: `Partial<typeof BasicThemeClass>` · optional

Объект с переменными темы. Он будет объединён с темой из `<ThemeContext>`.

Общие переменные темы и переменные для модального окна (с префиксом modal) смотрите на странице [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-themeplayground--docs).

### `mobileAppearance`

type: `"top" | "bottom" | "auto" | "center" | "fullscreen-spacing" | "fullscreen"` · optional · default: `auto`

Задаёт внешний вид модального окна в мобильном режиме. Работает с версией темы >= 5_2.
- `"auto"` — если футера нет, модальное окно распологается в центре экрана, если есть — модальное окно растягивается на весь экран с отступами и закругленными краями.
- `"top"` — модальное окно располагается сверху независимо от наличия футера.
- `"center"` — модальное окно располагается в центре независимо от наличия футера.
- `"bottom"` — модальное окно располагается снизу независимо от наличия футера.
- `"fullscreen-spacing"` — модальное окно растягивается на весь экран с отступами и закругленными краями.
- `"fullscreen"` — модальное окно растягивается на весь экран.

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

Модальное окно — составной компонент, включает в себя подкомпоненты структуры:

```js
<Modal>
  <Modal.Header> // «шапка», состоит из заголовка и крестика закрытия окна
  <Modal.Body> // контент-зона
  <Modal.Footer> // футер
```

## Примеры

### Ширина

Проп `width` задаёт ширину модального окна.

### Закрытие модального окна

Проп `alignTop` перемещает модальное окно в верхнюю часть страницы.

### Расположение в верхней части страницы

Cобытие `onClose` задаёт функцию, которая вызывается, когда пользователь запросил закрытие окна — нажал на фон, Escape или крестик.

### Блокировка крестика и отключение события onClose

Проп `disableClose` отключает событие `onClose` и блокирует кнопку закрытия модального окна.

### Блокировка закрытия при клике вне модального окна

Проп `ignoreBackgroundClick` оставляет модальное окно открытым, когда пользователь кликнул на фон.

### Скрытие крестика закрытия

Проп `noClose` скрывает крестик закрытия.

## Modal.Header

<details>
  <summary>Пропсы для Modal.Header </summary>
</details>

### Примеры

#### Закрепление заголовка

Проп `sticky` закрепляет заголовок вверху модального окна.

#### Транкейт заголовка при закреплении через sticky

Проп `cutTitleOnStuck` обрезает часть длинного заголовка, если включен проп закрепления — `sticky`

## Modal.Body

<details>
  <summary>Пропсы для Modal.Body </summary>
</details>

## Modal.Footer

<details>
  <summary>Пропсы для Modal.Footer </summary>
</details>

### Примеры

#### Закрепление футера

Проп `sticky` для закрепляет футер снизу модального окна. На десктопе — `true`, на мобильных — `false`.

#### Разделитель перед футером

Проп `panel` визуально отделяет футер от остальной части модального окна с помощью разделителя.

#### Расстояние между элементами в футере

Проп `gap` задаёт расстояние между элементами футера в пикселях.

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

## Адаптивность

Мобильный режим модального окна активируется при ширине вьюпорта < `768px`.

С помощью пропа `mobileAppearance` можно определять внешний вид модального окна в мобильном режиме.

Доступные значения:

- `"auto"` — если футера нет, модальное окно распологается в центре экрана, если есть — модальное окно растягивается на весь экран с отступами и закругленными краями.
- `"top"` — модальное окно располагается сверху независимо от наличия футера.
- `"center"` — модальное окно располагается в центре независимо от наличия футера.
- `"bottom"` — модальное окно располагается снизу независимо от наличия футера.
- `"fullscreen-spacing"` — модальное окно растягивается на весь экран с отступами и закругленными краями.
- `"fullscreen"` — модальное окно растягивается на весь экран.

Для просмотра примера на десктопе активируйте мобильный режим в браузере через инструменты разработчика.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs).

## Examples

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

### Ширина

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

### Расположение в верхней части страницы

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

### Закрытие модального окна

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

### Блокировка крестика и отключение события onClose

Проп `disableClose` отключает событие `onClose` и блокирует кнопку закрытия модального окна.

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

### Блокировка закрытия при клике вне модального окна

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

### Скрытие крестика закрытия

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

## Source

[`components/Modal/Modal.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Modal/Modal.tsx)
