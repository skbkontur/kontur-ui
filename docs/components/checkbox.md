# Checkbox

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_checkbox--docs)

## Import

```jsx
import { Checkbox } from '@skbkontur/react-ui';
```

## Props

- **error?**: Переводит контрол в состояние валидации "ошибка".
- **warning?**: Переводит контрол в состояние валидации "предупреждение".
- **size?**: Задает размер.
- **onValueChange?**: Задает функцию, вызывающуюся при изменении value.
- **initialIndeterminate?**: Устанавливает начальное [неопределенное состояние чекбокса](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate).

### Example1

```tsx
const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox checked={checked} onValueChange={setChecked}>
      Обычный чекбокс
    </Checkbox>
  );
```

### Example2

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

### Example3

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

### Example4

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

### Example5

Чекбокс может находится в неопределённом состоянии. <br/> Это состояние полностью копирует поведение состояния `indeterminate` ([подробнее](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)) из HTML. Это состояние влияет только на внешний вид и не влияет на состояние `checked`.

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

### Example6

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