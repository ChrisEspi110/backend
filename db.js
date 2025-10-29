require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()'); // consulta simple para probar conexión
        res.json({ success: true, server_time: result.rows[0] });
    } catch (err) {
        console.error('❌ Error al conectar a la DB:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});
