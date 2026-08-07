// Last updated: 07/08/2026, 23:57:31
1var searchRange = function (arr, target) {
2    let findLowerBound = (i, j, lower) => {
3        let start = i;
4        let end = j;
5        let res
6        while (start <= end) {
7            let mid = Math.floor((start + end) / 2);
8            if (arr[mid] == target) {
9                res = mid
10                if (lower) {
11                    end = mid - 1
12                } else {
13                    start = mid + 1
14                }
15            } else if (arr[mid] > target) {
16                end = mid - 1;
17            } else {
18                start = mid + 1
19            }
20        }
21        return res
22    };
23    let startIdx = findLowerBound(0, arr.length, true);
24
25    if (startIdx === arr.length || arr[startIdx] !== target) {
26        return [-1, -1];
27    }
28    let endIdx = findLowerBound(0, arr.length - 1, false);
29
30    return [startIdx, endIdx];
31};