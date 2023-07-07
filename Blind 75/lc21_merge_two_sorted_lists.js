/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(value, next) {
    this.value = (value === undefined ? 0 : value)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    //check for edge cases
    if(list1 == null) return list2;
    if(list2 == null) return list1;


    //this is called dummy node
    let curNode = new ListNode();
    let head = curNode;

    while(list1 && list2){

        if(list1.value < list2.value){
            curNode.next = list1;
            list1 = list1.next;
        }
        else {
            curNode.next = list2;
            list2 = list2.next;
        }
        curNode = curNode.next;

    }

    if(list1) curNode.next = list1;
    else curNode.next = list2;

    return head.next;



};


let n4 = new ListNode(4)
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);


let m4 = new ListNode(5)
let m3 = new ListNode(4, m4);
let m2 = new ListNode(3, m3);
let m1 = new ListNode(1, m2);


console.log(JSON.stringify(mergeTwoLists(n1, m1)))

if(null) console.log("yes")