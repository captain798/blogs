---
title: CSP认证第28次刷题笔记
date: 2025-09-19
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 28
---

## 1. 现值计算
      模拟，但要注意输出的时候printf("%.3f", res);
```cpp
#include<iostream>
#include<cmath>
using namespace std;
int main() {
	int n;
	double i;
	cin >> n;
	scanf("%lf",&i);
	double res = 0;
	double temp;
	double cnt = 1;
	for(int k = 0; k <= n; k++) {
		cin >> temp;
		res += temp / cnt;
		cnt *= (1+i);
	}
	//printf("%f", res);是错误的
	printf("%.3f", res);
	return 0;
}
```

## 2. 训练计划
- 求最早时间从前向后遍历
- 求最晚时间从后往前遍历 因为前面的科目受后面依赖它的科目的限制
  先全初始化为n，再遍历求min

```cpp
#include<iostream>
#include<vector>
using namespace std;
int main() {
	int n, m;
	cin >> n >> m;
	vector<int> p(m + 1);
	for(int i = 1; i <= m; i++) cin >> p[i];
	vector<int> t(m + 1);
	for(int i = 1; i <= m; i++) cin >> t[i];
	vector<int> a(m + 1);
	int flag = 1; //假设可参赛
	for(int i = 1; i <= m; i++) {
		if(p[i] == 0) a[i] = 1;
		else a[i] = a[p[i]] + t[p[i]] ;
		if(a[i] + t[i] - 1 > n) flag = 0;
		if(i==1) cout << a[i];
		else cout << " " << a[i];
	}
	if (flag) {
		// 计算最晚开始时间
		vector<int> latest_start(m + 1);
		vector<int> latest_end(m + 1, n);
		for (int i = m; i >= 1; i--) {
			latest_start[i] = latest_end[i] - t[i] + 1;
			int parent = p[i];
			if (parent != 0) {
				latest_end[parent] = min(latest_end[parent], latest_start[i] - 1);
			}
		}
		// 输出最晚开始时间
		for (int i = 1; i <= m; i++) {
			cout << latest_start[i] << (i == m ? "" : " ");
		}
	}
	return 0;
}
```