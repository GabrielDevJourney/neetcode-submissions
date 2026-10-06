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
    getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }

        return curr;
    }
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            const kth = this.getKth(groupPrev, k);
            if (!kth) break;

            const groupNext = kth.next;
            const groupFirst = groupPrev.next

            let current = groupPrev.next;
            let prev = kth.next;
            let next;

            while (current !== groupNext) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            groupPrev.next = prev;
            groupPrev = groupFirst;
        }

        return dummy.next;
    }
}
