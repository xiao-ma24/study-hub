# 学习资料库 — 学院复习资料共享平台

> 打破期末信息差，让每个同学都能高效抱佛脚。

---

## ✨ 功能

- 📚 **科目资料列表**：每门课的资料按笔记/真题/重点分区展示
- 📁 **文件直传**：PDF/Word 文件直接上传，无需转 Markdown
- 🔍 **全文搜索**：搜科目名、搜关键词，一搜即达
- 📱 **移动端友好**：手机、平板、电脑都能流畅浏览
- 🌙 **暗色模式**：晚上复习不刺眼
- 🔄 **持续更新**：传文件 + 更新表格，push 即更新
- 🤝 **开源共享**：其他学院/学校可以 fork 后填自己的资料

---

## 🚀 快速开始

### 本地预览（可选）

```bash
npm install
npm run dev
```

打开浏览器访问 `http://localhost:5173`

### 部署到 GitHub Pages

1. 在 GitHub 上创建仓库（如 `study-hub`）
2. 将本项目 push 到仓库的 `main` 分支
3. 进入仓库 → **Settings → Pages**
4. Source 选择 **GitHub Actions**
5. 等待 1-2 分钟，访问 `https://你的用户名.github.io/study-hub/`

> 📌 如果仓库名不是 `study-hub`，需要在 `docs/.vitepress/config.mts` 中添加 `base: '/仓库名/'`

---

## 📁 如何添加资料（核心工作流）

### 添加新文件（PDF/Word）

**第一步**：把文件放到对应目录

```
docs/public/files/科目名/类型/文件名.pdf
```

例如：
```
docs/public/files/高等数学/真题/2024秋-期末.pdf
docs/public/files/数据结构/笔记/复习提纲.docx
```

**第二步**：打开对应科目的 `index.md`，在表格里加一行

```markdown
| [2024秋-期末.pdf](/files/高等数学/真题/2024秋-期末.pdf) | 2024秋 | ✅ | [下载](#) / [在线预览](#) |
```

> 💡 现阶段点击 PDF 链接，浏览器会自动打开预览或下载（取决于浏览器设置）。

**第三步**：push 到 GitHub，网站自动更新。

---

### 添加一个新科目

1. 创建文件夹 `docs/新科目名/`
2. 创建 `docs/新科目名/index.md`（参考现有科目页格式）
3. 在 `docs/.vitepress/config.mts` 的 `nav` 和 `sidebar` 中添加新科目
4. 创建 `docs/public/files/新科目名/笔记/` 等子目录

---

## 📂 项目结构

```
study-hub/
├── .github/workflows/
│   └── deploy.yml              # 自动部署配置
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          # 站点配置（导航/侧边栏/搜索）
│   ├── public/
│   │   └── files/              # 📁 所有上传的资料文件放这里
│   │       ├── 高等数学/
│   │       │   ├── 笔记/
│   │       │   ├── 真题/
│   │       │   └── 重点/
│   │       ├── 线性代数/
│   │       ├── 数据结构/
│   │       └── 大学英语/
│   ├── index.md                # 首页
│   ├── 高等数学/
│   │   ├── index.md            # 科目主页（资料列表）
│   │   ├── 学习路线.md
│   │   └── 笔记/
│   │       └── 期末复习提纲.md  # 在线版笔记（可选）
│   ├── 线性代数/
│   ├── 数据结构/
│   ├── 大学英语/
│   ├── 贡献指南.md
│   └── 关于.md
├── package.json
└── README.md
```

> 📌 **关键目录**：`docs/public/files/` 是所有 PDF/Word 文件存放的地方，上传资料只需要往这里放文件 + 更新对应科目的 `index.md` 表格。

---

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) — 静态网站生成器（Vue 驱动）
- [GitHub Pages](https://pages.github.com/) — 免费托管
- [GitHub Actions](https://github.com/features/actions) — 自动构建部署

---

## 📄 开源协议

- 代码：MIT License
- 资料：CC BY-SA 4.0

---

## 🤝 贡献

欢迎提交资料！请阅读 [贡献指南](docs/贡献指南.md)。

> 有任何问题，欢迎在 QQ 群讨论。每一份贡献都能帮到更多同学！
