// Last updated: 24/07/2026, 23:47:47
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    let set = new Set([...nums])
    if (!head) return head
    if (!head.next) set.has(head.val) ? null : head

    let temp = head
    let prev = null

    while (temp) {
        if (set.has(temp.val)) {
            if (prev == null) {
                head = !temp.next ? null : temp.next
            } else {
                prev.next = prev.next.next
            }
        } else {
            prev = temp
        }
        temp = temp.next;
    }
    return head
};