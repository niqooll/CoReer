const jwt = require('jsonwebtoken');

const authMiddleware = (request, h) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return h.response({
        status: 'fail',
        message: 'Missing authorization header',
      }).code(401).takeover();
    }

    // Format biasanya: "Bearer <token>"
    const token = authHeader.split(' ')[1];
    if (!token) {
      return h.response({
        status: 'fail',
        message: 'Token not found',
      }).code(401).takeover();
    }

    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Simpan data user hasil decode ke request untuk bisa dipakai di handler
    request.auth = {
      credentials: decoded,
    };

    return h.continue; // lanjut ke handler berikutnya

  } catch (err) {
    return h.response({
      status: 'fail',
      message: 'Invalid or expired token',
    }).code(401).takeover();
  }
};

module.exports = authMiddleware;
