// Last updated: 29/07/2026, 00:07:28
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var trap = function (height) {
6    let leftMax = new Array(height.length);
7    let rightMax = new Array(height.length);
8    for (let i = 0; i < height.length; i++) {
9        leftMax[i] = Math.max((leftMax[i - 1] || 0), height[i])
10    }
11    for (let i = height.length - 1; i >= 0; i--) {
12        rightMax[i] = Math.max((rightMax[i + 1] || 0), height[i])
13    }
14    let area = 0
15    for (let i = 0; i < height.length; i++) {
16        if (height[i] < leftMax[i] && height[i] < rightMax[i]) {
17            area += Math.min(leftMax[i], rightMax[i]) - height[i]
18        }
19    }
20    return area
21};