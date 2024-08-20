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

function preorderTraversal(root: TreeNode | null): number[] {
    // the pattern for DFS i guess is like that
    if(!root) return [];
    // we initialize an empty strucuture to hold the value we need to return later on.
    const result = []
    const stack = [root];

    while(stack.length > 0){
        const node = stack.pop();
    
        if(node.right){
           stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }   
       
        result.push(node.val);
    }

    return result;
};