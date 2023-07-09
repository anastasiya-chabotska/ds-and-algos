/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
     }

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Time: O(n^2)
var hasCycle = function(head) {
    
 
    //init 2 pointers at index 0 (head)
    let ptr1 = head;
    let ptr2 = head;
    

    //for each node, traverse the remaining nodes
    while(ptr1!=null){
        ptr2 = ptr1.next;
        while(ptr2!=null){
            if(ptr1.value == ptr2.value && ptr1.next == ptr2.next)
            return true;
            ptr2 = ptr2.next;
        }
        ptr1 = ptr1.next;
    }
    //if pointer1 == pointer2 return true
    return false;
    
};

//Time O(n) Space O(n)
//keep a hashmap of nodes we've seen
//traverse and check if the node is in the hashmap
var hasCycle2 = function(head) {
    
 
    let seen = new Set();

    while(head!=null){

        if (seen.has(head)) return true
        else seen.add(head)
        head = head.next
    }
    return false
    
};


/*Floyd's Tortoise and Hare
- keep slow and fast pointers
- slow moves by one
- fast moves by two
- if they ever meet - that's a cycle
- otherwise, fast will reach null and exit
- they're guaranteed to meet, b/c
    - the distance between fast and slow is n
    - every time the distance n is decreased by 2 and increased by 1, n = n + 1 - 2, n= n -1 -> which will eventually be zero
*/

var hasCycle2 = function(head) {
    
 
    let slow = head;
    let fast = head;

    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true

    }

    return false;
    
};


let n1 = new ListNode(3)
let n2 = new ListNode(2)
let n3 = new ListNode(0)
let n4 = new ListNode(-4)
n1.next = n2;
n2.next = n1;
// n3.next = n4;
// n4.next = n2;

console.log(hasCycle2(n1))