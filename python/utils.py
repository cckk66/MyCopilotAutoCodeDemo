"""
Utility Functions Module - 工具函数模块
This module contains utility functions demonstrating GitHub Copilot's code generation.
本模块包含展示 GitHub Copilot 代码生成能力的工具函数。
"""

import re
from typing import List, Dict, Any
from datetime import datetime, timedelta


def validate_email(email: str) -> bool:
    """
    Validate if a string is a valid email address.
    
    Args:
        email: Email address to validate
        
    Returns:
        True if valid, False otherwise
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))


def format_phone_number(phone: str) -> str:
    """
    Format a phone number to (XXX) XXX-XXXX format.
    
    Args:
        phone: Phone number string (digits only)
        
    Returns:
        Formatted phone number
        
    Raises:
        ValueError: If phone number is not 10 digits
    """
    digits = re.sub(r'\D', '', phone)
    if len(digits) != 10:
        raise ValueError("Phone number must be 10 digits")
    return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"


def calculate_age(birth_date: str) -> int:
    """
    Calculate age from birth date.
    
    Args:
        birth_date: Birth date in YYYY-MM-DD format
        
    Returns:
        Age in years
    """
    birth = datetime.strptime(birth_date, "%Y-%m-%d")
    today = datetime.today()
    age = today.year - birth.year
    if today.month < birth.month or (today.month == birth.month and today.day < birth.day):
        age -= 1
    return age


def chunk_list(lst: List[Any], chunk_size: int) -> List[List[Any]]:
    """
    Split a list into chunks of specified size.
    
    Args:
        lst: List to split
        chunk_size: Size of each chunk
        
    Returns:
        List of chunks
    """
    return [lst[i:i + chunk_size] for i in range(0, len(lst), chunk_size)]


def flatten_list(nested_list: List[List[Any]]) -> List[Any]:
    """
    Flatten a nested list into a single list.
    
    Args:
        nested_list: Nested list to flatten
        
    Returns:
        Flattened list
    """
    return [item for sublist in nested_list for item in sublist]


def remove_duplicates(lst: List[Any]) -> List[Any]:
    """
    Remove duplicates from a list while preserving order.
    
    Args:
        lst: List with potential duplicates
        
    Returns:
        List without duplicates
    """
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result


def merge_dicts(*dicts: Dict[str, Any]) -> Dict[str, Any]:
    """
    Merge multiple dictionaries into one.
    
    Args:
        *dicts: Variable number of dictionaries to merge
        
    Returns:
        Merged dictionary
    """
    result = {}
    for d in dicts:
        result.update(d)
    return result


def string_to_camel_case(s: str) -> str:
    """
    Convert a string to camelCase.
    
    Args:
        s: String to convert (e.g., "hello_world" or "hello-world")
        
    Returns:
        camelCase string
    """
    words = re.split(r'[-_\s]+', s)
    if not words:
        return s
    return words[0].lower() + ''.join(word.capitalize() for word in words[1:])


def string_to_snake_case(s: str) -> str:
    """
    Convert a string to snake_case.
    
    Args:
        s: String to convert (e.g., "HelloWorld" or "hello-world")
        
    Returns:
        snake_case string
    """
    # Insert underscore before uppercase letters
    s = re.sub(r'([A-Z])', r'_\1', s)
    # Replace hyphens and spaces with underscores
    s = re.sub(r'[-\s]+', '_', s)
    # Convert to lowercase and remove leading underscore
    return s.lower().strip('_')


def truncate_string(s: str, max_length: int, suffix: str = "...") -> str:
    """
    Truncate a string to a maximum length.
    
    Args:
        s: String to truncate
        max_length: Maximum length
        suffix: Suffix to add if truncated (default: "...")
        
    Returns:
        Truncated string
    """
    if len(s) <= max_length:
        return s
    return s[:max_length - len(suffix)] + suffix


def is_palindrome(s: str) -> bool:
    """
    Check if a string is a palindrome (ignoring case and non-alphanumeric characters).
    
    Args:
        s: String to check
        
    Returns:
        True if palindrome, False otherwise
    """
    cleaned = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    return cleaned == cleaned[::-1]


if __name__ == "__main__":
    # Demo usage - 示例使用
    print("=== Utility Functions Demo ===\n")
    
    # Email validation
    print("Email Validation:")
    print(f"'test@example.com': {validate_email('test@example.com')}")
    print(f"'invalid.email': {validate_email('invalid.email')}")
    
    # Phone formatting
    print("\nPhone Formatting:")
    print(f"'1234567890' -> {format_phone_number('1234567890')}")
    
    # Age calculation
    print("\nAge Calculation:")
    print(f"Born on 1990-01-01: {calculate_age('1990-01-01')} years old")
    
    # List operations
    print("\nList Operations:")
    original = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    print(f"Original: {original}")
    print(f"Chunked (size 3): {chunk_list(original, 3)}")
    print(f"With duplicates: {[1, 2, 2, 3, 3, 3, 4]}")
    print(f"Removed duplicates: {remove_duplicates([1, 2, 2, 3, 3, 3, 4])}")
    
    # String operations
    print("\nString Operations:")
    print(f"'hello_world' to camelCase: {string_to_camel_case('hello_world')}")
    print(f"'HelloWorld' to snake_case: {string_to_snake_case('HelloWorld')}")
    print(f"Truncate 'Hello World' to 8 chars: {truncate_string('Hello World', 8)}")
    print(f"'A man a plan a canal Panama' is palindrome: {is_palindrome('A man a plan a canal Panama')}")
