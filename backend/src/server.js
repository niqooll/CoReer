require('dotenv').config();
const Hapi = require('@hapi/hapi');
const { pool, testConnection } = require('./config/db');
const routes = require('./routes');
const Jwt = require('@hapi/jwt');

const init = async () => {
  // Pastikan koneksi database berhasil sebelum memulai server
  await testConnection();
  console.log('Koneksi database berhasil.'); // Log untuk konfirmasi koneksi DB

  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.validator(require('@hapi/joi'));

  await server.register(Jwt);
  server.auth.strategy('jwt', 'jwt', {
    keys: process.env.JWT_SECRET,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      nbf: true,
      exp: true,
      maxAgeSec: 14400, // 4 jam
      timeSkewSec: 15
    },
    validate: async (artifacts, request, h) => {
      // Log ini penting untuk debugging masalah autentikasi yang mendasar
      if (!artifacts || !artifacts.decoded || !artifacts.decoded.payload) {
        console.log('JWT Validate: Artifacts, decoded token, or payload is missing/invalid.');
        return { isValid: false };
      }

      // Pastikan ID pengguna ada di payload token
      if (!artifacts.decoded.payload.id) {
        console.log('JWT Validate: User ID (id) missing in decoded token payload.');
        return { isValid: false };
      }

      // Ambil kredensial pengguna dari payload JWT
      const user = {
        id: artifacts.decoded.payload.id,
        email: artifacts.decoded.payload.email,
      };
      // Tidak perlu melog kredensial setiap kali validasi, kecuali saat debugging intensif
      // console.log('JWT Validate: User credentials to be set:', user);

      return { isValid: true, credentials: user };
    }
  });

  server.route(routes);

  // Log ini berguna untuk verifikasi rute saat startup, tetapi bisa dihapus untuk produksi yang sangat ringkas
  // console.log('Routes terdaftar:');
  // server.table().forEach(route => {
  //   console.log(`${route.method.toUpperCase()} ${route.path}`);
  // });

  await server.start();
  console.log(`🚀 Server berjalan di: ${server.info.uri}`); // Log penting untuk konfirmasi startup server
};

// Tangani rejection yang tidak tertangani untuk menghindari proses crash
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err); // Gunakan console.error untuk kesalahan
  process.exit(1);
});

init();