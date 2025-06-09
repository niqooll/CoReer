// src/script/models/history-model.js
import CONFIG from '../config.js';
import { getCurrentUser, logout } from './auth-model.js'; // Pastikan logout diimpor

const API_BASE = CONFIG.BASE_URL;

/**
 * Mengambil riwayat analisis CV untuk pengguna yang login dari backend.
 * @returns {Promise<Array<object>>} - Array objek riwayat analisis.
 */
export async function getUserHistory() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.token) {
        throw new Error('Unauthorized: User not logged in or token missing.');
    }

    try {
        const response = await fetch(`${API_BASE}/api/history`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.token}`,
            },
        });

        if (response.status === 401) { // Deteksi status kode 401 (Unauthorized)
            logout(); // Hapus token yang kedaluwarsa dari localStorage
            throw new Error('Unauthorized: Sesi telah berakhir. Silakan login kembali.');
        }

        if (!response.ok) {
            let errorMessage = 'Gagal mengambil riwayat';
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (jsonError) {
                console.error('Error parsing error response:', jsonError);
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error in getUserHistory:', error);
        throw error;
    }
}

/**
 * Menghapus entri riwayat analisis CV.
 * @param {string} historyId - ID dari entri riwayat yang akan dihapus.
 * @returns {Promise<object>} - Respons dari backend.
 */
export async function deleteUserHistory(historyId) {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.token) {
        throw new Error('Unauthorized: User not logged in or token missing.');
    }

    try {
        const response = await fetch(`${API_BASE}/api/history/${historyId}`, { // URL dengan ID
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.token}`,
            },
        });

        if (response.status === 401) { // Deteksi status kode 401 (Unauthorized)
            logout(); // Hapus token yang kedaluwarsa dari localStorage
            throw new Error('Unauthorized: Sesi telah berakhir. Silakan login kembali.');
        }

        if (!response.ok) {
            let errorMessage = 'Gagal menghapus riwayat';
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (jsonError) {
                console.error('Error parsing error response on delete:', jsonError);
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data; // Mengembalikan respons sukses
    } catch (error) {
        console.error('Error in deleteUserHistory:', error);
        throw error;
    }
}