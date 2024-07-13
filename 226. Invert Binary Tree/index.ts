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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root == null) return null;

    const stack = [root];


    while(stack.length){
        const n = stack.pop();
        if(n != null){
            const tmpRight = n.right;
            const tmpLeft = n.left;
            n.left = tmpRight;
            n.right = tmpLeft;
            // @ts-ignore
            stack.push(n.left, n.right);
        }
    }


    return root;

};