# SidePage

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-sidepage--docs)

Сайдпейдж — это модальное окно, которое открывается поверх основной страницы и занимает всю высоту окна браузера.

Составной компонент, включает в себя:
- «шапку» [SidePage.Header](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-sidepage-sidepageheader--docs), состоящую из заголовка и крестика закрытия окна;
- контент-зону [SidePage.Body](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-sidepage-sidepagebody--docs) и контейнер с отступами [SidePage.Container](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-sidepage-sidepagecontainer--docs);
- футер [SidePage.Footer](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay-sidepage-sidepagefooter--docs).

```jsx
import { SidePage } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `blockBackground`

type: `boolean` · optional

Блокирует фон, когда сайдпейдж открыт: основная страница затемняется, действия на ней становятся недоступны.

### `disableClose`

type: `boolean` · optional

Отключает событие `onClose` и блокирует кнопку закрытия сайдпейджа.

### `ignoreBackgroundClick`

type: `boolean` · optional

Оставляет сайдпейдж открытым, когда пользователь нажал на фон.
@deprecated Используйте `ignoreOutsideClick` вместо `ignoreBackgroundClick`

### `ignoreOutsideClick`

type: `boolean` · optional

Оставляет сайдпейдж открытым, когда пользователь нажал на фон.

### `width`

type: `string | number` · optional

Ширина сайдпейджа.

### `mobileWidth`

type: `string | number` · optional

Ширина сайдпейджа в мобильном режиме. По умолчанию ширина во весь экран.

### `onClose`

type: `() => void` · optional

Событие закрытия сайдпейджа пользователем: нажатие на фон, Escape или крестик.

### `onOpened`

type: `() => void` · optional

Событие завершения анимации открытия сайдпейджа.

### `fromLeft`

type: `boolean` · optional

Отображает сайдпейдж слева.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключает анимацию открытия сайдпейджа.

### `disableFocusLock`

type: `boolean` · optional

Выключает ограничение на фокус вне сайдпейджа.
Работает только при заблокированном фоне `blockBackground = true`.

### `offset`

type: `string | number` · optional · default: `0`

Отступ от края экрана до сайдпейджа.

### `onOutsideClick`

type: `(e: Event) => void` · optional

Событие нажатия на фон.

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

Используйте cайдпейдж, когда нужно сохранить контекст и показать большое количество данных.

**Когда не использовать**

Не используйте сайдпейдж для коротких сообщений и подтверждений, для этого лучше подходит [модальное окно](https://tech.skbkontur.ru/kontur-ui/docs/components/modal.md).
Также сайдпейдж не может заменить полноценную страницу, потому что ограничен по ширине.

**Связанные компоненты**

Составной компонент, включает в себя подкомпоненты структуры:

```jsx
<SidePage>
  <SidePage.Header> // шапка сайдпейджа, состоит из заголовка и крестика закрытия
  <SidePage.Body> // контент-зона
    <SidePage.Container> // контейнер с отступами для содержимого сайдпейджа
  <SidePage.Footer> // футер
```

## Примеры

### ExampleBasic

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-блок в контейнере с отступами </p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
      <Button onClick={open}>Открыть сайдпейдж</Button>
    </div>
  );
```

### Ширина

Проп `width` задаёт ширину сайдпейджа.

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage width={'600px'} onClose={close} blockBackground>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-зона </p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
      <Button onClick={open}>Открыть сайдпейдж</Button>
    </div>
  );
```

### Расположение слева

Проп `fromLeft` отображает сайдпейдж слева.

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage fromLeft onClose={close} blockBackground>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-зона </p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
      <Button onClick={open}>Открыть сайдпейдж</Button>
    </div>
  );
```

### Блокировка фона

Проп `blockBackground` блокирует фон, когда сайдпейдж открыт: основная страница затемняется, действия на ней становятся недоступны.

