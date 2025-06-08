// backend/src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  findUserByUsernameOrEmail,
  findUserByEmail,
  createUser,
} = require('../models/userModel');

const { registerSchema, loginSchema } = require('../validations/authValidation');

require('dotenv').config();

const registerHandler = async (request, h) => {
  const { error } = registerSchema.validate(request.payload);
  if (error) {
    return h.response({
      status: 'fail',
      message: error.details[0].message,
    }).code(400);
  }

  const { username, email, password } = request.payload;

  const existingUsers = await findUserByUsernameOrEmail(username, email);
  if (existingUsers.length > 0) {
    return h.response({
      status: 'fail',
      message: 'Username or email already exists',
    }).code(400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(username, email, hashedPassword);

  return {
    status: 'success',
    message: 'User registered successfully',
  };
};

const loginHandler = async (request, h) => {
  const { error } = loginSchema.validate(request.payload);
  if (error) {
    return h.response({
      status: 'fail',
      message: error.details[0].message,
    }).code(400);
  }

  const { email, password } = request.payload;

  const user = await findUserByEmail(email);
  if (!user) {
    return h.response({
      status: 'fail',
      message: 'Invalid email or password',
    }).code(401);
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return h.response({
      status: 'fail',
      message: 'Invalid email or password',
    }).code(401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    status: 'success',
    message: 'Login successful',
    token,
    username: user.username,
  };
};

module.exports = { registerHandler, loginHandler };
