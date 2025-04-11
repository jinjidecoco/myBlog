# 部署指南

将你的 VitePress 站点部署到生产环境是最后一步。本指南将介绍几种常见的部署方式。

## 构建生产版本

在部署之前，你需要先构建生产版本：

```bash
# npm
npm run docs:build

# yarn
yarn docs:build

# pnpm
pnpm docs:build
```

默认情况下，构建输出将放在 `.vitepress/dist` 目录中。你可以通过配置文件中的 `outDir` 选项修改输出目录。

## 本地测试构建结果

在部署之前，可以本地测试构建结果：

```bash
# npm
npm run docs:preview

# yarn
yarn docs:preview

# pnpm
pnpm docs:preview
```

这将在本地启动一个静态 Web 服务器，提供 `.vitepress/dist` 目录中的内容，通常在 `http://localhost:4173` 可以访问。

## GitHub Pages 部署

### 设置基础路径

如果你计划将站点部署到子路径（如 `https://username.github.io/repo/`），请在配置文件中设置 `base` 选项：

```js
// .vitepress/config.js
export default {
  base: '/repo/', // 注意：必须以斜杠开头和结尾
  // ...其他配置
}
```

::: warning 注意
如果部署到主域名（如 `https://username.github.io/`），则不需要设置 `base`。
:::

### 手动部署

构建完成后，可以手动将 `.vitepress/dist` 目录的内容上传到你的 GitHub 仓库，并启用 GitHub Pages。

### 使用 GitHub Actions 自动部署

1. 在你的项目中创建 `.github/workflows` 目录（如果尚不存在）。

2. 在该目录下创建一个名为 `deploy.yml` 的文件，内容如下：

```yaml
name: Deploy VitePress site to GitHub Pages

on:
  push:
    branches: [main]  # 更改为你的默认分支

  # 允许手动触发工作流
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许一个并发部署
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建任务
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'  # 或者 'yarn' 或 'pnpm'，取决于你使用的包管理器

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Install dependencies
        run: npm ci  # 根据你的包管理器替换为 'yarn install' 或 'pnpm install'

      - name: Build
        run: npm run docs:build  # 根据你的配置替换命令

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  # 部署任务
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

3. 在 GitHub 仓库的 Settings -> Pages 菜单中，将 "Source" 设置为 "GitHub Actions"。

4. 推送代码到你的默认分支，GitHub Actions 将自动构建并部署你的站点。

## Netlify 部署

将你的 VitePress 站点部署到 Netlify 非常简单：

1. 在 [Netlify](https://app.netlify.com/) 创建账户并登录。

2. 点击 "New site from Git"，选择你的 Git 仓库。

3. 配置以下部署设置：
   - **Build command**: `npm run docs:build`（或使用你的包管理器）
   - **Publish directory**: `docs/.vitepress/dist`

4. 点击 "Deploy site" 按钮。

### 自定义域名

Netlify 允许你设置自定义域名：

1. 在 Netlify 的站点管理界面中，转到 "Domain settings"。
2. 点击 "Add custom domain"，然后输入你的域名。
3. 按照提示配置 DNS 记录。

## Vercel 部署

将 VitePress 站点部署到 Vercel 的步骤：

1. 在 [Vercel](https://vercel.com/) 创建账户并登录。

2. 点击 "New Project"，选择你的 Git 仓库。

3. 配置以下部署设置：
   - **Build Command**: `npm run docs:build`（或使用你的包管理器）
   - **Output Directory**: `docs/.vitepress/dist`

4. 点击 "Deploy" 按钮。

### 环境变量

如果你的 VitePress 站点需要环境变量，可以在 Vercel 的项目设置中添加它们：

1. 在项目的 "Settings" 中选择 "Environment Variables"。
2. 添加必要的环境变量，如 API 密钥或外部服务配置。

## Cloudflare Pages 部署

部署到 Cloudflare Pages 的步骤：

1. 在 [Cloudflare Dashboard](https://dash.cloudflare.com/) 登录。

2. 选择 "Pages" 并点击 "Create a project"。

3. 选择你的 Git 仓库。

4. 配置以下部署设置：
   - **Build command**: `npm run docs:build`（或使用你的包管理器）
   - **Build output directory**: `docs/.vitepress/dist`

5. 点击 "Save and Deploy"。

## AWS Amplify 部署

部署到 AWS Amplify 的步骤：

1. 登录到 [AWS 管理控制台](https://console.aws.amazon.com/)，前往 Amplify。

2. 点击 "New app" 并选择 "Host web app"。

3. 选择你的 Git 仓库。

4. 配置构建设置：
   - **Build command**: `npm run docs:build`（或使用你的包管理器）
   - **Output directory**: `docs/.vitepress/dist`

5. 保存并部署。

## 托管在自己的服务器

如果要在自己的服务器上托管 VitePress 站点，请按照以下步骤操作：

1. 构建你的 VitePress 站点。
2. 将生成的 `.vitepress/dist` 目录上传到你的 Web 服务器。
3. 配置 Web 服务器（如 Nginx 或 Apache）以提供静态文件。

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/vitepress/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # 禁止访问 . 开头的文件
    location ~ /\. {
        deny all;
    }
}
```

