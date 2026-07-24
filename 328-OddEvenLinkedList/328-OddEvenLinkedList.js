// Last updated: 24/07/2026, 23:51:45
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
var oddEvenList = function (head) {
    if (!head) return null

    // let newList1 = new ListNode(head.val);
    // let newList2 = new ListNode(head.val);

    // let count = 0
    // let temp = head
    // let itr1 = newList1
    // let itr2 = newList2
    // while (temp) {
    //     if (count % 2 == 0) {
    //         itr1.next = new ListNode(temp.val)
    //         itr1 = itr1.next
    //     } else {
    //         itr2.next = new ListNode(temp.val)
    //         itr2 = itr2.next
    //     }
    //     count++
    //     temp = temp.next;
    // }
    // itr1.next = newList2.next
    // return newList1.next

    if (!head && !head.next) return head
    let oddHead = head
    let evenHead = head.next
    let temp = evenHead

    while (evenHead && evenHead.next) {
        oddHead.next = oddHead.next.next
        evenHead.next = evenHead.next.next
        oddHead = oddHead.next
        evenHead = evenHead.next
    }
    oddHead.next = temp
    return head
};