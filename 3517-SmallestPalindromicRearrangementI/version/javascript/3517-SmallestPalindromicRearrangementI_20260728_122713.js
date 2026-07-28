// Last updated: 28/07/2026, 12:27:13
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var smallestPalindrome = function (s) {
6    let n = s.length;
7    let str = s.split("")
8    if (s.length == 1) return s
9    if (s.length % 2 == 0) {
10        let str1 = str.slice(0, n / 2);
11        let str2 = str.slice(n / 2, n)
12        return str1.sort().join("") + str2.sort().reverse().join("")
13    } else {
14        let mid = Math.floor(n / 2);
15        let str1 = str.slice(0, n / 2);
16        let str2 = str.slice((n / 2) + 1, n)
17        return str1.sort().join("") + s[mid] + str2.sort().reverse().join("")
18    }
19};