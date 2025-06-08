// src/script/views/main-view.js
import { getCurrentUser } from '../models/auth-model.js';

export function renderMainPage(errorMessage = '') {
    const user = getCurrentUser();

    return `
        <section class="main-section py-5 min-vh-100 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h1 class="fw-bold animate-fade-in">Dashboard User</h1>
                    <p class="lead animate-fade-in delay-1">
                        Welcome back, <strong>${user ? user.username : 'Guest'}</strong>!<br>
                        Upload your CV by dragging a PDF into the box or choosing a file.
                    </p>
                </div>

                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm animate-slide-up">
                            <div class="card-body">
                                <h5 class="card-title" style="color: var(--normal);">Unggah CV Anda</h5>
                                <div id="drop-zone"
                                    class="border rounded p-4 text-center d-flex align-items-center justify-content-center mb-3"
                                    style="height: 200px; cursor: pointer; transition: background-color 0.2s, border-color 0.2s; border-color: var(--normal) !important;">
                                    <p class="m-0 fw-semibold text-muted">
                                        <i class="bi bi-file-earmark-pdf fs-3 text-danger d-block mb-2"></i>
                                        Drop your CV here (.pdf) or click to upload
                                    </p>
                                </div>

                                <input type="file" id="cv-upload" accept=".pdf" class="form-control mb-3" />
                                <small class="text-muted d-block mb-3">Supported format: PDF only. Max file size 5MB.</small>
                                <button id="btn-analyze" class="btn btn-primary w-100" disabled>
                                    <span class="spinner-border spinner-border-sm d-none me-2" role="status" aria-hidden="true" id="analyze-spinner"></span>
                                    <span id="analyze-button-text"><i class="bi bi-search me-2"></i>Analyze CV</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm animate-slide-up delay-1">
                            <div class="card-header text-white" style="background-color: var(--dark);">
                                <h5 class="card-title mb-0">Pratinjau CV</h5>
                            </div>
                            <div class="card-body p-0" id="cv-preview"
                                style="min-height: 300px; max-height: 500px; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: var(--sec-normal);">
                                <p class="text-muted text-center m-0">No file uploaded yet. Preview will appear here.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-5 custom-hr animate-fade-in delay-2">

                <div class="row justify-content-center mt-5">
                    <div class="col-12"> <div class="card shadow-sm animate-slide-up delay-2">
                            <div class="card-header text-white" style="background-color: var(--normal);">
                                <h5 class="card-title mb-0">Hasil Analisis CV</h5>
                            </div>
                            <div class="card-body py-4" id="prediction-result"
                                style="min-height: 80px; background: var(--sec-normal);">
                                <p class="text-muted text-center m-0">Hasil prediksi akan muncul di sini.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-5 custom-hr animate-fade-in delay-3">

                <div class="row justify-content-center mt-4">
                    <div class="col-12"> <div class="card shadow-sm animate-slide-up delay-3">
                            <div class="card-header text-white" style="background-color: var(--normal);">
                                <h5 class="card-title mb-0">Pekerjaan yang Cocok untuk Anda</h5>
                            </div>
                            <div class="card-body py-3" id="matching-jobs-list"
                                style="max-height: 600px; overflow-y: auto; background: var(--sec-normal);">
                                <p class="text-muted text-center m-0" id="jobs-placeholder">Hasil kecocokan akan ditampilkan di sini.</p>
                            </div>
                        </div>
                    </div>
                </div>

                ${errorMessage ? `<p class="error-message text-danger text-center mt-4">${errorMessage}</p>` : ''}
            </div>
        </section>
    `;
}

export function bindUploadAndPreview(onFileSelected) {
    const fileInput = document.getElementById('cv-upload');
    const previewContainer = document.getElementById('cv-preview');
    const dropZone = document.getElementById('drop-zone');
    const analyzeBtn = document.getElementById('btn-analyze');
    const analyzeSpinner = document.getElementById('analyze-spinner');

    if (!fileInput || !previewContainer || !dropZone || !analyzeBtn) return;

    function updateAnalyzeButton(enabled) {
        analyzeBtn.disabled = !enabled;
        if (analyzeSpinner) analyzeSpinner.classList.add('d-none');
        const analyzeButtonText = document.getElementById('analyze-button-text');
        if (analyzeButtonText) analyzeButtonText.innerHTML = '<i class="bi bi-search me-2"></i>Analyze CV';
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
            previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%" style="border:none;"></iframe>`;
            updateAnalyzeButton(true);
            if (onFileSelected) onFileSelected(file);
            previewContainer.style.outline = '2px solid var(--normal)';
            previewContainer.style.outlineOffset = '-5px';
            previewContainer.style.transition = 'outline 0.3s ease-in-out';
        } else {
            previewContainer.innerHTML = `<p class="text-danger text-center">Invalid file. Please upload a .pdf</p>`;
            updateAnalyzeButton(false);
            if (onFileSelected) onFileSelected(null);
            previewContainer.style.outline = 'none';
        }
    }

    updateAnalyzeButton(false);

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        showPreview(file);
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = 'var(--normal-hover)';
        dropZone.style.color = 'white';
        dropZone.querySelector('i').style.color = 'white';
        dropZone.querySelector('p').style.color = 'white';
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.style.backgroundColor = '';
        dropZone.style.color = '';
        dropZone.querySelector('i').style.color = '';
        dropZone.querySelector('p').style.color = '';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = '';
        dropZone.style.color = '';
        dropZone.querySelector('i').style.color = '';
        dropZone.querySelector('p').style.color = '';
        const file = e.dataTransfer.files[0];
        const dataTransfer = new DataTransfer();
        if (file) {
            dataTransfer.items.add(file);
        }
        fileInput.files = dataTransfer.files;
        showPreview(file);
    });

    dropZone.addEventListener('click', () => {
        fileInput.click();
    });
}

