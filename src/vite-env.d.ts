/*
这是一个 TypeScript 声明文件，用于为 Vite 项目提供类型声明支持。该文件通过三斜线指令引用了 Vite 客户端的类型定义。
*/
/*
系统概述：
- 该文件是 Vite + React + TypeScript 项目的类型声明文件
- 主要用于确保 TypeScript 编译器能够正确识别 Vite 特定的类型

依赖关系：
- 依赖 vite/client 类型定义包

技术说明：
- 使用三斜线指令（/// <reference types="..." />）引用外部类型定义
- 这是 TypeScript 的标准语法，用于声明编译时依赖

使用场景：
- 在项目中导入 .css, .svg, .png 等资源文件时提供类型支持
- 支持 Vite 的特定功能，如 import.meta.env 的类型定义

注意事项：
- 该文件通常不需要手动修改
- 由 Vite 在项目创建时自动生成
- 如需扩展类型定义，建议创建单独的类型声明文件

部署说明：
- 该文件仅在开发环境中使用
- 不会被打包到生产环境中
*/
/// <reference types="vite/client" />
