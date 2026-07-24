// Last updated: 24/07/2026, 23:54:08
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode currNode = head;

        while(currNode!=null&&currNode.next != null){
            if(currNode.val == currNode.next.val){
                currNode.next=currNode.next.next;
            }else{
                currNode=currNode.next;
            }  
        }
        return head;
    }
}