# Checkbox

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_input-data-checkbox--docs)

Чекбокс используется для управления параметром с двумя состояниями.

```jsx
import { Checkbox } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `error`

type: `boolean` · optional

Переводит контрол в состояние ошибки.

### `warning`

type: `boolean` · optional

Переводит контрол в состояние предупреждения.

### `size`

type: `"small" | "medium" | "large"` · optional

Размер чекбокса.

### `onValueChange`

type: `(value: boolean) => void` · optional

Событие изменения value.

### `initialIndeterminate`

type: `boolean` · optional

Устанавливает начальное [неопределенное состояние чекбокса](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate).

### `comment`

type: `ReactNode` · optional

Задаёт второстепенный пояснительный текст под основным текстом чекбокса.

## Использование

Используйте чекбокс для:

- выбора элементов списка. Например, выбор документов для массовых действий;
- выбора параметров. Например, включение уведомлений и выбор случаев, в которых нужно присылать уведомления.

**Когда не использовать**

Чекбокс не запускает действие немедленно. Как правило, для этого нужно нажать подтверждающую кнопку.
Для немедленного включения какого-то режима в интерфейсе лучше подходит [Toggle](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/docs/components/toggle.md).

## Примеры

### Базовый пример чекбокса

```tsx
const [checked, setChecked] = React.useState(false);
return (
    <Checkbox checked={checked} onValueChange={setChecked}>
      Обычный чекбокс
    </Checkbox>
  );
```

### Размер

Проп `size` задаёт размер чекбокса.

```tsx
return (
    <Gapped vertical>
      <Checkbox size="small" checked>
        Маленький
      </Checkbox>
      <Checkbox size="medium" checked>
        Средний
      </Checkbox>
      <Checkbox size="large" checked>
        Большой
      </Checkbox>
    </Gapped>
  );
```

### Поясняющий текст

Проп `comment` задаёт второстепенный пояснительный текст под основным текстом чекбокса.

```tsx
const [checked, setChecked] = React.useState(false);
return (
    <Checkbox checked={checked} onValueChange={setChecked} comment="Поясняющий текст">
      Обычный чекбокс
    </Checkbox>
  );
```

### Cостояния ошибки и предупреждения

Проп `error` переводит чекбокс в состояние ошибки, а `warning` — в состояние предупреждения.

```tsx
const CheckboxWithState = ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
    const [checked, setChecked] = React.useState(false);

    return (
      <Checkbox checked={checked} onValueChange={setChecked} {...props}>
        {children}
      </Checkbox>
    );
  };
return (
    <Gapped vertical>
      <CheckboxWithState>Обычный чекбокс</CheckboxWithState>
      <CheckboxWithState error>Чекбокс в состоянии ошибки</CheckboxWithState>
      <CheckboxWithState warning>Чекбокс в состоянии предупреждения</CheckboxWithState>
    </Gapped>
  );
```

### Программная установка фокуса и снятие фокуса

Методы `focus` и `blur` программно управляют состоянием фокуса на чекбоксе.

```tsx
const [checked, setChecked] = React.useState(false);
const checkboxInstance = React.useRef<Checkbox>(null);
return (
    <Gapped vertical>
      <Checkbox ref={checkboxInstance} checked={checked} onValueChange={setChecked}>
        Пример чекбокса с программным фокусом
      </Checkbox>
      <Gapped gap={12}>
        <Button
          onClick={() => {
            checkboxInstance.current?.focus();
          }}
        >
          Дать фокус
        </Button>
        <Button
          onClick={() => {
            checkboxInstance.current?.blur();
          }}
        >
          Забрать фокус
        </Button>
      </Gapped>
    </Gapped>
  );
```

### Неопределенное состояние

Чекбокс может находится в неопределённом состоянии.
Это состояние полностью копирует поведение состояния `indeterminate` ([подробнее](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)) из HTML.
Влияет только на внешний вид и не влияет на состояние `checked`.

```tsx
const [checked, setChecked] = React.useState(false);
const checkboxInstance = React.useRef<Checkbox>(null);
return (
    <Gapped vertical>
      <Checkbox
        initialIndeterminate
        checked={checked}
        onValueChange={setChecked}
        ref={(el) => {
          checkboxInstance.current = el;
        }}
      >
        Неопределённый чекбокс
      </Checkbox>
      <Gapped>
        <Button onClick={() => checkboxInstance.current?.setIndeterminate()}>
          Перевести в неопределённое состояние
        </Button>
        <Button onClick={() => checkboxInstance.current?.resetIndeterminate()}>
          Сбросить неопределённое состояние
        </Button>
      </Gapped>
    </Gapped>
  );
```

### Пример использования неопределённого состояния чекбокса

```tsx
const [checkedSiblings, setCheckedSiblings] = React.useState<number[]>([]);
const siblingCheckboxes = [1, 2];
const parentCheckboxRef = React.useRef<Checkbox>(null);
React.useEffect(() => {
    if (checkedSiblings.length === 0 || checkedSiblings.length === siblingCheckboxes.length) {
      parentCheckboxRef.current?.resetIndeterminate();
    } else if (checkedSiblings.length !== 0) {
      parentCheckboxRef.current?.setIndeterminate();
    }
  }, [JSON.stringify(checkedSiblings)]);
return (
    <>
      <Checkbox
        checked={checkedSiblings.length === siblingCheckboxes.length}
        ref={parentCheckboxRef}
        onValueChange={() => {
          if (checkedSiblings.length === siblingCheckboxes.length) {
            setCheckedSiblings(() => []);
          } else {
            setCheckedSiblings(() => [...siblingCheckboxes]);
          }
        }}
      >
        Родитель
      </Checkbox>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
        {siblingCheckboxes.map((id) => {
          return (
            <Checkbox
              key={id}
              checked={checkedSiblings.includes(id)}
              onValueChange={() => {
                const siblingIndex = checkedSiblings.indexOf(id);

                if (siblingIndex === -1) {
                  setCheckedSiblings((prev) => [...prev, id]);
                } else {
                  setCheckedSiblings((prev) =>
                    prev.filter((siblingId) => {
                      return siblingId !== id;
                    }),
                  );
                }
              }}
            >
              Ребёнок ({id})
            </Checkbox>
          );
        })}
      </div>
    </>
  );
```

## Валидация

С помощью пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui-validations_api-reference) можно добавить валидацию для компонента.

Подробнее о том, как настроить тип, уровень валидации, формат сообщения об ошибке и другие параметры поведения, смотрите в документации пакета [React UI Validations](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui-validations_displaying-getting-started--docs).

## Адаптивность

По умолчанию чекбокс не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/packages/react-ui/6.3.3/?path=/docs/react-ui_information-responsive--docs)

## Source

[`components/Checkbox/Checkbox.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/Checkbox/Checkbox.tsx)
