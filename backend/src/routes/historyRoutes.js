// backend/src/routes/historyRoutes.js
const { saveAnalysisHistory, getAnalysisHistory, deleteAnalysisHistory } = require('../controllers/historyController');
const Joi = require('@hapi/joi'); // Pastikan Joi diimpor jika digunakan untuk validasi

const historyRoutes = [
    {
        method: 'POST',
        path: '/api/history',
        handler: saveAnalysisHistory,
        options: {
            auth: 'jwt', // Membutuhkan autentikasi JWT
            description: 'Menyimpan riwayat analisis CV',
            notes: 'Menyimpan detail analisis CV ke database untuk pengguna yang login.',
            tags: ['api', 'history'],
            validate: {
                payload: Joi.object({
                    cv_filename: Joi.string().required(),
                    prediction_summary: Joi.object().required(), // Sesuaikan schema jika lebih spesifik
                    matching_jobs: Joi.array().items(Joi.object()).required(), // Array of objects
                }),
            },
        },
    },
    {
        method: 'GET',
        path: '/api/history',
        handler: getAnalysisHistory,
        options: {
            auth: 'jwt', // Membutuhkan autentikasi JWT
            description: 'Mengambil riwayat analisis CV untuk pengguna yang login',
            notes: 'Mengambil semua riwayat analisis CV yang disimpan untuk pengguna yang sedang login.',
            tags: ['api', 'history'],
        },
    },
    {
        method: 'DELETE',
        path: '/api/history/{id}', // {id} adalah parameter untuk ID riwayat yang akan dihapus
        handler: deleteAnalysisHistory,
        options: {
            auth: 'jwt', // Membutuhkan autentikasi JWT
            description: 'Menghapus riwayat analisis CV tertentu',
            notes: 'Menghapus entri riwayat analisis CV dari database berdasarkan ID.',
            tags: ['api', 'history'],
            validate: {
                params: Joi.object({
                    id: Joi.string().guid({ version: ['uuidv4'] }).required(), // Validasi ID sebagai UUID
                }),
            },
        },
    },
];

module.exports = historyRoutes;