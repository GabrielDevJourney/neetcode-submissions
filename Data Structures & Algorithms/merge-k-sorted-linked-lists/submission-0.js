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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        const minHeap = new MinPriorityQueue((x) => x.val);

        for (const list of lists) {
            if (list) minHeap.enqueue(list);
        }
        const dummy = new ListNode(0);
        let tail = dummy;

        while (!minHeap.isEmpty()) {
            const node = minHeap.dequeue();
            tail.next = node;
            tail = tail.next;
            if (node.next) minHeap.enqueue(node.next);
        }

        return dummy.next;
    }
}
