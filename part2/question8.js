var flatten = function(head) {
    
    let cur = head;
    while(cur){
            console.log("cur: ", cur.val)
    if(cur.child){
        cur = helper(cur);
        console.log("returned from helper: ", cur.val)
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
            console.log("next is null ", node.val)
            return node;
        }
        node = node.next;
    }

    let tempNext = node.next;
    node.next = node.child;
    node.child = null;
    node = node.next;
    console.log("calling helper: ", node.val, tempNext.val)
    let lastNode = helper(node);
    console.log("last node: ",lastNode.val);
    let lastNodeNext = lastNode.next;
    lastNode.next = tempNext;
    tempNext.prev = lastNode;
    if(lastNodeNext )console.log("last node next: ", lastNodeNext.val)
    if(lastNodeNext) return(helper(lastNode))
    else return tempNext;

}