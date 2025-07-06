---
title: scrapy框架基础操作
date: 2025-06-30
categories:
  - AI程序设计实训
tags:
  - AI
---

## 终端操作
- scrapy startproject 项目名
- scrapy genspider 爬虫名 域名
- scrapy crawl 爬虫名 -o 输出文件名
- scrapy shell 网址

## 爬虫流程
- 导入所需的Python库和Scrapy框架
- 创建一个Scrapy项目，并定义爬虫
- 分析目标网站的结构，确定爬取的目标URL
- 编写爬虫的起始请求，并解析返回的页面
- 提取视频信息，并保存到本地或数据库
- 处理下一页请求，重复步骤4和步骤5，直到爬取完所有数据
  
## scrapy保存信息的最简单的方法主要有四种，-o 输出指定格式的文件，命令如下：

scrapy crawl itcast -o teachers.json

### json lines格式，默认为Unicode编码

scrapy crawl itcast -o teachers.jsonl

### csv 逗号表达式，可用Excel打开

scrapy crawl itcast -o teachers.csv

### xml格式

scrapy crawl itcast -o teachers.xml