### Apache 配置示例

在 `.htaccess` 文件中（放在 dist 目录）：

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# 启用缓存
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
    ExpiresDefault "access plus 2 days"
</IfModule>
```

## 部署常见问题

### 图片和资源路径问题

确保在 Markdown 中引用资源时使用正确的路径：

- 使用相对于当前文件的路径：`![图片](./images/pic.jpg)`
- 使用相对于 public 目录的绝对路径：`![图片](/images/pic.jpg)`

如果你设置了 `base` 路径，记得在开发环境中通过 `withBase` 函数处理路径：

```vue
<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <img :src="withBase('/images/pic.jpg')" alt="图片">
</template>
```

### 404 页面配置

对于客户端路由，创建自定义 404 页面，在 `docs/404.md` 中添加：

```markdown
---
layout: 404
---

# 404 - 页面未找到

很抱歉，您访问的页面不存在。

[返回首页](/)
```

### 路由重写和重定向

某些托管平台（如 Netlify 和 Vercel）允许你配置重写规则。创建一个 `_redirects`（Netlify）或 `vercel.json`（Vercel）文件：

Netlify `_redirects` 文件（放在 `public` 目录下）：

```
# 重定向
/old-page   /new-page   301

# 重写（将请求传递给单页面应用程序）
/*    /index.html   200
```

Vercel `vercel.json` 文件（放在项目根目录）：

```json
{
  "redirects": [
    { "source": "/old-page", "destination": "/new-page", "permanent": true }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 性能优化

### 启用 Gzip 或 Brotli 压缩

大多数托管提供商默认支持压缩，但如果你在自己的服务器上托管，确保启用压缩：

Nginx 示例：

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### 配置缓存头

对于静态资源，设置适当的缓存头可以提高性能：

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 30d;
    add_header Cache-Control "public, no-transform";
}
```

### 使用 CDN

考虑使用 CDN（内容分发网络）以提高全球访问速度，如 Cloudflare、AWS CloudFront 或 Fastly。

## 部署检查清单

在部署之前，请检查以下项目：

1. ✅ 确保所有链接都指向正确的 URL（考虑 `base` 路径）
2. ✅ 测试站点在不同浏览器和设备上的显示情况
3. ✅ 验证图片和其他资源是否正确加载
4. ✅ 检查网站的性能和可访问性
5. ✅ 设置适当的 `<meta>` 标签和 SEO 信息
6. ✅ 配置自定义域名（如需要）
7. ✅ 确保已经有适当的 robots.txt 和站点地图（对 SEO 很重要）

按照这个指南，你应该能够成功地将 VitePress 站点部署到生产环境中。