// Last updated: 24/07/2026, 23:53:41
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []
    let res = []
    let q = [root]

    while (q.length) {
        let temp1 = []
        let temp2 = []

        for (node of q) {
            temp2.push(node.val)
            if (node.left) {
                temp1.push(node.left)
            }
            if (node.right) {
                temp1.push(node.right)
            }
        }
        res.push(temp2)
        q = temp1
    }

    return res.reverse();
};