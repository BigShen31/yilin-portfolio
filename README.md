# yilin-portfolio-netlify

一个可直接部署在 GitHub Pages / Netlify 的静态个人主页项目，基于 Vite + 原生 JavaScript 构建，完整复现 https://8bnmdv8rd7.coze.site/ 的视觉布局。

## 快速开始

`ash
pnpm install
pnpm run dev
`

访问 http://localhost:5173 即可预览。

## 构建部署

`ash
pnpm run build
`

构建输出位于 dist/。Netlify / GitHub Pages 配置示例：
- **发布目录**：dist
- **构建命令**：pnpm run build

## 主要特性
- 响应式布局，适配桌面端与移动端。
- 纯静态资源，无需后端。
- 所有插图均为 SVG/渐变生成，无外部依赖。

## 项目结构
`
├─ package.json
├─ vite.config.js
└─ src
   ├─ index.html
   ├─ main.js
   ├─ styles
   │  └─ main.scss
   └─ assets
      ├─ avatar.svg
      ├─ project-tech.svg
      ├─ project-path.svg
      ├─ qrcode-wechat.svg
      └─ qrcode-weibo.svg
`

## License
Copyright ? 2025 一林. All rights reserved.
