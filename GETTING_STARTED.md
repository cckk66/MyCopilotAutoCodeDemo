# 快速入门指南 | Getting Started Guide

## 欢迎使用 Copilot 自动编码工具演示！| Welcome to the Copilot Auto-Coding Tool Demo!

这个快速入门指南将帮助你开始使用这个项目。

This quick start guide will help you get started with this project.

## 第一步：了解项目结构 | Step 1: Understand the Project Structure

```
MyCopilotAutoCodeDemo/
├── README.md              # 主文档 | Main documentation
├── GETTING_STARTED.md     # 本文件 | This file
├── python/                # Python 示例 | Python examples
├── javascript/            # JavaScript 示例 | JavaScript examples
├── docs/                  # 详细文档 | Detailed documentation
└── examples/              # 额外示例 | Additional examples
```

## 第二步：运行示例代码 | Step 2: Run Example Code

### Python 示例 | Python Examples

```bash
# 运行计算器示例 | Run calculator example
python3 python/calculator.py

# 运行数据处理器示例 | Run data processor example
python3 python/data_processor.py

# 运行工具函数示例 | Run utility functions example
python3 python/utils.py

# 运行排序算法示例 | Run sorting algorithms example
python3 examples/sorting_algorithms.py
```

### JavaScript 示例 | JavaScript Examples

```bash
# 运行计算器示例 | Run calculator example
node javascript/calculator.js

# 运行数据处理器示例 | Run data processor example
node javascript/dataProcessor.js

# 运行工具函数示例 | Run utility functions example
node javascript/utils.js

# 运行表单验证示例 | Run form validation example
node examples/web_form_validation.js
```

### 使用 NPM 脚本 | Using NPM Scripts

```bash
# 安装依赖（如果需要）| Install dependencies (if needed)
npm install

# 运行所有 JavaScript 示例 | Run all JavaScript examples
npm run demo:all

# 运行单个示例 | Run individual examples
npm run demo:calculator
npm run demo:dataprocessor
npm run demo:utils
```

## 第三步：学习 Copilot 使用技巧 | Step 3: Learn Copilot Usage Tips

阅读文档以了解如何有效使用 GitHub Copilot：

Read the documentation to learn how to use GitHub Copilot effectively:

1. **Copilot 使用指南 | Copilot Usage Guide**
   - 打开 `docs/copilot-guide.md`
   - 学习基本用法和高级技巧
   - 了解注释驱动开发

2. **最佳实践 | Best Practices**
   - 打开 `docs/best-practices.md`
   - 学习代码质量标准
   - 了解安全实践和性能优化

## 第四步：尝试修改代码 | Step 4: Try Modifying Code

在支持 Copilot 的 IDE（如 VS Code）中打开项目：

Open the project in a Copilot-enabled IDE (like VS Code):

### 实验 1：添加新功能 | Experiment 1: Add New Functionality

```python
# 在 python/calculator.py 中添加一个新方法
# Add a new method in python/calculator.py

def modulo(self, a, b):
    """
    Calculate the remainder of a divided by b.
    计算 a 除以 b 的余数。
    """
    # 让 Copilot 为你生成实现
    # Let Copilot generate the implementation for you
```

### 实验 2：创建新的工具函数 | Experiment 2: Create New Utility Function

```javascript
// 在 javascript/utils.js 中添加新函数
// Add a new function in javascript/utils.js

/**
 * Convert a string to title case (capitalize first letter of each word).
 * 将字符串转换为标题格式（每个单词首字母大写）。
 */
function toTitleCase(str) {
    // Copilot 会建议实现
    // Copilot will suggest implementation
}
```

### 实验 3：编写测试 | Experiment 3: Write Tests

```python
# 创建一个测试文件
# Create a test file

def test_calculator_add():
    """Test the add method of Calculator class."""
    calc = Calculator()
    # Copilot 会帮助你编写测试用例
    # Copilot will help you write test cases
```

## 第五步：探索更多示例 | Step 5: Explore More Examples

查看 `examples/` 目录中的其他示例：

Check out other examples in the `examples/` directory:

- **sorting_algorithms.py** - 各种排序算法实现
  - Various sorting algorithm implementations
  
- **web_form_validation.js** - Web 表单验证示例
  - Web form validation examples

## 提示与技巧 | Tips & Tricks

### 💡 让 Copilot 更有效的方法 | Ways to Make Copilot More Effective

1. **写清晰的注释** | Write clear comments
   ```python
   # Calculate the factorial of n using recursion
   # Return 1 for n=0, n * factorial(n-1) for n>0
   def factorial(n):
       # Copilot 理解你的意图
   ```

2. **使用描述性名称** | Use descriptive names
   ```javascript
   function calculateMonthlyPayment(principal, interestRate, months) {
       // 函数名本身就是很好的提示
   }
   ```

3. **提供示例** | Provide examples
   ```python
   # Convert temperature from Celsius to Fahrenheit
   # Example: 0°C -> 32°F
   # Example: 100°C -> 212°F
   def celsius_to_fahrenheit(celsius):
       return celsius * 9/5 + 32
   ```

### 🚀 下一步 | Next Steps

1. 尝试在自己的项目中使用这些技巧
   - Try using these techniques in your own projects

2. 探索 GitHub Copilot 的更多功能
   - Explore more features of GitHub Copilot

3. 贡献你自己的示例到这个项目
   - Contribute your own examples to this project

4. 分享你的学习经验
   - Share your learning experience

## 获取帮助 | Getting Help

如果你遇到问题或有建议：

If you encounter issues or have suggestions:

1. 查看 [GitHub Issues](https://github.com/cckk66/MyCopilotAutoCodeDemo/issues)
2. 阅读 [GitHub Copilot 官方文档](https://docs.github.com/en/copilot)
3. 提交新的 Issue 或 Pull Request

## 资源链接 | Useful Resources

- 📚 [GitHub Copilot 文档](https://docs.github.com/en/copilot)
- 🎓 [Copilot 最佳实践博客](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
- 🔧 [VS Code Copilot 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

---

祝你编码愉快！🎉 | Happy Coding! 🎉
