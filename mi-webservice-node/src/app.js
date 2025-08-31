const express = require('express');
const usuariosRouter = require('./routes/usuarios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde Node.js!' });
});

app.use('/api/usuarios', usuariosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
