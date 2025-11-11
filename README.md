# 食堂点餐系统

一个基于HTML、CSS和JavaScript开发的食堂点餐模拟小程序，支持菜品展示、价格计算、订单管理以及权限控制功能。

## 功能特点

- 📋 **菜品展示**：展示菜品图片、名称和价格
- 🛒 **订单管理**：添加菜品到订单、计算总价、清空订单
- 🔐 **权限控制**：区分普通用户和管理员权限
  - 普通用户：只能查看菜单和点餐
  - 管理员：可以管理菜品库（添加/移除菜品）
- 📦 **菜品库**：预设20种菜品，管理员可灵活管理今日菜单
- 🎨 **响应式设计**：适配不同设备屏幕尺寸

## 项目结构

```
canteen-ordering/
├── index.html    # 主页面结构
├── styles.css    # 样式定义
├── app.js        # 核心功能实现
├── README.md     # 项目说明文档
└── .gitignore    # Git忽略文件
```

## 部署说明

### 1. 本地开发

直接打开 `index.html` 文件即可在本地运行项目。

### 2. 部署到GitHub Pages

1. **创建GitHub仓库**
   - 登录GitHub账号，创建一个新的仓库
   - 仓库名称建议使用 `canteen-ordering` 或类似名称

2. **将代码推送到GitHub**
   ```bash
   # 初始化git仓库（如果尚未初始化）
   git init
   
   # 添加所有文件到暂存区
   git add .
   
   # 提交代码
   git commit -m "Initial commit"
   
   # 添加远程仓库（替换为你的GitHub仓库URL）
   git remote add origin https://github.com/你的用户名/canteen-ordering.git
   
   # 推送到远程仓库
   git push -u origin master
   ```

3. **配置GitHub Pages**
   - 进入仓库的 **Settings** 页面
   - 找到 **Pages** 部分
   - 在 **Source** 下拉菜单中选择 `master` 分支或 `main` 分支
   - 点击 **Save** 按钮保存设置
   - 等待几分钟，GitHub会自动构建和部署你的网站

4. **访问部署的网站**
   - 部署成功后，你可以通过 `https://你的用户名.github.io/canteen-ordering/` 访问网站

## 使用说明

### 登录系统
- 普通用户：选择"普通用户"角色直接登录
- 管理员：选择"管理员"角色，输入密码 `admin123` 登录

### 普通用户功能
- 浏览菜品列表
- 将菜品添加到订单
- 查看订单总价
- 清空订单

### 管理员功能
- 拥有普通用户的所有功能
- 可以点击"显示菜品库"按钮管理今日菜单
- 从菜品库中添加菜品到今日菜单
- 从今日菜单中移除菜品

## 开发环境要求

- 任何现代浏览器
- 文本编辑器（如VSCode、Sublime Text等）
- Git（用于版本控制和部署）

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)

## 注意事项

- 管理员密码为 `admin123`，在生产环境中应更换为更安全的密码
- 本项目使用随机图片服务（picsum.photos），实际部署时可替换为真实菜品图片