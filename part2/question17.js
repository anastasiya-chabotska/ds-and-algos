var rightSideView = function (root) {

    if (!root) return [];

    let res = [];
    let queue = [root];
    while (queue.length) {
        let levelSize = queue.length;
        let curNode;
        while (levelSize > 0) {
            curNode = queue.shift();
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
            levelSize--;
        }
        res.push(curNode.val);
    }
    return res;

};

//dfs solution
var rightSideView = function (node, level = 0, res = []) {
    if (!node) return res;
    if (res[level] == undefined) res.push(node.val);
    if (node.right) rightSideView(node.right, level + 1, res);
    if (node.left) rightSideView(node.left, level + 1, res);
    return res;


};