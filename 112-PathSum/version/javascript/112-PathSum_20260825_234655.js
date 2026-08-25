// Last updated: 25/08/2026, 23:46:55
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @param {number} targetSum
12 * @return {boolean}
13 */
14var hasPathSum = function (root, targetSum) {
15    let findNode = (node, sum) => {
16        if (!node) return false
17        sum += node.val
18        if (sum == targetSum && (!node.left && !node.right)) {
19            return true;
20        }
21        return findNode(node.right, sum) || findNode(node.left, sum)
22    }
23    return findNode(root, 0)
24};