# 自定义样式

在 VitePress 中，你可以通过多种方式自定义网站的外观和样式。本文介绍如何使用 CSS、主题配置和组件自定义来个性化你的 VitePress 站点。

## 简单的 CSS 覆盖

### 在 Markdown 中使用 `<style>` 标签

你可以在任何 Markdown 文件中直接使用 `<style>` 标签来添加自定义 CSS：

```markdown
# 我的页面

这里是一些内容。

<style>
h1 {
  color: #42b883;
}

.custom-block {
  border-radius: 8px;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>

<div class="custom-block">
  这是一个自定义样式的块。
</div>
```

### 全局自定义 CSS

为了应用全局 CSS，可以创建一个 `.vitepress/theme/custom.css` 文件并在 `.vitepress/theme/index.js` 中导入：

1. 创建 CSS 文件：

```css
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-dark: #535bf2;
}

/* 自定义 CSS 变量 */
:root {
  --my-text-color: #2c3e50;
  --my-bg-color: #f9f9f9;
}

/* 自定义全局样式 */
body {
  color: var(--my-text-color);
  background-color: var(--my-bg-color);
}

/* 自定义组件样式 */
.VPHero .name {
  font-size: 3rem !important;
  background: linear-gradient(to right, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

2. 创建并配置主题文件：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

## 主题自定义

### 通过配置文件自定义主题

在 `.vitepress/config.js` 中，你可以使用 `themeConfig` 自定义主题的多个方面：

```js
export default {
  // ...其他配置
  themeConfig: {
    // 主题颜色
    colors: {
      primary: '#3eaf7c',
    },
    // 文本修改
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: 'Markdown', link: '/guide/markdown' }
          ]
        }
      ]
    },
    // 底部版权信息
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Your Name'
    }
  }
}
```

### 自定义主题颜色

VitePress 提供了一组 CSS 变量，你可以在自定义 CSS 中覆盖它们：

```css
:root {
  /* 品牌颜色 */
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-lighter: #9499ff;
  --vp-c-brand-dark: #535bf2;
  --vp-c-brand-darker: #454ce1;

  /* 背景颜色 */
  --vp-c-bg: #ffffff;
  --vp-c-bg-soft: #f9f9f9;
  --vp-c-bg-mute: #f1f1f1;

  /* 文本颜色 */
  --vp-c-text-1: #213547;
  --vp-c-text-2: #2c3e50;
  --vp-c-text-3: #3a5169;

  /* 边框颜色 */
  --vp-c-border: #e2e2e2;
  --vp-c-divider: #e2e2e2;

  /* 代码块背景 */
  --vp-code-block-bg: #f6f8fa;
}

/* 暗黑模式 */
.dark {
  --vp-c-bg: #1e1e20;
  --vp-c-bg-soft: #252529;
  --vp-c-bg-mute: #313136;

  --vp-c-text-1: #ffffffde;
  --vp-c-text-2: #ffffffbf;
  --vp-c-text-3: #ffffff99;
}
```

## 自定义网站元素

### 自定义布局

你可以通过在 `.vitepress/theme` 目录中创建自定义组件来覆盖默认布局：

```
.vitepress/theme/
├── components/
│   └── MyLayout.vue
├── index.js
└── custom.css
```

然后在 `index.js` 中使用自定义组件：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  // 覆盖布局组件
  Layout: MyLayout
}
```

在 `MyLayout.vue` 中，你可以扩展默认布局：

```vue
<template>
  <!-- 继承默认布局 -->
  <Layout>
    <!-- 在默认插槽之前添加内容 -->
    <template #layout-top>
      <div class="custom-banner">这是网站顶部的自定义横幅</div>
    </template>

    <!-- 在默认插槽之后添加内容 -->
    <template #layout-bottom>
      <div class="custom-footer">这是自定义页脚</div>
    </template>
  </Layout>
</template>

<script setup>
import { Layout } from 'vitepress/theme'
</script>

<style>
.custom-banner {
  text-align: center;
  padding: 12px;
  background-color: var(--vp-c-brand);
  color: white;
}

.custom-footer {
  text-align: center;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
}
</style>
```

### 自定义容器

你可以创建自定义容器组件：

```vue
<!-- .vitepress/theme/components/CustomContainer.vue -->
<template>
  <div class="custom-container">
    <div class="custom-container-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '提示'
  }
})
</script>

<style>
.custom-container {
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: var(--vp-c-bg-soft);
  border-left: 5px solid var(--vp-c-brand);
}

.custom-container-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--vp-c-brand);
}
</style>
```

然后在 `index.js` 中全局注册该组件：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import CustomContainer from './components/CustomContainer.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('CustomContainer', CustomContainer)
  }
}
```

现在你可以在 Markdown 中使用它：

```markdown
<CustomContainer title="自定义提示">
这是一个自定义容器组件的内容。
</CustomContainer>
```

## 响应式设计

确保你的自定义样式考虑到不同的屏幕尺寸：

```css
/* 桌面端样式 */
@media (min-width: 960px) {
  .custom-feature {
    display: flex;
    gap: 24px;
  }
}

/* 平板端样式 */
@media (min-width: 640px) and (max-width: 959px) {
  .custom-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}

/* 移动端样式 */
@media (max-width: 639px) {
  .custom-feature {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
```

## 添加动画效果

你可以添加简单的 CSS 动画：

```css
/* 渐入效果 */
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 悬停效果 */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
}
```

## 使用 SCSS 或 PostCSS

如果你想使用 SCSS 或 PostCSS，需要先安装相应的依赖：

```bash
# 使用 SCSS
npm install -D sass
# 或者
yarn add -D sass
# 或者
pnpm add -D sass

# 使用 PostCSS
npm install -D postcss postcss-preset-env
# 或者
yarn add -D postcss postcss-preset-env
# 或者
pnpm add -D postcss postcss-preset-env
```

然后你可以在 `.vitepress/theme` 目录中使用 `.scss` 文件：

```scss
// .vitepress/theme/styles.scss
$primary-color: #3eaf7c;
$text-color: #2c3e50;

:root {
  --vp-c-brand: #{$primary-color};
  --vp-c-brand-light: lighten($primary-color, 10%);
  --vp-c-brand-dark: darken($primary-color, 10%);
}

.custom-component {
  color: $text-color;

  &:hover {
    color: $primary-color;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
```

最后在 `index.js` 中导入：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './styles.scss'

export default DefaultTheme
```

通过以上方法，你可以完全自定义 VitePress 站点的外观和风格，创建独特的品牌体验。