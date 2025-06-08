// src/script/presenter/main-presenter.js
import * as MainView from '../views/main-view.js';
import { predictCV } from '../models/predict-model.js';
// import { logoutUser } from '../models/auth-model.js'; // Ini tidak lagi diperlukan di sini

export default class MainPresenter {
    constructor(appContainer) {
        this.app = appContainer;
        this.errorMessage = '';
        this.selectedFile = null;
    }

    init() {
        this.render();
    }

    render() {
        // Panggil renderMainPage tanpa parameter onLogout
        this.app.innerHTML = MainView.renderMainPage(this.errorMessage);

        // Hapus baris ini karena logout sudah ditangani di navbar
        // MainView.bindLogoutButton(this.handleLogout.bind(this));

        MainView.bindUploadAndPreview(this.handleFileSelected.bind(this));
        MainView.bindAnalyzeButton(this.handleAnalyze.bind(this));

        MainView.hideAnalyzeLoading(false);
    }

    // Fungsi handleLogout dihapus dari sini karena sudah ditangani di navbar
    // handleLogout() {
    //     logoutUser();
    //     history.pushState({}, '', '/');
    //     window.dispatchEvent(new PopStateEvent('popstate'));
    // }

    handleFileSelected(file) {
        this.selectedFile = file;
    }

    async handleAnalyze() {
        if (!this.selectedFile) {
            MainView.showPredictionResult(`<p class="text-warning text-center m-0 py-3">Please upload a valid PDF file first.</p>`);
            MainView.hideAnalyzeLoading(false);
            return;
        }

        MainView.showPredictionResult(`<p class="text-info text-center m-0 py-3"><span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Analyzing CV...</p>`);
        MainView.displayMatchingJobs([]);

        try {
            const result = await predictCV(this.selectedFile);

            if (result.status === 'success') {
                if (result.data && result.data.length > 0) {
                    MainView.showPredictionResult(`<p class="text-success text-center m-0 py-3">Analysis complete. Found ${result.data.length} matching jobs.</p>`);
                    MainView.displayMatchingJobs(result.data);
                } else {
                    MainView.showPredictionResult('<p class="text-info text-center m-0 py-3">Analysis complete. No matching jobs found.</p>');
                    MainView.displayMatchingJobs([]);
                }
            } else {
                MainView.showPredictionResult(`<p class="text-danger text-center m-0 py-3">Failed to get prediction: ${result.message || 'Unknown error'}</p>`);
                MainView.displayMatchingJobs([]);
            }
        } catch (error) {
            console.error('Error during CV analysis:', error);
            MainView.showPredictionResult(`<p class="text-danger text-center m-0 py-3">An error occurred: ${error.message || 'Please try again.'}</p>`);
            MainView.displayMatchingJobs([]);
        } finally {
            MainView.hideAnalyzeLoading(this.selectedFile !== null);
        }
    }
}