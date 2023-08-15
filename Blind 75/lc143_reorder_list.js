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