// Last updated: 25/08/2026, 23:56:22
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
14    let sum = 0;
15    let findLeafSums = (node, val) => {
16        if (!node) {
17            return;
18        }
19        val += node.val
20        if (!node.left && !node.right) {
21            sum += Number(val)
22            return;
23        }
24
25        findLeafSums(node.left, val)
26        findLeafSums(node.right, val)
27    }
28    findLeafSums(root, "")
29    return sum
30};