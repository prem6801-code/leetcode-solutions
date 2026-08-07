// Last updated: 07/08/2026, 23:28:54
1var searchRange = function (arr, target) {
2    let findLowerBound = (i, j, lower) => {
3        let start = i;
4        let end = j;
5        while (start < end) {
6            let mid = Math.floor((start + end) / 2);
7            if (arr[mid] >= target && lower) {
8                end = mid;
9            } else if (arr[mid] > target && !lower) {
10                end = mid;
11            } else {
12                start = mid + 1
13            }
14        }
15        return start;
16    };
17    let startIdx = findLowerBound(0, arr.length, true);
18
19    if (startIdx === arr.length || arr[startIdx] !== target) {
20        return [-1, -1];
21    }
22    let endIdx = findLowerBound(0, arr.length, false);
23
24    return [startIdx, endIdx - 1];
25};