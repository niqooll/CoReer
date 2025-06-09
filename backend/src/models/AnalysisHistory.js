// backend/src/models/AnalysisHistory.js
const { pool } = require('../config/db');

class AnalysisHistory {
  /**
   * Menyimpan entri riwayat analisis CV baru ke database.
   * @param {number} userId - ID pengguna yang melakukan analisis.
   * @param {string} cvFilename - Nama file CV.
   * @param {object} predictionSummary - Ringkasan hasil prediksi (akan disimpan sebagai JSONB).
   * @param {Array<object>} matchingJobs - Array objek pekerjaan yang cocok (akan disimpan sebagai JSONB).
   * @returns {Promise<object>} - Objek riwayat yang baru dibuat.
   */
  static async create(userId, cvFilename, predictionSummary, matchingJobs) {
    try {
      // --- PERBAIKAN UTAMA: Stringifikasi eksplisit untuk kolom JSONB ---
      // Ini memastikan bahwa database menerima string JSON yang valid.
      const predictionSummaryJson = JSON.stringify(predictionSummary);
      const matchingJobsJson = JSON.stringify(matchingJobs);

      const result = await pool.query(
        `INSERT INTO analysis_history (user_id, cv_filename, prediction_summary, matching_jobs)
         VALUES ($1, $2, $3, $4)
         RETURNING id, cv_filename, analysis_date, prediction_summary, matching_jobs, created_at, updated_at`,
        [userId, cvFilename, predictionSummaryJson, matchingJobsJson] // Menggunakan string JSON yang sudah diolah
      );
      return result.rows[0];
    } catch (error) {
      // Log error penting untuk debugging masalah saat membuat riwayat
      console.error('Error creating analysis history:', error);
      throw new Error('Failed to save analysis history to database.');
    }
  }

  /**
   * Mengambil semua riwayat analisis untuk pengguna tertentu.
   * @param {number} userId - ID pengguna.
   * @returns {Promise<Array<object>>} - Array objek riwayat.
   */
  static async findByUserId(userId) {
    try {
      const result = await pool.query(
        `SELECT id, cv_filename, analysis_date, prediction_summary, matching_jobs, created_at, updated_at
         FROM analysis_history
         WHERE user_id = $1
         ORDER BY analysis_date DESC`,
        [userId]
      );
      return result.rows;
    } catch (error) {
      // Log error penting untuk debugging masalah saat mengambil riwayat
      console.error('Error fetching analysis history for user:', error);
      throw new Error('Failed to retrieve analysis history from database.');
    }
  }

  static async delete(id, userId) {
    try {
      const result = await pool.query(
        `DELETE FROM analysis_history
         WHERE id = $1 AND user_id = $2
         RETURNING id`,
        [id, userId]
      );
      // Log ini berguna untuk mengkonfirmasi apakah ada baris yang dihapus atau tidak.
      // Jika result.rows.length > 0, berarti penghapusan berhasil.
      return result.rows.length > 0;
    } catch (error) {
      // Log error penting untuk debugging masalah selama penghapusan database
      console.error('[DB DELETE] Error during database deletion:', error);
      throw new Error('Failed to delete analysis history from database.');
    }
  }
}

module.exports = AnalysisHistory;