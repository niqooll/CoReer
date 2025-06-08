// backend/src/controllers/analyzeController.js
const axios = require('axios');
const FormData = require('form-data');

// URL layanan ML Flask kita. Sebaiknya simpan di file .env untuk produksi.
const ML_SERVICE_URL = 'http://localhost:5001/match';

const matchCV = async (request, h) => {
  // 1. Dapatkan data file dari payload request
  const { cv } = request.payload;

  if (!cv) {
    return h.response({
      status: 'fail',
      message: 'File CV tidak ditemukan.',
    }).code(400);
  }

  // 2. Buat objek FormData untuk dikirim ke layanan ML
  const form = new FormData();
  // 'cv_pdf' harus cocok dengan nama field yang diharapkan oleh Flask
  form.append('cv_pdf', cv, {
    filename: cv.hapi.filename,
    contentType: cv.hapi.headers['content-type'],
  });

  try {
    // 3. Kirim permintaan POST ke layanan ML
    console.log('Mengirim CV ke layanan ML untuk dianalisis...');
    const response = await axios.post(ML_SERVICE_URL, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    console.log('Menerima respons dari layanan ML.');
    // 4. Kembalikan respons dari layanan ML ke klien
    return h.response(response.data).code(200);

  } catch (error) {
    console.error('Error saat menghubungi layanan ML:', error.message);

    // Cek jika error berasal dari server ML (misal: error 500)
    if (error.response) {
      return h.response({
        status: 'fail',
        message: 'Layanan Analisis CV sedang mengalami masalah.',
        detail: error.response.data,
      }).code(error.response.status || 500);
    }
    
    // Error jaringan atau lainnya
    return h.response({
      status: 'error',
      message: 'Tidak dapat terhubung ke layanan analisis CV.',
    }).code(503); // Service Unavailable
  }
};

// Fungsi lain bisa Anda biarkan atau hapus jika tidak digunakan
const getJobs = async (request, h) => {
  // ... (logika ini bisa tetap ada jika masih diperlukan)
  const jobs = [
    { id: 1, title: 'Data Analyst', skills: ['SQL', 'Python'] },
    { id: 2, title: 'Frontend Developer', skills: ['React', 'CSS'] },
  ];
  return h.response(jobs).code(200);
};

module.exports = { getJobs, matchCV };