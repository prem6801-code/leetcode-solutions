// Last updated: 24/07/2026, 23:51:30
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0;
    let helper = (root, Sum) => {
        if (!root) {
            return 0;
        }
        let sum = Sum - root.val;
        return (sum == 0 ? 1 : 0) + helper(root.left, sum) + helper(root.right, sum)
    }

    return helper(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};