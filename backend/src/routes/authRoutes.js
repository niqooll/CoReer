// routes/authRoutes.js
const { registerHandler, loginHandler } = require('../controllers/authController');

const authRoutes = [
  // --- Tambahkan route OPTIONS untuk /register ---
  {
    method: 'OPTIONS',
    path: '/register',
    handler: (request, h) => {
      // Handler ini tidak perlu melakukan apa-apa selain merespons OK.
      // Hapi akan otomatis menambahkan header CORS yang benar karena sudah dikonfigurasi di server.js.
      return h.response().code(200);
    },
    // Opsional: Anda bisa menambahkan opsi CORS spesifik di sini, tapi
    // karena sudah ada CORS global di server.js, ini biasanya tidak wajib.
    // Namun, beberapa developer suka menambahkannya untuk kejelasan atau override.
    // options: {
    //   cors: {
    //     origin: ['*'],
    //     headers: ['Accept', 'Content-Type'], // Sesuaikan jika ada header kustom lain
    //     maxAge: 86400 // Cache preflight selama 24 jam
    //   }
    // }
  },
  {
    method: 'POST',
    path: '/register',
    handler: registerHandler,
  },
  // --- Tambahkan route OPTIONS untuk /login ---
  {
    method: 'OPTIONS',
    path: '/login',
    handler: (request, h) => {
      // Sama seperti di atas, cukup respons OK
      return h.response().code(200);
    },
    // options: {
    //   cors: {
    //     origin: ['*'],
    //     headers: ['Accept', 'Content-Type', 'Authorization'], // Authorization juga relevan untuk login
    //     maxAge: 86400
    //   }
    // }
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
  },
];

module.exports = authRoutes;