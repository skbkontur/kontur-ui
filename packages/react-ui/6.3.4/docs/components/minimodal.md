# MiniModal

> Package: `@skbkontur/react-ui` · Version: `6.3.4` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_overlay-minimodal--docs)

Модальное диалоговое окно, которое предполагает обязательный отклик пользователя по одному из доступных действий. Обёртка над Modal.

```jsx
import { MiniModal } from '@skbkontur/react-ui';
```

## Все пропсы

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

type: `boolean` · optional

Выключает ограничение на фокус. По умолчанию модальное окно не позволяет установить фокус за переделами своего содержимого.

### `theme`

type: `Partial<typeof BasicThemeClass>` · optional

Объект с переменными темы. Он будет объединён с темой из `<ThemeContext>`.

Общие переменные темы и переменные для модального окна (с префиксом modal) смотрите на странице [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-themeplayground--docs).

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

Мини-модалка подходит для короткого диалога, где пользователь должен осознанно выбрать действие:

- подтвердить или отменить операцию;
- прочитать важное уведомление и нажать одну кнопку;
- выбрать один из нескольких вариантов в футере.

**Связанные компоненты**

Составной компонент, включает в себя подкомпоненты структуры:

```jsx
<MiniModal>
  <MiniModal.Header> // заголовок и иконка
  <MiniModal.Body> // текстовый блок пояснения
  <MiniModal.Footer> // футер
    <MiniModal.Indent> // вертикальный отступ между группами элементов в зоне футера
```

**Когда не использовать**

В следующих случаях лучше использовать обычное модальное окно [Modal](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/modal.md):

- длинные формы;
- много прокручиваемого контента;
- проходной сценарий не требующий явного действия.

**Закрытие и `onClose`**

У мини-модалки нет крестика. И eсли `onClose` не передан, нажатие Esc и клик по фону не вызовут колбэк — пользователь не выйдет из сценария без явной кнопки. Если `onClose` передан и не отключено поведение фона через `ignoreBackgroundClick` и т.п., закрытие снова становится возможным с клавиатуры и по фону — как в обычном модальном окне.

**Тема**

Проп `theme` на корне объединяется с темой из контекста через внутреннюю настройку мини-модалки и позволяет точечно подстроить токены.

## Примеры

### Уведомление о платеже

```tsx
const PayNotifice = () => {
    const [isOpened, setIsOpened] = React.useState(false);

    const open = () => setIsOpened(true);
    const close = () => setIsOpened(false);

    return (
      <>
        {isOpened && (
          <MiniModal>
            <MiniModal.Header>Простое уведомление</MiniModal.Header>
            <MiniModal.Body>
              Это простое, но достаточно важное уведомление, чтобы его показать в мини-модалке
            </MiniModal.Body>
            <MiniModal.Footer>
              <Button size="medium" use="accent" onClick={close}>
                Понятно
              </Button>
            </MiniModal.Footer>
          </MiniModal>
        )}
        <Button use="pay" onClick={open} icon={<IconMoneyTypeCoinsRegular16 />}>
          Мини-модалка
        </Button>
      </>
    );
  };
return <PayNotifice />;
```

### Подтверждение удаления

Иногда от пользователя требуется выбрать одно из доступных действий.
Например, подтвердить важное действие или отклонить его:

```tsx
const ConfirmDelete = ({ name, handleDelete }: { name: string; handleDelete: () => void }) => {
    const theme = React.useContext(ThemeContext);

    const [isOpened, setIsOpened] = React.useState(false);

    const open = () => setIsOpened(true);
    const close = () => setIsOpened(false);

    const mainAction = () => {
      handleDelete();
      close();
    };

    return (
      <>
        {isOpened && (
          <MiniModal>
            <MiniModal.Header icon={<IconTrashCanRegular16 size={64} color={theme.btnDangerBg} />}>
              Удалить "{name}"?
            </MiniModal.Header>
            <MiniModal.Footer direction="column">
              <Button use="danger" size="medium" onClick={mainAction}>
                Удалить
              </Button>
              <Button size="medium" onClick={close}>
                Отменить
              </Button>
            </MiniModal.Footer>
          </MiniModal>
        )}
        <Button onClick={open} icon={<IconTrashCanLight16 />} />
      </>
    );
  };
const list = ['Отчёт № 111', 'Отчёт № 222', 'Отчёт № 333'];
return (
    <Gapped vertical>
      {list.map((name) => (
        <Gapped key={name}>
          <div style={{ width: 200, borderBottom: 'dashed 1px' }}>{name}</div>
          <span>
            <ConfirmDelete name={name} handleDelete={() => alert(`${name} удалён`)} />
          </span>
        </Gapped>
      ))}
    </Gapped>
  );
```

### Одна модалка, несколько кнопок открытия

