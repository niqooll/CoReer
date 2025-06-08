// src/script/models/user-model.js
import CONFIG from '../config.js';
import { getCurrentUser } from './auth-model.js';

const API_BASE = CONFIG.BASE_URL;

export async function updateProfile(username, email) {
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.token) throw new Error('Unauthorized');

  const res = await fetch(`${API_BASE}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${currentUser.token}`,
    },
    body: JSON.stringify({ username, email }),
  });

  if (!res.ok) {
    let errMsg = 'Update failed';
    try {
      const errData = await res.json();
      errMsg = errData.message || errMsg;
    } catch (_) {}
    throw new Error(errMsg);
  }

  const result = await res.json();

  return {
    ...currentUser,
    username: result.username,
    email: result.email,
  };
}

export async function changePassword(oldPassword, newPassword) {
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.token) throw new Error('Unauthorized');

  const res = await fetch(`${API_BASE}/change-password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${currentUser.token}`,
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  if (!res.ok) {
    let errMsg = 'Change password failed';
    try {
      const errData = await res.json();
      errMsg = errData.message || errMsg;
    } catch (_) {}
    throw new Error(errMsg);
  }

  return await res.json();
}

