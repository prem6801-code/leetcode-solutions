// Last updated: 25/08/2026, 23:57:54
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
11 * @return {number}
12 */
13var sumNumbers = function (root) {
14    let findLeafSums = (node, val) => {
15        if (!node) {
16            return 0
17        }
18        val += node.val
19        if (!node.left && !node.right) {
20            return Number(val)
21        }
22
23        return findLeafSums(node.left, val) + findLeafSums(node.right, val)
24    }
25    return findLeafSums(root, "")
26};