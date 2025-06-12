// backend/src/controllers/analyzeController.js
const axios = require('axios');
const FormData = require('form-data');
const AnalysisHistory = require('../models/AnalysisHistory');
const { getCurrentUser } = require('../models/userModel');

// URL layanan ML Flask. Sebaiknya simpan di file .env untuk produksi.
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'https://coreer-ml-service-fda2cqapbxbsemg4.southeastasia-01.azurewebsites.net/match';

const matchCV = async (request, h) => {
  const { cv } = request.payload;

  if (!cv) {
    // Keep this log as it indicates a client-side issue or missing payload
    console.log('File CV tidak ditemukan di payload.');
    return h.response({
      status: 'fail',
      message: 'File CV tidak ditemukan.',
    }).code(400);
  }

  const form = new FormData();
  form.append('cv_pdf', cv, {
    filename: cv.hapi.filename,
    contentType: cv.hapi.headers['content-type'],
  });

  try {
    // Keep this log to confirm the request is being sent
    console.log('Mengirim CV ke layanan ML untuk dianalisis...');
    const response = await axios.post(ML_SERVICE_URL, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    const mlResponseData = response.data;

    let receivedMatchingJobs = mlResponseData.data;
    let processedMatchingJobs = [];

    // Langkah 1: Pastikan data utama adalah array. Jika string, coba parse.
    if (typeof receivedMatchingJobs === 'string') {
        try {
            receivedMatchingJobs = JSON.parse(receivedMatchingJobs);
        } catch (e) {
            // Keep this error log as it indicates a malformed response from ML service
            console.error('Failed to JSON.parse ML response data string:', e);
            receivedMatchingJobs = []; // Fallback to empty array on parse error
        }
    }

    // Langkah 2: Iterasi melalui array dan pastikan setiap elemen adalah objek JSON yang valid.
    // Ini menangani kasus array of stringified JSON objects.
    if (Array.isArray(receivedMatchingJobs)) {
        processedMatchingJobs = receivedMatchingJobs.map(item => {
            if (typeof item === 'string') {
                try {
                    const parsedItem = JSON.parse(item);
                    return parsedItem;
                } catch (e) {
                    // Keep this error log for individual malformed job strings
                    console.error('Failed to parse individual job string:', item, e);
                    return {}; // Fallback for invalid individual item
                }
            }
            return item; // Sudah berupa objek
        });
    } else {
        // Keep this warning as it indicates an unexpected ML response format
        console.warn('ML Response data.data is not an array. Converting to empty array.');
        processedMatchingJobs = [];
    }

    // --- BAGIAN UNTUK MENYIMPAN HISTORY SETELAH ANALISIS SUKSES ---
    if (mlResponseData.status === 'success') {
      try {
        if (!request.auth.credentials || !request.auth.credentials.id) {
            // This is a critical error, so keep the log
            console.error('Error: request.auth.credentials.id is missing or null for saving history.');
            throw new Error('User ID not available for saving history. Authentication issue.');
        }
        const userId = request.auth.credentials.id;
        const cvFilename = cv.hapi.filename;

        const predictionSummary = {
            total_jobs_found: processedMatchingJobs.length, // Gunakan `processedMatchingJobs`
        };

        await AnalysisHistory.create(userId, cvFilename, predictionSummary, processedMatchingJobs);
        // Keep this log to confirm successful history saving
        console.log('Analysis history saved successfully for user:', userId);
      } catch (historySaveError) {
        // Essential error log for debugging history saving issues
        console.error('Error saving analysis history in matchCV handler:', historySaveError.message);
      }
    }
    // --- AKHIR BAGIAN UNTUK MENYIMPAN HISTORY ---

    return h.response(mlResponseData).code(200);

  } catch (error) {
    // This is a crucial error log for any issues with the ML service or general try-catch block
    console.error('Error saat menghubungi layanan ML atau menyimpan history:', error.message);

    if (error.response) {
      return h.response({
        status: 'fail',
        message: 'Layanan Analisis CV sedang mengalami masalah.',
        detail: error.response.data,
      }).code(error.response.status || 500);
    }

    return h.response({
      status: 'error',
      message: 'Tidak dapat terhubung ke layanan analisis CV.',
    }).code(503);
  }
};

const getJobs = async (request, h) => {
  const jobs = [
    { id: 1, title: 'Data Analyst', skills: ['SQL', 'Python'] },
    { id: 2, title: 'Frontend Developer', skills: ['React', 'CSS'] },
  ];
  return h.response(jobs).code(200);
};

module.exports = { getJobs, matchCV };