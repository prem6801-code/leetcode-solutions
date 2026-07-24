// Last updated: 24/07/2026, 23:52:14
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null
    invertTree(root.left);
    invertTree(root.right);
    let temp = root.right
    root.right = root.left
    root.left = temp;
    return root;
};