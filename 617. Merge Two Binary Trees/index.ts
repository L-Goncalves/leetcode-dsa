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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    /* rules: 5 + null = 5
       left + left = new left
       equal values are not sum
    */


        if(!root1 && !root2) return null;
        if(!root1) return root2;
        if(!root2) return root1;
    
        const root = new TreeNode(root1.val + root2.val);

        root.left = mergeTrees(root1 ? root1.left : null,   root2 ? root2.left : null)
        root.right = mergeTrees(root1 ? root1.right  : null,  root2 ? root2.right : null)
      

        return root;

};