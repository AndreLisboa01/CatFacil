/*const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Routes'); // Este é o caminho para o seu arquivo de rotas personalizado

// Configurar middleware para analisar o corpo da requisição como JSON
app.use(express.json());

// Aqui você pode incluir outros middleware necessários antes das rotas, se necessário.

// Conexão com o MongoDB
const MONGO_URI = 'mongodb://127.0.0.1:27017/meuBanco';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to the database');
}).on('error', (error) => {
  console.log('Error connecting to the database:', error);
});

// Rotas
app.use('/', routes); // Adicionando suas rotas definidas em Routes.js ao aplicativo

// Aqui você define a porta que o servidor irá ouvir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/











const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Routes'); // Este é o caminho para o seu arquivo de rotas personalizado

// Configurar middleware para analisar o corpo da requisição como JSON
app.use(express.json());

// Aqui você pode incluir outros middleware necessários antes das rotas, se necessário.

// Conexão com o MongoDB
const MONGO_URI = 'mongodb://127.0.0.1:27017/meuBanco';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to the database');
}).on('error', (error) => {
  console.log('Error connecting to the database:', error);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
})

// Rotas
app.use('/', routes); // Adicionando suas rotas definidas em Routes.js ao aplicativo

// Aqui você define a porta que o servidor irá ouvir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

