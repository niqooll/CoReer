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
          <!-- LEFT SIDE -->
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

          <!-- RIGHT SIDE -->
          <div class="col-md-6">
            <div id="cv-preview" 
              class="border rounded shadow-sm p-3" 
              style="height: 400px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <p class="text-muted text-center m-0">No file uploaded yet. Preview will appear here.</p>
            </div>
          </div>
        </div>
        <p class="error-message text-danger mt-3">${errorMessage}</p>
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

export function bindUploadAndPreview() {
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
        return;
      }
      const fileURL = URL.createObjectURL(file);
      previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%"></iframe>`;
      updateAnalyzeButton(true);
    } else {
      previewContainer.innerHTML = `<p class="text-danger text-center">Invalid file. Please upload a .pdf</p>`;
      updateAnalyzeButton(false);
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
