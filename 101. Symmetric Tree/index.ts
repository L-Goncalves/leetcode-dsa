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
/* Why does this work? 
Well because in this recursive DFS we at first check if left and right are equal and then we keep swapping right nodes and left nodes making it return true at some point in time.

I'll need to later on take a look again at this problem and solution to understand better.

Maybe master the DFS algorithm recursively?


*/
function isSymmetric(root: TreeNode | null): boolean {
    return DFS(root.left, root.right);

};

function DFS(left, right){
    if(!left && !right){
        return true;
    }
    if(!left || !right){
        return false;
    }

    return (left.val == right.val && DFS(left.left, right.right) && DFS(left.right, right.left));
}