# Loader

> Package: @skbkontur/react-ui | [Storybook](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data_loader--docs)

## Import

```jsx
import { Loader } from '@skbkontur/react-ui';
```

## Props

- **active?**: Показывает лоадер. (default: `false`)
- **caption?**: Подпись под спиннером. (default: `""`)
- **component?**: Задает компонент, заменяющий спиннер.
- **type?**: Размер спиннера и текста. (default: `normal.`)
- **delayBeforeSpinnerShow?**: Время в миллисекундах для показа вуали без спиннера. (default: `300`)
- **minimalDelayBeforeSpinnerHide?**: Минимальное время в миллисекундах для показа спиннера. (default: `1000.`)

## Использование

**Когда использовать**

- Для индикации загрузки отдельных элементов интерфейса. Контрол позволяет настраивать внешний вид и управлять времем показа над заданным компонентом или контентом.

**Когда не использовать**

- Для индикации длительных операций обмена данными с сервером, таких как загрузка данных, сохранение формы, отправка запросов и др. используйте [Глобальный лоадер](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-globalloader--docs).
- Для инлайн-встраивания или более гибкой настройки внешнего вида (цвет, толщина, затемнённый режим) используйте [Спиннер](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_display-data-spinner--docs).

## Доступность

Лоадер визуально отображает состояние загрузки.

**Рекомендации:**

- Предоставляйте текстовые альтернативы для индикации состояния операции.
- Убедитесь, что пользователи могут понять, что происходит загрузка, даже без визуального индикатора.

