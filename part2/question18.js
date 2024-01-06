var countNodes = function (root) {
    if (!root) return 0;
    let height = getTreeHeight(root);
    let upperLevelNodes = Math.pow(2, height) - 1;
    let left = 0, right = upperLevelNodes;
    while (left < right) {
        let midIdx = Math.ceil((left + right) / 2);
        if (nodeExists(midIdx, height, root)) {
            left = midIdx;
        } else {
            right = midIdx - 1;
        }
    }
    return upperLevelNodes + left + 1;
};

var getTreeHeight = function (node) {
    let height = 0;
    while (node.left !== null) {
        height++;
        node = node.left;
    }
    return height;
}

var nodeExists = function (index, height, node) {
    let counter = 0, left = 0, right = Math.pow(2, height) - 1;
    while (counter < height) {
        let mid = Math.ceil((left + right) / 2);
        if (index >= mid) {
            node = node.right;
            left = mid;
        } else {
            node = node.left;
            right = mid - 1;
        }
        counter++;
    }

    return node !== null;
}