# SingleToast

> `SingleToast` — это короткое немодальное уведомление, которое сообщает пользователю о результате выполнения его команды. Результат может быть положительным, отрицательным или нейтральным. Позволяет вызывать тосты с помощью статических методов. ##### Особенности компонента SingleToast Для корректной работы `<SingleToast />` должен быть отрисован только **один раз** на странице. После чего его можно вызывать из любого места приложения методом `SingleToast.push()`. Однако, переданные в компонент пропсы, такие как `theme`, `onPush` и остальные, будут применяться ко всем вызовам.

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay_singletoast--docs)

## Import

```jsx
import { SingleToast } from '@skbkontur/react-ui';
```

### Default

```tsx
const customTheme = {
    toastBg: '#00BEA2',
    toastColor: '#ffff',
  };

  const [isCustomTheme, setIsCustomTheme] = React.useState(false);

  return (
    <>
      <SingleToast theme={isCustomTheme ? customTheme : undefined} />

      <Gapped gap={16}>
        <Button onClick={() => SingleToast.push('Тост')}>Показать тост</Button>
        <Checkbox checked={isCustomTheme} onValueChange={setIsCustomTheme}>
          Кастомная тема
        </Checkbox>
      </Gapped>
    </>
  );
```

### SingleToastWithAction

```tsx
return (
    <Button
      onClick={() =>
        SingleToast.push('Тост с кнопкой действия', {
          action: { label: 'Cancel', handler: () => alert('Действие было отменено') },
        })
      }
    >
      Тост c кнопкой действия
    </Button>
  );
```