ℹ️ **Полезно:** [Чек-лист доступности](https://tech.skbkontur.ru/kontur-ui/?path=/docs/accessibility--docs)

## Адаптивность

По умолчанию лоадер не меняет свой вид и поведение на мобильных устройствах.

ℹ️ **Полезно:** [Адаптивность компонентов](https://tech.skbkontur.ru/kontur-ui/?path=/docs/react-ui_information-mobiles--docs)

### ExampleBasic

```tsx
const [isActive, setIsActive] = React.useState(true);
  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>{isActive ? 'Скрыть лоадер' : 'Показать лоадер'}</Button>

      <Loader active={isActive}>
        <p>
          Заполнение бумажных платежных поручений традиционно требует колоссального внимания и предельной концентрации,
          так как малейшая ошибка в любой цифре может привести к серьезным финансовым последствиям или задержкам в
          зачислении средств. Современная система автоматизации позволяет полностью исключить человеческий фактор,
          формируя электронные платежки в автоматическом режиме. Теперь вам не нужно вручную вводить сложные коды
          бюджетной классификации, реквизиты плательщика или данные налоговой инспекции — все необходимые поля
          заполняются системой самостоятельно на основе актуальных данных. Вы можете гибко выбирать наиболее подходящий
          формат документа, будь то вариант для внутреннего согласования с директором, файл для отправки в банковскую
          систему или версия для оплаты через банкомат.
        </p>
      </Loader>
    </>
  );
```

### ExampleCaption

Проп `caption` задаёт подпись для лоадера. Примеры наиболее подходящих формулировок перечислены в [Гайде](https://guides.kontur.ru/components/progress-indicators/spinner/).

```tsx
const [isActive, setIsActive] = React.useState(true);
  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>{isActive ? 'Скрыть лоадер' : 'Показать лоадер'}</Button>

      <Loader caption="Проверка отчета" active={isActive}>
        <p>
          Заполнение бумажных платежных поручений традиционно требует колоссального внимания и предельной концентрации,
          так как малейшая ошибка в любой цифре может привести к серьезным финансовым последствиям или задержкам в
          зачислении средств. Современная система автоматизации позволяет полностью исключить человеческий фактор,
          формируя электронные платежки в автоматическом режиме. Теперь вам не нужно вручную вводить сложные коды
          бюджетной классификации, реквизиты плательщика или данные налоговой инспекции — все необходимые поля
          заполняются системой самостоятельно на основе актуальных данных. Вы можете гибко выбирать наиболее подходящий
          формат документа, будь то вариант для внутреннего согласования с директором, файл для отправки в банковскую
          систему или версия для оплаты через банкомат.
        </p>
      </Loader>
    </>
  );
```

### ExampleSize

Проп `type` задаёт размер лоадера. Доступные размеры: - big — для использования в рамках всей страницы. - normal (по умолчанию) — для показа в модальных окнах и компонентах среднего размера. - mini — для встраивания в строку или небольшой контрол.

```tsx
const [isActive, setIsActive] = React.useState(true);
  const Content = () => (
    <>
      <p>
        Заполнение бумажных платежных поручений традиционно требует колоссального внимания и предельной концентрации,
        так как малейшая ошибка в любой цифре может привести к серьезным финансовым последствиям или задержкам в
        зачислении средств. Современная система автоматизации позволяет полностью исключить человеческий фактор,
        формируя электронные платежки в автоматическом режиме. Теперь вам не нужно вручную вводить сложные коды
        бюджетной классификации, реквизиты плательщика или данные налоговой инспекции — все необходимые поля заполняются
        системой самостоятельно.
      </p>
    </>
  );
  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>{isActive ? 'Скрыть лоадер' : 'Показать лоадер'}</Button>

      <Loader type="big" caption="big" active={isActive}>
        <Content />
      </Loader>

      <Loader type="normal" caption="normal" active={isActive}>
        <Content />
      </Loader>

      <Loader type="mini" caption="mini" active={isActive}>
        <Content />
      </Loader>
    </>
  );
```

### ExampleTime

Для того чтобы спиннер не мигал, применяются 2 пропса: - `delayBeforeSpinnerShow` — задержка перед показом лоадера (по умолчанию 300 миллисекунд) - `minimalDelayBeforeSpinnerHide` — минимальное время показа лоадера (по умолчанию 1 секунда)

```tsx
const [loading, setLoading] = React.useState(false);
  const [delayBeforeShow, setDelayBeforeShow] = React.useState(300);
  const [minDisplayTime, setMinDisplayTime] = React.useState(1000);
  return (
    <>
      <Gapped vertical gap={12}>
        <Gapped gap={32}>
          <label htmlFor="delayBeforeSpinnerShow">
            delayBeforeSpinnerShow
            <div style={{ marginTop: 4 }}>
              <Input
                id="delayBeforeSpinnerShow"
                suffix="ms"
                disabled={loading}
                value={delayBeforeShow.toString()}
                onValueChange={(v) => setDelayBeforeShow(Number(v) || 0)}
              />
            </div>
          </label>
          <label htmlFor="minimalDelayBeforeSpinnerHide">
            minimalDelayBeforeSpinnerHide
            <div style={{ marginTop: 4 }}>
              <Input
                id="minimalDelayBeforeSpinnerHide"
                suffix="ms"
                disabled={loading}
                value={minDisplayTime.toString()}
                onValueChange={(v) => setMinDisplayTime(Number(v) || 0)}
              />
            </div>
          </label>
        </Gapped>

        <Button onClick={() => setLoading(!loading)}>{loading ? 'Остановить' : 'Показать лоадер'}</Button>

        <div style={{ maxWidth: 434, background: '#F2F2F2', borderRadius: 8, marginTop: 8 }}>
          <Loader
            active={loading}
            type="normal"
            caption="Проверяем отчёт"
            delayBeforeSpinnerShow={delayBeforeShow}
            minimalDelayBeforeSpinnerHide={minDisplayTime}
          >
            <div style={{ padding: 24 }}>
              Заполнение бумажных платежных поручений требует колоссального внимания. Автоматизация исключает
              человеческий фактор: система самостоятельно заполняет КБК и реквизиты на основе актуальных данных.
            </div>
          </Loader>
        </div>
      </Gapped>
    </>
  );
```