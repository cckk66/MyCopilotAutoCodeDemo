# Copilot 最佳实践 | Copilot Best Practices

## 代码质量 | Code Quality

### 1. 编写清晰的注释 | Write Clear Comments

**好的注释 | Good Comments:**
```python
# Calculate the moving average of stock prices over a 7-day window
# Returns a list of averages, one for each day
def calculate_moving_average(prices, window=7):
    pass
```

**不好的注释 | Poor Comments:**
```python
# Do something with prices
def calc(p):
    pass
```

### 2. 使用有意义的变量名 | Use Meaningful Variable Names

**推荐 | Recommended:**
```javascript
const userEmailAddresses = users.map(user => user.email);
const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active');
```

**不推荐 | Not Recommended:**
```javascript
const x = users.map(u => u.e);
const y = subs.filter(s => s.s === 'active');
```

### 3. 保持函数单一职责 | Keep Functions Focused

**推荐 | Recommended:**
```python
def validate_email(email):
    """Validate email format."""
    pass

def send_email(to, subject, body):
    """Send email to recipient."""
    pass

def validate_and_send_email(email, subject, body):
    """Validate email and send if valid."""
    if validate_email(email):
        send_email(email, subject, body)
```

**不推荐 | Not Recommended:**
```python
def do_email_stuff(email, subject, body):
    """Do everything related to email."""
    # Too many responsibilities
    pass
```

## 提示工程 | Prompt Engineering

### 1. 提供上下文 | Provide Context

```python
# User authentication system using JWT tokens
# Store hashed passwords in database
# Session expires after 24 hours

def authenticate_user(username, password):
    # Copilot understands the security context
```

### 2. 使用示例 | Use Examples

```python
# Format dates to ISO 8601 standard
# Examples:
#   format_date('2024-01-15') -> '2024-01-15T00:00:00Z'
#   format_date('15/01/2024') -> '2024-01-15T00:00:00Z'
def format_date(date_string):
    # Copilot learns from examples
```

### 3. 分步骤说明 | Step-by-Step Instructions

```python
def process_order(order_data):
    # Step 1: Validate order data
    # Step 2: Check inventory availability
    # Step 3: Calculate total price with tax
    # Step 4: Process payment
    # Step 5: Update inventory
    # Step 6: Send confirmation email
    # Copilot will implement each step
```

## 安全实践 | Security Practices

### 1. 验证输入 | Validate Input

```python
def process_user_input(user_input):
    # Always validate and sanitize user input
    # Check for SQL injection attempts
    # Validate data types and ranges
    if not isinstance(user_input, str):
        raise TypeError("Input must be a string")
    # Sanitize input
    sanitized = sanitize_input(user_input)
    return sanitized
```

### 2. 避免硬编码敏感信息 | Avoid Hardcoding Secrets

**推荐 | Recommended:**
```python
import os

# Load API key from environment variable
API_KEY = os.getenv('API_KEY')
DATABASE_URL = os.getenv('DATABASE_URL')
```

**不推荐 | Not Recommended:**
```python
# Never do this!
API_KEY = "sk-1234567890abcdef"
DATABASE_URL = "postgresql://user:password@localhost/db"
```

### 3. 使用参数化查询 | Use Parameterized Queries

**推荐 | Recommended:**
```python
def get_user_by_email(email):
    # Use parameterized query to prevent SQL injection
    query = "SELECT * FROM users WHERE email = %s"
    cursor.execute(query, (email,))
    return cursor.fetchone()
```

**不推荐 | Not Recommended:**
```python
def get_user_by_email(email):
    # Vulnerable to SQL injection!
    query = f"SELECT * FROM users WHERE email = '{email}'"
    cursor.execute(query)
    return cursor.fetchone()
```

## 性能优化 | Performance Optimization

### 1. 提示效率优先 | Prompt for Efficiency

```python
# Efficiently find duplicates in a large list (O(n) time complexity)
# Use a set for O(1) lookup time
def find_duplicates(items):
    # Copilot will suggest efficient implementation
```

### 2. 批量处理 | Batch Processing

```python
# Process items in batches of 100 to optimize database queries
# Use bulk insert instead of individual inserts
def bulk_insert_items(items):
    # Copilot suggests batch processing
```

### 3. 缓存策略 | Caching Strategy

```python
from functools import lru_cache

# Cache expensive computation results
# Use LRU cache with max size of 128
@lru_cache(maxsize=128)
def expensive_calculation(n):
    # Copilot implements caching
```

## 测试策略 | Testing Strategy

### 1. 边界条件测试 | Test Edge Cases

