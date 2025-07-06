---
title: conda配置python虚拟环境
date: 2025-06-30
categories:
  - 编程环境配置
tags:
  - python
  - 环境配置
---

## 安装
    anaconda,conda包管理工具
    官网下载： https://www.anaconda.com/download
## conda配置
## Conda 环境管理

### 创建环境
- `conda create -n 环境名 python=版本号` 创建指定Python版本的环境

### 删除环境
- `conda remove -n 环境名 --all`   完全删除指定环境

### 常用命令
- `conda env list`   列出所有环境
- `conda activate 环境名`   激活环境
- `conda deactivate`   退出当前环境

### 包管理
- `conda install 包名`   安装包
- `conda list`   查看已安装的包
- `conda remove 包名`  #删除包
