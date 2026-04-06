# Button

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button_button--docs)

```jsx
import { Button } from '@skbkontur/react-ui';
```

## Использование

По умолчанию кнопка принимает все стандартные атрибуты и обработчики, которые доступны для обычного `HTMLButtonElement`. То есть вы можете передавать в этот компонент те же пропсы, что и в обычный `<button>` — они будут корректно работать.

Кнопка может рендериться как ссылка, например, если она используется как переход на другую страницу, при этом визуально все останется как есть — смотрите «Кнопка-ссылка» в примерах ниже.

**Альтернативы или дополнения**

- [Link](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_button-link--docs) — если необходима кнопка, выглядящая как ссылка, можно переопределить корневой элемент на `component=button`.
- [Group](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_layout-group--docs) — если необходимы кнопки в составе группы элементов по горизонтали.

## Доступность

Используйте кнопку, когда действие происходит на текущей странице. Если при клике на элемент происходит переход на другую страницу или на другую часть страницы, используйте ссылку — тег <a/>.

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

**Фокус кнопки**

Не отключайте стандартный вид фокуса кнопки — при фокусе с клавиатуры всегда должен отображаться видимый клавиатурный фокус. Цвет фокуса кнопки должен быть таким же, как во всём продукте.

**Событие по кнопке**

Указывайте тип кнопки `type` в зависимости от того, что происходит при нажатии:

- `submit` (значение по умолчанию): если отправляет данные на сервер. Всегда учитывайте, что при таком типе поля формы отправляются при нажатии на Enter. Проверьте, что вы предусмотрели защиту от случайной отправки непроверенных данных. Если кнопка находится вне формы, добавьте к кнопке атрибут `form` со значением `”id”` формы.
- `reset`: если удаляет введённые данные из формы.
- `button`: обычная кнопка с другими действиями, их можно задать через скрипты.
  Если кнопка открывает модальное окно, сайдпейдж или выпадающий список, добавьте атрибуты `aria-expanded` и `aria-haspopup`:

  - `aria-expanded` — значение атрибута меняется в зависимости от того, открыты ли модальное окно или сайдпейдж. `”true”` если открыт, и `”false”` — закрыт.
  - `aria-haspopup` — значение атрибута зависит от того, какой тип компонента открывается при нажатии:
    - `”true”` или `”menu”` — попап с ролью подменю `menu`;
    - `”dialog”` — попап с ролью модального окна `dialog`;
    - `”listbox”` — попап с ролью выпадающего списка `listbox`.

**Заблокированная кнопка**

За блокировку кнопки отвечает специальный атрибут `disabled`. Однако этот атрибут скрывает кнопку от скринридеров — а это не подходит в случаях, когда кнопка разблокируется при заполнении обязательных полей. Для такого случая добавьте атрибуты `aria-disabled=”true”`.

**Кнопка-иконка**

В кнопку-иконку добавляйте атрибут `aria-label` с коротким и ёмким названием кнопки, его лучше запросить у дизайнера. Это нужно, чтобы скринридер прочитал название кнопки.

```jsx static
<Button icon={<PlusIcon16Regular />} aria-label="Добавить"></Button>
```

**Адаптивная верстка**

