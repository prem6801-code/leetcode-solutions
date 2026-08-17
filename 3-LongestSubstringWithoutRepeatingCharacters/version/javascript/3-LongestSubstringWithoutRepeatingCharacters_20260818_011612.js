// Last updated: 18/08/2026, 01:16:12
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function (s) {
6    let longest = 0;
7    let i = 0;
8    const lastSeen = new Int32Array(128);
9
10    for (let j = 0; j < s.length; j++) {
11        const code = s.charCodeAt(j);
12        i = Math.max(i, lastSeen[code]);
13        lastSeen[code] = j + 1;
14        longest = Math.max(longest, j - i + 1);
15    }
16
17    return longest;
18};