```tsx
const [opened, setOpened] = React.useState(false);
const [blockBackground, setBlockBackground] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground={blockBackground}>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 1600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-зона</p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
        </SidePage.Footer>
      </SidePage>
    );
  }
function open(blockBackground: boolean) {
    setOpened(true);
    setBlockBackground(blockBackground);
  }
function close() {
    setOpened(false);
  }
return (
    <div>
      {opened && renderSidePage()}
      <Gapped>
        <Button onClick={() => open(true)}>С блокировкой фона</Button>
        <Button onClick={() => open(false)}>Без блокировки фона</Button>
      </Gapped>
    </div>
  );
```

### Отключение закрытия сайдпейджа при нажатии на фон

Проп `ignoreOutsideClick` игнорирует нажатие на фон, сайдпейдж остаётся открытым.

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground ignoreOutsideClick>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-зона </p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
      <Button onClick={open}>Открыть сайдпейдж</Button>
    </div>
  );
```

### Блокировка крестика и отключение события onClose

Проп `disableClose` отключает событие `onClose` и блокирует кнопку закрытия сайдпейджа.

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground disableClose>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-зона </p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
      <Button onClick={open}>Открыть сайдпейдж</Button>
    </div>
  );
```

### Отключение анимации

Проп `disableAnimations` отключает анимацию открытия сайдпейджа.

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage onClose={close} blockBackground disableAnimations>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div
            style={{
              background: `#d6d6d6`,
              height: 600,
              padding: '20px 0',
            }}
          >
            <SidePage.Container>
              <p>Контент-зона </p>
            </SidePage.Container>
          </div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
      <Button onClick={open}>Открыть сайдпейдж</Button>
    </div>
  );
```

### Поведение при нажатии по фону

Проп `onOutsideClick` управляет поведением при нажатии по фону.
Например, можно перезадать поведение и не закрывать сайдпейдж при нажатии на определённый элемент на странице.

```tsx
const [opened, setOpened] = React.useState(false);
function renderSidePage() {
    return (
      <SidePage onClose={close} onOutsideClick={handleIgnoredElementClick}>
        <SidePage.Header>Заголовок</SidePage.Header>
        <SidePage.Body>
          <div style={{ padding: 20 }}>Контент-зона</div>
        </SidePage.Body>
        <SidePage.Footer>
          <Button onClick={close}>Закрыть</Button>
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
        {opened ? `Нажатие на эту кнопку игнорируется` : 'Открыть сайдпейдж'}
      </Button>
    </div>
  );
```

## SidePage.Header

<details>
  <summary>Пропсы для SidePage.Header</summary>
</details>

### Примеры

#### Закрепление заголовка

Проп `sticky` закрепляет заголовок при прокрутке содержимого. По умолчанию закрепление включено.

#### Транкейт заголовка при закреплении заголовка

Проп `cutTitleOnStuck` обрезает часть длинного заголовка в шапке при прокрутке содержимого, если включен проп закрепления заголовка — `sticky`.

## SidePage.Container

<details>
  <summary>Пропсы для SidePage.Container </summary>
</details>

## SidePage.Body

<details>
  <summary>Пропсы для SidePage.Body </summary>
</details>

## SidePage.Footer

<details>
  <summary>Пропсы для SidePage.Footer </summary>
</details>

### Примеры

#### Разделитель перед футером

Проп `panel` визуально отделяет футер от остальной части сайдпейджа с помощью разделителя.

#### Закрепление футера

Проп `sticky` закрепляет футер при прокрутке содержимого. По умолчанию закрепление включено.

## Доступность

Компонент поддерживает стандартные aria-атрибуты, если вам необходимо переопределить его поведение.

## Адаптивность

Мобильный режим сайдпейджа активируется при ширине вьюпорта < `768px`.

С помощью пропа `mobileWidth` можно управлять шириной сайдпейджа в мобильном режиме. По умолчанию ширина во весь экран.

Вы можете передавать свои медиазапросы, больше о настройке адаптивности читайте в статье [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs).

## Source

[`components/SidePage/SidePage.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/SidePage/SidePage.tsx)
