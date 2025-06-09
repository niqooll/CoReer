// src/script/presenters/edit-profile-presenter.js
import { showEditProfile } from '../views/edit-profile-view.js';
import { getCurrentUser } from '../models/auth-model.js';
import { updateProfile, changePassword } from '../models/user-model.js'; // Pastikan changePassword diimpor

export default class EditProfilePresenter {
  constructor(appContainer) {
    this.app = appContainer;
    // Ubah errorMessage menjadi feedback object
    this.feedback = { type: '', message: '' };
  }

  async init() {
    this.currentUser = getCurrentUser();

    if (!this.currentUser) {
      console.log('EditProfilePresenter: User not found, redirecting to login.');
      window.location.hash = '#/login';
      return;
    }
    console.log('EditProfilePresenter: User found, rendering profile.');
    this.render();
  }

  render() {
    this.currentUser = getCurrentUser(); // Selalu dapatkan user terbaru saat render
    showEditProfile(
      this.app,
      this.currentUser,
      this.feedback, // Teruskan feedback object
      this.handleEditProfile.bind(this),
      this.handleChangePassword.bind(this)
    );
    // Setelah merender, reset feedback agar tidak terus ditampilkan pada render berikutnya
    this.feedback = { type: '', message: '' };
  }

  async handleEditProfile(data) {
    try {
      const updatedUser = await updateProfile(data.username, data.email);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      // Set feedback sukses
      this.feedback = { type: 'success', message: 'Profil berhasil diperbarui!' };
      this.render(); // Render ulang untuk menampilkan pesan
    } catch (err) {
      // Set feedback error
      this.feedback = { type: 'error', message: err.message || 'Gagal memperbarui profil.' };
      this.render(); // Render ulang untuk menampilkan pesan
    }
  }

  async handleChangePassword(data) {
    try {
      await changePassword(data.oldPassword, data.newPassword);
      // Set feedback sukses khusus untuk password
      this.feedback = { type: 'password-success', message: 'Password berhasil diubah!' };
      this.render(); // Render ulang untuk menampilkan pesan
    } catch (err) {
      // Set feedback error khusus untuk password
      this.feedback = { type: 'password-error', message: err.message || 'Gagal mengubah password. Pastikan password lama benar.' };
      this.render(); // Render ulang untuk menampilkan pesan
    }
  }
}