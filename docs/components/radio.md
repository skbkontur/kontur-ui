# Radio

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_radio--docs)

## Props

- **error?**: Меняет визуальное отображение поля на состояние «ошибка». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **warning?**: Меняет визуальное отображение поля на состояние «предупреждение». Может быть полезен при разработке собственной валидации, если вы не используете пакет [React UI Validations](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui-validations_displaying-getting-started--docs).
- **size?**: Размер радиокнопки.
- **focused?**: Задаёт состояние фокуса.
- **onValueChange?**: Задаёт функцию, которая вызывается при изменении `value`.
- **value**: Задаёт значение.

```jsx
import { Radio } from '@skbkontur/react-ui';
```

## Доступность

Компонент поддерживает aria-атрибуты, если вам необходимо переопределить стандартное поведение.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию радиокнопка не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const [chosen, setChosen] = React.useState(null);

  return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped gap={3} vertical>
        <Radio value={1}>Первый вариант</Radio>
        <Radio value={2}>Второй вариант</Radio>
      </Gapped>
    </RadioGroup>
  );
```

### ExampleSize

Проп `size` задаёт размер радиокнопки. По умолчанию: `'small'`.

```tsx
const [chosen, setChosen] = React.useState(null);
  return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped vertical>
        <Radio size="small" value={1}>
          Маленький
        </Radio>
        <Radio size="medium" value={2}>
          Средний
        </Radio>
        <Radio size="large" value={3}>
          Большой
        </Radio>
      </Gapped>
    </RadioGroup>
  );
```

### ExampleMode

У радиокнопки есть несколько пропсов состояний: - `disabled` — блокирует радиокнопку. - `checked` — делает радиокнопку контролируемым и выбранным по умолчанию элементом. - `focused` — задаёт состояние фокусировки. - `error` — задаёт состояние «Ошибка». - `warning` — задаёт состояние «Предупреждение». Радиокнопка может быть сразу в нескольких состояниях.

```tsx
const [chosen, setChosen] = React.useState(null);

  return (
    <RadioGroup value={chosen} onValueChange={setChosen}>
      <Gapped gap={3} vertical>
        <Radio value={1}>Обычная</Radio>
        <Radio value={2} disabled>
          Заблокированная
        </Radio>
        <Radio value={3} checked={!chosen}>
          Отмеченная по умолчанию
        </Radio>
        <Radio value={4} focused>
          В состоянии focused
        </Radio>
        <Radio value={5} error>
          В состоянии error
        </Radio>
        <Radio value={6} warning>
          В состоянии warning
        </Radio>
        <Radio disabled checked warning value="true">
          Заблокированная и отмеченная по умолчанию в состоянии warning
        </Radio>
      </Gapped>
    </RadioGroup>
  );
```