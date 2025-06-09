const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres.sjwnuwpybgdcpavdmeyl',
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  database: 'postgres',
  password: '31Agustus2004',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;

// Fungsi cek koneksi DB
async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected:', res.rows[0].now);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
}

module.exports = { pool, testConnection };
