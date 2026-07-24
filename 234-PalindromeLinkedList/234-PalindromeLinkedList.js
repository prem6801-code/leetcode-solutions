// Last updated: 24/07/2026, 23:52:08
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let temp=head;
        let str1="";
        let str2="";
        
        if(head==null){
            return false;
        }
        
        while (temp !== null ){
            str1+=temp.val;
            str2=temp.val+str2
            temp=temp.next;
        }
        return str1===str2 ? true : false
};