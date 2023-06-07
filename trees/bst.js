class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert(value) {

  //   let newNode = new Node(value);

  //   //Code here
  //   if (this.root == null) 
  //   {
  //     this.root = newNode;
  //     return newNode;
  //   }

  //   let curNode = this.root;
  //   let prevNode = curNode;

  //   while (curNode !== null) {

  //     prevNode = curNode;

  //     if(value < curNode.value) curNode = curNode.left;
  //     else if(value > curNode.value) curNode = curNode.right;


  //   }

    
  //   if(value < prevNode.value) prevNode.left = newNode;
  //   else prevNode.right = newNode;
  //   return newNode;

  // }

  insert(value){

    const newNode = new Node(value);

    if(this.root === null){
      this.root = newNode
    }
    else {
      let currentNode = this.root;
      //while true makes it loop until you exit
      while(true){
        if(value < currentNode.value){
          //left
          //if nothing to the left, put new node there
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          //else move left
          currentNode = currentNode.left;
        }
        else {
          //right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }

  }

  lookup(value) {
    //Code here
    let curNode = this.root;
    while (curNode != null) {
      if (value > curNode.value) curNode = curNode.right;
      else if (value < curNode.value) curNode = curNode.left;
      else if (curNode.value == value) return curNode
    }
    return null;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}