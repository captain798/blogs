---
title: CSP认证第36次刷题笔记
date: 2025-09-15
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 36
---

## 1. 移动
### 1.1 题目分析
    简单模拟，但要注意边界 
    判断下一位置若超出边界，则此次移动作废
### 1.2 解决方案
```cpp
#include<iostream>
#include<string>
#include<stdio.h>
using namespace std;

int main()
{
	int n, k;
	cin >> n >> k;
	while(k--) 
	{
		int x, y;
		cin >> x >> y;
		string order;
		cin >> order;
		
		int length = order.size();
		int size = order.size();
		
		while(length--)
		{
			if(order[size - length] == 'f') 
			{
				if((y + 1) <= n) y++;
			} 
			else if (order[size - length] == 'b')
			{
				if((y - 1) >= 1) y--;
			}
			else if(order[size - length] == 'l')
			{
				if((x - 1) >= 1) x--;
			}
			else if(order[size - length] == 'r')
			{
				if((x + 1) <= n) x++;
			}
		}
		
		cout << x << ' ' << y << endl;
	}
	
	return 0;
}
```

## 2. 梦境巡查

### 2.1 题目分析

如果第i个位置的能量损失了，

对于前面的w0,w1...,wi-1都不受影响，找最大的就完事了

对于后面的wi,wi+1...,wn都会相同的放大bi

所以我要的答案就是左右两边的最大值，再取一个最大值