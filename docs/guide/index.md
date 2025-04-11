# VitePress 快速开始

VitePress 是一个基于 Vue 3 构建的静态网站生成器，专注于简单、强大和高性能，特别适合文档站点。

## 安装

### 前提条件

- [Node.js](https://nodejs.org/) 版本 18 或更高
- 包管理器（如 npm、yarn 或 pnpm）
- 熟悉命令行界面

### 创建新项目

使用你喜欢的包管理器来创建一个新的 VitePress 项目：

::: code-group
```bash [npm]
# 创建并进入项目目录
mkdir vitepress-blog && cd vitepress-blog

# 初始化包管理
npm init -y

# 安装 VitePress
npm install -D vitepress

# 创建第一个文档
mkdir docs && echo '# Hello VitePress' > docs/index.md

# 添加脚本到 package.json
npm pkg set scripts.docs:dev="vitepress dev docs"
npm pkg set scripts.docs:build="vitepress build docs"
npm pkg set scripts.docs:preview="vitepress preview docs"
```

```bash [yarn]
# 创建并进入项目目录
mkdir vitepress-blog && cd vitepress-blog

# 初始化包管理
yarn init -y

# 安装 VitePress
yarn add -D vitepress

# 创建第一个文档
mkdir docs && echo '# Hello VitePress' > docs/index.md

# 添加脚本到 package.json
yarn pkg set scripts.docs:dev="vitepress dev docs"
yarn pkg set scripts.docs:build="vitepress build docs"
yarn pkg set scripts.docs:preview="vitepress preview docs"
```

```bash [pnpm]
# 创建并进入项目目录
mkdir vitepress-blog && cd vitepress-blog

# 初始化包管理
pnpm init

# 安装 VitePress
pnpm add -D vitepress

# 创建第一个文档
mkdir docs && echo '# Hello VitePress' > docs/index.md

# 添加脚本到 package.json
pnpm pkg set scripts.docs:dev="vitepress dev docs"
pnpm pkg set scripts.docs:build="vitepress build docs"
pnpm pkg set scripts.docs:preview="vitepress preview docs"
```
:::

### 启动开发服务器

运行以下命令启动本地开发服务器：

```bash
npm run docs:dev
# 或者
yarn docs:dev
# 或者
pnpm docs:dev
```

VitePress 将在 http://localhost:5173 启动开发服务器。

## 项目结构

一个基本的 VitePress 项目结构如下：

```
.
├── docs
│   ├── .vitepress
│   │   ├── cache/           # 缓存文件（可以添加到 .gitignore）
│   │   ├── public/          # 静态资源目录
│   │   │   ├── logo.svg     # 网站 Logo
│   │   │   └── favicon.svg  # 网站图标
│   │   └── config.js        # 网站配置
│   ├── api-examples.md      # 示例文档
│   └── index.md             # 首页
├── package.json             # 项目配置
└── pnpm-lock.yaml          # 锁定文件（取决于你使用的包管理器）
```

## 配置文件

VitePress 的配置文件位于 `.vitepress/config.js`，一个基本的配置文件如下：

```js
export default {
  // 站点标题
  title: '我的博客',
  // 站点描述
  description: '使用 VitePress 构建的个人博客',
  // 部署到 GitHub Pages 的路径前缀
  base: '/my-blog/',
  // 网站图标
  head: [
    ['link', { rel: 'icon', href: '/my-blog/favicon.svg' }]
  ],
  // 主题配置
  themeConfig: {
    // Logo
    logo: '/my-blog/logo.svg',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '开始', link: '/guide/getting-started' }
          ]
        }
      ]
    }
  }
}
```

## 首页设计

VitePress 提供了简单易用的主页设计。在 `docs/index.md` 文件中使用 YAML frontmatter 配置首页：

```markdown
---
layout: home

hero:
  name: 我的博客
  text: 个人知识库
  tagline: 分享、记录与成长
  image:
    src: /logo.svg
    alt: Logo
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/yourname/your-repo

features:
  - icon: 📝
    title: 专注写作
    details: 使用 Markdown 专注于内容创作
  - icon: ⚡️
    title: 高性能
    details: 基于 Vite 构建，速度极快
  - icon: 🛠️
    title: 可扩展
    details: 支持各种插件和自定义
---
```

## 下一步

- 了解 [Markdown 语法](/guide/markdown)
- 探索 [自定义样式](/guide/custom-style) 选项
- 查看 [部署指南](/guide/deployment)