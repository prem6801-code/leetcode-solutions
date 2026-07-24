// Last updated: 24/07/2026, 23:53:40
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    const dfs = (root) => {
        if (!root) return 0;
        const left = dfs(root.left)
        if (left === -1) return -1
        const right = dfs(root.right)
        if (right === -1) return -1
        if (Math.abs(right - left) > 1) return -1
        return 1 + Math.max(right, left)
    }
    return dfs(root) !== -1;
};