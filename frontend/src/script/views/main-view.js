export function renderMainPage(user, errorMessage = '') {

    return `
        <section class="main-section py-5 min-vh-100 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h1 class="fw-bold animate-fade-in text-dark-blue display-5">Dashboard User</h1>
                    <p class="lead animate-fade-in delay-1">
                        Selamat datang kembali, <strong>${user ? user.username : 'Tamu'}</strong>!<br>
                        Mari kita analisis CV Anda dan temukan pekerjaan yang cocok!
                    </p>
                </div>

                <div class="row justify-content-center mt-5 mb-5">
                    <div class="col-12">
                        <div class="card shadow-sm animate-slide-up delay-2">
                            <div class="card-header text-white" style="background-color: var(--normal);">
                                <h5 class="card-title mb-0">Panduan Singkat</h5>
                            </div>
                            <div class="card-body py-4" style="background: var(--sec-normal);">
                                <ol class="list-group">
                                    <li class="list-group-item d-flex align-items-start"> <span class="badge bg-primary rounded-pill me-3 mt-1">1</span>
                                        <div>
                                            <strong>Unggah CV Anda:</strong>
                                            <p class="mb-0 ms-2">Seret dan lepas file CV Anda (format PDF) ke kotak "Unggah CV Anda", atau klik kotak tersebut untuk memilih file dari komputer Anda. Pastikan ukuran file tidak lebih dari 5MB.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex align-items-start mt-2">
                                        <span class="badge bg-primary rounded-pill me-3 mt-1">2</span>
                                        <div>
                                            <strong>Mulai Analisis:</strong>
                                            <p class="mb-0 ms-2">Setelah CV Anda berhasil diunggah dan pratinjau muncul, tombol "Analisis CV" akan aktif. Klik tombol ini untuk memulai proses analisis.</p>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex align-items-start mt-2">
                                        <span class="badge bg-primary rounded-pill me-3 mt-1">3</span>
                                        <div>
                                            <strong>Dapatkan Hasil:</strong>
                                            <p class="mb-0 ms-2">Setelah analisis selesai, Anda akan melihat ringkasan prediksi CV Anda dan daftar pekerjaan yang relevan di bagian bawah halaman.</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-5 custom-hr animate-fade-in delay-2">

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
                                        Jatuhkan CV Anda di sini (.pdf) atau klik untuk mengunggah
                                    </p>
                                </div>
                                <input type="file" id="cv-upload" accept=".pdf" class="form-control mb-3" />
                                <small class="text-muted d-block mb-3">Format yang didukung: PDF saja. Ukuran file maks 5MB.</small>
                                <button id="btn-analyze" class="btn btn-primary w-100" disabled>
                                    <span class="spinner-border spinner-border-sm d-none me-2" role="status" aria-hidden="true" id="analyze-spinner"></span>
                                    <span id="analyze-button-text"><i class="bi bi-search me-2"></i>Analisis CV</span>
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
                                <p class="text-muted text-center m-0">Belum ada file yang diunggah. Pratinjau akan muncul di sini.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-5 custom-hr animate-fade-in delay-3">

                <div class="row justify-content-center mt-5">
                    <div class="col-12"> <div class="card shadow-lg border-0 rounded-4 animate-slide-up delay-5">
                            <div class="card-header bg-white rounded-top-4 p-0">
                                <ul class="nav nav-tabs card-header-tabs" id="analysisTabs" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active fw-bold" id="result-tab" data-bs-toggle="tab" data-bs-target="#prediction-result-pane" type="button" role="tab" aria-controls="prediction-result-pane" aria-selected="true" style="color: var(--dark-blue);">
                                            <i class="bi bi-check-circle me-2"></i>Hasil Analisis CV
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fw-bold" id="jobs-tab" data-bs-toggle="tab" data-bs-target="#matching-jobs-pane" type="button" role="tab" aria-controls="matching-jobs-pane" aria-selected="false" style="color: var(--dark-blue);">
                                            <i class="bi bi-briefcase me-2"></i>Pekerjaan yang Cocok
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body bg-white rounded-bottom-4">
                                <div class="tab-content" id="analysisTabContent">
                                    <div class="tab-pane fade show active py-4" id="prediction-result-pane" role="tabpanel" aria-labelledby="result-tab">
                                        <p class="text-muted text-center m-0">Hasil prediksi akan muncul di sini setelah CV dianalisis.</p>
                                    </div>
                                    <div class="tab-pane fade py-4" id="matching-jobs-pane" role="tabpanel" aria-labelledby="jobs-tab">
                                        <p class="text-muted text-center m-0" id="jobs-placeholder">Daftar pekerjaan yang cocok akan ditampilkan di sini.</p>
                                        <div id="matching-jobs-list" style="max-height: 450px; overflow-y: auto;">
                                        </div>
                                    </div>
                                </div>
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

    const previewPlaceholder = previewContainer.querySelector('p.text-muted');

    if (!fileInput || !previewContainer || !dropZone || !analyzeBtn) return;

    function updateAnalyzeButton(enabled) {
        analyzeBtn.disabled = !enabled;
        if (analyzeSpinner) analyzeSpinner.classList.add('d-none');
        const analyzeButtonText = document.getElementById('analyze-button-text');
        if (analyzeButtonText) analyzeButtonText.innerHTML = '<i class="bi bi-search me-2"></i>Analisis CV';
    }

    function showPreview(file) {
        if (file && file.type === 'application/pdf') {
            if (file.size > 5 * 1024 * 1024) {
                previewContainer.innerHTML = `<p class="text-danger text-center">Ukuran file terlalu besar. Maksimal 5MB diizinkan.</p>`;
                updateAnalyzeButton(false);
                if (onFileSelected) onFileSelected(null);
                return;
            }
            const fileURL = URL.createObjectURL(file);
            previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%" style="border:none;"></iframe>`;

            if (previewPlaceholder) previewPlaceholder.style.display = 'none';

            updateAnalyzeButton(true);
            if (onFileSelected) onFileSelected(file);
            previewContainer.style.outline = '2px solid var(--normal)';
            previewContainer.style.outlineOffset = '-5px';
            previewContainer.style.transition = 'outline 0.3s ease-in-out';
        } else {
            previewContainer.innerHTML = `<p class="text-danger text-center">File tidak valid. Harap unggah file .pdf</p>`;
            if (previewPlaceholder) previewPlaceholder.style.display = 'block';

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
    const resultTab = document.getElementById('result-tab');

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            if (analyzeSpinner) analyzeSpinner.classList.remove('d-none');
            if (analyzeButtonText) analyzeButtonText.innerHTML = 'Menganalisis...';
            analyzeBtn.disabled = true;

            const predictionResultPane = document.getElementById('prediction-result-pane');
            if (predictionResultPane) {
                predictionResultPane.innerHTML = `
                    <div class="d-flex flex-column align-items-center justify-content-center p-5">
                        <div class="spinner-border text-primary mb-3" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p class="text-muted">Sedang menganalisis CV Anda. Ini mungkin memakan waktu beberapa saat...</p>
                    </div>
                `;
            }

            // Selalu aktifkan tab "Hasil Analisis CV" saat analisis dimulai
            if (resultTab) {
                if (window.bootstrap && window.bootstrap.Tab) {
                    const bsTab = new window.bootstrap.Tab(resultTab);
                    bsTab.show();
                }
            }

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
    if (analyzeButtonText) analyzeButtonText.innerHTML = '<i class="bi bi-search me-2"></i>Analisis CV';

    if (analyzeBtn) {
        analyzeBtn.disabled = !(enableButton && cvFileInput && cvFileInput.files.length > 0);
    }
}

