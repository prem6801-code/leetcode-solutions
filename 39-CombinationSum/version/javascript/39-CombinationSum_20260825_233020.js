// Last updated: 25/08/2026, 23:30:20
1/**
2 * @param {number[]} candidates
3 * @param {number} target
4 * @return {number[][]}
5 */
6var combinationSum = function (candidates, target) {
7    let result = [];
8    let res = [];
9    let findCombinations = (i, sum) => {
10        if (sum === target) {
11            result.push([...res])
12            return;
13        }
14        if (i >= candidates.length || sum > target) {
15            return;
16        }
17        res.push(candidates[i]);
18        findCombinations(i, sum + candidates[i])
19        res.pop();
20        findCombinations(i + 1, sum)
21    }
22    findCombinations(0, 0);
23    return result;
24};