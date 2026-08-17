// Last updated: 18/08/2026, 01:13:40
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function (s) {
6    let longest = 0;
7    let i = 0;
8    const map = {};
9
10    for (let j = 0; j < s.length; j++) {
11        const char = s[j];
12        if (char in map && map[char] >= i) {
13            i = map[char] + 1;
14        }
15        map[char] = j;
16        longest = Math.max(longest, j - i + 1);
17    }
18    return longest;
19};