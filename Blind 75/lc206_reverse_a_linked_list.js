
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

let n1 = new ListNode(1);
let n2= new ListNode(2);
let n3= new ListNode(3);
let n4= new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(n1);
console.log(JSON.stringify(reverseList(n1)));



