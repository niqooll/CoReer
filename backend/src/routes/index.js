// backend/src/routes/index.js
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const analyzeRoutes = require('./analyzeRoutes');
const historyRoutes = require('./historyRoutes');

const routes = [
    ...authRoutes,
    ...profileRoutes,
    ...analyzeRoutes,
    ...historyRoutes, 
];

module.exports = routes;