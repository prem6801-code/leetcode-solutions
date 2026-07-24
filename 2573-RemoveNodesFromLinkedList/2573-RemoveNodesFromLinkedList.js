// Last updated: 24/07/2026, 23:48:05
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
var removeNodes = function (head) {
    // let temp = head;
    // let prev = null;
    // let arr 

    // while (temp && temp.next !== null) {
    //     if (temp.next.val > temp.val) {
    //         if (prev == null) {
    //             head = head.next;
    //         }else{
    //             prev.next=temp.next;
    //             temp=temp.next;
    //         }
    //     } else {
    //         if (prev) prev = prev.next;
    //         else prev = head;
    //         temp = temp.next;
    //     }
    // }

    // return head;
    const stack = [];
    temp = head;
    while (temp) {
        while (stack.length && stack[stack.length - 1].val < temp.val) {
            stack.pop()
        }
        stack.push(temp);
        temp = temp.next;
    }
    const stack2 = [];
    while (stack.length) {
        stack2.push(stack.pop());
    }
    let head1 = null;
    let curr = null;
    while (stack2.length) {
        if (!head1) {
            head1 = stack2.pop();
            curr = head1;
        }
        else {
            curr.next = stack2.pop();
            curr = curr.next;
        }
    }
    return head1;
};