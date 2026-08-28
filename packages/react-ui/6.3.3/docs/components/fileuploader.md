# FileUploader

> Package: `@skbkontur/react-ui` · Version: `6.3.3` · [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data-fileuploader--docs)

Контрол для выбора пользователем файла на компьютере и отображения статуса его отправки на сервер.

```jsx
import { FileUploader } from '@skbkontur/react-ui';
```

## Все пропсы и методы

### `error`

type: `boolean` · optional

Состояние ошибки всего контрола

### `warning`

type: `boolean` · optional

Состояние предупреждения всего контрола.

### `validationTooltipPosition`

type: `"top" | "bottom" | "left" | "right" | "top center" | "top left" | "top right" | "bottom center" | "bottom left" | "bottom right" | "left middle" | "left top" | "left bottom" | "right middle" | "right top" | "right bottom" | "middle center" | "middle left" | "middle right"` · optional · default: `'top left'`

Расположение тултипа с текстом валидации файла.

### `withValidationTooltip`

type: `boolean` · optional · default: `false`

Включает отображение текста валидации файла во всплывающей подсказке вместо строки рядом с именем.

### `withWarningIcon`

type: `boolean` · optional · default: `false`

Включает отображение иконки предупреждения (восклицательный знак) при статусе предупреждения у файла.

### `width`

type: `Width<string | number>` · optional

Ширина контрола.

### `size`

type: `"small" | "medium" | "large"` · optional · default: `small`

Размер контрола и вложенных элементов.

### `hideFiles`

type: `boolean` · optional · default: `false`

Скрывает встроенный список файлов.

### `uploaderText`

type: `string` · optional · default: `"Выберите файл"`

Текст ссылки выбора файла.

### `uploaderIcon`

type: `ReactNode` · optional

Иконка в кнопке загрузки.

### `view`

type: `"row" | "tile"` · optional · default: `row`

Режим отображения списка файлов: строка (`row`) или плитка (`tile`).

### `validationSummary`

type: `"disabled" | "auto" | "enabled"` · optional · default: `auto`

Режим блока-саммари по ошибкам и предупреждениям:
- `auto` — от порога `validationSummaryStart`,
- `enabled` / `disabled` — всегда или никогда.

### `validationSummaryStart`

type: `number` · optional · default: `5`

Порог числа файлов для показа саммари при `validationSummary="auto"`.

### `uploadButtonPosition`

type: `"end" | "start"` · optional · default: `start`

Расположение кнопки загрузки относительно списка: в начале или в конце.

### `request`

type: `(file: FileUploaderAttachedFile) => Promise<void>` · optional

Включает асинхронный режим загрузки файлов.
Отклонённый промис помечает файл(ы) ошибкой загрузки.

### `onRequestSuccess`

type: `(fileId: string) => void` · optional

Колбэк после успешного завершения `request` для файла.

### `onRequestError`

type: `(fileId: string) => void` · optional

Колбэк после ошибки `request` для файла.

### `validateBeforeUpload`

type: `(file: FileUploaderAttachedFile) => Promise<string | { message: string; status: FileUploaderFileStatus; }>` · optional

Проверка файла после выбора и до `request`: строка или `{ message, status }` — ошибка/предупреждение. Пустой результат — файл проходит.

### `renderFile`

type: `(props: FileUploaderFileProps) => ReactNode` · optional · default: `(props: FileUploaderFileProps) => <FileUploaderFile {...props} />`

Задаёт метод отрисовки файлов.

### `className`

type: `string` · optional

HTML-атрибут `class`.

### `style`

type: `CSSProperties` · optional

HTML-атрибут `style`.

### `data-tid`

type: `string` · optional

Наравне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент.

### `initialFiles`

type: `File[]` · optional

Файлы при первом рендере (в одиночном режиме берётся только первый).

### `onAttach`

type: `(files: FileUploaderAttachedFile[]) => void` · optional

Вызывается при добавлении файлов через контрол (перед обновлением состояния списка).

### `onRemove`

type: `(fileId: string) => void` · optional

Вызывается при удалении файла.

### `onValueChange`

type: `(files: FileUploaderAttachedFile[]) => void` · optional

Вызывается при любом изменении массива прикреплённых файлов.

## Использование

Контрол может работать в двух режимах:

- синхронном — отправляет файлы на сервер вместе с данными формы по сабмиту;
- асинхронном — отправляет файлы на сервер после их выбора и позволяет сразу отобразить прогресс.

В каждом из этих режимов можно включить мультивыбор, тогда контрол разрешит выбор и отобразит сразу несколько файлов.

Наследуются стандартные атрибуты [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file) для `type="file"`, в том числе `accept`, `multiple`, `name`.

**Когда не использовать**

Не заменяйте явный выбор пользователем файла в браузере на скрытую загрузку без понятного действия в интерфейсе.

**Связанные компоненты**

Строка файла реализована через отдельный компонент `FileUploaderFile` (см.ниже).