В адаптивной верстке для кнопок, в особенности кнопок-иконок, используйте размеры Medium и Large. Если все же используете компактный размер, увеличивайте кликабельную область. [Подробнее в Контур.Гайдах](https://guides.kontur.ru/principles/base/adaptivity/#32).

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию кнопка не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
return <Button>Кнопка</Button>;
```

### ExampleStyles

Проп `use` задаёт стиль кнопки. Список доступных: - outline — кнопка второстепенного действия с обводкой, но без заливки - fill — кнопка второстепенного действия с заливкой, но без обводки - text — кнопка второстепенного действия без заливки и обводки - accent — кнопка основного действия - danger — кнопка деструктивного действия - success — кнопка позитивного действия - pay — кнопка, связанная с оплатой ⚠️ Deprecated-стили, будут удалены в следующих мажорных версиях: - use="primary" → use="accent" - use="backless" → use="outline" - use="link" → &lt;Link component="button"&gt; - use="default" → use="outline" для границ или use="fill" для фона

```tsx
return (
    <Gapped>
      <Button use="outline">Outline</Button>
      <div style={{ background: 'var(--k-color-surface-low)', padding: 8 }}>
        <Button use="fill">Fill</Button>
      </div>
      <Button use="text">Text</Button>
      <Button use="accent">Accent</Button>
      <Button use="danger">Danger</Button>
      <Button use="success">Success</Button>
      <Button use="pay">Pay</Button>
    </Gapped>
  );
```

### ExampleSize

Проп `size` задаёт размер. По умолчанию: `'small'`.

```tsx
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
```

### ExampleWidth

Пропом `width` можно задать свою ширину кнопки. Может принимать как абсолютные значения — например, 150, так и относительные — например, 50%.

```tsx
return <Button width={150}>Закрыть</Button>;
```

### ExampleAlign

Задаётся пропом `align`.

```tsx
return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: '10px',
      }}
    >
      <Button width={150} align="left">
        Left
      </Button>
      <Button width={150} align="center">
        Center
      </Button>
      <Button width={150} align="right">
        Right
      </Button>
    </div>
  );
```

### ExampleIcon

В кнопку можно передать иконку. Иконка может находиться слева от текста кнопки — проп `icon`, справа — проп `rightIcon`, в обоих позициях одновременно. Если не передавать текст кнопки, будет отображаться кнопка-иконка. Для кнопки-иконки есть рекомендации по соблюдению доступности, изучите раздел <a href="#доступность" target="-_self"> Доступность </a>. Под разный размер кнопок используйте подходящие начертания и размер иконок: - Small — Light 16 - Medium — Light 20 - Large — Regular 24

```tsx
return (
    <Gapped gap={5}>
      <Button icon={<PlusIcon16Light />}></Button>
      <Button icon={<PlusIcon16Light />}>Создать</Button>
      <Button size="medium" icon={<PlusIcon20Light />} rightIcon={<ArrowARightIcon20Light />}>
        Создать
      </Button>
      <Button size="large" rightIcon={<ArrowARightIcon24Regular />}>
        Создать
      </Button>
    </Gapped>
  );
```

### ExampleArrow

Проп `arrow` создаёт кнопку со стрелкой. Рекомендуется использовать для пошаговых мастеров. При указании `arrow` без значения будет добавлена кнопка со стрелкой вправо, для кнопки со стрелкой влево укажите значение `arrow="left"`. При изменении ширины кнопки стрелка будет оставаться прикреплена к внешнему краю кнопки, а не к тексту, как это происходит при добавлении отдельной иконки.

```tsx
return (
    <Gapped gap={10}>
      <Button arrow="left" size="medium">
        Назад
      </Button>
      <Button arrow size="medium">
        Далее
      </Button>
      <Button arrow="left" width={150}>
        Назад
      </Button>
      <Button arrow width={150}>
        Далее
      </Button>
    </Gapped>
  );
```

### ExampleLoading

Проп `loading` переводит кнопку в состояние загрузки. Кнопка на время загрузки отключается. Если в кнопке есть иконка, на время загрузки иконка заменяется на спиннер, если иконки нет — весь контент кнопки заменяется на спиннер. Когда иконки две — заменяется только левая.

```tsx
const [loading, setLoading] = React.useState(false);

  const delay = (time: number) => (args?: unknown) => new Promise((resolve) => setTimeout(resolve, time, args));

  const handleLoadingStart = () => {
    delay(2000)().then(() => {
      setLoading(false);
    });
  };

  const handleClick = () => {
    setLoading(true);
    handleLoadingStart();
  };

  return (
    <Gapped>
      <Button width={150} onClick={handleClick} loading={loading}>
        Удалить
      </Button>
      <Button icon={<MinusCircleIcon16Light />} width={150} onClick={handleClick} loading={loading}>
        Удалить
      </Button>
      <Button rightIcon={<MinusCircleIcon16Light />} width={150} onClick={handleClick} loading={loading}>
        Удалить
      </Button>
      <Button
        icon={<MinusCircleIcon16Light />}
        rightIcon={<MinusCircleIcon16Light />}
        width={150}
        onClick={handleClick}
        loading={loading}
      >
        Удалить
      </Button>
    </Gapped>
  );
