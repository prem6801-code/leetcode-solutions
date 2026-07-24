// Last updated: 24/07/2026, 23:54:01
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let temp=head;
    let newNode=head;

    while (temp !== null){
        if(temp.val !== newNode.val){
            newNode.next = temp;
            newNode = temp;
        }

         if(temp.next == null){
            newNode.next = null
        }
        temp=temp.next
    } 

    return head;
};