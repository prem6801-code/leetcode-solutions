// Last updated: 24/07/2026, 23:53:44
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
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let res = [[root.val]]
    let que = [root]
    let level = 1
    let bfs = (res,level,que) => {
        while (que.length) {
            let temp1 = []
            let temp2 = []
            for (node of que) {
                if (node.left) {
                    temp1.push(node.left);
                    temp2.push(node.left.val);
                }

                if (node.right) {
                    temp1.push(node.right);
                    temp2.push(node.right.val);
                }
            }
            que = temp1;
            if (temp2.length)
                level % 2 == 1 ? res.push(temp2.reverse()) : res.push(temp2)
            level++;
        }
        return res
    }
    
    return bfs(res,level,que)
};