```python
def test_divide():
    # Test normal case
    assert divide(10, 2) == 5
    
    # Test edge cases
    assert divide(0, 5) == 0
    assert divide(10, 1) == 10
    
    # Test error cases
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)
```

### 2. 使用描述性测试名 | Use Descriptive Test Names

```python
def test_email_validator_accepts_valid_email():
    assert validate_email("user@example.com") == True

def test_email_validator_rejects_email_without_at_symbol():
    assert validate_email("userexample.com") == False

def test_email_validator_rejects_email_without_domain():
    assert validate_email("user@") == False
```

### 3. 测试驱动开发 | Test-Driven Development

```python
# Write test first
def test_palindrome_checker():
    assert is_palindrome("racecar") == True
    assert is_palindrome("hello") == False
    assert is_palindrome("A man a plan a canal Panama") == True

# Then implement function
def is_palindrome(text):
    # Copilot implements based on test expectations
```

## 代码组织 | Code Organization

### 1. 逻辑分组 | Logical Grouping

```python
# User Management Functions
def create_user(username, email):
    pass

def update_user(user_id, data):
    pass

def delete_user(user_id):
    pass

# Authentication Functions
def login(username, password):
    pass

def logout(user_id):
    pass

def reset_password(email):
    pass
```

### 2. 使用类封装相关功能 | Use Classes to Encapsulate

```python
class UserManager:
    """Handles all user-related operations."""
    
    def __init__(self, database):
        self.db = database
    
    def create_user(self, username, email):
        # Copilot understands class context
        pass
    
    def authenticate(self, username, password):
        # Related methods grouped together
        pass
```

### 3. 文档字符串 | Docstrings

```python
def calculate_compound_interest(principal, rate, time, frequency=1):
    """
    Calculate compound interest.
    
    Args:
        principal (float): Initial amount invested
        rate (float): Annual interest rate (as decimal, e.g., 0.05 for 5%)
        time (int): Time period in years
        frequency (int): Compounding frequency per year (default: 1)
    
    Returns:
        float: Final amount after compound interest
    
    Example:
        >>> calculate_compound_interest(1000, 0.05, 2, 4)
        1104.49
    """
    # Copilot generates accurate implementation
```

## 错误处理 | Error Handling

### 1. 具体的异常类型 | Specific Exception Types

```python
def read_config_file(filename):
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        logger.error(f"Config file not found: {filename}")
        return default_config()
    except json.JSONDecodeError:
        logger.error(f"Invalid JSON in config file: {filename}")
        return default_config()
    except PermissionError:
        logger.error(f"Permission denied reading: {filename}")
        raise
```

### 2. 提供有用的错误信息 | Provide Helpful Error Messages

```python
def withdraw(account, amount):
    if amount <= 0:
        raise ValueError(f"Withdrawal amount must be positive, got {amount}")
    if amount > account.balance:
        raise ValueError(
            f"Insufficient funds. Balance: {account.balance}, "
            f"Requested: {amount}"
        )
    account.balance -= amount
```

## 协作与维护 | Collaboration and Maintenance

### 1. 代码审查清单 | Code Review Checklist

使用 Copilot 时要审查的内容：
Things to review when using Copilot:

- [ ] 代码逻辑正确吗？| Is the logic correct?
- [ ] 处理了所有边界情况吗？| Are edge cases handled?
- [ ] 有适当的错误处理吗？| Is there proper error handling?
- [ ] 代码安全吗？| Is the code secure?
- [ ] 性能是否可接受？| Is performance acceptable?
- [ ] 代码风格一致吗？| Is the style consistent?
- [ ] 有足够的测试吗？| Are there adequate tests?

### 2. 版本控制最佳实践 | Version Control Best Practices

```bash
# Commit messages should be clear
git commit -m "Add user authentication with JWT tokens"

# Not this
git commit -m "Update files"
```

### 3. 持续改进 | Continuous Improvement

- 定期重构代码 | Regularly refactor code
- 更新依赖项 | Update dependencies
- 改进测试覆盖率 | Improve test coverage
- 优化性能瓶颈 | Optimize bottlenecks
- 更新文档 | Update documentation

## 总结 | Summary

有效使用 Copilot 的关键是：
The key to using Copilot effectively is:

1. **清晰的沟通** | Clear communication through comments
2. **良好的代码习惯** | Good coding practices
3. **持续验证** | Continuous validation
4. **安全意识** | Security awareness
5. **测试驱动** | Test-driven approach
6. **代码审查** | Code review

记住：Copilot 是助手，不是替代品。始终要审查、理解和测试生成的代码。

Remember: Copilot is an assistant, not a replacement. Always review, understand, and test generated code.
