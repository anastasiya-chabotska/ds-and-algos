//1-->10-->5-->16
//2 99

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {

        //check params
        if (index >= this.length) {
            this.append(value);
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        // let i = 0;
        // let prevNode = this.head;
        // while (i < index - 1){
        //     prevNode = prevNode.next;
        //     i++
        // }

        // let nextNode = prevNode.next;

        // let newNode = new Node(value);

        // newNode.next = nextNode;
        // prevNode.next = newNode;
        // this.length++;

        //or

        let myNewNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let holdingPointer = leader.next;
        leader.next = myNewNode;
        myNewNode.next = holdingPointer;
        this.length++;
        return this.printList();





    }

    traverseToIndex(index) {
        //check params

        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index) {
        //check that the index is valid

        //1 -> 10 -> 4 -> 5, remove 10
        //handle head removal
        if(index === 0){
            this.head = this.head.next;
        }

        else {
       
        let prevNode = this.traverseToIndex(index - 1);
        let targetNode = prevNode.next;
        prevNode.next = targetNode.next;
        }
        this.length--;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.remove(1)
console.log(myLinkedList.printList())