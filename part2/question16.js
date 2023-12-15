var levelOrder = function (root) {
    if (!root) return [];

    let res = [];

    let queue = [root];
    while (queue.length > 0) {
        let level = [];
        let levelSize = queue.length;
        while (levelSize > 0) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            levelSize--;
        }
        res.push(level);

    }
    return res;
};