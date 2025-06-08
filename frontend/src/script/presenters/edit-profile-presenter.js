// src/script/presenter/edit-profile-presenter.js
import { showEditProfile } from '../views/edit-profile-view.js';
import { getCurrentUser } from '../models/auth-model.js';
import { updateProfile } from '../models/user-model.js';
import { changePassword } from '../models/user-model.js';

export default class EditProfilePresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
    this.currentUser = getCurrentUser();
  }

  init() {
    if (!this.currentUser) {
      window.location.hash = '#/login';
      return;
    }
    this.render();
  }

  render() {
    this.currentUser = getCurrentUser(); // ambil ulang dari localStorage
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
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      window.alert('Profile updated successfully!');
      this.errorMessage = ''; // reset error message kalau ada
      this.render();
    } catch (err) {
      this.errorMessage = err.message;
      this.render();
    }
  }
  
  async handleChangePassword(data) {
    try {
      // panggil backend ganti password
      await changePassword(data.oldPassword, data.newPassword);

      window.alert('Password changed successfully!');
      this.errorMessage = '';
      this.render();
    } catch (err) {
      this.errorMessage = err.message;
      this.render();
    }
  }
}
