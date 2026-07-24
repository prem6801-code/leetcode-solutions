// Last updated: 24/07/2026, 23:49:53
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let arr = 0;
    let arrs =[]
    let dfs = (node,data)=>{

        if(!node) return

        if(!node.left && !node.right){
            arr+=parseInt(data,2)
            arrs.push(data)
            return
        }
        if(node.left){
            dfs(node.left,data+node.left.val)
        }

        if(node.right){
            dfs(node.right,data+node.right.val)
        }
    }

    dfs(root,""+root.val)
    // console.log(arrs)
    return arr
};