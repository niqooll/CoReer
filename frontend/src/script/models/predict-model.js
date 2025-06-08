import CONFIG from '../config.js';
import { getCurrentUser } from './auth-model.js';

const API_BASE = CONFIG.BASE_URL;

export async function predictCV(file) {
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.token) throw new Error('Unauthorized');

  const formData = new FormData();
  formData.append('cv', file); // Nama field harus 'cv' sesuai dengan backend Node.js Anda

  const res = await fetch(`${API_BASE}/analyze/match-cv`, { // Perbarui URL ke endpoint backend Node.js
    method: 'POST',
    headers: {
        Authorization: `Bearer ${currentUser.token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    let errMsg = 'Prediction failed';
    try {
      const errData = await res.json();
      // Sesuaikan pesan error dari backend Node.js
      errMsg = errData.message || errMsg;
      if (errData.detail) { // Jika ada detail error dari ML Service
        errMsg += ` (Detail: ${JSON.stringify(errData.detail)})`;
      }
    } catch (_) {}
    throw new Error(errMsg);
  }

  // Respons dari backend Node.js adalah data dari ML service
  // { status: 'success', message: 'Pekerjaan berhasil dicocokkan', data: [...] }
  return await res.json();
}