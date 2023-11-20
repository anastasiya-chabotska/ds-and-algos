// add a method reverse() to the linked list that reverses the entire list of nodes

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    reverse() {
        //Code Here

        //or check length === 1
        if(!this.head.next){
            return this.head;
        }


        let prevNode = this.head;
        let currentNode = prevNode.next;

        while (currentNode != null){
            let temp = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = temp;

        }


        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        this.tail.next = null;



        // let prevNode = this.head;

        // let currentNode = prevNode.next;

        // while(currentNode.next != null){

        //     console.log("now at node ", currentNode)
        //     //store the next node to not lose it when resetting the pointer
        //     let nextNode = currentNode.next;
        //     currentNode.next = prevNode;

        //     prevNode = currentNode;
        //     currentNode = nextNode;

        // }

        // console.log("TAIL IS NOW ", prevNode, currentNode)
        // this.tail = prevNode;


      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5)
  myLinkedList.append(16)
  myLinkedList.prepend(1)
  myLinkedList.printList()
  myLinkedList.insert(2, 99)
  myLinkedList.insert(20, 88)
  console.log(myLinkedList.printList())
//   myLinkedList.remove(2)
 myLinkedList.reverse()
 console.log(myLinkedList.printList())
 console.log(myLinkedList.head);
 console.log(myLinkedList.tail);
