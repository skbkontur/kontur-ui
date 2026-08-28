# GlobalLoader

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-globalloader--docs)

Универсальный индикатор обмена данными с сервером.
Он появляется у верхней границы экрана и выглядит как тоненькая полоска, окрашенная в фирменный цвет продукта.

Глобальный лоадер может быть только один в приложении. Поэтому каждый новый экземпляр компонента заменяет предыдущий экземпляр и начинает перехватывать статические методы.

Предполагается монтирование компонента в единственном месте. И управление им через статические методы, либо через пропсы.

```jsx
import { GlobalLoader } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `delayBeforeShow`

type: `number` · optional · default: `1000`

Задержка до появления лоадера в миллисекундах.

### `delayBeforeHide`

type: `number` · optional · default: `1000`

Задержка до исчезновения лоадера в миллисекундах.

### `expectedResponseTime`

type: `number` · optional · default: `1000`

Ожидаемое время(ms) ответа сервера.

### `rejected`

type: `boolean` · optional · default: `false`

Показывать лоадер в виде бегающей полоски.

### `active`

type: `boolean` · optional · default: `false`

Показывать лоадер.

### `disableAnimations`

type: `boolean` · optional · default: `isNodeTestEnv || isReactUITestEnv()`

Отключить анимацию.

### `onStart`

type: `() => void` · optional

Событие после появления лоадера.

### `onDone`

type: `() => void` · optional

Событие после исчезновения лоадера.

### `onReject`

type: `() => void` · optional

Событие после вызова reject.

### `onAccept`

type: `() => void` · optional

Событие после вызова accept.

## Использование

Используйте глобальный лоадер для индикации длительных операций обмена данными с сервером: загрузка данных с сервера, сохранение формы, отправка запросов и т.д.

**Когда не использовать**

Не используйте глобальный лоадер для:

- для локальных операций, которые выполняются мгновенно;
- для индикации загрузки отдельных элементов интерфейса, в этом случае используйте ['Loader'](https://tech.skbkontur.ru/kontur-ui/docs/components/loader.md);
- если в приложении уже есть другой глобальный индикатор загрузки.

## Примеры

### Базовый пример

```tsx
return (
    <Gapped>
      <Button onClick={() => GlobalLoader.start()} use="primary">
        Запустить лоадер
      </Button>
      <Button onClick={() => GlobalLoader.done()}>Завершить</Button>
    </Gapped>
  );
```

### Cтатические методы

У компонента есть набор статических методов: `GlobalLoader.start()`, `GlobalLoader.done()`, `GlobalLoader.reject()`, `GlobalLoader.accept()`.
Запустить лоадер `"start"` — активирует анимацию загрузки.
Завершить `"done"` — переведёт глобальный лоадер в успешное завершённое состояние.
Эмулировать проблему `"reject"` — переведёт глобальный лоадер в состояние с ошибкой.
Вернуться в состояние загрузки `"accept"` — запустит глобальный лоадер с момента остановки при ошибке.

```tsx
return (
    <Gapped>
      <Button onClick={() => GlobalLoader.start()} use="primary">
        Запустить лоадер
      </Button>
      <Button onClick={() => GlobalLoader.done()}>Завершить</Button>
      <Button onClick={() => GlobalLoader.reject()}>Эмулировать проблему</Button>
      <Button onClick={() => GlobalLoader.accept()}>Вернуться в состояние загрузки</Button>
    </Gapped>
  );
```

### Монтирование

Вместо статических методов можно воспользоваться управлением через пропсы.

```tsx
const [manually, setManually] = React.useState<boolean>(false);
const [active, setActive] = React.useState<boolean>(false);
const [error, setError] = React.useState<boolean>(false);
const reset = () => {
    if (manually) {
      setManually(false);
      setError(false);
      setActive(false);
    } else {
      setManually(true);
    }
  };
return (
    <Gapped vertical>
      <Toggle checked={manually} onValueChange={reset}>
        Активировать управление пропсами
      </Toggle>
      <Toggle checked={active} onValueChange={setActive} disabled={!manually}>
        Запустить лоадер
      </Toggle>
      <Toggle checked={error} onValueChange={setError} disabled={!manually}>
        Эмулировать ошибку
      </Toggle>

      {manually && (
        <GlobalLoader
          active={active}
          rejected={error}
          onStart={() => console.log('start')}
          onDone={() => console.log('done')}
          onReject={() => console.log('reject')}
          onAccept={() => console.log('accept')}
        />
      )}
    </Gapped>
  );
```

### Статические методы в модальном окне

Глобальный лоадер можно запустить в модальном окне. Тогда он перекроет вуаль.

```tsx
const [opened, setOpened] = React.useState<boolean>(false);
function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>
          <Gapped>
            <Button onClick={() => GlobalLoader.start()} use="primary">
              Запустить лоадер
            </Button>
            <Button onClick={() => GlobalLoader.done()}>Завершить</Button>
          </Gapped>
        </Modal.Body>
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

### Кастомизация: изменение цвета индикатора загрузки

Через переменные темы можно изменять параметры глобального лоадера. Например, цвет индикатора загрузки.

```tsx
const [enableTheme, setEnableTheme] = React.useState<boolean>(false);
const [active, setActive] = React.useState<boolean>(false);
const globalLoaderCustomTheme = ThemeFactory.create(
    enableTheme
      ? {
          globalLoaderColor: 'cyan',
        }
      : {},
  );
return (
    <Gapped vertical gap={16}>
      <Toggle checked={enableTheme} onValueChange={setEnableTheme}>
        Изменить цвет индикатора загрузки на 'cyan'
      </Toggle>
      <Gapped>
        <Button onClick={() => setActive(true)} use="primary">
          Запустить лоадер
        </Button>
        <Button onClick={() => setActive(false)}>Завершить</Button>
      </Gapped>
      <ThemeContext.Provider value={globalLoaderCustomTheme}>
        <GlobalLoader active={active} />
      </ThemeContext.Provider>
    </Gapped>
  );
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

Глобальный лоадер визуально отображает состояние загрузки, но для пользователей скринридеров рекомендуется дополнительно информировать о состоянии операции через регионы `aria-live` или другие доступные механизмы.

**Рекомендации**

- Используйте `aria-live="polite"` или `aria-live="assertive"` для объявления изменений состояния загрузки.
- Предоставляйте текстовые альтернативы для индикации состояния операции.
- Убедитесь, что пользователи могут понять, что происходит загрузка, даже без визуального индикатора.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию глобальный лоадер не меняет свой вид и поведение на мобильных устройствах. Лоадер отображается у верхней границы экрана независимо от размера вьюпорта.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/GlobalLoader/GlobalLoader.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/GlobalLoader/GlobalLoader.tsx)
