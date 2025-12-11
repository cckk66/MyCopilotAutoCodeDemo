/**
 * Calculator Module - 计算器模块
 * This module demonstrates basic calculator functionality using GitHub Copilot.
 * 本模块展示使用 GitHub Copilot 实现的基本计算器功能。
 */

class Calculator {
  /**
   * Initialize the calculator.
   */
  constructor() {
    this.result = 0;
    this.history = [];
  }

  /**
   * Add two numbers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    const result = a + b;
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  /**
   * Subtract b from a.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    const result = a - b;
    this.history.push(`${a} - ${b} = ${result}`);
    return result;
  }

  /**
   * Multiply two numbers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    const result = a * b;
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }

  /**
   * Divide a by b.
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a and b
   * @throws {Error} If b is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    const result = a / b;
    this.history.push(`${a} / ${b} = ${result}`);
    return result;
  }

  /**
   * Calculate base raised to the power of exponent.
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} base raised to the power of exponent
   */
  power(base, exponent) {
    const result = Math.pow(base, exponent);
    this.history.push(`${base} ^ ${exponent} = ${result}`);
    return result;
  }

  /**
   * Calculate the square root of a number.
   * @param {number} n - The number to find square root of
   * @returns {number} Square root of n
   * @throws {Error} If n is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    const result = Math.sqrt(n);
    this.history.push(`√${n} = ${result}`);
    return result;
  }

  /**
   * Get calculation history.
   * @returns {Array<string>} List of calculation history strings
   */
  getHistory() {
    return this.history;
  }

  /**
   * Clear the calculation history.
   */
  clearHistory() {
    this.history = [];
  }
}

// Demo usage - 示例使用
if (require.main === module) {
  const calc = new Calculator();

  console.log("=== Calculator Demo ===");
  console.log(`5 + 3 = ${calc.add(5, 3)}`);
  console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
  console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
  console.log(`20 / 4 = ${calc.divide(20, 4)}`);
  console.log(`2 ^ 8 = ${calc.power(2, 8)}`);
  console.log(`√16 = ${calc.squareRoot(16)}`);

  console.log("\n=== Calculation History ===");
  calc.getHistory().forEach(entry => console.log(entry));
}

module.exports = Calculator;
