---
title: CSP认证第33次刷题笔记
date: 2025-09-11
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 33
---

## 1.词频统计

- 模拟即可

## 2.相似度计算

### 题意：输入两段文章，统计交集和并集的大小(不区分大小写)

### 题眼： set的使用

### 解题：
- 去重：使用set作为容器（set的翻译就是“集合”，天然去重且升序）
- 求交集： 使用algorithm里的set_intersection函数，具体见代码
- 求并集： a + b - a交b
- 不区分大小写： 判断是否是A-Z，再加上('a' - 'A')

### 代码
```cpp
// 找存储结构，最适合的是set（其翻译即为集合） 天然去重且有序 
// 第二题 STL很重要
#include<iostream>
#include<set>
#include<string>
#include<algorithm>
#include<vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    set<string> A;
    set<string> B;
    string temp;
	for(int i = 0;i <= n;i++) {
		cin >> temp;
		for(int i = 0;i < temp.size();i++) {
			if(temp[i] >= 'A' && temp[i] <= 'Z') {
				temp[i] += ('a' - 'A');
			}
		}
		A.insert(temp);
	}
	for(int i = 0;i <= m;i++) {
		cin >> temp;
		for(int i = 0;i < temp.size();i++) {
			if(temp[i] >= 'A' && temp[i] <= 'Z') {
				temp[i] += ('a' - 'A');
			}
		}
		B.insert(temp);
	}
	vector<string> V;
	set_intersection(A.begin(),A.end(),B.begin(),B.end(),inserter(V, V.begin())) ;
	// std::set_intersection 的作用是计算两个已排序序列的交集。
	// inserter(V, V.begin()) 的作用是为这个函数提供一个动态的输出位置，使得函数可以将交集元素一个接一个地添加到 V 向量中，而不用担心容量问题。
	cout << V.size();
	cout << A.size() + B.size() - V.size();
	
	return 0;
}
```

