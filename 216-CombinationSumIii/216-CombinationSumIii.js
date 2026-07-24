// Last updated: 24/07/2026, 23:52:18
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let temp = [];

    let helper = (sum, i) => {
        if (sum == 0 && temp.length > k - 1) {
            res.push([...temp]);
            return;
        }

        for (let j = i + 1; j <= 9; j++) {
            if (temp.length > k - 1) break;
            if (sum < 0) break;
            temp.push(j);
            helper(sum - j, j)
            temp.pop();
        }

        return
    }

    helper(n, 0)
    return res;
};