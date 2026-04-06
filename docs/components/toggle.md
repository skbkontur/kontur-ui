# Toggle

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_toggle--docs)

## Props

- **captionPosition?**: Расположение названия относительно переключателя. (default: `'right'`)
- **checked?**: Включает тогл. (default: `false`)
- **defaultChecked?**: Делает тогл включенным по умолчанию. Не работает, если задан проп `checked`.
- **disabled?**: Блокирует тогл.
- **onValueChange?**: Событие изменения значения.
- **onChange?**: Событие клика на тогл.
- **warning?**: Переводит тогл в состояние предупреждения. (default: `false`)
- **error?**: Переводит тогл в состояние ошибки. (default: `false`)
- **loading?**: Переводит тогл в состояние загрузки: добавляет стили для состояния `loading` и отключает тогл.
- **autoFocus?**: Устанавливает фокус на тогл после окончания загрузки страницы. (default: `false`)
- **size?**: Размер тогла.
- **onFocus?**: Событие получения тоглом фокуса.
- **onBlur?**: Событие потери тоглом фокуса.
- **disableAnimations?**: Отключает анимацию.

```jsx
import { Toggle } from '@skbkontur/react-ui';
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Валидация

Если тогл нельзя использовать, заблокируйте его. Валидация не нужна.

## Адаптивность

По умолчанию тогл не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const [checked, setChecked] = React.useState(false);

  return (
    <Toggle checked={checked} onValueChange={setChecked}>
      {checked ? 'Включен' : 'Выключен'}
    </Toggle>
  );
```

### ExampleSize

```tsx
return (
    <Gapped vertical>
      <Toggle size="small">Маленький</Toggle>
      <Toggle size="medium">Средний</Toggle>
      <Toggle size="large">Большой</Toggle>
    </Gapped>
  );
```

### ExampleCaptionPosition

Проп `captionPosition` определяет, с какой стороны от переключателя находится его название.

```tsx
const [checked, setChecked] = React.useState(false);

  return (
    <Gapped vertical>
      <Toggle checked={checked} onValueChange={setChecked} captionPosition="right">
        Название справа
      </Toggle>
      <Toggle checked={checked} onValueChange={setChecked} captionPosition="left">
        Название слева
      </Toggle>
    </Gapped>
  );
```

### ExampleLabel

```tsx
const [checked, setChecked] = React.useState(false);

  return (
    <Gapped>
      <Toggle id="toggle-id" checked={checked} onValueChange={setChecked} />
      <label htmlFor="toggle-id">Внешний label</label>
    </Gapped>
  );
```

### ExampleDisabled

Проп `disabled` переводит тогл в состояние блокировки.

```tsx
return <Toggle disabled>Заблокированный</Toggle>;
```

### ExampleLoading

Проп `loading` переводит тогл в состояние загрузки.

```tsx
return <Toggle loading>Загрузка</Toggle>;
```

### ExampleDisableAnimations

Проп `disableAnimations` отключает анимацию при переключении тогла. По умолчанию тогл переключается с анимацией: круг плавно перемещается, фон движется за ним.

```tsx
return <Toggle disableAnimations>Без анимации</Toggle>;
```