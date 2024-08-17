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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {

    // Is the current node null?
   if(!original) return null;

   // does the current node meet the target?
   if(original === target){
        return cloned;
   }

   let LResult = getTargetCopy(original.left, cloned.left, target);
   if(LResult){
     return LResult;
   }

   return getTargetCopy(original.right, cloned.right, target);
};