```

### ExampleDisabled

Проп `disabled` блокирует кнопку. Кнопка меняет цвет на серый и становится недоступна для нажатия.

```tsx
return <Button disabled>Кнопка</Button>;
```

### ExampleLink

Кнопка может рендерить ссылку в качестве корневого элемента. Переопределить корневой элемент можно c помощью пропа `component`. Кнопка принимает все пропсы переданного компонента.

```tsx
return (
    <Button component="a" href="https://kontur.ru" target="_blank">
      Ссылка, но выглядит как кнопка
    </Button>
  );
```

### ExampleTheme

Проп `theme` позволяет кастомизировать кнопку через свойства темы. Заданные переменные будут объединены с темой из `<ThemeContext>`. Общие переменные темы и переменные для кнопки (с префиксом `btn`) смотрите на странице [ThemePlayground](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-themeplayground--docs) .

```tsx
return (
    <Gapped>
      <Button
        use="primary"
        theme={{
          btnPrimaryBg: '#26AD50',
          btnPrimaryBorderColor: '#26AD50',
          btnPrimaryHoverBg: '#23A14A',
          btnPrimaryHoverBorderColor: '#23A14A',
          btnPrimaryActiveBg: '#209644',
          btnPrimaryActiveBorderColor: '#209644',
        }}
      >
        Открыть
      </Button>
      <Button
        use="primary"
        theme={{
          btnPrimaryBg: '#00B59A',
          btnPrimaryBorderColor: '#00B59A',
          btnPrimaryHoverBg: '#00A58D',
          btnPrimaryHoverBorderColor: '#00A58D',
          btnPrimaryActiveBg: '#00957F',
          btnPrimaryActiveBorderColor: '#00957F',
        }}
      >
        Открыть
      </Button>
      <Button
        use="primary"
        theme={{
          btnPrimaryBg: '#2291FF',
          btnPrimaryBorderColor: '#2291FF',
          btnPrimaryHoverBg: '#1F87EF',
          btnPrimaryHoverBorderColor: '#1F87EF',
          btnPrimaryActiveBg: '#1C7EDF',
          btnPrimaryActiveBorderColor: '#1C7EDF',
        }}
      >
        Открыть
      </Button>
      <Button
        use="primary"
        theme={{
          btnPrimaryBg: '#366AF3',
          btnPrimaryBorderColor: '#366AF3',
          btnPrimaryHoverBg: '#3365E8',
          btnPrimaryHoverBorderColor: '#3365E8',
          btnPrimaryActiveBg: '#3060DC',
          btnPrimaryActiveBorderColor: '#3060DC',
        }}
      >
        Открыть
      </Button>
      <Button
        use="primary"
        theme={{
          btnPrimaryBg: '#B750D1',
          btnPrimaryBorderColor: '#B750D1',
          btnPrimaryHoverBg: '#AA49C3',
          btnPrimaryHoverBorderColor: '##AA49C3',
          btnPrimaryActiveBg: '#9E43B5',
          btnPrimaryActiveBorderColor: '#9E43B5',
        }}
      >
        Открыть
      </Button>
    </Gapped>
  );
```

### ExampleHoverColor

```tsx
return (
    <Button
      use="text"
      size="medium"
      icon={<TrashCanIcon20Light />}
      theme={{ btnTextHoverBg: '#ED3F3F', btnTextActiveBg: '#DD3333', btnTextHoverTextColor: '#FFF' }}
    >
      Удалить
    </Button>
  );
```