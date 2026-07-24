// Last updated: 24/07/2026, 23:53:47
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let arr1 = "";
    let arr2 = ""
    let Inorder = (root, key) => {
        if (!root) {
            key ? arr1+="#" : arr2+="#"
            return
        }
        if (key) {
            arr1+=root.val
            Inorder(root.left, key)
            Inorder(root.right, key);
        } else {
            arr2+=root.val
            Inorder(root.right, key);
            Inorder(root.left, key)
        }
    }

    Inorder(root.left, true)
    Inorder(root.right, false)
    return arr1== arr2
};