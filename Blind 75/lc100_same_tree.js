/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    //init pQueue and qQueue
    let pQueue = [p];
    let qQueue = [q];
    //start traversing
    while(pQueue.length > 0){
        let pNode = pQueue.shift();
        let qNode = qQueue.shift();
        if((pNode!=null && qNode!=null && pNode.val != qNode.val) || (pNode == null && qNode!=null) || (qNode == null && pNode!=null))
        return false;
        
        if(pNode == null && qNode == null) continue;
    
        //else put their children in the queue
        pQueue.push(pNode.right);
        qQueue.push(qNode.right);
        pQueue.push(pNode.left);
        qQueue.push(qNode.left)
    }
    //if finished traversing without exiting return true

return true;

};


//DFS recursion
var isSameTree2 = function(p, q) {
    
   
    //if p and q are null return true
    if(p==null && q==null) return true

    //if p is null and q is not null return false
    if((p==null && q!=null) || (p!=null && q==null)) return false

    //if p is not null and q is not null and the values are dufferent return false
    if(p.val != q.val) return false

    let left = isSameTree2(p.left, q.left);
    let right = isSameTree2(p.right, q.right);

    return left && right;


};