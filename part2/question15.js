var maxDepth = function (root) {

    return dfs(root, 0);
    


};

var dfs = function(node, count){
    if(!node) return count;
    count++;
    return Math.max(dfs(node.left, count), dfs(node.right, count));
}










var maxDepth2 = function (root) {

    if (!root) return 0;
    if (!root.right && !root.left) return 1;
    let max = 0;
    let stack = [root];
    let path = 1;
    while (stack.length > 0) {
        let curNode = stack.pop();
        path++;
        if (!curNode.left && !curNode.right) {
            console.log("node val ", curNode.val)
            max = Math.max(max, path);
            path = stack.length;
            console.log("new path: ", path);
        }
        if (curNode.right) stack.push(curNode.right);
        if (curNode.left) stack.push(curNode.left);
    }
    return max;


};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.right = node6;

console.log(maxDepth(node1));