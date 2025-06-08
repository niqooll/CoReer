// src/routes/analyzeRoutes.js
const { matchCV } = require('../controllers/analyzeController');
const Joi = require('@hapi/joi'); // Pastikan Joi diimpor jika digunakan untuk validasi payload

const analyzeRoutes = [
  {
    method: 'POST',
    path: '/analyze/match-cv',
    handler: matchCV,
    options: {
      auth: 'jwt', // <--- INI ADALAH PERBAIKAN UTAMA: Tambahkan ini untuk mengaktifkan autentikasi JWT
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024, // Batas ukuran file 10MB
      },
      description: 'Analyze CV and match with jobs',
      notes: 'Mengunggah file CV dan mengirimkannya ke layanan ML untuk analisis. Setelah analisis berhasil, riwayat akan disimpan.',
      tags: ['api', 'analysis'],
      // Anda bisa menambahkan validasi payload untuk request.payload di sini jika perlu,
      // meskipun sebagian besar validasi file dilakukan di handler matchCV.
      // Contoh:
      // validate: {
      //   payload: Joi.object({
      //     cv: Joi.any().required().meta({ swaggerType: 'file' }).description('CV file (PDF)'),
      //   }),
      // },
    },
  },
];

module.exports = analyzeRoutes;
