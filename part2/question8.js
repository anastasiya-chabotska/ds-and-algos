var flatten = function(head) {
    
    let cur = head;
    while(cur){
    if(cur.child){
        cur = helper(cur);
    }
    cur = cur.next;
    }
  
    return head;
};

var helper = function(curNode){

    let node = curNode;
    console.log("helper at node: ", node.val)
    
    while(node.child == null){
       
        if(node.next == null) {
            return node;
        }
        node = node.next;
    }

    let tempNext = node.next;
    node.next = node.child;
    node.next.prev = node;
    node.child = null;
    node = node.next;
    let lastNode = helper(node);
    console.log(lastNode.val)
    while(lastNode.next){
        lastNode = lastNode.next;
        if(lastNode.child) lastNode = helper(lastNode);
    }
    console.log("after: ",lastNode.val, temp)
    lastNode.next = tempNext;
    tempNext.prev = lastNode;
    return tempNext;

}