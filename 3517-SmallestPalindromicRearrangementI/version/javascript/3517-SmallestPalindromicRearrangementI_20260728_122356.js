// Last updated: 28/07/2026, 12:23:56
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var smallestPalindrome = function (s) {
6    let n = s.length;
7    if (s.length == 1) return s
8    if (s.length % 2 == 0) {
9        let str1 = s.slice(0, n / 2);
10        let str2 = s.slice(n / 2, n)
11        return str1.split("").sort().join("") + str2.split("").sort().reverse().join("")
12    } else {
13        let mid = Math.floor(n / 2);
14        let str1 = s.slice(0, n / 2);
15        let str2 = s.slice((n / 2) + 1, n)
16        return str1.split("").sort().join("") + s[mid] + str2.split("").sort().reverse().join("")
17    }
18};