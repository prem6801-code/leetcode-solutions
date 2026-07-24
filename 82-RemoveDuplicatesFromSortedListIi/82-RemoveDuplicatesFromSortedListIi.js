// Last updated: 24/07/2026, 23:53:59
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
var deleteDuplicates = function (head) {
    if (!head) return null;
    let temp = head
    let prev = null;
    while (temp && temp.next) {
        if (temp.val == temp.next.val) {
            let val = temp.val;
            while (temp && temp.val == val) {
                temp = temp.next
            }
            prev ? prev.next = temp : head = temp 
        } else {
            prev = temp;
            temp = temp.next;
        }
    }

    return head
};