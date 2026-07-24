// Last updated: 24/07/2026, 23:52:01
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let paths = [];
    let path = []
    checkPaths = (root) => {
        if (root == null) return
        if (!root.left && !root.right) {
            let str = [...path,root.val].join("->");
            paths.push(str)
            return;
        }
        path.push(root.val)
        checkPaths(root.left);
        checkPaths(root.right);
        path.pop()
    }
    checkPaths(root);
    return paths;
};