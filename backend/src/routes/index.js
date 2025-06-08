// backend/src/routes/index.js
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const analyzeRoutes = require('./analyzeRoutes');
const historyRoutes = require('./historyRoutes'); // <- Ini akan menjadi array

const routes = [
    ...authRoutes,
    ...profileRoutes,
    ...analyzeRoutes,
    ...historyRoutes, // <- Sekarang ini adalah array yang bisa di-iterable
];

module.exports = routes;