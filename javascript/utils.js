/**
 * Utility Functions Module - 工具函数模块
 * This module contains utility functions demonstrating GitHub Copilot's code generation.
 * 本模块包含展示 GitHub Copilot 代码生成能力的工具函数。
 */

/**
 * Validate if a string is a valid email address.
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid, False otherwise
 */
function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

/**
 * Format a phone number to (XXX) XXX-XXXX format.
 * @param {string} phone - Phone number string (digits only)
 * @returns {string} Formatted phone number
 * @throws {Error} If phone number is not 10 digits
 */
function formatPhoneNumber(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length !== 10) {
    throw new Error("Phone number must be 10 digits");
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * Calculate age from birth date.
 * @param {string} birthDate - Birth date in YYYY-MM-DD format
 * @returns {number} Age in years
 */
function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

/**
 * Split an array into chunks of specified size.
 * @param {Array} arr - Array to split
 * @param {number} chunkSize - Size of each chunk
 * @returns {Array<Array>} Array of chunks
 */
function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Flatten a nested array into a single array.
 * @param {Array<Array>} nestedArray - Nested array to flatten
 * @returns {Array} Flattened array
 */
function flattenArray(nestedArray) {
  return nestedArray.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Remove duplicates from an array while preserving order.
 * @param {Array} arr - Array with potential duplicates
 * @returns {Array} Array without duplicates
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Merge multiple objects into one.
 * @param {...Object} objects - Variable number of objects to merge
 * @returns {Object} Merged object
 */
function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
}

/**
 * Convert a string to camelCase.
 * @param {string} str - String to convert (e.g., "hello_world" or "hello-world")
 * @returns {string} camelCase string
 */
function toCamelCase(str) {
  const words = str.split(/[-_\s]+/);
  if (words.length === 0) return str;
  return words[0].toLowerCase() + 
    words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

/**
 * Convert a string to snake_case.
 * @param {string} str - String to convert (e.g., "HelloWorld" or "hello-world")
 * @returns {string} snake_case string
 */
function toSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[-\s]+/g, '_')
    .toLowerCase()
    .replace(/^_/, '');
}

/**
 * Truncate a string to a maximum length.
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} [suffix='...'] - Suffix to add if truncated
 * @returns {string} Truncated string
 */
function truncateString(str, maxLength, suffix = '...') {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Check if a string is a palindrome (ignoring case and non-alphanumeric characters).
 * @param {string} str - String to check
 * @returns {boolean} True if palindrome, False otherwise
 */
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Debounce a function to limit how often it can be called.
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Generate a random string of specified length.
 * @param {number} length - Length of the random string
 * @returns {string} Random string
 */
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Demo usage - 示例使用
if (require.main === module) {
  console.log("=== Utility Functions Demo ===\n");

  // Email validation
  console.log("Email Validation:");
  console.log(`'test@example.com': ${validateEmail('test@example.com')}`);
  console.log(`'invalid.email': ${validateEmail('invalid.email')}`);

  // Phone formatting
  console.log("\nPhone Formatting:");
  console.log(`'1234567890' -> ${formatPhoneNumber('1234567890')}`);

  // Age calculation
  console.log("\nAge Calculation:");
  console.log(`Born on 1990-01-01: ${calculateAge('1990-01-01')} years old`);

  // Array operations
  console.log("\nArray Operations:");
  const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(`Original: ${original}`);
  console.log(`Chunked (size 3): ${JSON.stringify(chunkArray(original, 3))}`);
  console.log(`With duplicates: [1, 2, 2, 3, 3, 3, 4]`);
  console.log(`Removed duplicates: ${removeDuplicates([1, 2, 2, 3, 3, 3, 4])}`);

  // String operations
  console.log("\nString Operations:");
  console.log(`'hello_world' to camelCase: ${toCamelCase('hello_world')}`);
  console.log(`'HelloWorld' to snake_case: ${toSnakeCase('HelloWorld')}`);
  console.log(`Truncate 'Hello World' to 8 chars: ${truncateString('Hello World', 8)}`);
  console.log(`'A man a plan a canal Panama' is palindrome: ${isPalindrome('A man a plan a canal Panama')}`);

  // Random string
  console.log("\nRandom String Generation:");
  console.log(`Random string (10 chars): ${generateRandomString(10)}`);
}

module.exports = {
  validateEmail,
  formatPhoneNumber,
  calculateAge,
  chunkArray,
  flattenArray,
  removeDuplicates,
  mergeObjects,
  toCamelCase,
  toSnakeCase,
  truncateString,
  isPalindrome,
  debounce,
  generateRandomString
};
