// Last updated: 16/11/2026, 23:58:46
1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var subsets = function (nums) {
6    let ans = [];
7    let res = [];
8    let findSubset = (i) => {
9        if (i >= nums.length) {
10            ans.push([...res]);
11            return;
12        }
13        res.push(nums[i]);
14        findSubset(i + 1);
15        res.pop()
16        findSubset(i + 1);
17        return;
18    }
19    findSubset(0)
20    return ans
21};