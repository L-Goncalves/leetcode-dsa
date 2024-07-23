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
// Big O(n) because of the recursion
// Space: O(n) because of height of tree.
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if(!root) return 0;

    if(root.val > high){
        return rangeSumBST(root.left, low, high);
    }
    else if(root.val < low){
        return rangeSumBST(root.right, low, high);
    }
    else{
        return rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high) + root.val;
    }

    return 0;

};