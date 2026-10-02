// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;

        const copies = new Map();
        let pointer = head;

        while (pointer) {
            copies.set(pointer, new Node(pointer.val));
            pointer = pointer.next;
        }

        pointer = head;

        while (pointer) {
            const copy = copies.get(pointer);

            copy.next = pointer.next
                ? copies.get(pointer.next)
                : null;

            copy.random = pointer.random
                ? copies.get(pointer.random)
                : null;

            pointer = pointer.next;
        }

        return copies.get(head);
    }
}
