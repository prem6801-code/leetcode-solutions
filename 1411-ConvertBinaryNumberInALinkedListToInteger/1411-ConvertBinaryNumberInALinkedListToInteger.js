// Last updated: 24/07/2026, 23:49:20
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let temp = head;
    let digit = 0;
    while (temp) {
        digit = (digit << 1) | temp.val
        temp = temp.next
    }
    return digit;
};