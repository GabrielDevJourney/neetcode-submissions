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
        const map = new Map();
        map.set(null, null);
        let pointer = head;

        while (pointer) {
            map.set(pointer, new Node(pointer.val));
            pointer = pointer.next;
        }

        pointer = head;
        while (pointer) {
            const copy = map.get(pointer);
            copy.next = map.get(pointer.next);
            copy.random = map.get(pointer.random);
            pointer = pointer.next;
        }

        return map.get(head);
    }
}
