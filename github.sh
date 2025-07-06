#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 初始化Git仓库（如果尚未初始化）
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "更新博客内容"

# 添加远程仓库（如果尚未添加）
git remote add origin git@github.com:captain798/blogs.git || true

# 推送到main分支
git push -f origin main

# 可选：同时推送到gh-pages分支（用于GitHub Pages）
# git push -f origin main:gh-pages