```js
<FileUploader>
  <FileUploaderFile> // строка файла
```

## Примеры

### Базовый пример

```tsx
return <FileUploader />;
```

### Размер

Проп `size` задаёт размер контрола. По умолчанию `"small"`.

```tsx
return (
    <Gapped vertical gap={24}>
      <FileUploader size="small" />
      <FileUploader size="medium" />
      <FileUploader size="large" />
    </Gapped>
  );
```

### Ширина

Проп `width` задаёт ширину контрола.

```tsx
return <FileUploader width={400} />;
```

### Мультивыбор

Проп `multiple` включает мультивыбор, который позволяет выбрать несколько файлов за одно действие и отобразить список вложений.

```tsx
return <FileUploader multiple />;
```

### Плиточный вид

Проп `view` включает плиточный вид. По умолчанию `"list"`.

```tsx
const initialFiles = [createFile('test1.txt'), createFile('test2.txt')];
return <FileUploader multiple view="tile" initialFiles={initialFiles} />;
```

### Расположение кнопки загрузки

Проп `uploadButtonPosition` задаёт расположение кнопки загрузки. По умолчанию `"start"`.

```tsx
const initialFiles = [createFile('test1.txt'), createFile('test2.txt')];
return <FileUploader multiple initialFiles={initialFiles} uploadButtonPosition="end" />;
```

### Текст кнопки выбора

Проп `uploaderText` задаёт текст на кнопке выбора. По умолчанию `"Выберите файл"`.

```tsx
return <FileUploader uploaderText="Добавить файл" />;
```

### Начальные файлы

`initialFiles` — файлы, которые будут показаны при первом рендере компонента, в одиночном режиме используется только первый файл.

```tsx
const initialFiles = [createFile('test1.txt'), createFile('test2.txt')];
return <FileUploader multiple initialFiles={initialFiles} />;
```

### Ограничение типов файлов

Проп `accept` ограничивает типы файлов для загрузки. Принимает значения HTML-атрибута [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept).

```tsx
return <FileUploader multiple accept="image/*" />;
```

### Валидация файлов перед отправкой

Проп `validateBeforeUpload` задаёт сообщения валидации файлов перед отправкой.

```tsx
return (
    <FileUploader
      uploaderText="Попробуйте выбрать файл"
      validateBeforeUpload={({ originalFile }) => {
        return Promise.resolve(`У файла ${originalFile.name} неверный формат`);
      }}
    />
  );
```

### Сообщение валидации в тултипе

Проп `withValidationTooltip` задаёт отображение текста валидации файла во всплывающей подсказке.

```tsx
return (
    <FileUploader
      uploaderText="Попробуйте выбрать файл"
      withValidationTooltip
      validateBeforeUpload={({ originalFile }) => {
        return Promise.resolve(`У файла ${originalFile.name} неверный формат`);
      }}
    />
  );
```

### Состояние ошибки

Проп `error` переводит поле в состояние валидации «Ошибка».

```tsx
return <FileUploader error />;
```

### Результат валидации загруженных файлов

Пропсы `validationSummary`, `validationSummaryStart` управляют показом блока с результатом валидации загруженных файлов.

```tsx
function containsCyrillicLetters(str: string): boolean {
    const regex = /[\u0400-\u04FF]/;
    return regex.test(str);
  }
function containsDigits(str: string): boolean {
    const regex = /\d/;
    return regex.test(str);
  }
const validateBeforeUpload = (file: FileUploaderAttachedFile) => {
    let status = FileUploaderFileStatus.Uploaded;
    let message = '';
    const { name } = file.originalFile;

    if (containsCyrillicLetters(name)) {
      status = FileUploaderFileStatus.Error;
      message = 'Имя файла содержит кириллицу';
    } else if (containsDigits(name)) {
      status = FileUploaderFileStatus.Warning;
      message = 'Имя файла содержит цифры';
    }

    return Promise.resolve(status !== FileUploaderFileStatus.Uploaded ? { message, status } : message);
  };
return (
    <FileUploader
      multiple
      validationSummary={'enabled'}
      validationSummaryStart={6}
      validateBeforeUpload={validateBeforeUpload}
    />
  );
```

### Асинхронный режим

Проп `request` включает асинхронны режим. Прикреплённые файлы отправляются на сервер асинхронно сразу после выбора.
Выполненный промис считается успешной загрузкой файла, отклонённый — ошибкой.

```tsx
const request = () => Promise.resolve();
return <FileUploader request={request} />;
```

### Обработка результата загрузки в асинхронном режиме

Пропсы `onRequestError`, `onRequestSuccess` позволяют управлять состоянием формы.

