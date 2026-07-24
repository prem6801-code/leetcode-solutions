// Last updated: 24/07/2026, 23:50:46
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) return []
    let res = []
    let q = [root]

    while (q.length) {
        let temp = []
        let av = 0
        for (node of q) {
            av += node.val
            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right)
        }
        res.push(parseFloat((av / q.length).toFixed(5)))
        q = temp;
    }

    return res
};