Одно и то же диалоговое окно может вызываться в разных частях приложения.
В таком случае стоит реализовать паттерн синглтона:

```tsx
const EnableNotification = React.forwardRef<
    { open: () => void; close: () => void },
    { setStatus: (status: string) => void }
  >(({ setStatus }, ref) => {
    const [isOpened, setIsOpened] = React.useState(false);

    const open = () => setIsOpened(true);
    const close = () => setIsOpened(false);

    const handleAllowAll = () => {
      setStatus('Разрешить все');
      close();
    };
    const handleAllowBasic = () => {
      setStatus('Разрешить только основные');
      close();
    };
    const handleDenyAll = () => {
      setStatus('Запретить');
      close();
    };

    React.useImperativeHandle(ref, () => ({ open, close }), []);

    return isOpened ? (
      <MiniModal>
        <MiniModal.Header icon={<IconNotificationBellAlarmRegular64 />}>Разрешить уведомления?</MiniModal.Header>
        <MiniModal.Footer direction="column">
          <Button use="accent" size="medium" onClick={handleAllowAll}>
            Разрешить все
          </Button>
          <Button size="medium" onClick={handleAllowBasic}>
            Разрешить только основные
          </Button>
          <MiniModal.Indent />
          <Button size="medium" onClick={handleDenyAll}>
            Запретить
          </Button>
        </MiniModal.Footer>
      </MiniModal>
    ) : null;
  });
const [status, setStatus] = React.useState('-не выбрано-');
const NotificationEnableRef = React.useRef<React.ComponentRef<typeof EnableNotification>>(null);
const NotificationEnableOpen = () => NotificationEnableRef.current && NotificationEnableRef.current.open();
return (
    <>
      <EnableNotification ref={NotificationEnableRef} setStatus={setStatus} />
      <Gapped vertical>
        <span>
          <IconNotificationBellAlarmSolid16 /> Статус уведомлений: {status}
        </span>
        <Button use="text" theme={{ btnTextBg: '#D6D6D6' }} onClick={NotificationEnableOpen}>
          Разрешить уведомления 1
        </Button>
        <Button use="text" theme={{ btnTextBg: '#E6E6E6' }} onClick={NotificationEnableOpen}>
          Разрешить уведомления 2
        </Button>
        <Button use="text" theme={{ btnTextBg: '#F0F0F0' }} onClick={NotificationEnableOpen}>
          Разрешить уведомления 3
        </Button>
      </Gapped>
    </>
  );
```

### Загрузка на кнопке: окно не закрыть до конца

Некоторые действия для корректного исполнения требуют блокировки других действий пользователя.
В таких случаях можно, например, использовать проп `loading` для `Button`, и не позволять закрыть окно до конца исполнения:

```tsx
const WaitingUpdate = ({
    handleUpdate,
    setLastUpdated,
  }: {
    handleUpdate: () => Promise<unknown>;
    setLastUpdated: (date: Date) => void;
  }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isOpened, setIsOpened] = React.useState(false);

    const open = () => setIsOpened(true);
    const close = () => setIsOpened(false);

    const handleMainClick = () => {
      setIsLoading(true);
      handleUpdate().then(() => {
        setIsLoading(false);
        setIsOpened(false);
        setLastUpdated(new Date());
      });
    };

    return (
      <>
        {isOpened && (
          <MiniModal>
            <MiniModal.Header>Обновить?</MiniModal.Header>
            <MiniModal.Body>
              После вашего подтверждения другие действия на странице будут заблокированы на несколько секунд.
            </MiniModal.Body>
            <MiniModal.Footer>
              <Button use="success" size="medium" onClick={handleMainClick} loading={isLoading}>
                Обновить
              </Button>
              <Button size="medium" onClick={close} disabled={isLoading}>
                Отменить
              </Button>
            </MiniModal.Footer>
          </MiniModal>
        )}
        <Button onClick={open} use="success">
          Обновить
        </Button>
      </>
    );
  };
const dateTimeFormat = new Intl.DateTimeFormat('nu', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
const [lastUpdated, setLastUpdated] = React.useState(new Date());
const handleUpdate = () => new Promise((resolve) => setTimeout(resolve, 1500));
return (
    <Gapped>
      <WaitingUpdate handleUpdate={() => handleUpdate()} setLastUpdated={setLastUpdated} />
      <span>Последнее обновление: {dateTimeFormat.format(lastUpdated)}</span>
    </Gapped>
  );
```

### Закрытие по Esc, клику по фону и кнопке (onClose)

Если задан `onClose`, мини-модалка реагирует на Esc и на клик по затемнённому фону (если
не задано иное, см. следующий пример). Сценарий без однозначного действия по кнопкам в футере при этом
осознанно &quot;мягче&quot;, чем в типичной мини-модалке.

