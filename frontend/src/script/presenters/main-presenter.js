// src/script/presenter/main-presenter.js
// src/script/presenter/main-presenter.js
import * as MainView from '../views/main-view.js';

export default class MainPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = MainView.renderMainPage(this.handleLogout.bind(this), this.errorMessage);
    MainView.bindLogoutButton(this.handleLogout.bind(this));
    this.bindUploadAndPreview(); // <== PENTING: panggil ini supaya event drag & drop aktif
  }

  handleLogout() {
    // Hapus session/local storage user
    localStorage.removeItem('currentUser');

    // Redirect ke landing page
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  bindUploadAndPreview() {
    const fileInput = document.getElementById('cv-upload');
    const previewContainer = document.getElementById('cv-preview');
    const dropZone = document.getElementById('drop-zone');

    if (!fileInput || !previewContainer || !dropZone) return;

    function showPreview(file) {
      if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%"></iframe>`;
      } else {
        previewContainer.innerHTML = `<p class="text-danger text-center">Invalid file. Please upload a .pdf</p>`;
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
}
