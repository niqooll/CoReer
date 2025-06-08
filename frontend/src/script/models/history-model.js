// src/script/models/history-model.js
import CONFIG from '../config.js'; 
import { getCurrentUser } from './auth-model.js'; 

const API_BASE = CONFIG.BASE_URL; 

/**
 * @param {string} historyId - ID dari entri riwayat yang akan dihapus.
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

        if (!response.ok) {
            let errorMessage = 'Failed to fetch history';
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

        if (!response.ok) {
            let errorMessage = 'Failed to delete history';
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