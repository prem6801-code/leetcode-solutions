// Last updated: 24/07/2026, 23:53:38
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
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) return 0
    if (!root.right && !root.left) return 1
    let leftSum = Infinity
    let rightSum = Infinity
    if (root.left) leftSum = 1 + minDepth(root.left)
    if (root.right) rightSum = 1 + minDepth(root.right)
    return Math.min(leftSum, rightSum)
};