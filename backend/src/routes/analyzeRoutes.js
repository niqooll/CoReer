// src/routes/analyzeRoutes.js
const { matchCV } = require('../controllers/analyzeController');

const analyzeRoutes = [
  {
    method: 'POST',
    path: '/analyze/match-cv',
    handler: matchCV,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024, // Batas ukuran file 10MB
      },
    },
  },
];

module.exports = analyzeRoutes;