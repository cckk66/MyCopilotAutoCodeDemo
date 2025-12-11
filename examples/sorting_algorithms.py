"""
Sorting Algorithms - 排序算法
Demonstrating various sorting algorithms with GitHub Copilot.
使用 GitHub Copilot 演示各种排序算法。
"""


def bubble_sort(arr):
    """
    Implement bubble sort algorithm.
    实现冒泡排序算法。
    
    Time complexity: O(n²)
    Space complexity: O(1)
    """
    n = len(arr)
    arr = arr.copy()  # Don't modify original array
    
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    
    return arr


def quick_sort(arr):
    """
    Implement quick sort algorithm.
    实现快速排序算法。
    
    Time complexity: O(n log n) average, O(n²) worst
    Space complexity: O(log n)
    """
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)


def merge_sort(arr):
    """
    Implement merge sort algorithm.
    实现归并排序算法。
    
    Time complexity: O(n log n)
    Space complexity: O(n)
    """
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)


def merge(left, right):
    """
    Helper function to merge two sorted arrays.
    辅助函数：合并两个已排序的数组。
    """
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result


def insertion_sort(arr):
    """
    Implement insertion sort algorithm.
    实现插入排序算法。
    
    Time complexity: O(n²)
    Space complexity: O(1)
    """
    arr = arr.copy()
    
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    
    return arr


def selection_sort(arr):
    """
    Implement selection sort algorithm.
    实现选择排序算法。
    
    Time complexity: O(n²)
    Space complexity: O(1)
    """
    arr = arr.copy()
    
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr


if __name__ == "__main__":
    # Test data
    test_array = [64, 34, 25, 12, 22, 11, 90]
    
    print("=== Sorting Algorithms Demo ===")
    print(f"Original array: {test_array}\n")
    
    print(f"Bubble Sort:    {bubble_sort(test_array)}")
    print(f"Quick Sort:     {quick_sort(test_array)}")
    print(f"Merge Sort:     {merge_sort(test_array)}")
    print(f"Insertion Sort: {insertion_sort(test_array)}")
    print(f"Selection Sort: {selection_sort(test_array)}")
    
    # Performance comparison with larger dataset
    import random
    import time
    
    large_array = [random.randint(1, 1000) for _ in range(100)]
    
    print("\n=== Performance Comparison (100 elements) ===")
    
    algorithms = [
        ("Bubble Sort", bubble_sort),
        ("Quick Sort", quick_sort),
        ("Merge Sort", merge_sort),
        ("Insertion Sort", insertion_sort),
        ("Selection Sort", selection_sort)
    ]
    
    for name, func in algorithms:
        start = time.time()
        func(large_array)
        end = time.time()
        print(f"{name:15}: {(end - start) * 1000:.3f} ms")
