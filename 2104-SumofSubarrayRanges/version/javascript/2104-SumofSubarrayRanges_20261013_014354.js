// Last updated: 13/10/2026, 01:43:54
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var subArrayRanges = function (arr) {
6    let mod = (10 ** 9) + 7
7    let ns = new Array(arr.length).fill(arr.length)
8    let ps = new Array(arr.length).fill(-1)
9
10    let nl = new Array(arr.length).fill(arr.length)
11    let pl = new Array(arr.length).fill(-1)
12
13    let stack = [];
14    let nse = () => {
15        for (let i = 0; i < arr.length; i++) {
16            while (arr[i] <= arr[stack[stack.length - 1]]) {
17                ns[stack.pop()] = i
18            }
19            stack.push(i)
20        }
21    }
22
23    let pse = () => {
24        for (let i = arr.length - 1; i >= 0; i--) {
25            while (arr[i] < arr[stack[stack.length - 1]]) {
26                ps[stack.pop()] = i
27            }
28            stack.push(i)
29        }
30    }
31
32    let nge = () => {
33        for (let i = 0; i < arr.length; i++) {
34            while (arr[i] >= arr[stack[stack.length - 1]]) {
35                nl[stack.pop()] = i
36            }
37            stack.push(i)
38        }
39    }
40
41    let pge = () => {
42        for (let i = arr.length - 1; i >= 0; i--) {
43            while (arr[i] > arr[stack[stack.length - 1]]) {
44                pl[stack.pop()] = i
45            }
46            stack.push(i)
47        }
48    }
49
50    nse()
51    stack = []
52    pse()
53    stack = []
54    pge()
55    stack = []
56    nge()
57    let largest = 0
58    let smallest = 0
59    for (let i = 0; i < arr.length; i++) {
60        let count = ((ns[i] - i) * (i - ps[i]))
61        let contribution = (count * (arr[i]))
62        smallest = (smallest + contribution)
63    }
64
65    for (let i = 0; i < arr.length; i++) {
66        let count = ((nl[i] - i) * (i - pl[i]))
67        let contribution = (count * (arr[i] ))
68        largest = (largest + contribution)
69    }
70    // console.log(pl, nl)
71    return largest - smallest
72};