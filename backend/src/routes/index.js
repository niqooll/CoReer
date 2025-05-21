// backend/src/routes/index.js
const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: async (request, h) => {
      const { username, password } = request.payload;

      // cek apakah username sudah ada di DB
      const userCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (userCheck.rows.length > 0) {
        return h.response({
          status: 'fail',
          message: 'Username already exists',
        }).code(400);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);

      return {
        status: 'success',
        message: 'User registered successfully',
      };
    },
  },

  {
    method: 'POST',
    path: '/login',
    handler: async (request, h) => {
      const { username, password } = request.payload;

      const userQuery = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (userQuery.rows.length === 0) {
        return h.response({
          status: 'fail',
          message: 'Invalid username or password',
        }).code(401);
      }

      const user = userQuery.rows[0];

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return h.response({
          status: 'fail',
          message: 'Invalid username or password',
        }).code(401);
      }

      return {
        status: 'success',
        message: 'Login successful',
        user: {
          username: user.username,
        },
      };
    },
  },
];

module.exports = routes;
