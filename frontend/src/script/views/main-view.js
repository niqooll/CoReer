// src/script/views/main-view.js
import { getCurrentUser } from '../models/auth-model.js';

export function renderMainPage(onLogout, errorMessage = '') {
  const user = getCurrentUser();

  return `
    <section class="main-section py-5 min-vh-100 d-flex align-items-center">
      <div class="container">
        <h1 class="mb-4">Dashboard User</h1>
        <p>
          Welcome back, <strong>${user ? user.username : 'Guest'}</strong>!
          Here you can upload your CV easily by dragging a PDF file into the box or by choosing a file.
        </p>

        <div class="row mt-4 gx-4 gy-4">
          <div class="col-md-6">
            <div id="drop-zone"
              class="border border-primary rounded p-4 text-center d-flex align-items-center justify-content-center"
              style="height: 200px; cursor: pointer;">
              <p class="m-0 fw-semibold">Drop your CV here (.pdf)</p>
            </div>
            <input type="file" id="cv-upload" accept=".pdf" class="form-control mt-3" />
            <small class="text-muted d-block mt-2">Supported format: PDF only. Max file size 5MB.</small>
            <button id="btn-analyze" class="btn btn-primary mt-2" disabled>Analyze</button>
          </div>

          <div class="col-md-6">
            <div id="cv-preview"
              class="border rounded shadow-sm p-3"
              style="height: 400px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <p class="text-muted text-center m-0">No file uploaded yet. Preview will appear here.</p>
            </div>
            <div id="prediction-result" class="mt-3 p-3 border rounded" style="min-height: 100px; background: #f8f9fa;">
              <p class="text-muted text-center m-0">Prediction result will appear here.</p>
            </div>
            <div id="matching-jobs-list" class="mt-3 p-3 border rounded" style="background: #e9ecef; max-height: 400px; overflow-y: auto;">
              <h5 class="mb-3">Pekerjaan yang Cocok:</h5>
              <p class="text-muted text-center m-0" id="jobs-placeholder">Hasil kecocokan akan ditampilkan di sini.</p>
            </div>
          </div>

        </div>
        <p class="error-message text-danger mt-3">${errorMessage}</p>
        <button id="logout-btn" class="btn btn-danger mt-4">Logout</button>
      </div>
    </section>
  `;
}

export function bindLogoutButton(callback) {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      callback();
    });
  }
}

export function bindUploadAndPreview(onFileSelected) {
  const fileInput = document.getElementById('cv-upload');
  const previewContainer = document.getElementById('cv-preview');
  const dropZone = document.getElementById('drop-zone');
  const analyzeBtn = document.getElementById('btn-analyze');

  if (!fileInput || !previewContainer || !dropZone || !analyzeBtn) return;

  function updateAnalyzeButton(enabled) {
    analyzeBtn.disabled = !enabled;
  }

  function showPreview(file) {
    if (file && file.type === 'application/pdf') {
      if (file.size > 5 * 1024 * 1024) {
        previewContainer.innerHTML = `<p class="text-danger text-center">File too large. Max 5MB allowed.</p>`;
        updateAnalyzeButton(false);
        if (onFileSelected) onFileSelected(null);
        return;
      }
      const fileURL = URL.createObjectURL(file);
      previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%"></iframe>`;
      updateAnalyzeButton(true);
      if (onFileSelected) onFileSelected(file);
    } else {
      previewContainer.innerHTML = `<p class="text-danger text-center">Invalid file. Please upload a .pdf</p>`;
      updateAnalyzeButton(false);
      if (onFileSelected) onFileSelected(null);
    }
  }

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    showPreview(file);
  });

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('bg-light');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('bg-light');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('bg-light');
    const file = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
    showPreview(file);
  });
}

export function bindAnalyzeButton(callback) {
  const analyzeBtn = document.getElementById('btn-analyze');
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', () => {
      callback();
    });
  }
}

export function showPredictionResult(html) {
  const resultContainer = document.getElementById('prediction-result');
  if (resultContainer) {
    resultContainer.innerHTML = html;
  }
}

// FUNGSI BARU UNTUK MENAMPILKAN PEKERJAAN YANG COCOK
export function displayMatchingJobs(jobs) {
  const jobsListContainer = document.getElementById('matching-jobs-list');
  const jobsPlaceholder = document.getElementById('jobs-placeholder'); // Placeholder jika tidak ada pekerjaan

  if (!jobsListContainer) return;

  // Hapus placeholder jika ada
  if (jobsPlaceholder) {
    jobsPlaceholder.remove();
  }
  
  // Kosongkan kontainer sebelum menambahkan hasil baru
  jobsListContainer.innerHTML = '<h5 class="mb-3">Pekerjaan yang Cocok:</h5>';

  if (jobs.length === 0) {
    jobsListContainer.innerHTML += '<p class="text-info text-center m-0">Tidak ada pekerjaan yang cocok ditemukan.</p>';
    return;
  }

  jobs.forEach((job, index) => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('card', 'mb-3', 'shadow-sm');
    jobCard.innerHTML = `
      <div class="card-body">
        <h6 class="card-title">${index + 1}. ${job.Title} at ${job.Company}</h6>
        <p class="card-text text-muted mb-1">
          <small>Lokasi: ${job.Location}, ${job.City}, ${job.Region} (${job.Country})</small><br>
          <small>Skor Kecocokan: <strong>${(job.similarity_score * 100).toFixed(2)}%</strong></small>
        </p>
        <p class="card-text">${job['Job Description'].substring(0, 150)}...</p>
        <a href="${job.Link}" target="_blank" class="btn btn-sm btn-outline-primary">Lihat Detail</a>
      </div>
    `;
    jobsListContainer.appendChild(jobCard);
  });
}