/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
   if(root == null) return 0;
   console.log("now at node: ", root.val);


   let left = 1 + maxDepth(root.left);
   let right = 1 + maxDepth(root.right);

   console.log("left: ", left);
   console.log("right: ", right);
   return Math.max(left, right);
    
};


let n1 = new TreeNode(3);
let n2 = new TreeNode(9);
let n3 = new TreeNode(20);
let n4 = new TreeNode(15);
let n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(maxDepth(n1))



