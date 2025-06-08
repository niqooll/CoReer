// src/script/views/history-view.js

import { format } from 'date-fns'; 

/**
 * Merender halaman riwayat analisis CV.
 * @param {Array<object>} historyData - Array objek riwayat analisis CV.
 * @param {string} errorMessage - Pesan error untuk ditampilkan jika ada.
 * @returns {string} - String HTML yang merepresentasikan halaman riwayat.
 */
export function renderHistoryPage(historyData = [], errorMessage = '') {
    const histories = Array.isArray(historyData) ? historyData : [];

    return `
        <div class="container my-5 py-5">
            <h2 class="text-center mb-5 fw-bold text-dark-blue display-5 animate-slide-up">Riwayat Analisis CV</h2>
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-11">
                    ${errorMessage ? `<p class="alert alert-danger text-center animate-fade-in">${errorMessage}</p>` : ''}
                    
                    <div id="history-list" class="list-group">
                        ${histories.length === 0 
                            ? `<p class="text-muted text-center animate-fade-in">Belum ada riwayat analisis yang ditemukan.</p>`
                            : histories.map((entry, index) => `
                                <div class="card shadow-sm mb-3 animate-fade-in" style="animation-delay: ${0.1 * index}s;">
                                    <div class="card-body">
                                        <h5 class="card-title text-brand-primary">${entry.cv_filename || 'Nama CV Tidak Tersedia'}</h5>
                                        <p class="card-text text-muted mb-2">
                                            <small>Analisis Pada: ${entry.analysis_date ? format(new Date(entry.analysis_date), 'dd MMMM® HH:mm') : 'N/A'}</small>
                                        </p>
                                        <p class="card-text">
                                            Ringkasan Prediksi: <strong>Ditemukan ${entry.prediction_summary?.total_jobs_found || 0} pekerjaan yang cocok.</strong>
                                        </p>
                                        <button class="btn btn-outline-info btn-sm view-details-btn me-2" data-id="${entry.id}">Lihat Detail</button>
                                        <button class="btn btn-outline-danger btn-sm delete-history-btn" data-id="${entry.id}">Hapus</button> </div>
                                    <div class="card-footer bg-light d-none history-details" id="details-${entry.id}">
                                        <h6>Pekerjaan yang Cocok:</h6>
                                        <ul class="list-unstyled">
                                            ${entry.matching_jobs && entry.matching_jobs.length > 0
                                                ? entry.matching_jobs.map(job => `
                                                    <li class="mb-3 p-3 border rounded bg-white shadow-sm">
                                                        <h6 class="text-brand-primary mb-1"><strong>${job.Title || 'N/A'}</strong> <small class="text-muted fw-normal">di ${job.Company || 'N/A'}</small></h6>
                                                        <p class="mb-1"><small class="text-info fw-medium">Skor Kecocokan: ${(job.similarity_score * 100).toFixed(2)}%</small></p>
                                                        ${job.Location ? `<p class="mb-1"><small class="text-muted"><i class="bi bi-geo-alt-fill me-1"></i>Lokasi: ${job.Location}</small></p>` : ''}
                                                        ${job['Job Description'] ? `<p class="text-dark"><small><strong>Deskripsi:</strong> ${job['Job Description']}</small></p>` : ''}
                                                        <a href="${job.Link || '#'}" target="_blank" class="btn btn-sm btn-outline-secondary mt-2">Lihat Pekerjaan</a>
                                                    </li>
                                                `).join('')
                                                : `<li>Tidak ada pekerjaan yang cocok ditemukan untuk analisis ini.</li>`
                                            }
                                        </ul>
                                    </div>
                                </div>
                            `).join('')
                        }
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <a href="#/main" class="text-decoration-none text-brand-primary fw-medium"><i class="bi bi-arrow-left me-2"></i> Kembali ke Dashboard</a>
            </div>
        </div>
    `;
}

/**
 * Mengikat event listener ke tombol "Lihat Detail" dan "Hapus" untuk setiap entri riwayat.
 * @param {function} onDeleteCallback - Callback yang akan dipanggil saat tombol hapus diklik.
 */
export function bindHistoryDetailsToggle(onDeleteCallback) {
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const historyId = event.target.dataset.id; 
            const detailsContainer = document.getElementById(`details-${historyId}`); 
            if (detailsContainer) {
                detailsContainer.classList.toggle('d-none');
                event.target.textContent = detailsContainer.classList.contains('d-none') ? 'Lihat Detail' : 'Sembunyikan Detail';
            }
        });
    });

    // Mengikat event listener untuk tombol hapus
    document.querySelectorAll('.delete-history-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const historyId = event.target.dataset.id;
            if (confirm('Apakah Anda yakin ingin menghapus riwayat analisis ini?')) {
                if (onDeleteCallback && typeof onDeleteCallback === 'function') {
                    onDeleteCallback(historyId);
                }
            }
        });
    });
}