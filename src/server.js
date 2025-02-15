import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Определяем путь к файлу относительно текущего файла
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, 'data', 'test-db.json');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
  res.json(data.users);
});

app.get('/products', (req, res) => {
  res.json(data.products);
});

app.get('/orders', (req, res) => {
  res.json(data.orders);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
