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
 * @return {TreeNode}
 */


//DFS
//Time: O(n) Space: O(n)
var invertTree = function (root) {

    //base: root is null, return root
    if (root == null) return root;

    //swap left and right nodes
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    //call invert on left and right subtrees
    if (root.left) invertTree(root.left)
    if (root.right) invertTree(root.right)
    return root;
};

let n1 = new TreeNode(4)
let n2 = new TreeNode(2)
let n3 = new TreeNode(7)
let n4 = new TreeNode(1)
let n5 = new TreeNode(3)
let n6 = new TreeNode(6)
let n7 = new TreeNode(9)

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;


console.log(JSON.stringify(n1))
console.log(JSON.stringify(invertTree(n1)))