// Last updated: 18/08/2026, 23:51:50
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var largestInteger = function (nums, k) {
7    let map = {};
8    let min = -1
9    for (let i = 0; i <= nums.length - k; i++) {
10        let set = new Set();
11        for (let j = i; j < nums.length; j++) {
12            if ((j - i) + 1 > k) {
13                break;
14            }
15            if (!set.has(nums[j])) map[nums[j]] = (map[nums[j]] || 0) + 1
16            set.add(nums[j])
17        }
18    }
19    // console.log(map)
20    let arr = Object.keys(map).filter((item) => map[item] < 2).sort((a, b) => {
21        if (map[a] == map[b]) {
22            return parseInt(b) - parseInt(a)
23        } else {
24            return map[a] - map[b]
25        }
26    })
27    // console.log(arr)
28    return arr.length == 0 ? -1 : parseInt(arr[0])
29};