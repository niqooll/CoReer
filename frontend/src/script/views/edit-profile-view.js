// src/script/views/edit-profile-view.js
import { bindFormValidation, isNotEmpty, isValidEmail, isStrongPassword, arePasswordsMatching } from '../utils/form-validation.js';

// Ubah parameter errorMessage menjadi feedback object
export function showEditProfile(container, user, feedback = { type: '', message: '' }, onSubmit, onSubmitPassword) {
  container.innerHTML = `
    <div class="container-fluid px-3 px-md-4 my-3 my-md-5 py-3 py-md-5">
      <h2 class="text-center mb-4 mb-md-5 fw-bold text-dark-blue display-6 display-md-5 animate-slide-up">My Account</h2>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-9">
          <div class="card p-2 p-sm-3 p-md-4 shadow-lg border-0 rounded-4 profile-card animate-fade-in">
            <div class="card-body p-2 p-sm-3">
              <div class="row g-3 g-md-4">
                <!-- Sidebar Navigation -->
                <div class="col-12 col-md-4 col-lg-3 mb-3 mb-md-0 position-relative">
                  <div class="list-group list-group-flush profile-tabs d-flex d-md-block flex-row flex-md-column" id="profile-section-tabs" role="tablist" aria-label="Profile sections">
                    <button
                      class="list-group-item list-group-item-action active rounded-3 mb-0 mb-md-2 me-2 me-md-0 flex-fill flex-md-auto text-center text-md-start"
                      id="edit-profile-tab"
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="edit-profile-section"
                    >
                      <i class="bi bi-person-fill me-0 me-md-2 d-block d-md-inline"></i> 
                      <span class="d-none d-sm-inline">Edit Profile</span>
                      <span class="d-sm-none">Profile</span>
                    </button>
                    <button
                      class="list-group-item list-group-item-action rounded-3 mb-0 mb-md-2 flex-fill flex-md-auto text-center text-md-start"
                      id="change-password-tab"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="change-password-section"
                    >
                      <i class="bi bi-key-fill me-0 me-md-2 d-block d-md-inline"></i> 
                      <span class="d-none d-sm-inline">Change Password</span>
                      <span class="d-sm-none">Password</span>
                    </button>
                  </div>
                </div>

                <!-- Main Content Area -->
                <div class="col-12 col-md-8 col-lg-9 position-relative">
                  <div class="tab-content">
                    <!-- Edit Profile Section -->
                    <section
                      id="edit-profile-section"
                      role="tabpanel"
                      aria-labelledby="edit-profile-tab"
                      class="tab-pane fade show active"
                    >
                      <h4 class="mb-3 mb-md-4 fw-bold text-dark-blue fs-5 fs-md-4">Edit Profile Information</h4>
                      <form id="edit-profile-form" novalidate>
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-3">
                              <label for="username" class="form-label fw-medium">Username</label>
                              <input
                                type="text"
                                id="username"
                                name="username"
                                class="form-control form-control-lg" 
                                value="${user.username}"
                                required
                              />
                              <small id="username-error" class="text-danger d-none"></small>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="mb-4">
                              <label for="email" class="form-label fw-medium">Email</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                class="form-control form-control-lg" 
                                value="${user.email}"
                                required
                              />
                              <small id="email-error" class="text-danger d-none"></small>
                            </div>
                          </div>
                          <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-lg w-100 mt-2 mt-md-3" disabled>
                              <i class="bi bi-check-circle me-2"></i>Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </section>

                    <!-- Change Password Section -->
                    <section
                      id="change-password-section"
                      role="tabpanel"
                      aria-labelledby="change-password-tab"
                      class="tab-pane fade"
                    >
                      <h4 class="mb-3 mb-md-4 fw-bold text-dark-blue fs-5 fs-md-4">Change Your Password</h4>
                      <form id="change-password-form" novalidate>
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-3">
                              <label for="oldPassword" class="form-label fw-medium">Old Password</label>
                              <input type="password" id="oldPassword" name="oldPassword" class="form-control form-control-lg" required />
                              <small id="oldPassword-error" class="text-danger d-none"></small>
                            </div>
                          </div>
                          <div class="col-12 col-sm-6">
                            <div class="mb-3">
                              <label for="newPassword" class="form-label fw-medium">New Password</label>
                              <input type="password" id="newPassword" name="newPassword" class="form-control form-control-lg" required />
                              <small id="newPassword-error" class="text-danger d-none"></small>
                            </div>
                          </div>
                          <div class="col-12 col-sm-6">
                            <div class="mb-4">
                              <label for="confirmNewPassword" class="form-label fw-medium">Confirm New Password</label>
                              <input type="password" id="confirmNewPassword" name="confirmNewPassword" class="form-control form-control-lg" required />
                              <small id="confirmNewPassword-error" class="text-danger d-none"></small>
                            </div>
                          </div>
                          <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-lg w-100 mt-2 mt-md-3" disabled>
                              <i class="bi bi-shield-lock me-2"></i>Change Password
                            </button>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
              
              <!-- Feedback Message -->
              <div class="row mt-3 mt-md-4">
                <div class="col-12">
                  <p class="text-center fw-bold mb-0
                    ${feedback.type === 'error' ? 'text-danger' : ''}
                    ${feedback.type === 'success' ? 'text-success' : ''}
                    ${feedback.type === 'info' ? 'text-info' : ''}
                    ${feedback.message ? '' : 'd-none'}"
                    id="feedback-message">
                    ${feedback.message}
                  </p>
                </div>
              </div>

              <!-- Back to Home Link -->
              <div class="row mt-3 mt-md-4">
                <div class="col-12 text-center">
                  <a href="#/main" class="text-decoration-none text-brand-primary fw-medium">
                    <i class="bi bi-arrow-left me-2"></i>Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const editProfileTab = container.querySelector('#edit-profile-tab');
  const changePasswordTab = container.querySelector('#change-password-tab');
  const editProfileSection = container.querySelector('#edit-profile-section');
  const changePasswordSection = container.querySelector('#change-password-section');
  const feedbackMessageDisplay = container.querySelector('#feedback-message'); // Ubah id selector

  function showSection(sectionToShow) {
    if (sectionToShow === 'edit-profile') {
      editProfileTab.classList.add('active');
      changePasswordTab.classList.remove('active');
      editProfileTab.setAttribute('aria-selected', 'true');
      changePasswordTab.setAttribute('aria-selected', 'false');

      editProfileSection.classList.add('show', 'active');
      editProfileSection.style.display = 'block';
      changePasswordSection.classList.remove('show', 'active');
      changePasswordSection.style.display = 'none';

    } else if (sectionToShow === 'change-password') {
      changePasswordTab.classList.add('active');
      editProfileTab.classList.remove('active');
      changePasswordTab.setAttribute('aria-selected', 'true');
      editProfileTab.setAttribute('aria-selected', 'false');

      changePasswordSection.classList.add('show', 'active');
      changePasswordSection.style.display = 'block';
      editProfileSection.classList.remove('show', 'active');
      editProfileSection.style.display = 'none';
    }

    // Bersihkan pesan feedback saat berpindah tab
    if (feedbackMessageDisplay) {
      feedbackMessageDisplay.textContent = '';
      feedbackMessageDisplay.classList.add('d-none');
      feedbackMessageDisplay.classList.remove('text-danger', 'text-success', 'text-info');
    }
  }

  editProfileTab.addEventListener('click', () => showSection('edit-profile'));
  changePasswordTab.addEventListener('click', () => showSection('change-password'));

  // Tentukan bagian mana yang akan ditampilkan secara default atau berdasarkan feedback
  if (feedback.type === 'password-success' || feedback.type === 'password-error') {
      showSection('change-password'); // Jika feedback terkait password, langsung tampilkan tab password
  } else {
      showSection('edit-profile'); // Default ke tab edit profile
  }


  // --- Edit Profile Form Logic ---
  const editProfileForm = container.querySelector('#edit-profile-form');
  const saveButton = editProfileForm.querySelector('button[type="submit"]');
  const usernameInput = container.querySelector('#username');
  const emailInput = container.querySelector('#email');

  const initialUsername = user.username;
  const initialEmail = user.email;

  function checkIfEditProfileChangedAndValid() {
    const isChanged = usernameInput.value.trim() !== initialUsername || emailInput.value.trim() !== initialEmail;
    // Disables if no changes OR if form is not valid based on native browser validation
    saveButton.disabled = !isChanged || !editProfileForm.checkValidity();
  }

  usernameInput.addEventListener('input', checkIfEditProfileChangedAndValid);
  emailInput.addEventListener('input', checkIfEditProfileChangedAndValid);

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
    onSubmit: (formData) => {
      if (formData.username === initialUsername && formData.email === initialEmail) {
        console.log('Tidak ada perubahan terdeteksi untuk profil. Tidak submit.');
        // Tampilkan pesan info untuk "tidak ada perubahan"
        if (feedbackMessageDisplay) {
          feedbackMessageDisplay.textContent = 'Tidak ada perubahan untuk disimpan.';
          feedbackMessageDisplay.classList.remove('d-none', 'text-danger', 'text-success');
          feedbackMessageDisplay.classList.add('text-info'); // Warna informasi
        }
        return;
      }
      onSubmit(formData); // Panggil onSubmit eksternal yang akan menangani penyimpanan data
    },
  });

  setTimeout(() => {
    checkIfEditProfileChangedAndValid();
  }, 0);

  // --- Logika Formulir Ubah Password ---
  const changePasswordForm = container.querySelector('#change-password-form');
  const newPasswordInput = changePasswordForm.querySelector('#newPassword');
  const confirmNewPasswordInput = changePasswordForm.querySelector('#confirmNewPassword');

  bindFormValidation({
    formId: 'change-password-form',
    fields: {
      oldPassword: {
        errorId: 'oldPassword-error',
        validators: [{ validator: isNotEmpty, message: 'Password lama tidak boleh kosong.' }],
      },
      newPassword: {
        errorId: 'newPassword-error',
        validators: [
          { validator: isNotEmpty, message: 'Password baru tidak boleh kosong.' },
          { validator: isStrongPassword, message: 'Password harus minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol.' }
        ],
      },
      confirmNewPassword: {
        errorId: 'confirmNewPassword-error',
        validators: [
          { validator: isNotEmpty, message: 'Konfirmasi password tidak boleh kosong.' },
          {
            validator: arePasswordsMatching,
            message: 'Konfirmasi password tidak cocok dengan password baru.'
          }
        ],
      },
    },
    onSubmit: (formData) => {
      onSubmitPassword({ oldPassword: formData.oldPassword, newPassword: formData.newPassword });
    },
  });

  // Tampilkan pesan feedback awal (jika ada dari pemanggilan awal)
  if (feedback.message && feedbackMessageDisplay) {
    feedbackMessageDisplay.textContent = feedback.message;
    feedbackMessageDisplay.classList.remove('d-none');
    feedbackMessageDisplay.classList.remove('text-danger', 'text-success', 'text-info'); // Bersihkan kelas sebelumnya
    if (feedback.type === 'error') {
      feedbackMessageDisplay.classList.add('text-danger');
    } else if (feedback.type === 'success') {
      feedbackMessageDisplay.classList.add('text-success');
    } else if (feedback.type === 'info') {
      feedbackMessageDisplay.classList.add('text-info');
    }
  }
}