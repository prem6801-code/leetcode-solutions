// Last updated: 24/07/2026, 23:53:07
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            let start = head;
            while(start !== fast){
                start = start.next;
                fast = fast.next;
            }
            return start
        }
    }
    return null
};