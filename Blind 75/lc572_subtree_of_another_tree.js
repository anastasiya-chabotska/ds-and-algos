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
var isSubtree = function(root, subRoot) {
 
    //traverse and find nodes with same value as subRoot
    let queue = [root]
    while(queue.length > 0){
        let node = queue.shift();
        if(node.val == subRoot.val){
            console.log("found match ", node.val, node.left, node.right)
            let result = isEqual(node, subRoot)
            if(result == true) return true;
        }
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return false
    
        
    };
    
    var isEqual = function(root1, root2){
        let queue1 = [root1]
        let queue2 = [root2]
    
        while(queue1.length>0){
            let node1 = queue1.shift();
            let node2 = queue2.shift();
    
            if(!node1 && !node2) continue;
            if((!node1 && node2) || (node1 && !node2)) return false;
            if(node1.val != node2.val) return false;
             
                queue1.push(node1.left)
                queue2.push(node2.left)
        
        
                queue1.push(node1.right)
                queue2.push(node2.right)
            
           
        }
        return queue1.length == queue2.length;
    }
    