// Last updated: 17/11/2026, 23:21:10
1/**
2 * @param {number[]} arr
3 * @return {number}
4 */
5var numOfSubarrays = function (arr) {
6    let mod = (10 ** 9) + 7
7    let oddct = 0;
8    let evenct = 1;
9    let res = 0;
10    let sum = 0;
11    for (let i = 0; i < arr.length; i++) {
12        sum += arr[i];
13        if (sum % 2 == 0) {
14            res = (res + oddct) % mod
15            evenct++
16        } else {
17            res = (res + evenct) % mod
18            oddct++
19        }
20    }
21    return res
22};