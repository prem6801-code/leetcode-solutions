// Last updated: 24/07/2026, 23:55:11
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
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let temp = head;
    while (temp && temp.next) {
        let curr = temp.val
        temp.val = temp.next.val;
        temp.next.val = curr

        temp = temp.next.next;
    }
    return head
};