// src/script/views/edit-profile-view.js
import { bindFormValidation, isNotEmpty, isValidEmail } from '../utils/form-validation.js';

export function showEditProfile(container, user, errorMessage = '', onSubmit, onSubmitPassword) {
  container.innerHTML = `
    <div class="container mt-5">
      <div class="row">
        <!-- Sidebar tabs -->
        <div class="col-md-3 mb-4">
          <div class="list-group" id="profile-section-tabs" role="tablist" aria-label="Profile sections">
            <button
              class="list-group-item list-group-item-action active"
              id="edit-profile-tab"
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="edit-profile-section"
            >
              Edit Profile
            </button>
            <button
              class="list-group-item list-group-item-action"
              id="change-password-tab"
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="change-password-section"
            >
              Change Password
            </button>
          </div>
        </div>

        <!-- Content forms -->
        <div class="col-md-9">
          <!-- Edit Profile Form -->
          <section
            id="edit-profile-section"
            role="tabpanel"
            aria-labelledby="edit-profile-tab"
          >
            <h4 class="mb-4">Edit Profile</h4>
            <form id="edit-profile-form" novalidate>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-control"
                  value="${user.username}"
                  required
                />
                <small id="username-error" class="text-danger d-none"></small>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  value="${user.email}"
                  required
                />
                <small id="email-error" class="text-danger d-none"></small>
              </div>
              <button type="submit" class="btn btn-primary w-100" disabled>Save Changes</button>
            </form>
          </section>

          <!-- Change Password Form (hidden by default) -->
          <section
            id="change-password-section"
            role="tabpanel"
            aria-labelledby="change-password-tab"
            style="display:none;"
          >
            <h4 class="mb-4">Change Password</h4>
            <form id="change-password-form" novalidate>
              <div class="mb-3">
                <label for="oldPassword" class="form-label">Old Password</label>
                <input type="password" id="oldPassword" name="oldPassword" class="form-control" required />
                <small id="oldPassword-error" class="text-danger d-none"></small>
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" id="newPassword" name="newPassword" class="form-control" required />
                <small id="newPassword-error" class="text-danger d-none"></small>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm New Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" required />
                <small id="confirmPassword-error" class="text-danger d-none"></small>
              </div>
              <button type="submit" class="btn btn-secondary w-100" disabled>Change Password</button>
            </form>
          </section>

          <p class="text-danger mt-3 text-center">${errorMessage}</p>

          <div class="text-center mt-3">
            <a href="#/main" class="text-decoration-none">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Tabs toggling with accessibility update
  const editProfileTab = container.querySelector('#edit-profile-tab');
  const changePasswordTab = container.querySelector('#change-password-tab');
  const editProfileSection = container.querySelector('#edit-profile-section');
  const changePasswordSection = container.querySelector('#change-password-section');

  function showEditProfileForm() {
    editProfileTab.classList.add('active');
    changePasswordTab.classList.remove('active');
    editProfileTab.setAttribute('aria-selected', 'true');
    changePasswordTab.setAttribute('aria-selected', 'false');

    editProfileSection.style.display = 'block';
    changePasswordSection.style.display = 'none';
  }

  function showChangePasswordForm() {
    changePasswordTab.classList.add('active');
    editProfileTab.classList.remove('active');
    changePasswordTab.setAttribute('aria-selected', 'true');
    editProfileTab.setAttribute('aria-selected', 'false');

    changePasswordSection.style.display = 'block';
    editProfileSection.style.display = 'none';
  }

  editProfileTab.addEventListener('click', showEditProfileForm);
  changePasswordTab.addEventListener('click', showChangePasswordForm);

  showEditProfileForm(); // default tab

  // Enable Save button only when changes detected
  const saveButton = container.querySelector('#edit-profile-form button[type="submit"]');
  const usernameInput = container.querySelector('#username');
  const emailInput = container.querySelector('#email');

  const initialUsername = user.username;
  const initialEmail = user.email;

  function checkIfChanged() {
    const isChanged = usernameInput.value.trim() !== initialUsername || emailInput.value.trim() !== initialEmail;
    saveButton.disabled = !isChanged;
  }

  checkIfChanged();
  usernameInput.addEventListener('input', checkIfChanged);
  emailInput.addEventListener('input', checkIfChanged);

  // Validation and submit for Edit Profile form
  bindFormValidation({
    formId: 'edit-profile-form',
    fields: {
      username: {
        errorId: 'username-error',
        validators: [{ validator: isNotEmpty, message: 'Username tidak boleh kosong.' }],
      },
      email: {
        errorId: 'email-error',
        validators: [
          { validator: isNotEmpty, message: 'Email tidak boleh kosong.' },
          { validator: isValidEmail, message: 'Format email tidak valid.' },
        ],
      },
    },
    onSubmit,
  });

  // Submit event for Change Password form
  const changePasswordForm = container.querySelector('#change-password-form');
  changePasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const oldPassword = container.querySelector('#oldPassword').value.trim();
    const newPassword = container.querySelector('#newPassword').value.trim();
    const confirmPassword = container.querySelector('#confirmPassword').value.trim();

    if (!oldPassword || !newPassword || !confirmPassword) {
      window.alert('Semua field harus diisi.');
      return;
    }

    if (newPassword !== confirmPassword) {
      window.alert('Konfirmasi password tidak sama.');
      return;
    }

    onSubmitPassword({ oldPassword, newPassword });
  });

  // Enable/disable Change Password button
  const oldPasswordInput = container.querySelector('#oldPassword');
  const newPasswordInput = container.querySelector('#newPassword');
  const confirmPasswordInput = container.querySelector('#confirmPassword');
  const changePasswordButton = changePasswordForm.querySelector('button[type="submit"]');

  function checkChangePasswordFields() {
    const oldPassword = oldPasswordInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    changePasswordButton.disabled = !(oldPassword && newPassword && confirmPassword);
  }

  oldPasswordInput.addEventListener('input', checkChangePasswordFields);
  newPasswordInput.addEventListener('input', checkChangePasswordFields);
  confirmPasswordInput.addEventListener('input', checkChangePasswordFields);

  checkChangePasswordFields();
}
