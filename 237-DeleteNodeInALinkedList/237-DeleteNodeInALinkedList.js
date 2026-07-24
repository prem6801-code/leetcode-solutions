// Last updated: 24/07/2026, 23:52:06
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} D1o not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    let temp = node
    let prev = null
    while (temp.next) {
        prev = temp
        temp.val = temp.next.val
        temp = temp.next;
    }
    prev.next = null
};