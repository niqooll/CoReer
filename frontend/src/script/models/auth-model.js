// src/script/models/auth-model.js
import CONFIG from '../config.js';

const API_BASE = CONFIG.BASE_URL;

// Fungsi Login
export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    let errMessage = 'Login failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  const result = await res.json();
  
  // Simpan user dan token ke localStorage
  const userData = {
    token: result.token,
    email: email,
    username: result.username || null,
  };

  localStorage.setItem('currentUser', JSON.stringify(userData));
  return userData;
}

// Fungsi Register
export async function register(username, email, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) {
    let errMessage = 'Register failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  return res.json();
}

// Fungsi untuk ambil user dari localStorage
export function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson || userJson === 'undefined') return null;

  try {
    return JSON.parse(userJson);
  } catch (_) {
    localStorage.removeItem('currentUser');
    return null;
  }
}

// Cek apakah user sudah login
export function isLoggedIn() {
  return !!getCurrentUser();
}

// Logout / hapus data user di localStorage
export function logout() {
  localStorage.removeItem('currentUser');
}

// --- FUNGSI BARU: Verifikasi Token ---
export async function verifyToken() {
  const user = getCurrentUser();
  if (!user || !user.token) {
    return false; // Tidak ada pengguna atau token, berarti tidak login
  }

  try {
    // Coba panggil endpoint yang dilindungi, misalnya /profile
    const res = await fetch(`${API_BASE}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`, // Kirim token untuk verifikasi
      },
    });

    if (!res.ok) {
      // Jika respons bukan OK (misalnya 401 Unauthorized dari backend)
      throw new Error('Verifikasi token gagal');
    }

    // Jika respons OK, token masih valid
    return true;

  } catch (error) {
    console.error('Verifikasi token gagal:', error.message);
    // Hapus token jika ada kesalahan (expired, invalid, dll.)
    logout(); // Panggil fungsi logout yang sudah ada
    return false;
  }
}
