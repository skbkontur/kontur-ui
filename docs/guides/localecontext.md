# Локализации компонентов через контекст `React.Context<LocaleContextProps>`

```typescript static
interface LocaleContextProps {
  locale?: LocaleControls;
  langCode?: LangCodes;
}
```

## Доступные языки

```typescript static
enum LangCodes {
  ru_RU = 'ru_RU',
  en_GB = 'en_GB',
}
```

## LocaleControls

```typescript static
interface LocaleControls {
  [key: string]: any;
  TokenInput?: Partial<TokenInputLocale>;
  Token?: Partial<TokenLocale>;
  ComboBox?: Partial<ComboBoxLocale>;
  Select?: Partial<SelectLocale>;
  Paging?: Partial<PagingLocale>;
  DatePicker?: Partial<DatePickerLocale>;
  Calendar?: Partial<CalendarLocale>;
  FileUploader?: Partial<FileUploaderLocale>;
  PasswordInput?: Partial<PasswordInputLocale>;
  SidePage?: Partial<SidePageLocale>;
}
```

## Использование

Дефолтная локализация `<TokenInput />`

Кастомная локализация `<TokenInput />`

Некоторые контролы используют компоненты других контролов.

Для инкапсуляции локализации можно использовать несколько контекстов.

Локализация функционального компонента через useContext.

## Локализация @skbkontur/react-ui-addons

Компоненты `@skbkontur/react-ui-addons` так же поддерживают локализацию через `LocaleContext` из `@skbkontur/react-ui`.
См. пример с кастомной локализацией. Дефолтные локали описаны для каждого компонента в [докумендации аддонов](https://ui.gitlab-pages.kontur.host/docs/#/react-ui-addons).