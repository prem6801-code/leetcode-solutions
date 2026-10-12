// Last updated: 13/10/2026, 00:49:58
1/**
2 * @param {number[]} arr
3 * @return {number}
4 */
5var sumSubarrayMins = function (arr) {
6    let mod = (10 ** 9) + 7
7    let ns = new Array(arr.length).fill(arr.length)
8    let ps = new Array(arr.length).fill(-1)
9    let stack = [];
10    let nse = () => {
11        for (let i = 0; i < arr.length; i++) {
12            while (arr[i] <= arr[stack[stack.length - 1]]) {
13                ns[stack.pop()] = i
14            }
15            stack.push(i)
16        }
17    }
18    stack = []
19    let pse = () => {
20        for (let i = arr.length - 1; i >= 0; i--) {
21            while (arr[i] < arr[stack[stack.length - 1]]) {
22                ps[stack.pop()] = i
23            }
24            stack.push(i)
25        }
26    }
27    nse()
28    pse()
29    // console.log(ns, ps)
30    let ans = 0
31    for (let i = 0; i < arr.length; i++) {
32        let count = ((ns[i] - i) * (i - ps[i])) % mod;
33        let contribution = (count * (arr[i] % mod)) % mod;
34        ans = (ans + contribution) % mod;
35    }
36    return ans
37};