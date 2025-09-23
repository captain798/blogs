---
title: CSP认证第30次刷题笔记
date: 2025-09-19
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 30
---

## 1. 重复局面

### 解题思路
将每个局面的8行合并为一个字符串，然后统计每个字符串出现的次数。

### 代码实现
```cpp
#include<iostream>
#include<string>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<string> str(n);
    for(int i = 0; i < n; i++) {
        string temp;
        for(int j = 0; j < 8; j++) {
            cin >> temp;
            str[i] += temp;
        }
    }
    cout << 1 << endl;
    int cnt;
    for(int i = 1; i < n; i++) {
        cnt = 1;
        for(int j = 0; j < i; j++) {
            if(str[j] == str[i]) cnt++;
        }
        cout << cnt << endl;
    }
    return 0;
}
```

## 2. 矩阵运算

### 解题思路
1. **矩阵乘法基本要求**：矩阵A的列数必须等于矩阵B的行数，结果矩阵的大小为矩阵A的行数×矩阵B的列数。
2. **注意事项**：
   - 题目提示需要谨慎评估数值范围，应使用long long类型存储计算结果
   - 考虑到空间限制问题（n×n的二维矩阵可能超出空间限制），应采用**分解计算**的策略：计算一行，输出一行，每次只存储一行的数据

### 优化说明
通过分解矩阵乘法过程，可以有效减少内存占用，同时使用适当的数据类型避免数值溢出问题。