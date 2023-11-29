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



//working
var flatten = function(head) {
    
    let current = head;
    while(current){
        if(current.child){
            //merge
            let child = current.child;
            while(child.next){
                child = child.next;
            }
 
            //4 and 10
            child.next = current.next;
            if(current.next) current.next.prev = child;
            
            //3 and 7
            current.next = current.child;
            current.child.prev = current;
 
            current.child = null;
 
        }
        current.prev ? console.log("prev ", current.prev.val) : console.log("prev null")
         console.log(current.val)
 
        current.next ? console.log("next ", current.next.val) : console.log("next null")
 
        current = current.next;
    }
    return head;
 
 };