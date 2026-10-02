/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = { val: 0, next: null };
        let tail = dummy;
        let carry = 0;
        while (l1 !== null || l2 !== null || carry !== 0) {
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            let sumNum = val1 + val2 + carry;
            const newNode = new ListNode(sumNum % 10);
            carry = Math.floor(sumNum / 10);
            tail.next = newNode;
            tail = tail.next;
            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }
        return dummy.next;
    }
}
