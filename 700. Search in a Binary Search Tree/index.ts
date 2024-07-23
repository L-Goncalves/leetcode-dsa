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



function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    // Step 1: if tree is null we return null as question asks us
    if(!root) return null;

    let currentNode = root;
    // We loop through the BST while we have node
    while(currentNode){
        if(val > currentNode.val){
            // If val is higher we set Node to go to right
            currentNode = currentNode.right;
        }
        else if(val < currentNode.val){
            // if val lower we set Node to go to left
             currentNode = currentNode.left;
        }
        else if(val === currentNode.val){
            // If equal we just return the node
            return currentNode;
        }
    }
    // If not found return null;
    return null;
};