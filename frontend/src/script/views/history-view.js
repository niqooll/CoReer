import { format } from 'date-fns';

export function truncateText(text, limit) {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return text;
}

function renderJobItem(job, index) {
    const descriptionLimit = 50;
    const fullDescription = job['Job Description'] || '';
    const truncatedDescription = truncateText(fullDescription, descriptionLimit);
    const needsTruncation = fullDescription.split(' ').length > descriptionLimit;

    const escapedFullDescription = fullDescription.replace(/"/g, '&quot;');
    const escapedTruncatedDescription = truncatedDescription.replace(/"/g, '&quot;');

    return `
        <li class="mb-3 p-3 border rounded bg-white shadow-sm job-card animate-fade-in" style="animation-delay: ${0.05 * index}s;">
            <h6 class="text-brand-primary mb-1"><strong>${job.Title || 'N/A'}</strong> <small class="text-muted fw-normal">di ${job.Company || 'N/A'}</small></h6>
            <p class="mb-1"><small class="text-info fw-medium">Skor Kecocokan: ${(job.similarity_score * 100).toFixed(2)}%</small></p>
            ${job.Location ? `<p class="mb-1"><small class="text-muted"><i class="bi bi-geo-alt-fill me-1"></i>Lokasi: ${job.Location}</small></p>` : ''}
            ${fullDescription ? `
                <p class="text-dark"><small>
                    <strong>Deskripsi:</strong>
                    <span class="job-description-text ${needsTruncation ? 'truncated' : ''}">${needsTruncation ? truncatedDescription : fullDescription}</span>
                    ${needsTruncation ? `
                        <button class="btn btn-link btn-sm p-0 ms-1 toggle-description-btn"
                                data-full-description="${escapedFullDescription}"
                                data-truncated-description="${escapedTruncatedDescription}"
                                style="text-decoration: none;">
                            Selengkapnya
                        </button>
                    ` : ''}
                </small></p>
            ` : ''}
            <a href="${job.Link || '#'}" target="_blank" class="btn btn-sm btn-outline-secondary mt-2">Lihat Pekerjaan</a>
        </li>
    `;
}

export function renderHistoryPage(historyData = [], errorMessage = '', currentSelectedHistoryId = null) {
    const histories = Array.isArray(historyData) ? historyData : [];

    return `
        <section class="history-section py-5 min-vh-100 bg-light">
            <div class="container-xl">
                <div class="text-center mb-5">
                    <h1 class="fw-bold text-dark-blue display-5 animate-slide-up">Riwayat Analisis CV</h1>
                    <p class="lead animate-fade-in delay-1">
                        Lihat kembali analisis CV Anda dan rekomendasi pekerjaan yang cocok.
                    </p>
                </div>

                ${errorMessage ? `<p class="alert alert-danger text-center animate-fade-in">${errorMessage}</p>` : ''}

                <div class="row g-3"> <div class="col-12 col-md-4">
                        <div class="card shadow-sm animate-slide-right-fade border-0 rounded-4" style="background-color: var(--sec-normal);">
                            <div class="card-header text-white rounded-top-4" style="background-color: var(--normal);">
                                <h5 class="card-title mb-0"><i class="bi bi-clock-history me-2"></i>Riwayat Analisis</h5>
                            </div>
                            <div class="card-body p-3 d-flex flex-column">
                                <a href="#/main" class="btn btn-brand-primary w-100 mb-4 py-2 rounded-pill shadow animate-fade-in delay-1" style="--bs-btn-bg: var(--brand-primary); --bs-btn-border-color: var(--brand-primary); --bs-btn-hover-bg: var(--brand-primary-hover); --bs-btn-hover-border-color: var(--brand-primary-hover);">
                                    <i class="bi bi-plus-lg me-2"></i> Analisis Baru
                                </a>
                                <div id="history-list-sidebar" class="list-group overflow-auto">
                                    ${histories.length === 0
                                        ? `<p class="text-muted text-center small animate-fade-in">Belum ada riwayat analisis.</p>`
                                        : histories.map((entry) => `
                                            <a href="#" class="list-group-item list-group-item-action py-3 px-3 mb-2 rounded-3 shadow-sm history-sidebar-item ${entry.id === currentSelectedHistoryId ? 'active' : ''}" data-id="${entry.id}" style="background-color: var(--bs-pink-highlight-bg);">
                                                <div class="d-flex w-100 justify-content-between align-items-center">
                                                    <h6 class="mb-1 text-dark-blue">${entry.cv_filename || `Analisis #${entry.id}`}</h6>
                                                    <small class="text-muted">${entry.analysis_date ? format(new Date(entry.analysis_date), 'dd/MM/yyyy') : 'N/A'}</small>
                                                </div>
                                                <small class="text-secondary">Analisis pada: ${entry.analysis_date ? format(new Date(entry.analysis_date), 'HH:mm') : 'N/A'}</small>
                                                <button class="btn btn-sm btn-outline-danger delete-history-btn float-end mt-2" data-id="${entry.id}">
                                                    <i class="bi bi-trash"></i> Hapus
                                                </button>
                                            </a>
                                        `).join('')
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-8">
                        <div class="card shadow-sm h-100 animate-slide-left-fade border-0 rounded-4" style="background-color: var(--sec-normal);">
                            <div class="card-header text-white rounded-top-4" style="background-color: var(--dark);">
                                <h5 class="card-title mb-0"><i class="bi bi-briefcase me-2"></i>Rekomendasi Pekerjaan</h5>
                            </div>
                            <div class="card-body p-3 d-flex flex-column">
                                <div id="job-recommendation-list" class="list-unstyled flex-grow-1 overflow-auto">
                                    <p class="text-muted text-center animate-fade-in">Pilih riwayat dari sidebar untuk melihat rekomendasi pekerjaan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function updateJobRecommendations(jobsData) {
    const jobRecommendationList = document.querySelector('#job-recommendation-list');
    if (jobRecommendationList) {
        if (jobsData && jobsData.length > 0) {
            jobRecommendationList.innerHTML = jobsData.map((job, index) => renderJobItem(job, index)).join('');
        } else {
            jobRecommendationList.innerHTML = `<p class="text-muted text-center animate-fade-in">Tidak ada rekomendasi pekerjaan yang cocok ditemukan untuk riwayat analisis ini.</p>`;
        }
        document.querySelectorAll('.toggle-description-btn').forEach(button => {
            button.removeEventListener('click', toggleDescription);
            button.addEventListener('click', toggleDescription);
        });
    }
}

export function bindHistoryEvents(onDeleteCallback, onSelectHistoryCallback) {
    document.querySelectorAll('.history-sidebar-item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const historyId = event.currentTarget.dataset.id;
            document.querySelectorAll('.history-sidebar-item').forEach(el => el.classList.remove('active'));
            event.currentTarget.classList.add('active');

            if (onSelectHistoryCallback && typeof onSelectHistoryCallback === 'function') {
                onSelectHistoryCallback(historyId);
            }
        });
    });

    document.querySelectorAll('.delete-history-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            const historyId = button.dataset.id;
            if (onDeleteCallback) {
                onDeleteCallback(historyId);
            }
        });
    });
}

function toggleDescription(event) {
    const button = event.currentTarget;
    const fullDescription = button.dataset.fullDescription;
    const truncatedDescription = button.dataset.truncatedDescription;
    const descriptionElement = button.previousElementSibling;

    if (descriptionElement.classList.contains('truncated')) {
        descriptionElement.textContent = fullDescription;
        descriptionElement.classList.remove('truncated');
        button.textContent = 'Sembunyikan';
    } else {
        descriptionElement.textContent = truncatedDescription;
        descriptionElement.classList.add('truncated');
        button.textContent = 'Selengkapnya';
    }
}