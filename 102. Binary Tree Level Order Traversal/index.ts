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
// BFS
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue = [root];
    const result = []; 
    // we setup a queue to traverse through the tree
    while (queue.length > 0) {
        const level_items = [];    // we setup a var to hold the items of the current level;
        const level_size = queue.length; // Capture the current level size

        // we go through the current level size
        for (let i = 0; i < level_size; i++) {
            // current node gets shifted
            const node = queue.shift();

            // we push into level items
            level_items.push(node.val);

            if (node.left) {
                queue.push(node.left); // if there is a left of current node we add it to the queue for this iteration
            }

            if (node.right) {   // same thing for right node
                queue.push(node.right);
            }
        }
        result.push(level_items); // Push level_items after processing the entire level
    }

    return result;
}
