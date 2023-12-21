var isValidBST = function(node, min, max) {
    if(!node) return true;
 
    console.log(node.val)
    console.log({min, max})
    if(!min && !max) {
    min = node.val;
    max = node.val;
    }
    else {
 if(node.val <= min || node.val >= max) return false
    }
    //basic comparison
    if((node.left && (node.left.val >= node.val)) || (node.right && (node.right.val <= node.val))) return false;
    //comparison to min and max
   
    //call on left and right child
    console.log(node.left, node.right)
    if(node.left) return isValidBST(node.left, Math.min(min, node.val), Math.max(max, node.val))
    if(node.right) return isValidBST(node.right, Math.min(node.val, min), Math.max(max, node.val))
 
 };