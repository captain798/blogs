---
title: CSP认证第35次刷题笔记
date: 2025-09-15
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 35
---

## 1. 密码

### 1. 题目分析

    同一个字符出现不超过 2 次；  哈希表统计
    模拟即可，复杂但不难

### 2. 解决方案

```cpp
#include<iostream>
#include<string>
struct cnum
{
	char c;
	int num;
};
cnum c[110];
using namespace std;
int main()
{
	int n;
	cin >> n;
	while(n--)
	{
		for(int i = 0;i < 110;i++)
		{
			c[i].c = ' ';
			c[i].num = 0;
		}
		string code;
		cin >> code;
		int zimuflag = 0;
		int shuziflag = 0;
		int teshuflag = 0;
		int numflag = 0;
		int level = 0;
		for(int i = 0;i < code.size();i++)
		{
			if( ((code[i] >= 'A') && (code[i] <= 'Z')) || ((code[i] >= 'a') && (code[i] <= 'z'))) zimuflag = 1;
			if((code[i] >= '0') && (code[i] <= '9')) shuziflag = 1;
			if((code[i] == '#') || (code[i] == '*')) teshuflag = 1;
			for(int j=0;j < 110;j++)
			{
				if(c[j].c == ' ')
				{
					c[j].c = code[i];
					c[j].num = 1;
					break;
				}
				if(c[j].c == code[i])
				{
					c[j].num++;
					if(c[j].num > 2) numflag = 1;
					break;
				}
			}
		}
		if((zimuflag == 1) && (shuziflag == 1) && (teshuflag == 1))
		{
			level = 2;
			if(numflag == 1) level = 1;
		}
		cout << level << endl;
	}
	return 0;
}
```

## 2. 字符串变换

### 2.1 题目分析

    首先想到模拟，但是发现只有80分
    前 80 的测试数据保证查询数量 m≤10 变换次数 k≤100
    这里通过观察可以看到每个字母都会有循环

