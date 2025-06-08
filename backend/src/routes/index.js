// routes/index.js
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const analyzeRoutes = require('./analyzeRoutes'); // <- Tambahkan ini

const routes = [
  ...authRoutes,
  ...profileRoutes,
  ...analyzeRoutes, // <- Tambahkan ini
];

module.exports = routes;