```tsx
const [error, setError] = React.useState(false);
const [showError, setShowError] = React.useState(false);
const request = () =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => (showError ? reject() : resolve()), 1000);
    });
const reject = () => setError(true);
return (
    <Gapped vertical>
      <FileUploader
        multiple
        error={error}
        onRemove={() => setError(false)}
        request={request}
        onRequestError={reject}
        onRequestSuccess={() => alert('Файл успешно загружен')}
      />
      <Toggle checked={showError} onValueChange={setShowError}>
        Показывать ошибку загрузки
      </Toggle>
    </Gapped>
  );
```

### Собственная отрисовка файла

Отрисовку строк файлов можно настраивать — менять разметку и параметры по умолчанию.
Подробнее на странице [FileUploaderFile](https://tech.skbkontur.ru/kontur-ui/?path=/docs/input-data-fileuploader-fileuploaderfile--docs).

```tsx
const initialFiles = [createFile('test1.txt'), createFile('test2.txt')];
return (
    <FileUploader
      multiple
      initialFiles={initialFiles}
      renderFile={(props) => <FileUploaderFile {...props} showSize />}
    />
  );
```

### Скрытие списка файлов

Проп `hideFiles` позволяет скрыть список файлов. Полезно для реализации своего списка файлов.

```tsx
const fileUploaderRef = React.useRef<FileUploader>(null);
const [fileList, setFileList] = React.useState<FileUploaderAttachedFile[]>([]);
return (
    <div style={{ display: 'inline-grid', gap: '10px' }}>
      <FileUploader ref={fileUploaderRef} hideFiles multiple onValueChange={(files) => setFileList(files)} />
      {fileList.map((file) => {
        return (
          <Button key={file.id} onClick={() => fileUploaderRef.current?.removeFile(file.id)}>
            Delete file {file.originalFile.name}
          </Button>
        );
      })}
    </div>
  );
```

### Кастомизация: тема

Переменные темы `fileUploaderLinkColor`, `fileUploaderBorderRadius`, `fileUploaderBorderStyle`.

```tsx
const initialFiles = [createFile('test1.txt'), createFile('test2.txt')];
return (
    <ThemeContext.Provider
      value={ThemeFactory.create({
        fileUploaderLinkColor: 'green',
        fileUploaderBorderRadius: '0',
        fileUploaderBorderStyle: 'dotted',
      })}
    >
      <FileUploader multiple initialFiles={initialFiles} />
    </ThemeContext.Provider>
  );
```

## FileUploaderFile

```jsx
import { FileUploaderFile } from '@skbkontur/react-ui';
```

Строка файла настраивается через `renderFile` и компонент `FileUploaderFile`.

<details>
  <summary>Пропсы для FileUploaderFile </summary>
</details>

### Примеры

#### Отображение размера файла

Проп `showSize` отображает размер файла.

#### Подсказка с полным именем

Проп `showFilenameHint` отображает подсказку с полным именем файла, если оно было обрезано.

#### Иконка типа файла

Проп `fileTypeIcon` позволяет заменить стандартную иконку типа файла.

#### Превью в плиточном виде

Проп `previewImg` позволяет задать превью в плиточном виде (соотношение сторон как в гайде).

#### Кастомизация цвета иконки типа файла

Переменные темы `fileUploaderFileType(FileType)IconColor` управляют цветом иконки типа файла (пример на PDF).

#### Локализация размера файла

Поддерживается два набора локализации описания размера файла (en_GB и ru_RU), они осуществляются через `LocaleContext`.

## Доступность

- **Семантика:** видимая область — `<label>` со скрытым `<input type="file" />`.
- **Клавиатура:** `Tab` переводит фокус на поле выбора файла, у строки файла фокусируемый блок удаления реагирует на `Enter`.
- **Подсказки:** обрезанное имя доступно через [Hint](https://tech.skbkontur.ru/kontur-ui/docs/components/hint.md); текст проверки файла может выводиться в [Tooltip](https://tech.skbkontur.ru/kontur-ui/docs/components/tooltip.md) при `withValidationTooltip` или в плиточном виде.

Связывайте контрол с подписью через `<label htmlFor>` и `id` на `FileUploader` или через `aria-labelledby` / `aria-label` на наследуемых атрибутах input.

Строка файла (FileUploaderFile) использует [Tooltip](https://tech.skbkontur.ru/kontur-ui/docs/components/tooltip.md) и [Hint](https://tech.skbkontur.ru/kontur-ui/docs/components/hint.md). Удаление — фокусируемая кнопка с активацией по `Enter`.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию контрол не меняет свой вид и поведение на мобильных устройствах. Ширину и вид можно задать пропсами `width` и `view`.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-responsive--docs)

## FAQ

**Почему после выбора файла список не проходит `validateBeforeUpload`?**

Убедитесь, что промис разрешается только после проверки. Пустой результат означает успех.

**Как показать ошибку загрузки на сервере?**

Функция `request` должна завершаться отклонённым промисом. Опционально поднимайте состояние формы в `onRequestError`.

## Source

[`components/FileUploader/FileUploader.tsx`](https://github.com/skbkontur/retail-ui/blob/master/packages/react-ui/components/FileUploader/FileUploader.tsx)