```tsx
const [isOpened, setOpened] = React.useState(false);
return (
    <>
      {isOpened && (
        <MiniModal onClose={() => setOpened(false)}>
          <MiniModal.Header>Можно закрыть с клавиатуры и по фону</MiniModal.Header>
          <MiniModal.Body>
            Нажмите Esc или кликните мимо окна (по серому фону). Сработает onClose, окно снимется с экрана.
          </MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setOpened(false)}>
              Или эта кнопка
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      <Button onClick={() => setOpened(true)}>Открыть (с onClose)</Button>
    </>
  );
```

### Клик по фону не закрывает; полный запрет закрытия

- `ignoreBackgroundClick` — клик по фону не вызывает закрытие; Esc по-прежнему вызывает
`onClose` (так устроен `Modal`).
- `disableClose` — `requestClose` не срабатывает: ни Esc, ни фон (при `onClose` передан)
не закроют окно, остаётся кнопка.

```tsx
const [isIgnoreBg, setIgnoreBg] = React.useState(false);
const [isDisableClose, setDisableClose] = React.useState(false);
return (
    <Gapped vertical>
      {isIgnoreBg && (
        <MiniModal onClose={() => setIgnoreBg(false)} ignoreBackgroundClick>
          <MiniModal.Header>Клик по фону не закрывает</MiniModal.Header>
          <MiniModal.Body>
            ignoreBackgroundClick: клик по фону ничего не сделает. Попробуйте Esc — окно закроется.
          </MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setIgnoreBg(false)}>
              Закрыть
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      {isDisableClose && (
        <MiniModal onClose={() => setDisableClose(false)} disableClose>
          <MiniModal.Header>Esc и фон не закрывают</MiniModal.Header>
          <MiniModal.Body>
            disableClose отключает срабатывание onClose из Modal (в т.ч. по Esc). Закрытие — только кнопкой.
          </MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setDisableClose(false)}>
              Закрыть
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      <Gapped>
        <Button onClick={() => setIgnoreBg(true)}>ignoreBackgroundClick</Button>
        <Button onClick={() => setDisableClose(true)}>disableClose</Button>
      </Gapped>
    </Gapped>
  );
```

### Окно у верхнего края (alignTop)

`alignTop` прижимает карточку к верхней части области просмотра (на десктопе; см. `Modal`), полезно
при невысоком вьюпорте или вместе с длинной страницей. Ниже — длинный блок, чтобы на узком окне был виден
сдвиг.

```tsx
const [isOpened, setOpened] = React.useState(false);
return (
    <div style={{ maxWidth: 640 }}>
      {isOpened && (
        <MiniModal onClose={() => setOpened(false)} alignTop>
          <MiniModal.Header>alignTop</MiniModal.Header>
          <MiniModal.Body>Окно визуально ближе к верху экрана, а не к центру.</MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setOpened(false)}>
              Закрыть
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      <div
        style={{ height: 32, background: 'repeating-linear-gradient(0deg, #f0f0f0, #f0f0f0 8px, #fff 8px, #fff 16px)' }}
      />
      <Gapped>
        <Button onClick={() => setOpened(true)}>Открыть (alignTop)</Button>
      </Gapped>
      <div
        style={{
          height: 160,
          background: 'repeating-linear-gradient(0deg, #f5f5f5, #f5f5f5 6px, #fff 6px, #fff 12px)',
        }}
      />
    </div>
  );
```

### Блокировка фокуса отключена (disableFocusLock)

По умолчанию фокус не выходит за пределы модалки. `disableFocusLock={true}` отключает это — Tab может
увести фокус на элементы вне оверлея. Для сценария: поле ввода находится вне мини-модалки, пока она открыта.

```tsx
const [isOpened, setOpened] = React.useState(false);
return (
    <Gapped vertical>
      {isOpened && (
        <MiniModal onClose={() => setOpened(false)} disableFocusLock>
          <MiniModal.Header>Без focus lock</MiniModal.Header>
          <MiniModal.Body>
            Несколько раз нажмите Tab: фокус сможет перейти на поле &quot;Снаружи&quot; и кнопки под сценой.
          </MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setOpened(false)}>
              Закрыть
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      <Gapped>
        <input
          type="text"
          placeholder="Снаружи: Tab сюда, когда focus lock отключён"
          style={{ width: 360, padding: '6px 8px' }}
        />
        <Button onClick={() => setOpened(true)}>Открыть (disableFocusLock)</Button>
      </Gapped>
    </Gapped>
  );
```

### Своя тема и ширина окна

Проп `theme` на корне объединяется с `ThemeContext` (см. `getMiniModalTheme`), можно точечно
задать токены вроде `modalBg`. Проп `width`, переданный на `MiniModal`, подставляется в
`Modal` после внутреннего значения по умолчанию **400** — т.е. ширина переопределяется.

