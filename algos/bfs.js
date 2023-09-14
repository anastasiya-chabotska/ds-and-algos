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
      return false;
    }
    // remove
  
    remove(value){
      if(!this.root) return false;
  
      let currentNode = this.root;
      let parent = null;
  
      //first find the node to be deleted
      while(currentNode){
        if(value < currentNode.value){
          parent = currentNode;
          currentNode = currentNode.left;
        }
        else if (value > currentNode.value){
          parent = currentNode;
          currentNode = currentNode.right;
        }
        //here it is, now perform the removal
        else if (value === currentNode.value){
  
          //case 1: no children
          if (!currentNode.right && !currentNode.left){
  
            console.log("case 1")
            //simply detach it
            
            //if node tbd is parent's right set right to null
            if(parent.right) parent.right = null;
            //if it's parent's left, set left to null
            else if (parent.left) parent.left = null
  
            return;
          }
  
          //case 2: one child
          if((!currentNode.right && currentNode.left) 
          ||(!currentNode.left && currentNode.right) 
          ){
  
            let child;
            if(currentNode.left) child = currentNode.left;
            else if(currentNode.right) child = currentNode.right;
  
            //means it's left child of the parent
            if(currentNode.value < parent.value){
              parent.left = child;
            }
            //right or equal
            else parent.right = child;
            
            return;
          }
  
          //case 3: 2 children
          if(currentNode.left && currentNode.right){
  
            let parentMin = currentNode;
            let min = currentNode.right;
  
            while(min.left){
              parentMin = min;
              min = min.left;
            }
  
            //now set the node to be deleted to be the min we just founf
            currentNode.value = min.value;
  
            //now deal with children
  
            //if min is case 1 or case 2, we will not have case 3 again, since we will always get the leftmost
  
            //case 1 on min
            if(!min.left && !min.right ){
              //min is a left child
              if(min.value < parentMin.value){
  
                parentMin.left = null;
              }
              else parentMin.right = null
            }
  
            //case 2 on min
            if((!min.right && min.left) 
            ||(!min.left && min.right) 
            ){
    
              let child;
              if(min.left) child = min.left;
              else if(min.right) child = min.right;
    
              //means it's left child of the parent
              if(min.value < parentMin.value){
                parentMin.left = child;
              }
              //right or equal
              else parentMin.right = child;
              
            }
  
            return;
          }
  
        }
      }
    }

    breadthFirstSearch(){

        let currentNode = this.root;
        let list = [];
        let queue = [currentNode];
        while(queue.length > 0){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        return list;


    }

    breadthFirstSearchRecursive(queue, list){
        
        if(!queue.length) return list;
        let node = queue.shift();
        list.push(node.value);
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
        return this.breadthFirstSearchRecursive(queue, list)

       
        
    }
  }
  
  const tree = new BinarySearchTree();
  console.log(tree.lookup(0));
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  
  //tree.remove(170)
  console.log(tree.lookup(20))
  console.log(JSON.stringify(traverse(tree.root)))
  console.log(tree.breadthFirstSearch())
  console.log(tree.breadthFirstSearchRecursive([tree.root], []))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }