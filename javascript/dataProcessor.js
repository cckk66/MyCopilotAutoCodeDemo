/**
 * Data Processor Module - 数据处理模块
 * This module demonstrates data processing functionality using GitHub Copilot.
 * 本模块展示使用 GitHub Copilot 实现的数据处理功能。
 */

class DataProcessor {
  /**
   * Initialize the data processor.
   */
  constructor() {
    this.data = [];
  }

  /**
   * Load data into the processor.
   * @param {Array<number>} data - Array of numeric values
   */
  loadData(data) {
    this.data = data;
  }

  /**
   * Calculate the average of a list of numbers.
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @returns {number} Average value
   * @throws {Error} If data is empty
   */
  getAverage(data = null) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length === 0) {
      throw new Error("Cannot calculate average of empty data");
    }
    const sum = dataset.reduce((acc, val) => acc + val, 0);
    return sum / dataset.length;
  }

  /**
   * Calculate the median of a list of numbers.
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @returns {number} Median value
   * @throws {Error} If data is empty
   */
  getMedian(data = null) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length === 0) {
      throw new Error("Cannot calculate median of empty data");
    }
    const sorted = [...dataset].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  /**
   * Calculate the mode of a list of numbers.
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @returns {number} Mode value
   * @throws {Error} If data is empty
   */
  getMode(data = null) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length === 0) {
      throw new Error("Cannot calculate mode of empty data");
    }
    const frequency = {};
    let maxFreq = 0;
    let mode = dataset[0];

    dataset.forEach(val => {
      frequency[val] = (frequency[val] || 0) + 1;
      if (frequency[val] > maxFreq) {
        maxFreq = frequency[val];
        mode = val;
      }
    });

    return mode;
  }

  /**
   * Calculate the standard deviation of a list of numbers.
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @returns {number} Standard deviation value
   * @throws {Error} If data is empty or has less than 2 values
   */
  getStandardDeviation(data = null) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length === 0) {
      throw new Error("Cannot calculate standard deviation of empty data");
    }
    if (dataset.length < 2) {
      throw new Error("Need at least 2 values to calculate standard deviation");
    }
    const avg = this.getAverage(dataset);
    const squareDiffs = dataset.map(val => Math.pow(val - avg, 2));
    const variance = squareDiffs.reduce((acc, val) => acc + val, 0) / (dataset.length - 1);
    return Math.sqrt(variance);
  }

  /**
   * Filter outliers from data using standard deviation method.
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @param {number} [threshold=2.0] - Number of standard deviations for outlier detection
   * @returns {Array<number>} Array of values without outliers
   */
  filterOutliers(data = null, threshold = 2.0) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length < 2) {
      return dataset;
    }

    const mean = this.getAverage(dataset);
    const std = this.getStandardDeviation(dataset);

    return dataset.filter(x => Math.abs(x - mean) <= threshold * std);
  }

  /**
   * Normalize data to range [0, 1].
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @returns {Array<number>} Normalized array of values
   * @throws {Error} If data is empty
   */
  normalize(data = null) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length === 0) {
      throw new Error("Cannot normalize empty data");
    }

    const min = Math.min(...dataset);
    const max = Math.max(...dataset);

    if (min === max) {
      return dataset.map(() => 0.5);
    }

    return dataset.map(x => (x - min) / (max - min));
  }

  /**
   * Get comprehensive summary statistics for the data.
   * @param {Array<number>} [data] - Array of numbers (optional, uses loaded data if not provided)
   * @returns {Object} Object containing various statistics
   */
  getSummaryStatistics(data = null) {
    const dataset = data !== null ? data : this.data;
    if (dataset.length === 0) {
      return {};
    }

    const summary = {
      count: dataset.length,
      min: Math.min(...dataset),
      max: Math.max(...dataset),
      mean: this.getAverage(dataset),
      median: this.getMedian(dataset)
    };

    if (dataset.length >= 2) {
      summary.std = this.getStandardDeviation(dataset);
    }

    return summary;
  }
}

// Demo usage - 示例使用
if (require.main === module) {
  const processor = new DataProcessor();

  // Sample data
  const sampleData = [10, 20, 30, 40, 50, 35, 25, 15, 45, 100];

  processor.loadData(sampleData);

  console.log("=== Data Processor Demo ===");
  console.log(`Original data: ${sampleData}`);
  console.log(`\nAverage: ${processor.getAverage()}`);
  console.log(`Median: ${processor.getMedian()}`);
  console.log(`Standard Deviation: ${processor.getStandardDeviation().toFixed(2)}`);

  console.log(`\nFiltered data (outliers removed): ${processor.filterOutliers()}`);
  console.log(`Normalized data: ${processor.normalize().map(x => x.toFixed(2))}`);

  console.log("\n=== Summary Statistics ===");
  const stats = processor.getSummaryStatistics();
  Object.entries(stats).forEach(([key, value]) => {
    if (typeof value === 'number' && !Number.isInteger(value)) {
      console.log(`${key}: ${value.toFixed(2)}`);
    } else {
      console.log(`${key}: ${value}`);
    }
  });
}

module.exports = DataProcessor;
