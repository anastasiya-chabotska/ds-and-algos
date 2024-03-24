var kthSmallest = function (root, k) {
    const arr = [];
    dfs(root, arr);
    return arr[k - 1];

};

var dfs = function (root, arr) {
    if (!root) return;
    else {
        dfs(root.left, arr);
        arr.push(root.val);
        dfs(root.right, arr);

    }
}