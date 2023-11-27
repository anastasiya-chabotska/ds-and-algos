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