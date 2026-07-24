// Last updated: 24/07/2026, 23:54:30
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head || !head.next) return head
    let ct = 0
    let temp = head
    let tail
    while (temp) {
        ct++
        if (!temp.next) tail = temp
        temp = temp.next
    }

    let rev = ct - (k % ct) - 1

    // console.log(rev)
    temp = head
    let temp2 = null
    while (rev) {
        temp = temp.next
        rev--
    }
    temp2 = temp.next
    temp.next = null
    if (!temp2) return head
    tail.next = head
    return temp2
};