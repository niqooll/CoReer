// routes/authRoutes.js
const { registerHandler, loginHandler } = require('../controllers/authController');

const authRoutes = [
  {
    method: 'POST',
    path: '/register',
    handler: registerHandler,
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
  },
];

module.exports = authRoutes;
