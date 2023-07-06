
 //Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Time: O(n) Space: O(1)
var reverseList = function(head) {

   let current = head; //1
   let next = null;
   let prev = null;

   while(current!=null){
    next = current.next; //2
    current.next = prev; //null
    prev = current; //1
    current = next;
   }

   return prev;

};


//Time: O(n) Space: O(1)
var reverseListRec = function(head) {

    if (head.next == null) return head;

    return reverse(head);
 
 };

 var reverse = (head) => {
    let newHead = reverseListRec(head.next);
    console.log("new head: ", newHead)
    console.log("head.next.next", head.next)
    head.next.next = head;
    head.next = null;
    return newHead;
 }
 

let n1 = new ListNode(1);
let n2= new ListNode(2);
let n3= new ListNode(3);
let n4= new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(n1);
console.log((reverseListRec(n1)));



