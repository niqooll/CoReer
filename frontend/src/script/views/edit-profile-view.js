import { bindFormValidation, isNotEmpty, isValidEmail, isStrongPassword, arePasswordsMatching } from '../utils/form-validation.js';

export function showEditProfile(container, user, errorMessage = '', onSubmit, onSubmitPassword) {
  container.innerHTML = `
    <div class="container my-5 py-5">
      <h2 class="text-center mb-5 fw-bold text-dark-blue display-5 animate-slide-up">My Account</h2> <div class="row justify-content-center"> <div class="col-lg-9 col-md-10"> <div class="card p-4 shadow-lg border-0 rounded-4 profile-card animate-fade-in"> <div class="card-body">
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0 position-relative">
                    <div class="list-group list-group-flush profile-tabs" id="profile-section-tabs" role="tablist" aria-label="Profile sections">
                        <button
                            class="list-group-item list-group-item-action active rounded-3 mb-2"
                            id="edit-profile-tab"
                            type="button"
                            role="tab"
                            aria-selected="true"
                            aria-controls="edit-profile-section"
                        >
                            <i class="bi bi-person-fill me-2"></i> Edit Profile
                        </button>
                        <button
                            class="list-group-item list-group-item-action rounded-3 mb-2"
                            id="change-password-tab"
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="change-password-section"
                        >
                            <i class="bi bi-key-fill me-2"></i> Change Password
                        </button>
                    </div>
                </div>

                <div class="col-md-8 position-relative">
                    <div class="tab-content">
                        <section
                            id="edit-profile-section"
                            role="tabpanel"
                            aria-labelledby="edit-profile-tab"
                            class="tab-pane fade show active"
                        >
                            <h4 class="mb-4 fw-bold text-dark-blue">Edit Profile Information</h4>
                            <form id="edit-profile-form" novalidate>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        class="form-control form-control-lg" value="${user.username}"
                                        required
                                    />
                                    <small id="username-error" class="text-danger d-none"></small>
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="form-control form-control-lg" value="${user.email}"
                                        required
                                    />
                                    <small id="email-error" class="text-danger d-none"></small>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg w-100 mt-3" disabled>Save Changes</button>
                            </form>
                        </section>

                        <section
                            id="change-password-section"
                            role="tabpanel"
                            aria-labelledby="change-password-tab"
                            class="tab-pane fade"
                        >
                            <h4 class="mb-4 fw-bold text-dark-blue">Change Your Password</h4>
                            <form id="change-password-form" novalidate>
                                <div class="mb-3">
                                    <label for="oldPassword" class="form-label">Old Password</label>
                                    <input type="password" id="oldPassword" name="oldPassword" class="form-control form-control-lg" required />
                                    <small id="oldPassword-error" class="text-danger d-none"></small>
                                </div>
                                <div class="mb-3">
                                    <label for="newPassword" class="form-label">New Password</label>
                                    <input type="password" id="newPassword" name="newPassword" class="form-control form-control-lg" required />
                                    <small id="newPassword-error" class="text-danger d-none"></small>
                                </div>
                                <div class="mb-4">
                                    <label for="confirmPassword" class="form-label">Confirm New Password</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" class="form-control form-control-lg" required />
                                    <small id="confirmPassword-error" class="text-danger d-none"></small>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg w-100 mt-3" disabled>Change Password</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            ${errorMessage ? `<p class="text-danger mt-4 text-center fw-bold animate-fade-in" id="general-error-message">${errorMessage}</p>` : `<p id="general-error-message" class="text-danger mt-4 text-center fw-bold d-none"></p>`}

            <div class="text-center mt-4">
                <a href="#/main" class="text-decoration-none text-brand-primary fw-medium"><i class="bi bi-arrow-left me-2"></i> Back to Home</a>
            </div>
        </div>
      </div>
     </div>
    </div>
  </div>`;

  // --- JavaScript Logic ---

  const editProfileTab = container.querySelector('#edit-profile-tab');
  const changePasswordTab = container.querySelector('#change-password-tab');
  const editProfileSection = container.querySelector('#edit-profile-section');
  const changePasswordSection = container.querySelector('#change-password-section');
  const generalErrorMessageDisplay = container.querySelector('#general-error-message'); // Menggunakan ID untuk kemudahan akses

  /**
   * Menampilkan bagian form tertentu (Edit Profile atau Change Password)
   * dan memperbarui status tab serta membersihkan pesan error umum.
   * @param {string} sectionToShow - 'edit-profile' atau 'change-password'.
   */
  function showSection(sectionToShow) {
    if (sectionToShow === 'edit-profile') {
      editProfileTab.classList.add('active');
      changePasswordTab.classList.remove('active');
      editProfileTab.setAttribute('aria-selected', 'true');
      changePasswordTab.setAttribute('aria-selected', 'false');

      editProfileSection.classList.add('show', 'active');
      editProfileSection.style.display = 'block'; // Fallback for transition compatibility
      changePasswordSection.classList.remove('show', 'active');
      changePasswordSection.style.display = 'none';

    } else if (sectionToShow === 'change-password') {
      changePasswordTab.classList.add('active');
      editProfileTab.classList.remove('active');
      changePasswordTab.setAttribute('aria-selected', 'true');
      editProfileTab.setAttribute('aria-selected', 'false');

      changePasswordSection.classList.add('show', 'active');
      changePasswordSection.style.display = 'block'; // Fallback
      editProfileSection.classList.remove('show', 'active');
      editProfileSection.style.display = 'none';
    }

    // Selalu bersihkan pesan error umum saat beralih tab
    if (generalErrorMessageDisplay) {
      generalErrorMessageDisplay.textContent = '';
      generalErrorMessageDisplay.classList.add('d-none');
    }
  }

  // Attach event listeners for tab switching
  editProfileTab.addEventListener('click', () => showSection('edit-profile'));
  changePasswordTab.addEventListener('click', () => showSection('change-password'));

  // Set default tab on load
  showSection('edit-profile');

  // --- Edit Profile Form Logic ---
  const editProfileForm = container.querySelector('#edit-profile-form');
  const saveButton = editProfileForm.querySelector('button[type="submit"]');
  const usernameInput = container.querySelector('#username');
  const emailInput = container.querySelector('#email');

  const initialUsername = user.username;
  const initialEmail = user.email;

  // Function to determine if 'Save Changes' button should be enabled
  // It checks if user data has changed AND if the form is generally valid (via bindFormValidation's internal state)
  function checkIfEditProfileChangedAndValid() {
    const isChanged = usernameInput.value.trim() !== initialUsername || emailInput.value.trim() !== initialEmail;
    // We rely on bindFormValidation to manage the actual validity classes and messages.
    // The button state should reflect both "changes made" and "form is valid".
    // A simple way is to check the 'is-invalid' class or rely on bindFormValidation's updateSubmitButtonState.
    // However, since bindFormValidation already disables/enables based on its own validation,
    // we only need to layer the 'isChanged' logic.
    // The submit button's 'disabled' state will primarily be driven by bindFormValidation,
    // but we can add a specific check here for the 'isChanged' part.
    // If no changes, button should be disabled even if form is valid technically.
    saveButton.disabled = !isChanged || !editProfileForm.checkValidity(); // Use native checkValidity for form-level validity

    // If form is valid but no changes, disable the button.
    // This is handled better inside the onSubmit callback for bindFormValidation.
  }

  // Attach listeners for input changes to re-evaluate button state
  usernameInput.addEventListener('input', checkIfEditProfileChangedAndValid);
  emailInput.addEventListener('input', checkIfEditProfileChangedAndValid);


  // Bind validation for Edit Profile form
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
      // Check if data actually changed before submitting to avoid unnecessary API calls
      if (formData.username === initialUsername && formData.email === initialEmail) {
        console.log('No changes detected for profile. Not submitting.');
        if (generalErrorMessageDisplay) {
          generalErrorMessageDisplay.textContent = 'Tidak ada perubahan untuk disimpan.';
          generalErrorMessageDisplay.classList.remove('d-none');
        }
        // No need to disable button here, bindFormValidation will update it.
        return;
      }
      onSubmit(formData); // Call the controller's onSubmit function
    },
  });

  // Re-run the change check once after bindFormValidation's initial setup
  // to correctly set the initial disabled state based on 'isChanged'
  setTimeout(() => {
    checkIfEditProfileChangedAndValid();
  }, 0);


  // --- Change Password Form Logic ---
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
      confirmPassword: {
        errorId: 'confirmPassword-error',
        validators: [
          { validator: isNotEmpty, message: 'Konfirmasi password tidak boleh kosong.' },
          {
            validator: (value, allValues) => arePasswordsMatching(value, allValues),
            message: 'Konfirmasi password tidak cocok dengan password baru.'
          }
        ],
      },
    },
    onSubmit: (formData) => {
      // In this case, formData will contain oldPassword, newPassword, confirmPassword
      // We pass only oldPassword and newPassword to onSubmitPassword as per your original logic
      onSubmitPassword({ oldPassword: formData.oldPassword, newPassword: formData.newPassword });
    },
  });

  // Display initial general error message if any
  if (errorMessage && generalErrorMessageDisplay) {
    generalErrorMessageDisplay.textContent = errorMessage;
    generalErrorMessageDisplay.classList.remove('d-none');
  }
}