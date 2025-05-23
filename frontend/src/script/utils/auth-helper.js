// src/script/utils/auth-helper.js
export default {
  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },
  clearAuth() {
    localStorage.removeItem('currentUser');
  },
  isLoggedIn() {
    return !!this.getCurrentUser();
  },
};
