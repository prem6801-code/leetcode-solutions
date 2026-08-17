// Last updated: 18/08/2026, 01:04:29
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function (s) {
6    let longest = 0;
7    let i = 0, j = 0;
8    let set = new Set();
9    while (j < s.length) {
10        if (set.has(s[j])) {
11            longest = Math.max(j - i, longest)
12            while (set.has(s[j])) {
13                set.delete(s[i])
14                i++;
15            }
16        }
17        set.add(s[j])
18        j++;
19    }
20    longest = Math.max(j - i, longest)
21    return longest
22};