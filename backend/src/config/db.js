// backend/src/config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'auth_db',
  password: '311004',
  port: 5432,
});

// Fungsi untuk cek koneksi DB
async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected:', res.rows[0].now);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // keluar dari aplikasi jika gagal konek DB
  }
}

module.exports = { pool, testConnection };

