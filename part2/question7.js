var reverseBetween = function(head, left, right) {

    //phase 0, insert dummy node
    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    //phase 1, iterate until we reach left
    let i = left - 1;
    let leftPrev = dummyNode, cur = head;
    while(i > 0){
        leftPrev = cur;
        cur = cur.next;
        i--;
    }

    //phase 2, do the reversal
    i = right - left + 1;
    let prev = null;
    while(i > 0){
        let tempNext = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tempNext;
        i--;
    }

    //phase 3, clean up the links, leftPrev is pointing at the new tail, cur is now at the disconnected node next to right
    leftPrev.next.next = cur; //make the new tail point at the disconnected node
    leftPrev.next = prev;

    return dummyNode.next;

}


//solution from the course
var reverseBetween = function(head, left, right) {

    let currentPosition = 1, currentNode = head, start = head;
  
    while(currentPosition < left){
        start = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
    }
  
    //start is now before left, current is at left
    let newList = null, tail = currentNode;
    while(currentPosition >= left && currentPosition <= right){
        let tempNext = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = tempNext;
        currentPosition++;
    }
  
    //newList is now at right, currentNode is next to right
    start.next = newList;
    tail.next = currentNode;
  
    if(left > 1) return head;
    else return newList;
  
  }