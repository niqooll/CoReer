// backend/src/server.js
require('dotenv').config();
const Hapi = require('@hapi/hapi');
const { pool, testConnection } = require('./config/db');
const routes = require('./routes');
const Jwt = require('@hapi/jwt'); 

const init = async () => {
  await testConnection();

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
      console.log('--- JWT Validate Function Called ---');
      console.log('Artifacts received:', artifacts);

      if (!artifacts || !artifacts.decoded || !artifacts.decoded.payload) {
        console.log('JWT Validate: Artifacts, decoded token, or payload is missing/invalid.');
        return { isValid: false }; 
      }

      console.log('Decoded JWT payload (artifacts.decoded.payload):', artifacts.decoded.payload);

      // PERBAIKAN: Akses ID pengguna dari artifacts.decoded.payload.id
      if (!artifacts.decoded.payload.id) { // <-- PERBAIKAN DI SINI
        console.log('JWT Validate: User ID (id) missing in decoded token payload.');
        return { isValid: false }; 
      }

      const user = {
        id: artifacts.decoded.payload.id, // <-- PERBAIKAN DI SINI
        email: artifacts.decoded.payload.email, // <-- PERBAIKAN DI SINI
      };
      console.log('JWT Validate: User credentials to be set:', user);

      return { isValid: true, credentials: user };
    }
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
