// Last updated: 24/07/2026, 23:52:28
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head
    if (!head.next) return head.val == val ? null : head
    let temp = head
    let prev = null
    while (temp) {
        // console.log(temp)
        if (temp.val == val) {
            if (prev == null) {
                head = !temp.next ? null : temp.next
            } else {
                
                prev.next = prev.next.next;
            }
        } else {
            prev = temp
            // temp = temp.next;
        }
        temp = temp.next
    }

    return head
};