class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}




const reverseLinkedList = function(head){


    let prev = null, cur = head;
    while(cur){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}


let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(JSON.stringify(n1));

console.log(JSON.stringify(reverseLinkedList(n4)))

