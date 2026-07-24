// Last updated: 24/07/2026, 23:55:20
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let temp = new ListNode()
    let current = temp;
    let p1 = list1;
    let p2 = list2;
    if (p1 !== null && p2 !== null) {
        while (p1 !== null && p2 !== null) {
            if (p1.val < p2.val) {
                current.next = new ListNode(p1.val);
                current = current.next;
                p1 = p1.next;
            } else {
                current.next = new ListNode(p2.val);
                current = current.next;
                p2 = p2.next;
            }
        }

        if (p1 !== null) {
            current.next = p1;
        } else if (p2 !== null) {
            current.next = p2;
        }
        return temp.next;
    }

    return p1 === null ? p2 : p1;
};