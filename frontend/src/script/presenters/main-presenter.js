// src/script/presenter/main-presenter.js
import * as MainView from '../views/main-view.js';
import { predictCV } from '../models/predict-model.js';

export default class MainPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
    this.selectedFile = null;  // simpan file yang dipilih
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = MainView.renderMainPage(this.handleLogout.bind(this), this.errorMessage);
    MainView.bindLogoutButton(this.handleLogout.bind(this));
    MainView.bindUploadAndPreview(this.handleFileSelected.bind(this));
    MainView.bindAnalyzeButton(this.handleAnalyze.bind(this));
  }

  handleLogout() {
    localStorage.removeItem('currentUser');
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  handleFileSelected(file) {
    this.selectedFile = file;
  }

  async handleAnalyze() {
    if (!this.selectedFile) {
      MainView.showPredictionResult(`<span class="text-warning">Please upload a valid PDF file first.</span>`);
      return;
    }

    try {
      MainView.showPredictionResult('Analyzing CV...');
      const result = await predictCV(this.selectedFile); // result akan berisi { status, message, data: [...] }

      if (result.status === 'success' && result.data && result.data.length > 0) {
        // Panggil fungsi baru di MainView untuk menampilkan daftar pekerjaan
        MainView.displayMatchingJobs(result.data);
      } else if (result.status === 'success' && result.data && result.data.length === 0) {
        MainView.showPredictionResult('<span class="text-info">Tidak ada pekerjaan yang cocok ditemukan.</span>');
      }
      else {
        MainView.showPredictionResult(`<span class="text-danger">Failed to get prediction: ${result.message || 'Unknown error'}</span>`);
      }
    } catch (error) {
      MainView.showPredictionResult(`<span class="text-danger">${error.message}</span>`);
    }
  }
}