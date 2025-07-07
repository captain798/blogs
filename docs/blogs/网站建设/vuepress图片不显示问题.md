---
title: VuePress图片不显示问题解决方案
date: 2025-07-07
categories:
  - 网站建设
tags:
  - VuePress
---

# VuePress图片不显示问题解决方案

## 问题现象
在VuePress中使用Markdown插入图片时，本地预览正常但网页上无法显示。

## 常见原因及解决方案

### 1. 图片路径包含非英文字符
❌ 错误示例：
```markdown
![图片](./图片.png)
```

✅ 正确做法：
- 将图片文件名改为英文
- 确保路径使用英文命名
```markdown
![image](./example.png)
```

### 2. 相对路径格式不正确
❌ 错误示例：
```markdown
![图片](图片.png)
```

✅ 正确做法：
- 始终使用`./`或`../`开头的相对路径
```markdown
![image](./example.png)
```

## 最佳实践
1. 在`docs/.vuepress/public`目录下创建`images`文件夹存放图片
2. 使用英文命名图片文件
3. 使用正确的相对路径引用

示例项目结构：
```
docs/
  .vuepress/
    public/
      images/
        example.png
```

示例引用方式：
```markdown
![示例图片](/images/example.png)
```
        


