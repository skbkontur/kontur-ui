# Toast

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_overlay_toast--docs)

## Import

```jsx
import { Toast } from '@skbkontur/react-ui';
```

## Props

- **onPush?**: Задает функцию, которая вызывается при возникновении тоста.
- **onClose?**: Задает функцию, которая вызывается при закрытии тоста.
- **theme?**: Задает объект с переменными темы. Он будет объединён с темой из контекста.

### Default

```tsx
const toastRef = React.useRef<Toast>(null);

  const showNotification = () => {
    const { current: toast } = toastRef;
    if (toast) {
      toast.push('Default text');
    }
  };

  return (
    <>
      <Toast ref={toastRef} />
      <Button onClick={showNotification}>Show notification</Button>
    </>
  );
```

### WithAction

```tsx
const toastRef = React.useRef<Toast>(null);

  const showNotification = () => {
    const { current: toast } = toastRef;
    if (toast) {
      toast.push('Toast with action', {
        action: { label: 'Cancel', handler: () => toast.push('Canceled') },
      });
    }
  };

  return (
    <>
      <Toast ref={toastRef} />
      <Button onClick={showNotification}>Show notification</Button>
    </>
  );
```

### CustomShowTime

```tsx
const toastRef = React.useRef<Toast>(null);

  const showNotification = () => {
    const { current: toast } = toastRef;
    if (toast) {
      toast.push('Toast with custom showTime', { showTime: 15_000 });
    }
  };

  return (
    <>
      <Toast ref={toastRef} />
      <Button onClick={showNotification}>Show notification</Button>
    </>
  );
```

### ExampleWithCallbackRef

```tsx
class Toaster extends React.Component {
    private notifier = React.createRef<Toast>();

    showNotification() {
      this.notifier.current?.push('Successfully');
    }

    render() {
      return (
        <div>
          <Toast ref={this.notifier} />
          <Button onClick={() => this.showNotification()}>Show notification</Button>
        </div>
      );
    }
  }

  return <Toaster />;
```