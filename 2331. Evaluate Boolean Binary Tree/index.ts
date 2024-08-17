
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


// AND = 3
// OR = 2
// TRUE = 1
// FALSE = 0
function evaluateTree(root: TreeNode | null): boolean {
    if(!root) return true;

    if(!root.left && !root.right){
        if(root.val == 0) { 
            return false;
        }
        else{
            return true
        }
    }

    if(root.val == 2){
          return evaluateTree(root.left) || evaluateTree(root.right);
    } else{
         return evaluateTree(root.left) && evaluateTree(root.right);
    }

  
};