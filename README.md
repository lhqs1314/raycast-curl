# Hello World Raycast Extension

这是一个 Raycast 扩展，可以输入网页 URL，自动抓取网页内容并以 Markdown 格式展示。

## 功能简介
- 输入任意网页 URL，一键获取网页内容。
- 自动将网页 HTML 转换为 Markdown 格式。
- 以 Raycast 原生 Markdown 方式美观展示内容。

## 安装依赖
在项目根目录下运行：

```bash
npm install
```

## 开发调试
使用 Raycast 官方 CLI 工具：

```bash
npm run dev
```

## 使用方法
1. 在 Raycast 中启动本扩展。
2. 输入你想要抓取内容的网页 URL。
3. 点击“获取网页内容”按钮。
4. 稍等片刻，即可在 Raycast 面板中看到该网页内容的 Markdown 版本。

## 主要依赖
- [@raycast/api](https://www.npmjs.com/package/@raycast/api)
- [turndown](https://www.npmjs.com/package/turndown)

## 代码结构
- `src/hello-world.tsx`：主功能入口，负责 UI、网页抓取和 Markdown 渲染。
- `package.json`：依赖和脚本说明。

## 注意事项
- 某些网页可能有反爬虫策略，导致内容无法正常获取。
- Markdown 转换效果依赖于网页原始结构，复杂网页可能显示不完美。

## License
MIT