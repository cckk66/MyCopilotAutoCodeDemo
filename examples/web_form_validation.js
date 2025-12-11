/**
 * Web Form Validation - Web 表单验证
 * Demonstrating form validation with GitHub Copilot.
 * 使用 GitHub Copilot 演示表单验证。
 */

/**
 * Validate a registration form with comprehensive checks.
 * 验证注册表单，包含全面的检查。
 * 
 * @param {Object} formData - Form data object
 * @returns {Object} Validation result with errors
 */
function validateRegistrationForm(formData) {
  const errors = {};

  // Validate username: 3-20 characters, alphanumeric and underscore only
  if (!formData.username) {
    errors.username = "Username is required";
  } else if (formData.username.length < 3 || formData.username.length > 20) {
    errors.username = "Username must be between 3 and 20 characters";
  } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
    errors.username = "Username can only contain letters, numbers, and underscores";
  }

  // Validate email: valid email format
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate password: minimum 8 characters, must contain uppercase, lowercase, number, and special character
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/(?=.*[a-z])/.test(formData.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/(?=.*[A-Z])/.test(formData.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/(?=.*\d)/.test(formData.password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/(?=.*[@$!%*?&])/.test(formData.password)) {
    errors.password = "Password must contain at least one special character (@$!%*?&)";
  }

  // Validate password confirmation
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Validate age: must be 18 or older
  if (!formData.age) {
    errors.age = "Age is required";
  } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 120) {
    errors.age = "You must be between 18 and 120 years old";
  }

  // Validate phone number: optional, but must be valid format if provided
  if (formData.phone && !/^\+?[\d\s\-()]+$/.test(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  // Validate terms acceptance
  if (!formData.acceptTerms) {
    errors.acceptTerms = "You must accept the terms and conditions";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
}

/**
 * Validate credit card number using Luhn algorithm.
 * 使用 Luhn 算法验证信用卡号。
 * 
 * @param {string} cardNumber - Credit card number
 * @returns {boolean} True if valid
 */
function validateCreditCard(cardNumber) {
  // Remove spaces and dashes
  const cleaned = cardNumber.replace(/[\s-]/g, '');

  // Check if it's all digits
  if (!/^\d+$/.test(cleaned)) {
    return false;
  }

  // Check length (13-19 digits)
  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * Sanitize user input to prevent XSS attacks.
 * 清理用户输入以防止 XSS 攻击。
 * 
 * @param {string} input - User input string
 * @returns {string} Sanitized string
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate URL format.
 * 验证 URL 格式。
 * 
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
function validateURL(url) {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch (e) {
    return false;
  }
}

// Demo usage - 示例使用
if (require.main === module) {
  console.log("=== Form Validation Demo ===\n");

  // Test registration form
  const testFormData = {
    username: "john_doe",
    email: "john@example.com",
    password: "SecurePass123!",
    confirmPassword: "SecurePass123!",
    age: 25,
    phone: "+1-234-567-8900",
    acceptTerms: true
  };

  const validationResult = validateRegistrationForm(testFormData);
  console.log("Registration Form Validation:");
  console.log(`Valid: ${validationResult.isValid}`);
  if (!validationResult.isValid) {
    console.log("Errors:", validationResult.errors);
  }

  // Test credit card validation
  console.log("\n=== Credit Card Validation ===");
  const testCards = [
    "4532-1488-0343-6467", // Valid Visa
    "1234-5678-9012-3456", // Invalid
    "5425-2334-3010-9903"  // Valid Mastercard
  ];

  testCards.forEach(card => {
    console.log(`${card}: ${validateCreditCard(card) ? 'Valid' : 'Invalid'}`);
  });

  // Test input sanitization
  console.log("\n=== Input Sanitization ===");
  const dangerousInput = "<script>alert('XSS')</script>";
  console.log(`Original: ${dangerousInput}`);
  console.log(`Sanitized: ${sanitizeInput(dangerousInput)}`);

  // Test URL validation
  console.log("\n=== URL Validation ===");
  const testURLs = [
    "https://example.com",
    "http://localhost:3000",
    "ftp://invalid.com",
    "not-a-url"
  ];

  testURLs.forEach(url => {
    console.log(`${url}: ${validateURL(url) ? 'Valid' : 'Invalid'}`);
  });
}

module.exports = {
  validateRegistrationForm,
  validateCreditCard,
  sanitizeInput,
  validateURL
};
