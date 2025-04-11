# Markdown 语法

VitePress 使用 [Markdown](https://daringfireball.net/projects/markdown/) 作为其主要内容格式。本文将介绍 VitePress 支持的基础和扩展 Markdown 语法。

## 基础语法

### 标题

使用 `#` 创建标题，`#` 的数量表示标题的级别：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 强调

```markdown
*斜体* 或 _斜体_
**粗体** 或 __粗体__
***粗斜体*** 或 ___粗斜体___
```

### 列表

无序列表：

```markdown
- 项目1
- 项目2
  - 子项目2.1
  - 子项目2.2
- 项目3
```

有序列表：

```markdown
1. 第一步
2. 第二步
3. 第三步
```

任务列表：

```markdown
- [x] 已完成任务
- [ ] 未完成任务
```

### 链接

```markdown
[链接文本](URL)
[带有标题的链接](URL "标题")
```

### 图片

```markdown
![替代文本](图片URL)
![替代文本](图片URL "标题")
```

### 代码

行内代码：

```markdown
`console.log('Hello World')`
```

代码块：

````markdown
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('World');
```
````

### 表格

```markdown
| 标题1 | 标题2 | 标题3 |
| ----- | ----- | ----- |
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

### 引用

```markdown
> 这是一段引用文本。
>
> 这是引用的第二段。
```

### 水平线

```markdown
---
```

## VitePress 扩展语法

VitePress 提供了多种扩展语法，增强了标准 Markdown 的功能。

### 代码块高亮

VitePress 使用 [Shiki](https://shiki.matsu.io/) 实现代码高亮：

````markdown
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

### 代码块行高亮

你可以在代码块语言后添加行号范围，以高亮指定行：

````markdown
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

支持多种高亮方式：
- 单行：`{5}`
- 多行：`{5-8}`
- 不连续行：`{5,7,9}`
- 组合：`{5-7,10,12-15}`

### 代码组

代码组允许切换不同语言或框架的代码示例：

````markdown
::: code-group
```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```
:::
````

### 自定义容器

VitePress 提供了自定义容器语法来创建提示框：

```markdown
::: info
这是一个信息提示框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个详情折叠框。
:::
```

你还可以自定义容器的标题：

```markdown
::: danger 警告！
危险区域，请小心！
:::

::: details 点击查看代码
```js
console.log('Hello, VitePress!')
```
:::
```

### 数学公式

VitePress 支持使用 KaTeX 渲染数学公式：

```markdown
$E = mc^2$

$$
\frac{d}{dx}e^x = e^x
$$
```

### Vue 模板语法

你可以在 Markdown 文件中使用 Vue 模板语法：

```markdown
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## 计数器

当前计数: {{ count }}

<button @click="count++">点击+1</button>
```

## 其他扩展

### 表情符号

支持使用 GitHub 风格的表情符号简写：

```markdown
:tada: :100: :smile:
```

### 目录

自动生成目录：

```markdown
[[toc]]
```

### 链接转换

内部链接会自动转换为路由链接：

```markdown
[首页](/guide/index.md)
[其他页面](../getting-started.md)
```

以上是 VitePress 常用的 Markdown 语法扩展，更多功能请查阅 [VitePress 官方文档](https://vitepress.dev/guide/markdown)。