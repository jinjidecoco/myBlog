# JavaScript 进阶主题

本文将介绍一些 JavaScript 的进阶概念和特性，适合已经掌握基础知识的开发者学习。

## 闭包 (Closures)

闭包是 JavaScript 中非常重要的概念，它是指函数可以访问其定义时所在的词法作用域。

```javascript
function createCounter() {
  let count = 0; // 私有变量

  return function() {
    count++; // 访问外部函数的变量
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

闭包常见用途：
- 创建私有变量和方法
- 实现数据封装
- 保存函数执行状态

## 原型和原型链

JavaScript 使用原型链机制来实现继承。

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person('Alice');
console.log(alice.sayHello()); // "Hello, my name is Alice"
```

### 原型链

```javascript
function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

// 设置原型链
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// 添加新方法
Student.prototype.getGrade = function() {
  return this.grade;
};

const bob = new Student('Bob', 'A');
console.log(bob.sayHello()); // "Hello, my name is Bob"
console.log(bob.getGrade()); // "A"
```

## ES6+ 新特性

### 类 (Classes)

ES6 引入了类语法，让面向对象编程更加直观：

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}
```

### 解构赋值

```javascript
// 数组解构
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); // 1, 2, [3, 4, 5]

// 对象解构
const { name, age, ...other } = { name: 'Alice', age: 25, city: 'New York', job: 'Developer' };
console.log(name, age, other); // "Alice", 25, { city: "New York", job: "Developer" }
```

### 模板字符串

```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!
Welcome to our website.`;
```

### 箭头函数

```javascript
// 传统函数
function add(a, b) {
  return a + b;
}

// 箭头函数
const add = (a, b) => a + b;

// 箭头函数没有自己的 this
function Counter() {
  this.count = 0;

  setInterval(() => {
    // 这里的 this 指向 Counter 实例
    this.count++;
    console.log(this.count);
  }, 1000);
}
```

## 异步编程

### Promise

Promise 是用于处理异步操作的对象：

```javascript
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

fetchData('https://api.example.com/data')
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
```

### Async/Await

`async/await` 是基于 Promise 的语法糖，使异步代码更易读：

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// 使用
(async () => {
  try {
    const user = await fetchUserData(123);
    console.log('User:', user);
  } catch (error) {
    console.error('Failed to get user:', error);
  }
})();
```

## 函数式编程

JavaScript 支持函数式编程范式：

### 高阶函数

```javascript
// 接收函数作为参数的函数
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

### 纯函数

纯函数没有副作用，对于相同的输入总是返回相同的输出：

```javascript
// 纯函数
function add(a, b) {
  return a + b;
}

// 非纯函数（有副作用）
let total = 0;
function addToTotal(value) {
  total += value; // 修改外部状态
  return total;
}
```

### 函数组合

```javascript
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

const compute = compose(addOne, square, double);
console.log(compute(3)); // 等同于 addOne(square(double(3))) => 19
```

## 模块系统

### ES Modules

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// app.js
import multiply, { add, subtract } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 3));  // 6
```

## 元编程

### Proxy

Proxy 允许你拦截和自定义对象的操作：

```javascript
const handler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return `Property "${prop}" does not exist`;
    }
  },
  set(target, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    target[prop] = value;
    return true;
  }
};

const person = new Proxy({}, handler);
person.name = 'Alice';
person.age = 25;

console.log(person.name);     // "Alice"
console.log(person.unknown);  // "Property "unknown" does not exist"

try {
  person.age = '26'; // Throws TypeError
} catch (e) {
  console.error(e.message);   // "Age must be a number"
}
```

### Reflect

Reflect 是与 Proxy 搭配使用的 API，提供了操作对象的方法：

```javascript
const obj = {
  name: 'Alice',
  age: 25
};

// 使用 Reflect 获取属性
console.log(Reflect.get(obj, 'name')); // "Alice"

// 检查属性是否存在
console.log(Reflect.has(obj, 'job')); // false

// 添加新属性
Reflect.set(obj, 'job', 'Developer');
console.log(obj.job); // "Developer"
```

## 内存管理和垃圾回收

JavaScript 有自动垃圾回收机制，但了解内存管理原则很重要：

### 内存泄漏

常见的内存泄漏场景：

```javascript
// 1. 全局变量泄漏
function leakGlobal() {
  leakedVariable = 'I am leaked'; // 没有 var/let/const，成为全局变量
}

// 2. 闭包引用
function setupLeakyTimer() {
  const largeData = new Array(1000000).fill('x');

  setInterval(function() {
    // 引用了 largeData，即使不使用
    console.log('Timer fired, data length:', largeData.length);
  }, 1000);
}

// 3. 没有清理的事件监听器
function addButtonHandler() {
  const button = document.getElementById('button');
  const largeData = new Array(1000000).fill('x');

  button.addEventListener('click', function() {
    console.log('Button clicked, data length:', largeData.length);
  });

  // 移除时应该: button.removeEventListener(...)
}
```

### 避免内存泄漏的策略

```javascript
// 1. 使用块级作用域
{
  const tempData = new Array(1000000).fill('x');
  // 在这个块中处理 tempData
} // tempData 在这里已经可以被回收

// 2. 及时清理定时器
const timerId = setInterval(() => {
  // 定期执行的代码
}, 1000);

// 当不再需要时清理
clearInterval(timerId);

// 3. 移除不再需要的事件监听器
function handleClick() {
  console.log('Button clicked');
}

button.addEventListener('click', handleClick);

// 当不再需要时移除
button.removeEventListener('click', handleClick);

// 4. 使用弱引用
const weakMap = new WeakMap();
{
  const obj = { data: 'some data' };
  weakMap.set(obj, 'metadata');
} // obj 可以被垃圾回收，weakMap 中的相应项也会被移除
```

## Web API 和浏览器交互

### Fetch API

```javascript
async function fetchUsers() {
  try {
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
```

### Web Storage

```javascript
// localStorage - 持久存储
localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Alice' }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');

// sessionStorage - 会话存储
sessionStorage.setItem('token', 'abc123');
const token = sessionStorage.getItem('token');
sessionStorage.clear(); // 清除所有会话存储
```

## 性能优化技巧

### 防抖与节流

```javascript
// 防抖 - 等待一段时间后执行，如果在等待期间再次调用则重新计时
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 节流 - 固定时间间隔内最多执行一次
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// 使用示例
const debouncedSearch = debounce(searchFunction, 300);
const throttledScroll = throttle(scrollHandler, 100);
```

### 惰性加载

```javascript
// 惰性加载函数
function createLazyFunction() {
  let result;

  return function() {
    if (result === undefined) {
      console.log('Computing expensive result...');
      // 假设这是一个昂贵的操作
      result = [1, 2, 3, 4, 5].map(x => x * x).reduce((a, b) => a + b, 0);
    }
    return result;
  };
}

const lazyGetResult = createLazyFunction();
console.log(lazyGetResult()); // 计算并返回结果
console.log(lazyGetResult()); // 直接返回缓存的结果
```

## 结语

本文介绍了 JavaScript 的多种进阶主题，帮助开发者从基础迈向更高级的编程水平。持续学习和实践这些概念，将使你能够编写更加健壮、高效和可维护的代码。

记住，精通这些概念需要时间和练习，建议结合实际项目逐步应用这些技术。