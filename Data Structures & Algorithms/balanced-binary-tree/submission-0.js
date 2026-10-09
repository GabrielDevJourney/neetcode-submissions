/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;

        const helper = (node) => {
            if (!node) return 0;

            const leftDepth = helper(node.left);
            const rightDepth = helper(node.right);

            isBalanced = isBalanced && Math.abs(leftDepth - rightDepth) <= 1;

            return 1 + Math.max(leftDepth, rightDepth);
        };

        helper(root);
        return isBalanced;
    }
}
