// @ts-nocheck

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Breadth First Search (Always require a queue?)
// We're starting to pick up some patterns yay!
// I assume time complexity of this is O(n) because BFS is usually just O(n)
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const queue = [root];

    const result = [];

    while (queue.length > 0) {
        let level_items = [];    // we setup a var to hold the items of the current level;
        const level_size = queue.length; // Capture the current level size

        // Why do we need a inner loop?
        // Because at this point in time we need to run through the nodes
        for (let i = 0; i < level_size; i++) {
            const node = queue.shift();
            level_items.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

        }
        // before pushing to the result we need to verify if result is odd?
        // Why this works?
        // Because at second iteration result will still hold the values of first iteration so result.length % 2 can be checked as a condition to check if is odd.
        level_items = result.length % 2 === 1 ? level_items.reverse() : level_items;
        result.push(level_items);

    }

    return result;
};