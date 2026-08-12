// Last updated: 13/08/2026, 01:11:12
1/**
2 * @param {number[]} parent
3 * @param {number[]} nums
4 * @return {number}
5 */
6var weightedSum = function (parent, nums) {
7    let adjList = Array.from({ length: parent.length }, () => [])
8    for (let i = 1; i < parent.length; i++) {
9        adjList[parent[i]].push(i)
10    }
11    let maxdepth = 0
12    let findDepth = (node, depth) => {
13        maxdepth = Math.max(maxdepth, depth)
14        for (let child of adjList[node]) {
15            findDepth(child, depth + 1)
16        }
17    }
18    findDepth(0, 1)
19    let weight = 0
20    let findWeight = (node, depth) => {
21        // console.log(nums[node])
22        weight += (nums[node] * (maxdepth - depth + 1))
23        for (let child of adjList[node]) {
24            findWeight(child, depth + 1)
25        }
26    }
27    findWeight(0, 1)
28    return weight;
29};