// models/userModel.js
const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

async function findUserByUsernameOrEmail(username, email) {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1 OR email = $2',
    [username, email]
  );
  return result.rows;
}

async function findUserByEmail(email) {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0]; // satu user
}

async function createUser(username, email, hashedPassword) {
  await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
    [username, email, hashedPassword]
  );
}

async function updateUserProfile(userId, username, email) {
  const result = await pool.query(
    'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING id, username, email',
    [username, email, userId]
  );
  if (result.rowCount === 0) throw new Error('User not found');
  return result.rows[0];
}

async function changeUserPassword(userId, oldPassword, newPassword) {
  // 1. Cari user berdasarkan ID
  const result = await pool.query('SELECT password FROM users WHERE id = $1', [userId]);
  if (result.rowCount === 0) throw new Error('User not found');

  const hashedPassword = result.rows[0].password;

  // 2. Cek kecocokan password lama
  const match = await bcrypt.compare(oldPassword, hashedPassword);
  if (!match) throw new Error('Old password is incorrect');

  // 3. Hash password baru
  const newHashedPassword = await bcrypt.hash(newPassword, 10);

  // 4. Update password
  await pool.query('UPDATE users SET password = $1 WHERE id = $2', [newHashedPassword, userId]);

  return true;
}

module.exports = {
  findUserByUsernameOrEmail,
  findUserByEmail,
  createUser,
  updateUserProfile,
  changeUserPassword,
};
