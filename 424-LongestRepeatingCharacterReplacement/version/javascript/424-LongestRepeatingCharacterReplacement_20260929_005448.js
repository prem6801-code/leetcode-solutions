// Last updated: 29/09/2026, 00:54:48
1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {number}
5 */
6var characterReplacement = function (s, k) {
7    let arr = new Array(26).fill(0);
8    let maxFreq = 0
9    let maxLength = 0
10    let j = 0;
11    for (let i = 0; i < s.length; i++) {
12        let charCode = s[i].charCodeAt(0) - 'A'.charCodeAt(0);
13        arr[charCode]++;
14        maxFreq = Math.max(maxFreq, arr[charCode])
15        if ((i - j + 1) - maxFreq > k) {
16            arr[s[j].charCodeAt(0) - "A".charCodeAt(0)]--;
17            j++
18        }
19        maxLength = Math.max(i - j + 1, maxLength)
20    }
21    return maxLength
22};