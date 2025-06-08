// src/script/presenter/edit-profile-presenter.js
import { showEditProfile } from '../views/edit-profile-view.js';
import { getCurrentUser } from '../models/auth-model.js';
import { updateProfile } from '../models/user-model.js';
import { changePassword } from '../models/user-model.js';

export default class EditProfilePresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
    // Hapus atau abaikan this.currentUser di constructor untuk menghindari race condition awal
    // this.currentUser = getCurrentUser(); // <-- Ini bisa jadi penyebab race condition
  }

  init() {
    // Ambil status user terbaru saat init() dipanggil
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
    // Pastikan currentUser selalu terbaru setiap kali render
    this.currentUser = getCurrentUser();
    showEditProfile(
      this.app,
      this.currentUser,
      this.errorMessage,
      this.handleEditProfile.bind(this),
      this.handleChangePassword.bind(this)
    );
  }

  async handleEditProfile(data) {
    try {
      const updatedUser = await updateProfile(data.username, data.email);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update localStorage
      // Gunakan modal atau pesan di UI, hindari window.alert() di komponen SPAs
      // window.alert('Profile updated successfully!'); 
      if (this.app.querySelector('#general-error-message')) {
        this.app.querySelector('#general-error-message').textContent = 'Profile updated successfully!';
        this.app.querySelector('#general-error-message').classList.remove('d-none');
        this.app.querySelector('#general-error-message').classList.remove('text-danger');
        this.app.querySelector('#general-error-message').classList.add('text-success'); // Opsional: warna hijau untuk sukses
      }
      this.errorMessage = ''; // reset error message kalau ada
      this.render();
    } catch (err) {
      this.errorMessage = err.message;
      this.render();
    }
  }
  
  async handleChangePassword(data) {
    try {
      await changePassword(data.oldPassword, data.newPassword);
      // Gunakan modal atau pesan di UI, hindari window.alert() di komponen SPAs
      // window.alert('Password changed successfully!');
      if (this.app.querySelector('#general-error-message')) {
        this.app.querySelector('#general-error-message').textContent = 'Password changed successfully!';
        this.app.querySelector('#general-error-message').classList.remove('d-none');
        this.app.querySelector('#general-error-message').classList.remove('text-danger');
        this.app.querySelector('#general-error-message').classList.add('text-success'); // Opsional: warna hijau untuk sukses
      }
      this.errorMessage = '';
      this.render();
    } catch (err) {
      this.errorMessage = err.message;
      this.render();
    }
  }
}
