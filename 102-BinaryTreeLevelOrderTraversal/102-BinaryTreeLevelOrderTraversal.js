// Last updated: 24/07/2026, 23:53:46
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
var levelOrder = function (root,) {
    // let res = []
    // let bfs = (root, level) => {
    //     if (root == null) return
    //     if (!res[level]) res[level] = [];
    //     res[level].push(root.val);
    //     bfs(root.left, level + 1)
    //     bfs(root.right, level + 1)
    // }
    // bfs(root, 0);
    // return res
    if (!root) return [];
    let q = [root];
    let result = [[root.val]];
    while (q.length) {
        let temp1 = [];
        let temp2 = [];
        for (let node of q) {
            if (node.left) {
                temp1.push(node.left);
                temp2.push(node.left.val);
            }
            if (node.right) {
                temp1.push(node.right);
                temp2.push(node.right.val);
            }
        }
        if (temp2.length) result.push(temp2);
        q = temp1;
    }
    return result;
};  