// backend/src/server.js
require('dotenv').config();
const Hapi = require('@hapi/hapi');
const { pool, testConnection } = require('./config/db'); // import testConnection
const routes = require('./routes');

const init = async () => {
  await testConnection(); // cek koneksi DB dulu

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  console.log('Routes terdaftar:');
  server.table().forEach(route => {
    console.log(`${route.method.toUpperCase()} ${route.path}`);
  });

  await server.start();
  console.log(`🚀 Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

