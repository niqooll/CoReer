// routes/profileRoutes.js
const authMiddleware = require('../middlewares/authMiddleware');
const { updateUserProfile, changeUserPassword } = require('../models/userModel');

const profileRoutes = [
  {
    method: 'GET',
    path: '/profile',
    options: {
      pre: [ { method: authMiddleware } ], // middleware sebelum handler
    },
    handler: (request, h) => {
      // data user bisa diakses lewat request.auth.credentials
      const userData = request.auth.credentials;
      return {
        status: 'success',
        message: 'User profile data',
        data: userData,
      };
    },
  },

  {
    method: 'PUT',
    path: '/profile',
    options: {
      pre: [{ method: authMiddleware }],
    },
    handler: async (request, h) => {
      console.log('Request payload:', request.payload); // Tambahkan ini
      const { username, email } = request.payload;
      const userId = request.auth.credentials.id;

      try {
        const updatedUser = await updateUserProfile(userId, username, email);
        return {
          status: 'success',
          message: 'Profile updated',
          username: updatedUser.username,
          email: updatedUser.email,
        };
      } catch (err) {
        return h.response({
          status: 'fail',
          message: err.message,
        }).code(400);
      }
    },
  },
  {
    method: 'PUT',
    path: '/change-password',
    options: {
      pre: [{ method: authMiddleware }],
    },
    handler: async (request, h) => {
      const userId = request.auth.credentials.id;
      const { oldPassword, newPassword } = request.payload;

      try {
        // Panggil fungsi model
        await changeUserPassword(userId, oldPassword, newPassword);
        return {
          status: 'success',
          message: 'Password changed successfully',
        };
      } catch (err) {
        return h.response({
          status: 'fail',
          message: err.message,
        }).code(400);
      }
    },
  },
];

module.exports = profileRoutes;

