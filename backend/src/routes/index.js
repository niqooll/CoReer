// routes/index.js
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');

const routes = [
  ...authRoutes,
  ...profileRoutes,
];

module.exports = routes;
