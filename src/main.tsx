/*
这是一个 React 应用的入口文件，使用 Vite 作为构建工具，集成了 TypeScript 和 Tailwind CSS。文件负责初始化 React 应用并将根组件渲染到 DOM 中。
*/
/*
系统概述：
- 这是一个基于 Vite 构建的现代化 React 应用
- 使用 TypeScript 进行类型检查
- 使用 Tailwind CSS 进行样式管理

技术栈：
- React 18+：使用最新的 React 特性，包括并发模式
- TypeScript：提供类型安全
- Tailwind CSS：原子化 CSS 框架
- Vite：现代化的前端构建工具

依赖关系：
- React：核心框架依赖
- ReactDOM：React 渲染到浏览器的桥接库
- Tailwind CSS：样式框架
- 本地样式文件：./index.css

使用说明：
1. 文件作为应用入口点，初始化 React 应用
2. 使用 React.StrictMode 启用严格模式，有助于发现潜在问题
3. 使用 createRoot API 创建并渲染应用根节点
4. 集成了 Tailwind CSS 的基础样式

部署说明：
- 需要确保 DOM 中存在 id 为 "root" 的元素
- 使用 Vite 进行构建和部署

注意事项：
- 使用 TypeScript 的非空断言操作符 (!) 确保 root 元素存在
- 启用了 React 严格模式，可能会导致开发环境中的重复渲染
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from '@/components/theme/theme-provider';
import './styles/globals.css';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
