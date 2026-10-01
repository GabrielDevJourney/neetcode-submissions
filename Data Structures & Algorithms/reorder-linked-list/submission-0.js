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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let back = slow.next;
        slow.next = null;

        let prev = null;
        let current = back;

        while (current !== null) {
            let next = current.next;

            current.next = prev;
            prev = current;
            current = next;
        }

        back = prev;

        let front = head;

        while (back !== null) {
            let frontNext = front.next;
            let backNext = back.next;

            front.next = back;
            back.next = frontNext;

            front = frontNext;
            back = backNext;
        }
    }
}
