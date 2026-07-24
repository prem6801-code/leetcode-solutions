// Last updated: 24/07/2026, 23:53:33
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let result = []
    let solve = (node, sum, res) => {
        if (!node) {
            return;
        }
        sum += node.val;
        // if ((sum < targetSum || sum > targetSum) && (!node.right && !node.left)) {
        //     return;
        // }
        res.push(node.val);
        if ((!node.right && !node.left) && sum == targetSum) {
            result.push([...res])
        }
        solve(node.left, sum, res);
        solve(node.right, sum, res);
        res.pop()
        return;
    }
    solve(root, 0, [])
    return result;
};