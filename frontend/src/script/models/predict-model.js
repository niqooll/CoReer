// src/script/models/predict-model.js
import CONFIG from '../config.js';
import { getCurrentUser } from '../models/auth-model.js';

const API_BASE = CONFIG.BASE_URL;

/**
 * Mengirim file CV untuk dianalisis dan menyimpan hasilnya ke history.
 * @param {File} file - File CV yang akan dianalisis.
 * @returns {Promise<object>} - Hasil prediksi dari layanan ML.
 */
export async function predictCV(file) {
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.token) throw new Error('Unauthorized');

  const formData = new FormData();
  formData.append('cv', file); // Nama field harus 'cv' sesuai dengan backend Node.js Anda

  const res = await fetch(`${API_BASE}/analyze/match-cv`, { // URL ke endpoint backend Node.js
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
      errMsg = errData.message || errMsg;
      if (errData.detail) { // Jika ada detail error dari ML Service
        errMsg += ` (Detail: ${JSON.stringify(errData.detail)})`;
      }
    } catch (_) {}
    throw new Error(errMsg);
  }

  const result = await res.json();
  return result;
}

/**
 * Menyimpan data hasil analisis ke database melalui API backend.
 * @param {string} cvFilename - Nama file CV.
 * @param {Array<object>} matchingJobs - Array objek pekerjaan yang cocok.
 * @returns {Promise<object>} - Respons dari backend.
 */
export async function saveAnalysisHistory(cvFilename, matchingJobs) {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.token) throw new Error('Unauthorized');

    const predictionSummary = {
        total_jobs_found: matchingJobs.length,
    };

    const res = await fetch(`${API_BASE}/api/history`, { // Panggil endpoint history baru di backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify({
            cv_filename: cvFilename,
            prediction_summary: predictionSummary,
            matching_jobs: matchingJobs,
        }),
    });

    if (!res.ok) {
        let errMsg = 'Failed to save analysis history';
        try {
            const errData = await res.json();
            errMsg = errData.message || errMsg;
        } catch (_) {}
        throw new Error(errMsg);
    }

    return await res.json();
}