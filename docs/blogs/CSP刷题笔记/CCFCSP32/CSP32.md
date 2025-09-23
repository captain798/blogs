---
title: CSP认证第32次刷题笔记
date: 2025-09-18
categories:
  - 刷题
tags:
  - 算法
  - CSP
sticky: 32
---

## 1. 仓库规划
    如果有多个仓库均满足该要求，则选取其中编号最小的仓库作为仓库 i的上级仓库；
    由此可知按顺序遍历即可
    此题要注意编号与编码的区别，莫要搞复杂了

```cpp
#include<iostream>
#include<vector>
using namespace std;
int main() {
	int n, m;
	cin >> n >> m;
	vector<vector<int>> a(n, vector<int>(m));
	for(int i = 0;i < n;i++)
		for(int j = 0;j < m;j++) {
			cin >> a[i][j];
		}
	for(int i = 0;i < n;i++) {
		int count = 0;
		for(int j = 0;j < n;j++) {
			count = 0;
			for(int k = 0;k < m;k++) {
				if(a[i][k] < a[j][k]) count++;
			}
			if(count == m) {
				cout << j << endl;
				break;
			}
			if(j >= n) cout <<  0 << endl;
		}
	}
	return 0;
}
```

## 2. 因子化简

    因子化简直接遍历即可，不需要求出其质因子，因为质数在前，后面非质数包含前面质数的因子，所以不可能被整除
    此题要注意的是记得开long long 
```cpp
#include<iostream>
using namespace std;
int main() {
	int q;
	cin >> q;
	while(q--) {
		long long int n;
		int k;
		cin >> n >> k;
		long long int res = 1;
		for(int i = 2; i <= n/i; i++) {
			int count = 0;
			while(n % i == 0) {
				n /= i;
				count++;
			}
			if(count >= k) {
				for(int j = 0; j < k; j++) {
					res *= i;
				}
			}
		}
		cout << res << endl;
	}
	return 0;
}
```