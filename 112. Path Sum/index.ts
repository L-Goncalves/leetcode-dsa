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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(!root) return false;

    const stack = [{ node: root, currentSum: root.val }];
    while(stack.length > 0){
        const { node, currentSum } = stack.pop(); // gets current node and its sum

        if(!node.left && !node.right && currentSum === targetSum){ // if its a leaf and it's equal to our sum
            return true;
        }
        // else we push to the stack with the node val + next direction value
        if (node.right) stack.push({ node: node.right, currentSum: currentSum + node.right.val });
        if(node.left) stack.push({ node: node.left, currentSum: currentSum + node.left.val });
    }
    return false;
};