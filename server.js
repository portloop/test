const express = require('express');
const path = require('path');

const app = express();

// Указываем папку, в которой находятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Отправляем файл index.html при запросе "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
