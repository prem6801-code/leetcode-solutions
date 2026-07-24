// Last updated: 24/07/2026, 23:49:59
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let alp = "abcdefghijklmnopqrstuvwxyz"

    let checksmallstr = (str1, str2) => {
        return str1 < str2 ? str1 : str2;
    }

    const findstr = (root, sum) => {
        if (root == null) return String.fromCharCode(97 + 26) + sum
        sum = alp[root.val] + sum;
        if (root.left == null && root.right == null) return sum;
        // let case1 = String.fromCharCode(97 + 26);
        // let case2 = String.fromCharCode(97 + 26);
        // if (root.left) case1 = findstr(root.left, sum);
        // if (root.right) case2 = findstr(root.right, sum);
        // return checksmallstr(case1, case2)
        return checksmallstr(findstr(root.left, sum), findstr(root.right, sum))
    }
    return findstr(root, "")

};