```tsx
const [isThemeOpened, setThemeOpened] = React.useState(false);
const [isWidthOpened, setWidthOpened] = React.useState(false);
return (
    <Gapped>
      {isThemeOpened && (
        <MiniModal onClose={() => setThemeOpened(false)} theme={{ modalBg: '#E3F2FD' }}>
          <MiniModal.Header>Кастомный фон</MiniModal.Header>
          <MiniModal.Body>
            Через theme передан &quot;голубоватый&quot; token modalBg (пример; выберите токены под макет).
          </MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setThemeOpened(false)}>
              Понятно
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      {isWidthOpened && (
        <MiniModal onClose={() => setWidthOpened(false)} width={560}>
          <MiniModal.Header>Шире, чем по умолчанию</MiniModal.Header>
          <MiniModal.Body>
            По умолчанию у мини-модалки 400px; здесь задано width=560, чтобы вместить чуть больше текста в одну строку.
          </MiniModal.Body>
          <MiniModal.Footer>
            <Button size="medium" onClick={() => setWidthOpened(false)}>
              Закрыть
            </Button>
          </MiniModal.Footer>
        </MiniModal>
      )}
      <Button onClick={() => setThemeOpened(true)}>С темой (modalBg)</Button>
      <Button onClick={() => setWidthOpened(true)}>С width=560</Button>
    </Gapped>
  );
```

## MiniModal.Header

<details>
  <summary>Пропсы для MiniModal.Header </summary>
</details>

#### Только текст, без иконки

По умолчанию в шапке показывается иконка информации. Чтобы оставить только текст, передайте `icon={null}`.

## MiniModal.Body

Необязательный блок: если заголовка и кнопок в футере достаточно, тело можно опустить.

<details>
  <summary>Пропсы для MiniModal.Body </summary>
</details>

#### Длинный текст в теле

## MiniModal.Footer

<details>
  <summary>Пропсы для MiniModal.Footer </summary>
</details>

Проп `direction="row"` задаёт горизонтальную раскладку только при ровно двух дочерних элементах. Если дочерний элемент один или их больше двух, используется column (независимо от `direction`).

По гайду дизайна кнопки в мини-модалке — `size="medium"`. Другой размер — отступление, согласуйте с дизайнером. Между группами действий в футере можно вставить `MiniModal.Indent`.

Подсчёт `Children` для раскладки — через `React.Children.count`: одна обёртка (например, Fragment вокруг двух кнопок) считается одним ребёнком. Подробнее — в разделе «MiniModal.Footer, React.Children и Fragment» на странице [MiniModal]

### Примеры

#### Три кнопки столбиком

Три кнопки — принудительно column.

#### Две кнопки в ряд через Fragment

Две кнопки в одном Fragment — для футера как один ребёнок, будет column.

## MiniModal.Indent

Вертикальный отступ между группами элементов в зоне `MiniModal.Footer` (на практике — между группами кнопок). Не является частью [Modal](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/modal.md) — специфичен для мини-модалки.

Вставляйте `MiniModal.Indent` внутри `MiniModal.Footer`, когда нужно визуально разделить группы действий (см. пример «Синглтон»).

<details>
  <summary>Пропсы для MiniModal.Indent </summary>
</details>

#### Две группы кнопок

## Доступность

Поведение базируется на [Modal](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/modal.md): фокус внутри окна, поддержка стандартных aria-атрибутов при необходимости переопределения.

Смысл действия не должен опираться только на иконку в шапке — заголовок и подписи кнопок должны быть понятны без контекста дизайна. Кнопку, которая открывает мини-модалку, по возможности сопровождайте `aria-expanded` и `aria-haspopup="dialog"` (см. также раздел про кнопки и модальные окна в [документации Button](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/docs/components/button.md)). Порядок фокуса по Tab должен логично вести по кнопкам действий в футере.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/accessibility--docs)

## Адаптивность

Мобильный режим так же, как у Modal: при ширине вьюпорта < `768px`. Проп `mobileAppearance` задаёт внешний вид в мобильном режиме. У MiniModal по умолчанию используется `"center"` (в отличие от `"auto"` у Modal).

Возможные значения `mobileAppearance`:

- `"auto"` — если футера нет, окно по центру; если футер есть — на весь экран с отступами и скруглениями.
- `"top"` / `"center"` / `"bottom"` — позиция независимо от футера.
- `"fullscreen-spacing"` — на весь экран с отступами и скруглениями.
- `"fullscreen"` — на весь экран.

Чтобы посмотреть мобильный вид на десктопе, сузьте окно браузера и используйте пример ниже (переопределённый медиазапрос темы) или инструменты разработчика.

ℹ️ Полезно: [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.4/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/MiniModal/MiniModal.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/MiniModal/MiniModal.tsx)
