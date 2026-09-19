// Last updated: 19/09/2026, 11:40:15
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function (heights) {
6    let maxArea = 0;
7    let i = 0, j = heights.length - 1;
8    while (i < j) {
9        maxArea = Math.max(maxArea, Math.min(heights[i], heights[j]) * (j - i))
10        if (heights[i] < heights[j]) {
11            i++
12        } else if (heights[i] == heights[j]) {
13            i++;
14            j--;
15        } else {
16            j--
17        }
18    }
19    return maxArea
20};