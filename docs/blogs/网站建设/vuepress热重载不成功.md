---
title: VuePress热重载不成功的问题解决
date: 2025-06-30
categories:
  - 网站建设
tags:
  - VuePress
sticky: 1
---


# VuePress热重载不成功的问题解决

## 官网示例代码
 ```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },
```
## 可成功热重载的代码
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vuepress dev docs --temp .temp",
    "build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },
```