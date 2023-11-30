var detectCycle = function(head) {
    
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            let start = head;
            let meet = slow;
            while(start!=meet){
                start = start.next;
                meet = meet.next;
            }
            return start;
        }
    }
    return null;
    
};