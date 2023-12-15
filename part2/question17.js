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