export function showPredictionResult(html) {
    const resultContainer = document.getElementById('prediction-result-pane');
    if (resultContainer) {
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
    const jobsPlaceholder = document.getElementById('jobs-placeholder');

    if (!jobsListContainer) return;

    if (jobsPlaceholder) jobsPlaceholder.remove();

    jobsListContainer.innerHTML = '';

    if (jobs.length === 0) {
        jobsListContainer.innerHTML = '<p class="text-info text-center m-0">Tidak ada pekerjaan yang cocok ditemukan.</p>';
    } else {
        jobs.forEach((job, index) => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('card', 'mb-3', 'shadow-sm', 'animate-fade-in', 'border-0', 'rounded-3');
            jobCard.style.animationDelay = `${0.1 * index}s`;

            // Menerapkan toLowerCase() untuk detail pekerjaan
            const title = (job.Title || 'tidak ada judul').toLowerCase();
            const company = (job.Company || 'tidak diketahui').toLowerCase();
            const similarityScore = (job.similarity_score * 100).toFixed(2);
            const fullDescription = (job['Job Description'] || 'deskripsi pekerjaan tidak tersedia.').toLowerCase();
            const shortDescription = fullDescription.substring(0, 150) + (fullDescription.length > 150 ? '...' : '');
            const link = job.Link && job.Link !== '#' ? job.Link : '#';

            // --- BAGIAN PERBAIKAN UNTUK LOKASI ---
            let primaryLocation = (job.Location || '').toLowerCase();
            let secondaryLocationParts = [];

            // Fungsi pembantu untuk memeriksa apakah string sudah terkandung
            const containsCaseInsensitive = (mainStr, subStr) => {
                return mainStr.toLowerCase().includes(subStr.toLowerCase());
            };

            // Tambahkan City, Region, Country jika belum ada di primaryLocation dan tidak kosong
            if (job.City && !containsCaseInsensitive(primaryLocation, job.City)) {
                secondaryLocationParts.push(job.City.toLowerCase());
            }
            if (job.Region && !containsCaseInsensitive(primaryLocation, job.Region)) {
                secondaryLocationParts.push(job.Region.toLowerCase());
            }
            if (job.Country && !containsCaseInsensitive(primaryLocation, job.Country)) {
                secondaryLocationParts.push(job.Country.toLowerCase());
            }

            // Gabungkan primaryLocation dengan secondaryLocationParts (jika ada dan berbeda)
            let displayLocation = primaryLocation;
            if (secondaryLocationParts.length > 0) {
                if (displayLocation) { // Jika primaryLocation sudah ada, tambahkan koma
                    displayLocation += ', ';
                }
                displayLocation += secondaryLocationParts.filter(Boolean).join(', ');
            }
            // Pastikan tidak ada koma di awal jika primaryLocation kosong dan secondaryLocationParts juga kosong
            if (displayLocation.startsWith(', ')) {
                displayLocation = displayLocation.substring(2);
            }
            if (!displayLocation) {
                displayLocation = 'lokasi tidak diketahui'; // Fallback jika semua kosong
            }
            // --- AKHIR BAGIAN PERBAIKAN LOKASI ---

            jobCard.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title mb-1 fw-bold text-dark-blue">${index + 1}. ${title}</h6>
                    <p class="card-text text-muted small mb-2">
                        <i class="bi bi-building me-1"></i>${company}
                        <i class="bi bi-geo-alt-fill ms-3 me-1"></i>${displayLocation}
                    </p>
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge bg-success me-2">Cocok</span>
                        <div class="progress flex-grow-1" style="height: 8px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: ${similarityScore}%;" aria-valuenow="${similarityScore}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="ms-2 fw-bold small" style="color: var(--primary);">${similarityScore}%</span>
                    </div>
                    <p class="card-text job-description mb-3">
                        <span class="short-description">${shortDescription}</span>
                        ${fullDescription.length > 150 ? `<span class="full-description d-none">${fullDescription}</span>
                        <button class="btn btn-link p-0 ms-1 toggle-description" data-expanded="false">Tampilkan Lebih Banyak</button>` : ''}
                    </p>
                    <a href="${link}" target="_blank" class="btn btn-sm btn-outline-primary ${link === '#' ? 'disabled' : ''}">Lihat Detail <i class="bi bi-box-arrow-up-right ms-1"></i></a>
                </div>
            `;
            jobsListContainer.appendChild(jobCard);
        });

        jobsListContainer.querySelectorAll('.toggle-description').forEach(button => {
            button.addEventListener('click', (event) => {
                const btn = event.target;
                const parentP = btn.closest('.job-description');
                const shortSpan = parentP.querySelector('.short-description');
                const fullSpan = parentP.querySelector('.full-description');

                if (btn.dataset.expanded === 'false') {
                    shortSpan.classList.add('d-none');
                    fullSpan.classList.remove('d-none');
                    btn.textContent = 'Tampilkan Lebih Sedikit';
                    btn.dataset.expanded = 'true';
                } else {
                    shortSpan.classList.remove('d-none');
                    fullSpan.classList.add('d-none');
                    btn.textContent = 'Tampilkan Lebih Banyak';
                    btn.dataset.expanded = 'false';
                }
            });
        });
    }
    jobsListContainer.classList.add('animate-slide-up');
    jobsListContainer.style.animationDelay = '0.5s';
}