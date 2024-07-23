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

// @ts-nocheck
// we can check recursively to verify if p and q are equal, if they are we continue to check if not we return false
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // If both nodes are null, they are the same
   if (!p && !q) return true;

   // If one node is null but the other isn't, they are not the same
   if (!p || !q) return false;

   let valuesSame = false;
 
   valuesSame = p.val === q.val;
   const isLeftSame = isSameTree(p.left, q.left);
   const isRightSame = isSameTree(p.right, q.right);

   return valuesSame && isLeftSame && isRightSame;;
};