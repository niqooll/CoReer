// src/script/presenter/history-presenter.js
import * as HistoryView from '../views/history-view.js';
import { getUserHistory, deleteUserHistory } from '../models/history-model.js'; // Impor fungsi spesifik
import { getCurrentUser, logout } from '../models/auth-model.js'; // Impor logout dari auth-model

export default class HistoryPresenter {
    constructor(appContainer) {
        this.app = appContainer;
        this.historyData = [];
        this.errorMessage = '';
        this._currentSelectedHistory = null;
    }

    async init() {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            window.location.hash = '#/login';
            return;
        }

        await this.fetchHistory();
        this.render();
    }

    async fetchHistory() {
        try {
            const data = await getUserHistory();
            this.historyData = data.sort((a, b) => new Date(b.analysis_date) - new Date(a.analysis_date));
            this.errorMessage = '';

            if (this.historyData.length > 0 && !this._currentSelectedHistory) {
                this._currentSelectedHistory = this.historyData[0].id;
            }
        } catch (error) {
            console.error('Error fetching history:', error);
            this.errorMessage = error.message || 'Gagal memuat riwayat analisis.';

            // Periksa status HTTP jika tersedia
            if (error.response && error.response.status === 401) { // Periksa jika status 401 Unauthorized
                alert('Sesi Anda telah berakhir. Silakan login kembali.');
                window.location.hash = '#/login';
                return;
            }
        }
    }

    async handleDeleteHistory(historyId) {
        try {
            await deleteUserHistory(historyId);

            await this.fetchHistory();
            if (!this.historyData.some(item => item.id === this._currentSelectedHistory)) {
                this._currentSelectedHistory = this.historyData.length > 0 ? this.historyData[0].id : null;
            }
            this.render();
        } catch (error) {
            console.error('Error deleting history in presenter:', error);
            this.errorMessage = error.message || 'Gagal menghapus riwayat analisis.';

            // Periksa status HTTP jika tersedia
            if (error.response && error.response.status === 401) { // Periksa jika status 401 Unauthorized
                alert('Sesi Anda telah berakhir. Silakan login kembali.');
                window.location.hash = '#/login';
                return;
            }
            this.render();
        }
    }


    handleSelectHistory(historyId) {
        this._currentSelectedHistory = historyId;
        this._updateJobRecommendationsInView();
    }

    render() {
        this.app.innerHTML = HistoryView.renderHistoryPage(this.historyData, this.errorMessage, this._currentSelectedHistory);

        HistoryView.bindHistoryEvents(
            this.handleDeleteHistory.bind(this),
            this.handleSelectHistory.bind(this)
        );

        this._updateJobRecommendationsInView();
    }

    _updateJobRecommendationsInView() {
        const selectedHistory = this.historyData.find(item => item.id === this._currentSelectedHistory);
        let jobsToDisplay = [];
        if (selectedHistory && selectedHistory.matching_jobs) {
            jobsToDisplay = selectedHistory.matching_jobs;
        }

        HistoryView.updateJobRecommendations(jobsToDisplay);
    }
}