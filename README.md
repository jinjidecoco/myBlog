# 小飒的博客

这是一个使用 VitePress 构建的个人博客网站。

## 项目简介

- 基于 VitePress 1.0.2 构建
- 使用 Vue 3 开发
- 支持 Markdown 文档编写
- 自定义主题和样式

## 技术栈

- VitePress ^1.0.2
- Vite ^5.2.8
- Node.js
- pnpm ^8.15.5

## 快速开始

### 环境要求

- Node.js 16+
- pnpm 8.15.5+

### 安装

```bash
# 克隆项目
git clone [your-repository-url]

# 进入项目目录
cd vitePress

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm docs:dev
```

### 构建

```bash
# 构建静态文件
pnpm docs:build

# 本地预览构建结果
pnpm docs:serve
```

## 项目结构

```
vitePress/
├── docs/                 # 文档目录
│   ├── .vitepress/      # VitePress 配置目录
│   │   └── config.js    # VitePress 配置文件
│   └── index.md         # 首页
├── package.json         # 项目配置文件
└── pnpm-lock.yaml      # 依赖锁定文件
```

## 部署

项目配置为部署到 GitHub Pages，基础路径为 `/myBlog/`。

## License

MIT License

Copyright © 2024-present xiaosa Blog