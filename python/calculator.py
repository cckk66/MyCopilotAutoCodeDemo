"""
Calculator Module - 计算器模块
This module demonstrates basic calculator functionality using GitHub Copilot.
本模块展示使用 GitHub Copilot 实现的基本计算器功能。
"""


class Calculator:
    """A simple calculator class with basic arithmetic operations."""
    
    def __init__(self):
        """Initialize the calculator."""
        self.result = 0
        self.history = []
    
    def add(self, a, b):
        """
        Add two numbers.
        
        Args:
            a: First number
            b: Second number
            
        Returns:
            Sum of a and b
        """
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def subtract(self, a, b):
        """
        Subtract b from a.
        
        Args:
            a: First number
            b: Second number
            
        Returns:
            Difference of a and b
        """
        result = a - b
        self.history.append(f"{a} - {b} = {result}")
        return result
    
    def multiply(self, a, b):
        """
        Multiply two numbers.
        
        Args:
            a: First number
            b: Second number
            
        Returns:
            Product of a and b
        """
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result
    
    def divide(self, a, b):
        """
        Divide a by b.
        
        Args:
            a: First number (dividend)
            b: Second number (divisor)
            
        Returns:
            Quotient of a and b
            
        Raises:
            ValueError: If b is zero
        """
        if b == 0:
            raise ValueError("Cannot divide by zero")
        result = a / b
        self.history.append(f"{a} / {b} = {result}")
        return result
    
    def power(self, base, exponent):
        """
        Calculate base raised to the power of exponent.
        
        Args:
            base: The base number
            exponent: The exponent
            
        Returns:
            base raised to the power of exponent
        """
        result = base ** exponent
        self.history.append(f"{base} ^ {exponent} = {result}")
        return result
    
    def square_root(self, n):
        """
        Calculate the square root of a number.
        
        Args:
            n: The number to find square root of
            
        Returns:
            Square root of n
            
        Raises:
            ValueError: If n is negative
        """
        if n < 0:
            raise ValueError("Cannot calculate square root of negative number")
        result = n ** 0.5
        self.history.append(f"√{n} = {result}")
        return result
    
    def get_history(self):
        """
        Get calculation history.
        
        Returns:
            List of calculation history strings
        """
        return self.history
    
    def clear_history(self):
        """Clear the calculation history."""
        self.history = []


if __name__ == "__main__":
    # Demo usage - 示例使用
    calc = Calculator()
    
    print("=== Calculator Demo ===")
    print(f"5 + 3 = {calc.add(5, 3)}")
    print(f"10 - 4 = {calc.subtract(10, 4)}")
    print(f"6 * 7 = {calc.multiply(6, 7)}")
    print(f"20 / 4 = {calc.divide(20, 4)}")
    print(f"2 ^ 8 = {calc.power(2, 8)}")
    print(f"√16 = {calc.square_root(16)}")
    
    print("\n=== Calculation History ===")
    for entry in calc.get_history():
        print(entry)
