// Last updated: 14/08/2026, 22:40:37
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var maximumLengthSubstring = function (s) {
6    let nums = s.split("")
7    let map = {};
8    let j = 0, i = 0;
9    let maxLength = 0;
10    while (j < nums.length) {
11        if ((nums[j] in map) && map[nums[j]] + 1 > 2) {
12            maxLength = Math.max(j - i, maxLength)
13            while (nums[i] !== nums[j]) {
14                map[nums[i]] = map[nums[i]] - 1
15                i++
16            }
17            map[nums[j]] = map[nums[j]] - 1;
18            i++;
19        }
20        map[nums[j]] = (map[nums[j]] || 0) + 1
21        j++
22    }
23    maxLength = Math.max(j - i, maxLength)
24    return maxLength;
25};