// src/script/presenter/main-presenter.js
import * as MainView from '../views/main-view.js';
import { predictCV, saveAnalysisHistory } from '../models/predict-model.js'; // Pastikan saveAnalysisHistory diimpor jika digunakan
import { getCurrentUser, logout } from '../models/auth-model.js'; // Import logout

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
        const user = getCurrentUser();
        this.app.innerHTML = MainView.renderMainPage(user, this.errorMessage);
        MainView.bindUploadAndPreview(this.handleFileSelected.bind(this));
        MainView.bindAnalyzeButton(this.handleAnalyze.bind(this));
        MainView.hideAnalyzeLoading(false);
    }

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

                    // Pastikan Anda menyimpan riwayat analisis jika diperlukan di sini
                    // Contoh:
                    // await saveAnalysisHistory(this.selectedFile.name, result.data);
                    // console.log('Analysis history saved!');

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

            // --- Tambahkan logika ini ---
            // Cek jika error adalah karena token expired dan arahkan ke login
            if (error.message.includes('Session expired') || error.message.includes('Unauthorized')) {
                alert('Sesi Anda telah berakhir. Silakan login kembali untuk melanjutkan.');
                window.location.hash = '#/login';
                return;
            }
            // --- Akhir logika tambahan ---

        } finally {
            MainView.hideAnalyzeLoading(this.selectedFile !== null);
        }
    }
}