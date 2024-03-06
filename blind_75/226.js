//Time: O(n) Space: O(w)
var invertTree1 = function (root) {
    if (root == null) return null;
    const queue = [root];
    while (queue.length) {
        let curNode = queue.shift();
        let temp = curNode.left;
        curNode.left = curNode.right;
        curNode.right = temp;
        if (curNode.left) queue.push(curNode.left);
        if (curNode.right) queue.push(curNode.right);

    }
    return root;
}

//Time: O(n) Space: O(n)
var invertTree = function (root) {
    if (root == null) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.right);
    invertTree(root.left);


    return root;
}