export function bindAnalyzeButton(callback) {
    const analyzeBtn = document.getElementById('btn-analyze');
    const analyzeSpinner = document.getElementById('analyze-spinner');
    const analyzeButtonText = document.getElementById('analyze-button-text');

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            if (analyzeSpinner) analyzeSpinner.classList.remove('d-none');
            if (analyzeButtonText) analyzeButtonText.innerHTML = 'Menganalisis...';
            analyzeBtn.disabled = true;

            callback();
        });
    }
}

export function hideAnalyzeLoading(enableButton = true) {
    const analyzeBtn = document.getElementById('btn-analyze');
    const analyzeSpinner = document.getElementById('analyze-spinner');
    const analyzeButtonText = document.getElementById('analyze-button-text');
    const cvFileInput = document.getElementById('cv-upload');

    if (analyzeSpinner) analyzeSpinner.classList.add('d-none');
    if (analyzeButtonText) analyzeButtonText.innerHTML = '<i class="bi bi-search me-2"></i>Analyze CV';

    if (analyzeBtn) {
        analyzeBtn.disabled = !(enableButton && cvFileInput && cvFileInput.files.length > 0);
    }
}

export function showPredictionResult(html) {
    const resultContainer = document.getElementById('prediction-result');
    if (resultContainer) {
        const placeholder = resultContainer.querySelector('p.text-muted');
        if (placeholder) placeholder.remove();
        resultContainer.innerHTML = html;
        resultContainer.style.opacity = '0';
        resultContainer.style.transform = 'translateY(20px)';
        setTimeout(() => {
            resultContainer.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            resultContainer.style.opacity = '1';
            resultContainer.style.transform = 'translateY(0)';
        }, 10);
    }
}

export function displayMatchingJobs(jobs) {
    const jobsListContainer = document.getElementById('matching-jobs-list');

    if (!jobsListContainer) return;

    jobsListContainer.innerHTML = '<h5 class="mb-3">Pekerjaan yang Cocok:</h5>';

    if (jobs.length === 0) {
        jobsListContainer.innerHTML += '<p class="text-info text-center m-0">Tidak ada pekerjaan yang cocok ditemukan.</p>';
    } else {
        jobs.forEach((job, index) => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('card', 'mb-3', 'shadow-sm', 'animate-fade-in');
            jobCard.style.animationDelay = `${0.1 * index}s`;

            const title = job.Title || 'N/A';
            const company = job.Company || 'N/A';
            const location = job.Location || 'N/A';
            const city = job.City || 'N/A';
            const region = job.Region || 'N/A';
            const country = job.Country || 'N/A';
            const similarityScore = (job.similarity_score * 100).toFixed(2);
            const fullDescription = job['Job Description'] || 'No description available.';
            const shortDescription = fullDescription.substring(0, 150) + (fullDescription.length > 150 ? '...' : '');
            const link = job.Link || '#';

            jobCard.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title">${index + 1}. ${title} at ${company}</h6>
                    <p class="card-text text-muted mb-1">
                        <small>Lokasi: ${location}, ${city}, ${region} (${country})</small><br>
                        <small>Skor Kecocokan: <strong>${similarityScore}%</strong></small>
                    </p>
                    <p class="card-text job-description">
                        <span class="short-description">${shortDescription}</span>
                        ${fullDescription.length > 150 ? `<span class="full-description d-none">${fullDescription}</span>
                        <button class="btn btn-link p-0 ms-1 toggle-description" data-expanded="false">Show More</button>` : ''}
                    </p>
                    <a href="${link}" target="_blank" class="btn btn-sm btn-outline-primary">Lihat Detail</a>
                </div>
            `;
            jobsListContainer.appendChild(jobCard);
        });

        // Attach event listeners for "Show More/Less" after all job cards are rendered
        jobsListContainer.querySelectorAll('.toggle-description').forEach(button => {
            button.addEventListener('click', (event) => {
                const btn = event.target;
                const parentP = btn.closest('.job-description');
                const shortSpan = parentP.querySelector('.short-description');
                const fullSpan = parentP.querySelector('.full-description');

                if (btn.dataset.expanded === 'false') {
                    shortSpan.classList.add('d-none');
                    fullSpan.classList.remove('d-none');
                    btn.textContent = 'Show Less';
                    btn.dataset.expanded = 'true';
                } else {
                    shortSpan.classList.remove('d-none');
                    fullSpan.classList.add('d-none');
                    btn.textContent = 'Show More';
                    btn.dataset.expanded = 'false';
                }
            });
        });
    }
    jobsListContainer.classList.add('animate-slide-up');
    jobsListContainer.style.animationDelay = '0.5s';
}