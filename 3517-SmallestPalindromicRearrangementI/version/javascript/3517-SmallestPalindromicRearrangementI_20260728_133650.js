// Last updated: 28/07/2026, 13:36:50
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var smallestPalindrome = function (s) {
6    if (s.length == 1) return s;
7    let n = s.length;
8    let ch = new Array(26).fill(0)
9    let chcode = "a".charCodeAt(0)
10    let arr = new Array(s.length).fill("");
11    if (s.length % 2 == 0) {
12        for (let i = 0; i < n / 2; i++) {
13            ch[s[i].charCodeAt(0) - chcode]++
14        }
15    } else {
16        for (let i = 0; i < (n / 2) - 1; i++) {
17            ch[s[i].charCodeAt(0) - chcode]++
18        }
19        arr[Math.floor(n / 2)] = s[Math.floor(n / 2)]
20    }
21    let j = 0;
22
23    for (let i = 0; i < 26; i++) {
24        while (ch[i] > 0) {
25            let c = String.fromCharCode(chcode + i);
26            arr[j] = c;
27            arr[n - j - 1] = c;
28            ch[i]--;
29            j++;
30        }
31    }
32    return arr.join("")
33};