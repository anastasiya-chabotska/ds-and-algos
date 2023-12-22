var isValidBST = function (node, greater = -Infinity, less = +Infinity) {
    if (!node) return true;

    if (node.val > greater && node.val < less) {
        return isValidBST(node.left, greater, node.val) && isValidBST(node.right, node.val, less)
    }
    else return false;
};