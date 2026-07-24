// Last updated: 24/07/2026, 23:54:52
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // let result = [];
    // let res = [];
    // candidates.sort((a, b) => a - b)
    // let set = new Set();
    // let helper = (i, sum) => {
    //     if (sum == 0) {
    //         let temp = [...res].sort((a, b) => a - b).join(",")
    //         if (!set.has(temp)) result.push([...res]);
    //         set.add(temp)
    //         return;
    //     }
    //     if (i >= candidates.length || sum < 0) {
    //         return;
    //     }
    //     res.push(candidates[i])
    //     helper(i + 1, sum - candidates[i]);
    //     res.pop();
    //     helper(i + 1, sum);
    //     return
    // }
    // helper(0, target);
    // return result;

    let result = [];
    let combination = [];
    candidates.sort((a, b) => a - b);
    let helper = (index, sum) => {
        if (sum == 0) {
            result.push([...combination]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] == candidates[i - 1]) {
                continue;
            }
            if (candidates[i] > sum) break;
            combination.push(candidates[i])
            helper(i + 1, sum - candidates[i]);
            combination.pop();
        }
    }
    helper(0, target)
    return result;
};