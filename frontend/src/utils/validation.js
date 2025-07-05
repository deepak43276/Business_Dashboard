// Validation rules
export const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z0-9\s&'-]+$/
  },
  location: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s,.-]+$/
  }
};

// Validation messages
export const validationMessages = {
  name: {
    required: 'Business name is required',
    minLength: 'Business name must be at least 2 characters',
    maxLength: 'Business name must be less than 50 characters',
    pattern: 'Business name can only contain letters, numbers, spaces, &, \', and -'
  },
  location: {
    required: 'Location is required',
    minLength: 'Location must be at least 2 characters',
    maxLength: 'Location must be less than 50 characters',
    pattern: 'Location can only contain letters, spaces, commas, periods, and hyphens'
  }
};

// Validate a single field
export const validateField = (fieldName, value) => {
  const rules = validationRules[fieldName];
  const messages = validationMessages[fieldName];

  if (!rules) return { isValid: true, message: '' };

  // Required validation
  if (rules.required && (!value || value.trim() === '')) {
    return { isValid: false, message: messages.required };
  }

  // Min length validation
  if (rules.minLength && value.length < rules.minLength) {
    return { isValid: false, message: messages.minLength };
  }

  // Max length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    return { isValid: false, message: messages.maxLength };
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return { isValid: false, message: messages.pattern };
  }

  return { isValid: true, message: '' };
};

// Validate entire form
export const validateForm = (formData) => {
  const errors = {};
  let isValid = true;

  Object.keys(validationRules).forEach(fieldName => {
    const validation = validateField(fieldName, formData[fieldName]);
    if (!validation.isValid) {
      errors[fieldName] = validation.message;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Real-time validation for input fields
export const validateOnChange = (fieldName, value) => {
  return validateField(fieldName, value);
}; 