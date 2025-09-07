const express = require('express');
const usuariosRouter = require('./routes/usuarios');
require('dotenv').config();

const app = express();
app.use(express.json());

// ✅ Ruta raíz para evitar "Cannot GET /"
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi Web Service!');
});

// Ruta de saludo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde Node.js!' });
});

// Rutas de usuarios
app.use('/api/usuarios', usuariosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
