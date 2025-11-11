# GitHub Pages 部署指南

本指南详细说明如何将食堂点餐系统部署到GitHub Pages，生成可公共访问的网站。

## 前提条件

1. **安装Git**
   - Windows: 下载并安装 [Git for Windows](https://gitforwindows.org/)
   - macOS: 使用Homebrew `brew install git` 或下载 [Git installer](https://git-scm.com/download/mac)
   - Linux: 使用包管理器，如 `sudo apt install git` (Ubuntu/Debian)

2. **创建GitHub账号**
   - 如果你还没有GitHub账号，请到 [GitHub官网](https://github.com/) 注册

## 部署步骤

### 步骤1: 准备本地仓库

```bash
# 打开命令行工具（Windows: Git Bash 或 PowerShell）

# 进入项目目录
cd c:\Users\17123\OneDrive\文档\Javascript\canteen-ordering

# 初始化Git仓库（如果尚未初始化）
git init

# 添加.gitignore文件（已创建）

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit"
```

### 步骤2: 创建GitHub远程仓库

1. 登录你的GitHub账号
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `canteen-ordering`（或任何你喜欢的名称）
   - Description: 可选，例如 "食堂点餐系统 - 基于HTML、CSS和JavaScript的点餐模拟小程序"
   - 选择 Public（公开仓库，GitHub Pages免费使用）
   - 不要勾选 "Initialize this repository with a README"（因为我们已经有了README文件）
4. 点击 "Create repository" 按钮创建仓库

### 步骤3: 连接并推送代码到GitHub

创建仓库后，复制GitHub提供的 "Quick setup" 中的命令，然后在本地命令行中执行：

```bash
# 添加远程仓库（替换为你的GitHub仓库URL）
git remote add origin https://github.com/YOUR_USERNAME/canteen-ordering.git

# 推送代码到GitHub（第一次推送需要-u参数）
git push -u origin master
# 如果GitHub默认分支是main，则使用：
git push -u origin main
```

### 步骤4: 配置GitHub Pages

1. 在GitHub仓库页面，点击顶部的 "Settings" 选项卡
2. 向下滚动，找到 "Pages" 部分
3. 在 "Source" 下拉菜单中：
   - 选择 "Deploy from a branch"
   - 从分支下拉菜单中选择 "master" 或 "main"（取决于你的默认分支名称）
   - 从文件夹下拉菜单中选择 "/ (root)"
4. 点击 "Save" 按钮
5. 等待几分钟，GitHub将自动构建和部署你的网站
6. 部署完成后，你将在 "Pages" 部分看到一个绿色的成功消息和你的网站URL

### 步骤5: 访问部署的网站

部署成功后，你可以通过以下URL访问你的网站：
`https://YOUR_USERNAME.github.io/canteen-ordering/`

## 后续更新

当你对项目进行修改后，可以通过以下命令更新GitHub Pages：

```bash
# 添加更改
git add .

# 提交更改
git commit -m "更新说明"

# 推送到GitHub
git push
```

推送后，GitHub Pages将自动更新你的网站，通常需要1-2分钟完成部署。

## 故障排除

如果部署遇到问题：

1. 检查GitHub Pages设置是否正确
2. 查看仓库的Actions页面，检查构建和部署日志
3. 确保HTML文件命名为index.html且位于根目录
4. 检查网站URL拼写是否正确
5. 清除浏览器缓存后重新访问

## 自定义域名（可选）

如果你想使用自己的域名，可以在GitHub Pages设置中添加自定义域名。具体步骤请参考 [GitHub官方文档](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site)。