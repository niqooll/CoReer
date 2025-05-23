// backend/src/routes/index.js
const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: async (request, h) => {
      const { username, email, password } = request.payload;

      // cek apakah username atau email sudah ada di DB
      const userCheck = await pool.query(
        'SELECT * FROM users WHERE username = $1 OR email = $2',
        [username, email]
      );

      if (userCheck.rows.length > 0) {
        return h.response({
          status: 'fail',
          message: 'Username or email already exists',
        }).code(400);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
        [username, email, hashedPassword]
      );

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
      const { email, password } = request.payload;

      const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userQuery.rows.length === 0) {
        return h.response({
          status: 'fail',
          message: 'Invalid email or password',
        }).code(401);
      }

      const user = userQuery.rows[0];

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return h.response({
          status: 'fail',
          message: 'Invalid email or password',
        }).code(401);
      }

      return {
        status: 'success',
        message: 'Login successful',
        user: {
          username: user.username,
          email: user.email,
        },
      };
    },
  },
];

module.exports = routes;
