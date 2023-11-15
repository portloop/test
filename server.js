const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// Используем middleware для сжатия данных
app.use(compression());

// Указываем папку, в которой находятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Middleware для скрытия расширений .html
app.use((req, res, next) => {
  const ext = path.extname(req.path);
  if (!ext || ext === '.html') {
    const newPath = path.join(__dirname, 'public', req.path + '.html');
    return res.sendFile(newPath);
  }
  next();
});

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
