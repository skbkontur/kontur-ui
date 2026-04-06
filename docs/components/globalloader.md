# GlobalLoader

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data_globalloader--docs)

## Props

- **delayBeforeShow?**: Задержка до появления лоадера в миллисекундах.
- **delayBeforeHide?**: Задержка до исчезновения лоадера в миллисекундах.
- **expectedResponseTime?**: Ожидаемое время(ms) ответа сервера.
- **rejected?**: Показывать лоадер в виде бегающей полоски.
- **active?**: Показывать лоадер.
- **disableAnimations?**: Отключить анимацию.

```jsx
import { GlobalLoader } from '@skbkontur/react-ui';
```

## Использование

Используйте глобальный лоадер для индикации длительных операций обмена данными с сервером, таких как загрузка данных, сохранение формы, отправка запросов и т.д.

**Когда использовать:**

- Для индикации загрузки данных с сервера.
- Для отображения прогресса выполнения длительных операций.
- Для информирования пользователя о состоянии соединения с сервером.

**Когда не использовать:**

- Для локальных операций, которые выполняются мгновенно.
- Для индикации загрузки отдельных элементов интерфейса. В этом случае используйте ['Loader'](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-loader--docs).
- Если в приложении уже есть другой глобальный индикатор загрузки.

### {GlobalLoaderStories.ExampleStaticMethods.storyName}

У компонента `GlobalLoader` есть набор статических методов: `GlobalLoader.start()`, `GlobalLoader.done()`, `GlobalLoader.reject()`, `GlobalLoader.accept()`.

<ul>
  <li>
    Запустить лоадер (<code>"start"</code>) — активирует анимацию загрузки
  </li>
  <li>
    Завершить (<code>"done"</code>) — переведёт глобальный лоадер в успешное завершённое состояние
  </li>
  <li>
    Эмулировать проблему (<code>"reject"</code>) — переведёт глобальный лоадер в состояние с ошибкой
  </li>
  <li>
    Вернуться в состояние загрузки (<code>"accept"</code>) — запустит глобальный лоадер с момента остановки при ошибке
  </li>
</ul>

### {GlobalLoaderStories.ExampleMount.storyName}

Вместо статических методов можно воспользоваться управлением через пропсы.

### {GlobalLoaderStories.ExampleInModal.storyName}

Глобальный лоадер можно запустить в модальном окне. Тогда он перекроет вуаль.

### {GlobalLoaderStories.ExampleCustomizeColor.storyName}

Через переменные темы можно изменять параметры глобального лоадера. Например, цвет индикатора загрузки.

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

Глобальный лоадер визуально отображает состояние загрузки, но для пользователей скринридеров рекомендуется дополнительно информировать о состоянии операции через регионы `aria-live` или другие доступные механизмы.

**Рекомендации:**

- Используйте `aria-live="polite"` или `aria-live="assertive"` для объявления изменений состояния загрузки.
- Предоставляйте текстовые альтернативы для индикации состояния операции.
- Убедитесь, что пользователи могут понять, что происходит загрузка, даже без визуального индикатора.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию глобальный лоадер не меняет свой вид и поведение на мобильных устройствах. Лоадер отображается у верхней границы экрана независимо от размера вьюпорта.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

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

### ExampleStaticMethods

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

### ExampleMount

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

### ExampleInModal

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

### ExampleCustomizeColor

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