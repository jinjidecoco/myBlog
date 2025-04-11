# Vue 基础知识

## Vue 3 简介

Vue 3 是一个用于构建用户界面的渐进式框架。它的核心库只关注视图层，方便与其他库或已有项目整合。

## 组合式 API

### setup 函数
```vue
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 方法
const increment = () => {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载')
})
</script>

<template>
  <button @click="increment">点击次数: {{ count }}</button>
</template>
```

## 响应式基础

### ref
```javascript
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

### reactive
```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  message: 'Hello'
})

state.count++ // 直接修改
```

## 计算属性

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})
</script>
```

## 侦听器

```javascript
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('')

// 侦听 question 的变化
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '思考中...'
    try {
      answer.value = await getAnswer(newQuestion)
    } catch (error) {
      answer.value = '错误！'
    }
  }
})
```

## 生命周期钩子

- onMounted: 组件挂载后
- onUpdated: 组件更新后
- onUnmounted: 组件卸载后
- onBeforeMount: 组件挂载前
- onBeforeUpdate: 组件更新前
- onBeforeUnmount: 组件卸载前

```javascript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
```

## 模板语法

### 文本插值
```vue
<template>
  <div>{{ message }}</div>
</template>
```

### 属性绑定
```vue
<template>
  <div v-bind:id="dynamicId">...</div>
  <!-- 简写 -->
  <div :id="dynamicId">...</div>
</template>
```

### 条件渲染
```vue
<template>
  <div v-if="seen">现在你看到我了</div>
  <div v-else>现在你看不到我了</div>
</template>
```

### 列表渲染
```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>
```

更多内容持续更新中...