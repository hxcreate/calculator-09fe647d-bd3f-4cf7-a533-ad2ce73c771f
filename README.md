# Modern React Template

一个现代化的 React 开发模板，基于最新技术栈，支持组件快速开发。

## 技术栈

- ⚡️ [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) + [Vite 5](https://vitejs.dev/)
- 🎨 [TailwindCSS](https://tailwindcss.com/) - 原子化 CSS 框架
- 📦 [shadcn/ui](https://ui.shadcn.com/) - 可定制的组件库
- 🎯 [Radix UI](https://www.radix-ui.com/) - 无障碍的 UI 原语
- 🛠️ [React Router DOM](https://reactrouter.com/) - 路由管理
- 📱 响应式设计 + 暗色模式

## 特性

- 🎉 开箱即用的现代化组件
- 🌓 内置暗色模式支持
- 📱 完整的响应式设计
- ♿️ 符合 ARIA 标准的无障碍设计
- 🔧 完整的 TypeScript 类型支持
- 📝 ESLint + Prettier 代码规范

## 目录结构

```
src/
├── components/    # 组件目录
│   ├── ui/       # shadcn/ui 基础组件
│   ├── theme/    # 主题相关组件
│   └── business/ # 业务组件
├── layouts/      # 布局组件
├── pages/        # 页面组件
├── hooks/        # 自定义 hooks
├── lib/         # 工具函数
├── types/       # TypeScript 类型
└── styles/      # 全局样式
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建测试环境
pnpm build

# 构建生产环境
pnpm build:prod
```

## 组件开发规范

### 样式指南

使用 shadcn/ui 的设计令牌（Design Tokens）:

```tsx
// 主题颜色
bg-background text-foreground    // 背景和文字
bg-card text-card-foreground    // 卡片
bg-popover text-popover-foreground    // 弹出层
bg-primary text-primary-foreground    // 主要元素
bg-secondary text-secondary-foreground // 次要元素
bg-muted text-muted-foreground    // 禁用状态
bg-accent text-accent-foreground    // 强调

// 状态样式
hover:bg-accent/90              // 悬停效果
focus-visible:ring-ring        // 焦点环
disabled:opacity-50            // 禁用状态
```

### 组件开发

- 使用函数式组件
- 完整的 TypeScript 类型定义
- Props 必须有明确的接口定义
- 支持键盘导航和无障碍访问

示例：
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function Button({ variant = 'default', size = 'default', ...props }: ButtonProps) {
  // 组件实现
}
```

## 内置组件

### 基础组件 (src/components/ui/)
- `Button` - 多样式按钮
- `Input` - 输入控件
- `Select` - 选择器
- `Dialog` - 对话框
- `Toast` - 消息提示
- `Card` - 卡片容器
- `Tabs` - 标签页
- `Alert` - 警告提示
- `Form` - 表单控件
- `Table` - 数据表格

### 主题组件
- `ThemeProvider` - 主题管理
- `ThemeToggle` - 主题切换器

## 环境配置

开发环境 (.env.development):
```
VITE_APP_TITLE=React Template Dev
VITE_APP_API_BASE_URL=http://localhost:3000
VITE_APP_ENV=development
```

生产环境 (.env.production):
```
VITE_APP_TITLE=React Template
VITE_APP_API_BASE_URL=https://api.example.com
VITE_APP_ENV=production
```
