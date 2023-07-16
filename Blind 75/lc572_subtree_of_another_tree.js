/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// var isSubtree = function (root, subRoot) {

//     //traverse and find nodes with same value as subRoot
//     let queue = [root]
//     while (queue.length > 0) {
//         let node = queue.shift();
//         if (node.val == subRoot.val) {
//             console.log("found match ", node.val, node.left, node.right)
//             let result = isEqual(node, subRoot)
//             if (result == true) return true;
//         }
//         if (node.left) queue.push(node.left)
//         if (node.right) queue.push(node.right)
//     }
//     return false


// };

// var isEqual = function (root1, root2) {
//     let queue1 = [root1]
//     let queue2 = [root2]

//     while (queue1.length > 0) {
//         let node1 = queue1.shift();
//         let node2 = queue2.shift();

//         if (!node1 && !node2) continue;
//         if ((!node1 && node2) || (node1 && !node2)) return false;
//         if (node1.val != node2.val) return false;

//         queue1.push(node1.left)
//         queue2.push(node2.left)


//         queue1.push(node1.right)
//         queue2.push(node2.right)


//     }
//     return queue1.length == queue2.length;
// }



//Time: O(s * t)
var isSubtree = function(root, subRoot) {
 
    if(!root && !subRoot) return true
    if(root && !subRoot) return true
    if(!root && subRoot) return false

    if(root.val == subRoot.val){
        if(isSameTree(root, subRoot)==true) return true
    }

    return isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot)
    
};

var isSameTree = function(root1, root2){
    if(!root1 && !root2) return true
    if(root1 && root2 && root1.val == root2.val){
        return isSameTree(root1.right, root2.right) && isSameTree(root1.left, root2.left)
    }
    //since we checked for null/null, nonnull/nonnull, then we're left with null/nonnull and vice versa and different values, so we know it's false
    return false
}


//start at the root, check if it is a subtree
//if not, run isSubtree on left and right children