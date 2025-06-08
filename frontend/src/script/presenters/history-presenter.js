// src/script/presenter/history-presenter.js
import * as HistoryView from '../views/history-view.js';
import { getUserHistory, deleteUserHistory } from '../models/history-model.js';
import { getCurrentUser } from '../models/auth-model.js';

export default class HistoryPresenter {
    constructor(appContainer) {
        this.app = appContainer;
        this.historyData = [];
        this.errorMessage = '';
    }

    async init() {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            console.log('HistoryPresenter: Pengguna tidak ditemukan, mengalihkan ke login.');
            window.location.hash = '#/login';
            return;
        }

        await this.fetchHistory(); // Pemanggilan pertama fetchHistory
        this.render(); // Pemanggilan pertama render
    }

    async fetchHistory() {
        try {
            const data = await getUserHistory();
            this.historyData = data;
            this.errorMessage = '';
        } catch (error) {
            console.error('Error fetching history:', error);
            this.errorMessage = error.message || 'Gagal memuat riwayat analisis.';
            this.historyData = [];
        }
    }

    async handleDeleteHistory(historyId) {
        console.log('handleDeleteHistory terpanggil dengan ID:', historyId);
        try {
            await deleteUserHistory(historyId);
            console.log(`Riwayat dengan ID ${historyId} berhasil dihapus.`);

            await this.fetchHistory(); // Pemanggilan kedua fetchHistory setelah penghapusan
            this.render(); // Pemanggilan kedua render setelah penghapusan
        } catch (error) {
            console.error('Error deleting history in presenter:', error);
            this.errorMessage = error.message || 'Gagal menghapus riwayat analisis.';
            this.render(); // Render ulang untuk menampilkan pesan error
        }
    }

    render() {
        this.app.innerHTML = HistoryView.renderHistoryPage(this.historyData, this.errorMessage);
        HistoryView.bindHistoryDetailsToggle(this.handleDeleteHistory.bind(this));
    }
}