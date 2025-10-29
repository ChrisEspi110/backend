const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    ssl: { rejectUnauthorized: false }
});

pool.connect()
    .then(client => {
        console.log('Conectado a la base de datos de Render');
        client.release();
    })
    .catch(err => {
        console.error('Error al conectar', err);
    });

module.exports = pool;
