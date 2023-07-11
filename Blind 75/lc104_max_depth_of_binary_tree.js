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

//Time: O(n) Space: O(n) - if the tree is unbalanced im worst case
//DFS
var maxDepth = function(root) {
    
   if(root == null) return 0;
   console.log("now at node: ", root.val);


   let left = 1 + maxDepth(root.left);
   let right = 1 + maxDepth(root.right);

   console.log("left: ", left);
   console.log("right: ", right);
   return Math.max(left, right);
    
};


//Iterative BFS 
//BFS often involves queue
var maxDepth2 = function(root) {
    
    if(root == null) return 0;

    let queue = [root];
    let level = 0;

    while(queue.length > 0){

        for(let i = 0; i<queue.length; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        level++;

    }

    return level;
   
     
 };


//Iterative DFS 
//here use stack
var maxDepth3 = function(root) {
    
    if(root == null) return 0
    let stack = [[root, 1]];
    let result = 1;

    while(stack.length > 0){
        let node = stack.pop();
        // console.log(node[0].val)
        result = Math.max(node[1], result)
        if(node[0].right) stack.push([node[0].right, 1 + node[1]])
        if(node[0].left) stack.push([node[0].left, 1 + node[1]])
    }

    return result;
     
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

console.log(maxDepth3(n1))



