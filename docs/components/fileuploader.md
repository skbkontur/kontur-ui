# FileUploader

> `FileUploader` — контрол для выбора пользователем файла на компьютере и отображения статуса его отправки на сервер. Можно использовать для синхронной отправки данных, например, в форме. Или же можно использовать в асинхронном режиме.

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_input-data_fileuploader_fileuploader--docs)

## Import

```jsx
import { FileUploader } from '@skbkontur/react-ui';
```

## Props

- **error?**: Переводит контрол в состояние валидации "ошибка". */ /** Состояние ошибки всего контрола
- **warning?**: Переводит контрол в состояние валидации "предупреждение"
- **validationTooltipPosition?**: Задает приоритетное расположение подсказки относительно контрола (default: `'top left'`)
- **withValidationTooltip?**: Использовать тултип для отображения валидации (default: `false`)
- **withWarningIcon?**: Использовать иконку для ворнинга (восклицательный знак) (default: `false`)
- **width?**: Задает длину компонента.
- **size?**: Задаёт размер контрола. (default: `small`)
- **hideFiles?**: Скрывает отображение файлов. (default: `false`)
- **uploaderText?**: Пользовательский текст для загрузки файла (default: `'Загрузить файл'`)
- **uploaderIcon?**: Пользовательская иконка для загрузки файла (default: `UploadIcon`)
- **view?**: Вид компонента - `row` — строчный вид - `tile` — плиточный вид (default: `row`)
- **validationSummary?**: Отображать ли саммари с детализацией ошибок. Работает с версией темы >= 5_5. - `auto` — саммари отображается, если количество загруженных файлов >= validationSummaryStart - `enabled` — всегда включено - `disabled` — всегда отключено (default: `auto`)
- **validationSummaryStart?**: Количество файлов, от которого показываем саммари (при validationSummary = `auto`) (default: `5`)
- **uploadButtonPosition?**: Позиционирование области загрузки файла (default: `start`)
- **request?**: Задает функцию, через которую отправляются файлы. Используется для отслеживания статуса загрузки файла.
- **onRequestSuccess?**: Задает функцию, которая вызывается при удачной попытке отправки через request.
- **onRequestError?**: Задает функцию, которая вызывается при неудачной попытке отправки через request.
- **validateBeforeUpload?**: Определяет функцию валидации каждого файла. Срабатывает после выбора файлов и перед попыткой отправить в request. Чтобы вывести валидацию ошибки, промис должен вернуть строку или объект с ошибкой.
- **renderFile?**: Задает функцию, которая позволяет кастомизировать файлы. Через нее можно вешать кастомные валидации на каждый файл. (default: `(props: FileUploaderFileProps) => <FileUploaderFile {...props} />`)

## Локали по умолчанию (см. [LocaleContext](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-locale--localecontext))

Любой текст в контроле можно поменять через `LocaleContext`.

```typescript static
interface FileUploaderLocale {
  chooseFile: string;
  choosedFile: string;
  orDragHere: string;
  requestErrorText: string;
  errors: string[];
  warnings: string[];
}

const ru_RU = {
  chooseFile: 'Выберите файл',
  choosedFile: 'Выбран файл',
  orDragHere: 'или перетащите сюда',
  requestErrorText: 'Файл не удалось загрузить на сервер, повторите попытку позже',
  errors: ['ошибка', 'ошибки', 'ошибок'],
  warnings: ['предупреждение', 'предупреждения', 'предупреждений'],
};

const en_GB = {
  chooseFile: 'Select a file',
  choosedFile: 'File selected',
  orDragHere: 'or drag here',
  requestErrorText: 'The file could not be uploaded to the server, please try again later',
  errors: ['error', 'errors', 'errors'],
  warnings: ['warning', 'warnings', 'warnings'],
};
```

### Example1

```tsx
return <FileUploader />;
```

### Example2

```tsx
const request = () => Promise.resolve();

  return <FileUploader request={request} />;
```

### Example3

```tsx
const request = () => Promise.reject();

  return <FileUploader request={request} multiple />;
```

### Example4

```tsx
const initialFiles = [createFile('test1.txt'), createFile('test2.txt')];
  return <FileUploader multiple initialFiles={initialFiles} />;
```

### Example5

Для кастомизации отображения файлов можно использовать проп `renderFile`. Более подробные примеры кастомизации отображения файлов можно посмотреть на [странице](https://tech.skbkontur.ru/kontur-ui/?path=/docs/input-data-fileuploader-fileuploaderfile--docs) компонента `FileUploaderFile`.

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

### Example6

```tsx
return <FileUploader multiple accept="image/*" />;
```

### Example7

```tsx
return (
    <FileUploader
      withValidationTooltip
      validateBeforeUpload={({ originalFile }) => {
        return Promise.resolve(`У файла ${originalFile.name} неверный формат`);
      }}
    />
  );
```

### Example8

```tsx
return (
    <FileUploader
      multiple
      validateBeforeUpload={({ originalFile }) => {
        return Promise.resolve(`У файла ${originalFile.name} неверный формат`);
      }}
    />
  );
```

### Example9

Чтобы указать на ошибку загрузки файла на сервер, функция `request` должна вернуть `Promise` в состоянии `rejected`. Тогда рядом с файлом появится иконка ошибки. Проп `onRequestError` можно использовать для переключения состояния ошибки всей формы.

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
      <FileUploader multiple error={error} onRemove={() => setError(false)} request={request} onRequestError={reject} />
      <Toggle checked={showError} onValueChange={setShowError}>
        Показывать ошибку загрузки
      </Toggle>
    </Gapped>
  );
```

### Example10

```tsx
return <FileUploader multiple error />;
```

### Example11

В компоненте есть возможность скрыть дефолтный список файлов и нарисовать свой, используя пропы `hideFiles`, `onAttach`, `onRemove` или `onValueChange`. Если требуется удалить файлы вручную, можно использовать метод `removeFile` из `ref`. При его вызове автоматически вызываются колбэки `onValueChange` и `onRemove`.

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

### Example14

Саммари будет показано автоматически, если загружено больше 5 файлов (по умолчанию). Работает с версией темы >= 5_5. Попробуй загрузить несколько файлов, в примере уже дописан обработчик на валидацию файлов.

```tsx
function containsCyrillicLetters(str: string): boolean {
    // Регулярное выражение для проверки наличия символов кириллицы
    const regex = /[\u0400-\u04FF]/;
    return regex.test(str);
  }

  function containsDigits(str: string): boolean {
    // Регулярное выражение для проверки наличия цифр
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

### Customization

Обновленное отображение плиткой. При мультизагрузке можно настроить позиционирование для области загрузки файла - добавить на старт или в конец / export const Example15 = () => { const initialFiles = [createFile('test1.txt'), createFile('test2.txt')]; return <FileUploader multiple width={400} view="tile" uploadButtonPosition="end" initialFiles={initialFiles} />; }; Example15.storyName = 'Отображение файлов плиткой'; /** Внешний вид контрола, в том числе цвет текстов, можно настроить через `ThemeContext`. Заменить текст можно через `uploaderText`, а иконку через `uploaderIcon`

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
      <FileUploader multiple initialFiles={initialFiles} uploaderText="Добавь файл" />
    </ThemeContext.Provider>
  );
```