// src/script/models/auth-model.js
const API_BASE = 'http://localhost:3000'; // Ganti jika backend pakai port lain

// Fungsi Login
export async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  // Tangani error dari server
  if (!res.ok) {
    let errMessage = 'Login failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  // Ambil hasil dari backend
  const result = await res.json();
  const user = result.user; // ✅ user disimpan di dalam object result
  localStorage.setItem('currentUser', JSON.stringify(user)); // simpan session
  return user;
}

// Fungsi Register
export async function register(username, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  // Tangani error dari server (misal: username sudah ada)
  if (!res.ok) {
    let errMessage = 'Register failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  return res.json(); // hasil: { status, message }
}

// Ambil data user yang sedang login dari localStorage
export function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;

  try {
    return JSON.parse(userJson);
  } catch (_) {
    return null;
  }
}

// Logout user
export function logout() {
  localStorage.removeItem('currentUser');
}
