// src/script/utils/form-validation.js

// Helper: show error message
export function setError(inputEl, errorEl, message) {
  errorEl.textContent = message;
  errorEl.style.display = 'block';
  inputEl.classList.add('is-invalid');
}

// Helper: clear error message
export function clearError(inputEl, errorEl) {
  errorEl.textContent = '';
  errorEl.style.display = 'none';
  inputEl.classList.remove('is-invalid');
}

// Common validators
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password) {
  return password.length >= 8;
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

// Bind form validation based on config
// config example:
// {
//   formId: 'login-form',
//   fields: {
//     email: {
//       errorId: 'email-error',
//       validators: [
//         { validator: isNotEmpty, message: 'Email tidak boleh kosong.' },
//         { validator: isValidEmail, message: 'Format email tidak valid.' }
//       ]
//     },
//     password: {
//       errorId: 'password-error',
//       validators: [
//         { validator: isNotEmpty, message: 'Password tidak boleh kosong.' },
//         { validator: isValidPassword, message: 'Password harus minimal 8 karakter.' }
//       ]
//     }
//   },
//   onSubmit: (formData) => { ... }
// }

export function bindFormValidation({ formId, fields, onSubmit }) {
  const form = document.getElementById(formId);
  if (!form) return;

  // Set up realtime validation
  for (const [fieldName, { errorId, validators }] of Object.entries(fields)) {
    const inputEl = form.elements[fieldName];
    const errorEl = document.getElementById(errorId);
    if (!inputEl || !errorEl) continue;

    inputEl.addEventListener('input', () => {
      const value = inputEl.value;
      let errorMessage = '';
      for (const { validator, message } of validators) {
        if (!validator(value)) {
          errorMessage = message;
          break;
        }
      }
      if (errorMessage) {
        setError(inputEl, errorEl, errorMessage);
      } else {
        clearError(inputEl, errorEl);
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const formData = {};

    for (const [fieldName, { errorId, validators }] of Object.entries(fields)) {
      const inputEl = form.elements[fieldName];
      const errorEl = document.getElementById(errorId);
      if (!inputEl || !errorEl) continue;

      const value = inputEl.value;
      formData[fieldName] = value;

      let errorMessage = '';
      for (const { validator, message } of validators) {
        if (!validator(value)) {
          errorMessage = message;
          valid = false;
          break;
        }
      }

      if (errorMessage) {
        setError(inputEl, errorEl, errorMessage);
        // Focus first invalid input
        if (valid === false && !form.querySelector('.is-invalid')) {
          inputEl.focus();
        }
      } else {
        clearError(inputEl, errorEl);
      }
    }

    if (valid) {
      onSubmit(formData);
    }
  });
}
