# Проект можно посмотреть по адресу ниже:

https://aviasales-test-exercise.herokuapp.com

# В проект добавлены тесты на Cypress:

Опробован подход Application Actions: теперь состоянием приложения можно управлять напрямую из тестов.
Это полезно, когда мы хотим задиспатчить тестовые данные перед прогоном определенного теста.

Чтобы запустить тесты из проекта:

```
npm run e2e
```

Чтобы запустить Cypress Test Runner:

```
npx cypress open
```

# Тестовое задание Aviasales ([frontend](https://aviasales.recruitee.com/o/frontend-developer-js-coffeescript-react%C2%A0redux--aviasalesru))

Основной frontend проект нашей команды — это страница выдачи билетов со множеством фильтров, настроек и, собственно, билетов.
Проект написан на React, поэтому тестовое задание приближено к ежедневным задачам.

Перед тобой упрощенный макет нашего проекта — список билетов, фильтры и сортировка. Также у нас есть небольшой сервер для тестового задания, который работает схоже с нашим основным backend движком и реализует технику long polling для передачи пачек билетов. Тебе необходимо реализовать клиент, который будет получать случайно сгенерированные билеты от сервера и отрисует интерфейс согласно макету в Figma. Достаточно будет отрендерить 5 первых билетов соотвествующих выбранным фильрам и сортировки.

## Условия

- Используй React
- Используй TS или JS
- Работоспособность в актуальной версии Google Chrome
- Остальное на твоё усмотрение

## Документация по работе с сервером: [Здесь](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales_frontend/server.md)

## Макет (Figma)

https://github.com/KosyanMedia/test-tasks/raw/f0f60244b045928746188a86ba4f76ddb5515111/aviasales_frontend/Aviasales%20Test%20Task.fig

P.S.: Картинки авиакомпаний можешь брать с нашего CDN: `//pics.avs.io/99/36/{IATA_CODE_HERE}.png`
