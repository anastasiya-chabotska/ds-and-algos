/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
Lowest means deepest, not the smallest value wise
If we check and the nodes are in different subtrees, then we found the lca
If we check and their values are smaller, that means we need to check the left subtree
If they are higher, we check right subtree
*/

//O(logn) O(1)
var lowestCommonAncestor = function(root, p, q) {
      
    let node = root;
    while(node){
    //if p > node and q > node check the right subtree
    if(p.val > node.val && q.val > node.val) node = node.right;
    //if p < node and q < node check left subtree
    else if(p.val < node.val && q.val < node.val) node = node.left;
    //else return node
    else return node;
    }
};