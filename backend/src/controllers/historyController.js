// backend/src/controllers/historyController.js
const AnalysisHistory = require('../models/AnalysisHistory'); 

/**
 * Handler untuk POST /api/history - Menyimpan riwayat analisis CV.
 * Membutuhkan autentikasi pengguna.
 */
const saveAnalysisHistory = async (request, h) => {
  try {
    const userId = request.auth.credentials.id; 
    const { cv_filename, prediction_summary, matching_jobs } = request.payload; // Benar, nama variabelnya prediction_summary

    if (!userId || !cv_filename || !prediction_summary || !matching_jobs) {
      console.log('Missing required fields for saving history or userId is null.');
      return h.response({
        status: 'fail',
        message: 'Missing required fields: userId, cv_filename, prediction_summary, matching_jobs',
      }).code(400);
    }

    const newEntry = await AnalysisHistory.create(
      userId,
      cv_filename,
      prediction_summary, // <-- PERBAIKAN DI SINI! Gunakan prediction_summary (sesuai payload)
      matching_jobs 
    );

    return h.response({ 
      status: 'success', 
      message: 'Analysis history saved', 
      data: newEntry 
    }).code(201);
  } catch (error) {
    console.error('Error saving analysis history:', error);
    return h.response({ 
      status: 'error', 
      message: error.message || 'Internal server error' 
    }).code(500);
  }
};
/**
 * Handler untuk GET /api/history - Mengambil semua riwayat analisis CV untuk pengguna yang login.
 * Membutuhkan autentikasi pengguna.
 */
const getAnalysisHistory = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;

    if (!userId) {
      console.log('Authentication required for user ID in getAnalysisHistory.');
      return h.response({
        status: 'fail',
        message: 'Authentication required for user ID.',
      }).code(401);
    }

    const history = await AnalysisHistory.findByUserId(userId);

    return h.response({ 
      status: 'success', 
      message: 'Analysis history fetched', 
      data: history 
    }).code(200);
  } catch (error) {
    console.error('Error fetching analysis history:', error);
    return h.response({ 
      status: 'error', 
      message: error.message || 'Internal server error' 
    }).code(500);
  }
};

const deleteAnalysisHistory = async (request, h) => {
    try {
        const userId = request.auth.credentials.id; 
        const { id } = request.params; 

        console.log(`[DELETE HISTORY] Attempting to delete history ID: ${id} for User ID: ${userId}`); // Log ini

        if (!userId) {
            console.log('[DELETE HISTORY] Authentication required: User ID is null.');
            return h.response({
                status: 'fail',
                message: 'Authentication required.',
            }).code(401);
        }

        if (!id) {
            console.log('[DELETE HISTORY] Missing history ID in request params.');
            return h.response({
                status: 'fail',
                message: 'Missing history ID.',
            }).code(400);
        }

        const isDeleted = await AnalysisHistory.delete(id, userId);

        if (isDeleted) {
            console.log(`[DELETE HISTORY] Successfully deleted history ID: ${id}`);
            return h.response({
                status: 'success',
                message: 'Analysis history deleted successfully',
            }).code(200);
        } else {
            console.log(`[DELETE HISTORY] History ID: ${id} not found or unauthorized for User ID: ${userId}`);
            return h.response({
                status: 'fail',
                message: 'Analysis history not found or unauthorized to delete.',
            }).code(404);
        }
    } catch (error) {
        console.error('[DELETE HISTORY] Error deleting analysis history:', error); // Pastikan error ini tertangkap
        return h.response({
            status: 'error',
            message: error.message || 'Internal server error',
        }).code(500);
    }
};


module.exports = {
    saveAnalysisHistory,
    getAnalysisHistory,
    deleteAnalysisHistory, // Export fungsi baru ini
};