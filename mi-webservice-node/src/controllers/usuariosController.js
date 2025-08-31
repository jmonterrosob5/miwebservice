const pool = require('../db/connection');

const crearUsuario = async (req, res) => {
  const { nombre, correo, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, correo, password) VALUES ($1, $2, $3) RETURNING *',
      [nombre, correo, password]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearUsuario };
