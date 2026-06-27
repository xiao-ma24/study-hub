import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基本信息
  title: '学习资料库',
  description: '学院复习资料共享平台 — 打破期末信息差',

  // 允许 Markdown 中嵌入 HTML（用于 PDF 预览 iframe）
  markdown: {
    allowHtml: true,
  },

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '科目',
        items: [
          { text: '高等数学', link: '/高等数学/' },
          { text: '线性代数', link: '/线性代数/' },
          { text: '数据结构', link: '/数据结构/' },
          { text: '大学英语', link: '/大学英语/' },
        ]
      },
      { text: '贡献指南', link: '/贡献指南' },
      { text: '关于', link: '/关于' },
    ],

    // 搜索配置（本地全文搜索）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索资料',
            buttonAriaLabel: '搜索资料'
          },
          modal: {
            noResultsText: '没有找到相关资料',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 侧边栏配置
    sidebar: {
      '/高等数学/': [
        {
          text: '高等数学',
          items: [
            { text: '资料列表', link: '/高等数学/' },
            { text: '学习路线', link: '/高等数学/学习路线' },
            { text: '复习笔记（在线版）', link: '/高等数学/笔记/期末复习提纲' },
          ]
        }
      ],
      '/线性代数/': [
        {
          text: '线性代数',
          items: [
            { text: '资料列表', link: '/线性代数/' },
            { text: '学习路线', link: '/线性代数/学习路线' },
          ]
        }
      ],
      '/数据结构/': [
        {
          text: '数据结构',
          items: [
            { text: '资料列表', link: '/数据结构/' },
            { text: '学习路线', link: '/数据结构/学习路线' },
          ]
        }
      ],
      '/大学英语/': [
        {
          text: '大学英语',
          items: [
            { text: '资料列表', link: '/大学英语/' },
            { text: '学习路线', link: '/大学英语/学习路线' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/study-hub' }
    ],

    footer: {
      message: 'MIT Licensed | 仅供学习交流使用',
      copyright: '© 2024 Study Hub'
    },

    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
  }
})
