const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// Используем middleware для сжатия данных
app.use(compression());

// Указываем папку, в которой находятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Создаем экземпляр Router
const router = express.Router();

// Определяем маршруты с использованием Router
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/integration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'integration.html'));
});

router.get('/partnership', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'partnership.html'));
});
router.get('/partner-application-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'partner-application-form.html'));
});

// Используем Router для обработки маршрутов
app.use('/', router);

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
