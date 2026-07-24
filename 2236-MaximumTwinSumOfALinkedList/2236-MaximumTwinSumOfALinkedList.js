// Last updated: 24/07/2026, 23:48:26
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
var pairSum = function (head) {
    let reverse = (head) => {
        if (!head || !head.next) return head;
        let prev = null;
        let curr = head;
        let next = curr.next;

        while (next) {
            curr.next = prev;
            prev = curr;
            curr = next;
            next = next.next
        }
        curr.next = prev
        return curr;
    }
    let slow = head;
    let fast = head;
    let prev = null;
    if (!head.next) return null
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    let part1 = head;
    let part2 = reverse(slow);

    let max = 0;
    while (part1 && part2) {
        max = Math.max(part1.val + part2.val, max)
        part1 = part1.next;
        part2 = part2.next;
    }
    return max
};