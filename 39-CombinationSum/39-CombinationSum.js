// Last updated: 24/07/2026, 23:55:00
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, targets) {
    let result = [];
    let helper = (i, res, target) => {
        if (i >= candidates.length || target < 0) return;
        if (target == 0) {
            result.push([...res])
            return;
        }
        res.push(candidates[i])
        helper(i, res, target - candidates[i]);
        res.pop();
        helper(i + 1, res, target);
        return;
    }
    helper(0, [], targets);
    return result;
};