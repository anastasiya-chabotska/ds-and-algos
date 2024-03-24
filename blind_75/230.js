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



var kthSmallest = function (root, k) {

    const stack = [];
    let cur = root;
    let n = 0;

   
    while (cur || stack) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        n++;
        if (n == k) return cur.val;
        cur = cur.right;


    }

};