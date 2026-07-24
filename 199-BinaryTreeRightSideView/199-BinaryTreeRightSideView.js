// Last updated: 24/07/2026, 23:52:33
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
var rightSideView = function (root) {
    if (!root) return []
    let q = [root]
    let res = []
    while (q.length) {
        let temp1 = []
        let temp2 = []
        for (node of q) {
            temp1.push(node.val)
            if (node.left) temp2.push(node.left)
            if (node.right) temp2.push(node.right)
        }
        q = temp2
        res.push(temp1)
    }
    return res.map((item) => item[item.length - 1])
};