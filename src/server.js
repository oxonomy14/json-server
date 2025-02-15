const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware для обработки JSON
app.use(express.json());

// Читаем данные из файла test-data.json
const data = JSON.parse(fs.readFileSync('/src/data/test-db.json', 'utf8'));

// Эндпоинт для получения списка пользователей
app.get('/users', (req, res) => {
  res.json(data.users);
});

// Эндпоинт для получения списка товаров
app.get('/products', (req, res) => {
  res.json(data.products);
});

// Эндпоинт для получения заказов
app.get('/orders', (req, res) => {
  res.json(data.orders);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
