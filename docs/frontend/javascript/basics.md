# JavaScript 基础知识

## 变量和数据类型

JavaScript 中的基本数据类型包括：
- Number（数字）
- String（字符串）
- Boolean（布尔值）
- null（空值）
- undefined（未定义）
- Symbol（符号）
- BigInt（大整数）

### 变量声明

```javascript
// 使用 let 声明变量（推荐）
let name = 'xiaosa';

// 使用 const 声明常量
const PI = 3.14159;

// var 声明（不推荐）
var age = 25;
```

## 运算符和表达式

### 算术运算符
- 加法：+
- 减法：-
- 乘法：*
- 除法：/
- 取余：%

### 比较运算符
- 等于：==
- 严格等于：===
- 不等于：!=
- 严格不等于：!==
- 大于：>
- 小于：<

## 控制流

### if 语句
```javascript
if (condition) {
    // 代码块
} else if (anotherCondition) {
    // 代码块
} else {
    // 代码块
}
```

### 循环
```javascript
// for 循环
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while 循环
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## 函数

### 函数声明
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

// 箭头函数
const greet = (name) => `Hello, ${name}!`;
```

更多内容持续更新中...