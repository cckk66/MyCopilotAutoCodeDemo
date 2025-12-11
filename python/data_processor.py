"""
Data Processor Module - 数据处理模块
This module demonstrates data processing functionality using GitHub Copilot.
本模块展示使用 GitHub Copilot 实现的数据处理功能。
"""

from typing import List, Dict, Any, Union
import statistics


class DataProcessor:
    """A class for processing and analyzing data."""
    
    def __init__(self):
        """Initialize the data processor."""
        self.data = []
    
    def load_data(self, data: List[Union[int, float]]) -> None:
        """
        Load data into the processor.
        
        Args:
            data: List of numeric values
        """
        self.data = data
    
    def get_average(self, data: List[Union[int, float]] = None) -> float:
        """
        Calculate the average of a list of numbers.
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            
        Returns:
            Average value
            
        Raises:
            ValueError: If data is empty
        """
        dataset = data if data is not None else self.data
        if not dataset:
            raise ValueError("Cannot calculate average of empty data")
        return statistics.mean(dataset)
    
    def get_median(self, data: List[Union[int, float]] = None) -> float:
        """
        Calculate the median of a list of numbers.
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            
        Returns:
            Median value
            
        Raises:
            ValueError: If data is empty
        """
        dataset = data if data is not None else self.data
        if not dataset:
            raise ValueError("Cannot calculate median of empty data")
        return statistics.median(dataset)
    
    def get_mode(self, data: List[Union[int, float]] = None) -> float:
        """
        Calculate the mode of a list of numbers.
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            
        Returns:
            Mode value
            
        Raises:
            ValueError: If data is empty
            statistics.StatisticsError: If no unique mode exists
        """
        dataset = data if data is not None else self.data
        if not dataset:
            raise ValueError("Cannot calculate mode of empty data")
        return statistics.mode(dataset)
    
    def get_standard_deviation(self, data: List[Union[int, float]] = None) -> float:
        """
        Calculate the standard deviation of a list of numbers.
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            
        Returns:
            Standard deviation value
            
        Raises:
            ValueError: If data is empty or has less than 2 values
        """
        dataset = data if data is not None else self.data
        if not dataset:
            raise ValueError("Cannot calculate standard deviation of empty data")
        if len(dataset) < 2:
            raise ValueError("Need at least 2 values to calculate standard deviation")
        return statistics.stdev(dataset)
    
    def filter_outliers(self, data: List[Union[int, float]] = None, 
                       threshold: float = 2.0) -> List[Union[int, float]]:
        """
        Filter outliers from data using standard deviation method.
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            threshold: Number of standard deviations for outlier detection
            
        Returns:
            List of values without outliers
        """
        dataset = data if data is not None else self.data
        if len(dataset) < 2:
            return dataset
        
        mean = self.get_average(dataset)
        std = self.get_standard_deviation(dataset)
        
        filtered = [x for x in dataset if abs(x - mean) <= threshold * std]
        return filtered
    
    def normalize(self, data: List[Union[int, float]] = None) -> List[float]:
        """
        Normalize data to range [0, 1].
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            
        Returns:
            Normalized list of values
            
        Raises:
            ValueError: If data is empty
        """
        dataset = data if data is not None else self.data
        if not dataset:
            raise ValueError("Cannot normalize empty data")
        
        min_val = min(dataset)
        max_val = max(dataset)
        
        if min_val == max_val:
            return [0.5] * len(dataset)
        
        return [(x - min_val) / (max_val - min_val) for x in dataset]
    
    def get_summary_statistics(self, data: List[Union[int, float]] = None) -> Dict[str, Any]:
        """
        Get comprehensive summary statistics for the data.
        
        Args:
            data: List of numbers (optional, uses loaded data if not provided)
            
        Returns:
            Dictionary containing various statistics
        """
        dataset = data if data is not None else self.data
        if not dataset:
            return {}
        
        summary = {
            'count': len(dataset),
            'min': min(dataset),
            'max': max(dataset),
            'mean': self.get_average(dataset),
            'median': self.get_median(dataset),
        }
        
        if len(dataset) >= 2:
            summary['std'] = self.get_standard_deviation(dataset)
        
        return summary


if __name__ == "__main__":
    # Demo usage - 示例使用
    processor = DataProcessor()
    
    # Sample data
    sample_data = [10, 20, 30, 40, 50, 35, 25, 15, 45, 100]
    
    processor.load_data(sample_data)
    
    print("=== Data Processor Demo ===")
    print(f"Original data: {sample_data}")
    print(f"\nAverage: {processor.get_average()}")
    print(f"Median: {processor.get_median()}")
    print(f"Standard Deviation: {processor.get_standard_deviation():.2f}")
    
    print(f"\nFiltered data (outliers removed): {processor.filter_outliers()}")
    print(f"Normalized data: {[f'{x:.2f}' for x in processor.normalize()]}")
    
    print("\n=== Summary Statistics ===")
    stats = processor.get_summary_statistics()
    for key, value in stats.items():
        if isinstance(value, float):
            print(f"{key}: {value:.2f}")
        else:
            print(f"{key}: {value}")
