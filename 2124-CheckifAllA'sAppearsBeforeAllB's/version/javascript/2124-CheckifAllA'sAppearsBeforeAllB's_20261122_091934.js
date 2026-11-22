// Last updated: 22/11/2026, 09:19:34
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var checkString = function (s) {
6    let bidx = false;
7    for (let i = 0; i < s.length; i++) {
8        if (s[i] == "a" && bidx) {
9            return false
10        }
11
12        if (s[i] == "b") bidx = true
13    }
14    return true;
15};