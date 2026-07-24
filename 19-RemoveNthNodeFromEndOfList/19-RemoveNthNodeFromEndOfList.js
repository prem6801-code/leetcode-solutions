// Last updated: 24/07/2026, 23:55:23
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head == null) return null
    let count = 0
    let temp = head
    while (temp) {
        count++
        temp = temp.next
    }
    if (count == 1) return null
    let prev = null
    let itr = head
    count = count + 1 - n
    while (itr) {
        count--
        if (count == 0) {
            if (!prev) {
                head = head.next
                break;
            } else {
                prev.next = itr.next
                break;
            }
        }
        prev = itr
        itr = itr.next
    }
    return head;
};