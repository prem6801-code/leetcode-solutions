// Last updated: 24/07/2026, 23:53:09
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    ArrayList<Integer> tree = new ArrayList<>();
    public List<Integer> preorderTraversal(TreeNode root) {
        preOrder(root);
        return tree;
    }

    public void preOrder(TreeNode root){
         if(root==null)
            {
                return;
            }
         
                tree.add(root.val);
                preorderTraversal(root.left);
                preorderTraversal(root.right);
            
    }
    
}