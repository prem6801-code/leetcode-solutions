// Last updated: 24/07/2026, 23:52:53
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let temp = headA
    let set = new Set();
    if( !headA.next && !headB.next) {
        if(headA==headB) return headA
    }
    while (temp) {
        set.add(temp)
        temp = temp.next
    }
    temp = headB
    // console.log(set)
    while (temp) {
        if (set.has(temp)) return temp
        temp = temp.next
    }
    return null
};