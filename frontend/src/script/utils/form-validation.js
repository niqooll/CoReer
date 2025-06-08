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
  // Assuming a basic password validation for this function based on context,
  // the 'isStrongPassword' in edit-profile-view.js will handle stricter rules.
  return password.length >= 8;
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

// New validator: checks if two passwords match
export function arePasswordsMatching(password, allValues) {
  // allValues will contain all form field values, so we can access newPassword
  return password === allValues.newPassword;
}

// Strong password validation based on common criteria
export function isStrongPassword(password) {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
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

  // Set up realtime validation for all fields
  for (const [fieldName, fieldConfig] of Object.entries(fields)) {
    const inputEl = form.elements[fieldName];
    const errorEl = document.getElementById(fieldConfig.errorId);
    if (!inputEl || !errorEl) continue;

    const validateInput = () => {
      const value = inputEl.value;
      const allValues = {};
      // Collect all current form values for cross-field validation (e.g., password matching)
      for (const key in fields) {
        if (form.elements[key]) {
          allValues[key] = form.elements[key].value;
        }
      }

      let errorMessage = '';
      for (const { validator, message } of fieldConfig.validators) {
        // Pass allValues to validator for cross-field checks if needed
        if (!validator(value, allValues)) {
          errorMessage = message;
          break;
        }
      }

      if (errorMessage) {
        setError(inputEl, errorEl, errorMessage);
      } else {
        clearError(inputEl, errorEl);
      }
      updateSubmitButtonState(); // Update button state after each input
    };

    inputEl.addEventListener('input', validateInput);
    // Also run validation on blur to catch errors when user leaves a field
    inputEl.addEventListener('blur', validateInput);
  }

  // Function to update the submit button's disabled state
  const updateSubmitButtonState = () => {
    let allFieldsValid = true;
    const submitButton = form.querySelector('button[type="submit"]');
    if (!submitButton) return;

    for (const [fieldName, fieldConfig] of Object.entries(fields)) {
      const inputEl = form.elements[fieldName];
      if (!inputEl) continue;

      const value = inputEl.value;
      const allValues = {};
      for (const key in fields) {
        if (form.elements[key]) {
          allValues[key] = form.elements[key].value;
        }
      }

      let fieldIsValid = true;
      for (const { validator } of fieldConfig.validators) {
        if (!validator(value, allValues)) {
          fieldIsValid = false;
          break;
        }
      }
      if (!fieldIsValid) {
        allFieldsValid = false;
        break;
      }
    }
    submitButton.disabled = !allFieldsValid;
  };

  // Initial validation check on load
  setTimeout(updateSubmitButtonState, 0);


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const formData = {};

    // Re-validate all fields on submit
    for (const [fieldName, fieldConfig] of Object.entries(fields)) {
      const inputEl = form.elements[fieldName];
      const errorEl = document.getElementById(fieldConfig.errorId);
      if (!inputEl || !errorEl) continue;

      const value = inputEl.value;
      formData[fieldName] = value;

      const allValues = {};
      for (const key in fields) {
        if (form.elements[key]) {
          allValues[key] = form.elements[key].value;
        }
      }

      let errorMessage = '';
      for (const { validator, message } of fieldConfig.validators) {
        if (!validator(value, allValues)) {
          errorMessage = message;
          valid = false;
          break;
        }
      }

      if (errorMessage) {
        setError(inputEl, errorEl, errorMessage);
      } else {
        clearError(inputEl, errorEl);
      }
    }

    if (valid) {
      onSubmit(formData);
    } else {
        // If not valid, ensure button is disabled
        updateSubmitButtonState();
    }
  });
}
