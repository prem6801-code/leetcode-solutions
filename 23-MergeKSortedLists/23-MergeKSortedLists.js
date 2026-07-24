// Last updated: 24/07/2026, 23:55:12
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if(lists.length == 0) return null
    let arr = []
    for (head of lists) {
        let temp = head;
        while (temp) {
            arr.push(temp.val)
            temp = temp.next
        }
    }

    // console.log(map, set, arr)
    if(arr.length == 0) return null
    arr.sort((a, b) => a - b)
    let newHead = new ListNode(arr[0])
    let temp = newHead
    for (let i = 1; i < arr.length; i++) {
        temp.next = new ListNode(arr[i])
        temp = temp.next
    }
    
    return newHead
};