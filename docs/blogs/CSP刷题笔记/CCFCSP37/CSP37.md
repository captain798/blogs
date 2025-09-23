---
title: CSP认证第37次刷题笔记
date: 2025-09-15
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 37
---

## 1. 数值积分

### 1.1 题目分析

    简单模拟计算即可，但要注意防止溢出，结果采用long long int

### 1.2 解决方案

```cpp
#include<iostream>
using namespace std;
int main() {
	int b, c, l, r;
	cin >> b >> c >> l >> r;
	long long int num = 0;
	for(int i = l;i <= r;i+=2) {
		num += (i*i + b+i +c);
	}
	num *= 2;
	cout << num << endl;
	return 0;
}
```

## 2. 机器人饲养指南
### 2.1 题目分析

    完全背包问题

    共有n个苹果 n的容量
    0-m 每个吃法可以取无数次 i 的体积 对应A[i]的收益

    转化为：n的容量 m个物品 每个物品可取无数次 
    即完全背包问题

### 2.2 解决方案一(二维dp)

完全背包不同于01背包
递推公式为 ```dp[i][j] = max(dp[i-1][j], dp[i][j-w[i]] + v[i])```

```cpp

```

### 2.3 解决方案二（一维dp）

递推公式为 ```dp[j] = max(dp[j], dp[j - w[i]] + v[i])```
```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main()
{
	int n, m;
	cin >> n >> m;
	vector<int> w(m+1),v(m+1);
	for(int i = 1;i <= m;i++)
	{
		w[i] = i;
		cin >> v[i];
	}
	vector<int> dp(n+1,0);
	for(int i = 1;i <= m;i++)
		for(int j = w[i];j <= n;j++)
	{
		dp[j] = max(dp[j],dp[j- w[i]] + v[i]);
	}
	cout << dp[n] << endl;
	return 0;
}
```