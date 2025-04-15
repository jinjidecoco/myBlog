export default {
  title: "小飒", //站点标题
  description: "前端工程师的博客", //mate标签description，多用于搜索引擎抓取摘要
  base: "/myBlog/", //部署到github pages的路径
  head: [
    ['link', { rel: 'icon', href: '/myBlog/favicon.svg' }]
  ],
  // 禁用死链接检查
  ignoreDeadLinks: true,
  themeConfig: {
    // logo: '/myBlog/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '使用教程', link: '/guide/' },
      { text: '前端',
        items: [
          { text: 'JavaScript', link: '/frontend/javascript/' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' }
          { text: '常见手写题', link: '/frontend/question/' }
        ]
      },
      { text: '后端',
        items: [
          { text: 'Node.js', link: '/backend/nodejs/' },
          { text: 'Database', link: '/backend/database/' }
        ]
      },
      { text: 'AI', link: '/ai/' },
      { text: '工具', link: '/tools/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'VitePress教程',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: 'Markdown语法', link: '/guide/markdown' },
            { text: '自定义样式', link: '/guide/custom-style' },
            { text: '部署指南', link: '/guide/deployment' }
          ]
        }
      ],
      '/frontend/javascript/': [
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: '概述', link: '/frontend/javascript/' },
            { text: '基础知识', link: '/frontend/javascript/basics' },
            { text: '进阶主题', link: '/frontend/javascript/advanced' }
          ]
        }
      ],
      '/frontend/vue/': [
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: '概述', link: '/frontend/vue/' },
            { text: 'Vue 基础', link: '/frontend/vue/basics' },
            { text: 'Vue 组件', link: '/frontend/vue/components' }
          ]
        }
      ],
      '/frontend/react/': [
        {
          text: 'React',
          collapsed: false,
          items: [
            { text: '概述', link: '/frontend/react/' }
          ]
        }
      ],
      '/backend/nodejs/': [
        {
          text: 'Node.js',
          collapsed: false,
          items: [
            { text: '概述', link: '/backend/nodejs/' },
            { text: '入门指南', link: '/backend/nodejs/getting-started' },
            { text: 'Express', link: '/backend/nodejs/express' }
          ]
        }
      ],
      '/backend/database/': [
        {
          text: '数据库',
          collapsed: false,
          items: [
            { text: '概述', link: '/backend/database/' }
          ]
        }
      ],
      '/ai/': [
        {
          text: '人工智能',
          collapsed: false,
          items: [
            { text: '概述', link: '/ai/' },
            { text: '机器学习基础', link: '/ai/ml-basics' },
            { text: '深度学习入门', link: '/ai/dl-intro' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '开发工具',
          collapsed: false,
          items: [
            { text: '概述', link: '/tools/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jinjidecoco' }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present xiaosa Blog. All rights reserved."
    },
    search: {
      provider: 'local'
    },
    lastUpdated: true
  }
}
