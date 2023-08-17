/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    //1  
 
     let prev = head; //1
     let cur = head.next; //null
 
     while(cur!=null){
         let target = cur.next; //3
         if(target!=null){
         let prevTarget = cur;
         while(target.next!=null){
             prevTarget = target;
             target = target.next;
             
         } //5
         prev.next = target; // 1 -> 5
         target.next = cur; // 5 -> 2  
 
         //destroy the cycle, maybe it can be used?
         prevTarget.next = null;  
         
         prev = cur;
         cur = cur.next;
         }
         else break
     }
 
     return head
 };


 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */



var reorderList = function(head){

    //1. split the list into 2 parts
    let slow = head;
    let fast = head.next;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let head2 = slow.next;
    slow.next = null;

    //[1, 2] [3, 4, 5]

    //2. reverse the second list
    head2 = reverseList(head2)

    console.log(head);
    console.log(head2)


    // 1 - > 2
    // 5 -> 4 -> 3

    //3. merge the 2 lists into one now

   let result = head;
    while(head && head2){
        let temp = head.next; //2
        let temp2 = head2.next; //4
        head.next = head2; // 1 -> 5
        head.next.next = temp; // 1 -> 5 -> 2
        head2 = temp2; // 4 -> 3
        head = temp;
    }
    //cur, cur2
    //temp = cur 1
    //temp2 = cur2
    //cur.next = cur2 1 -> 5
    //cur2.next = temp.next 5 -> 2
    return result
}



var reverseList = function(head){

    if(head == null) return head;
    let prev = head;
    let cur = head.next;
    prev.next = null;

    while(cur){
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
        
    }

    return prev;
}
// var reorderList = function(head) {

//    //1  

//     let prev = head; //1
//     let cur = head.next; //null

//     while(cur!=null){
//         let target = cur.next; //3
//         if(target!=null){
//         let prevTarget = cur;
//         while(target.next!=null){
//             prevTarget = target;
//             target = target.next;
           
//         } //5
//         prev.next = target; // 1 -> 5
//         target.next = cur; // 5 -> 2  

//         //destroy the cycle, maybe it can be used?
//         prevTarget.next = null;  
       
//         prev = cur;
//         cur = cur.next;
//         }
//         else break
//     }

//     return head
// };
