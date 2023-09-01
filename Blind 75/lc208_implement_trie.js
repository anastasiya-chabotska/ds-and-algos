class Node{
    constructor(value){
        this.value = value;
        this.length = null;
        this.children = {};
    }
}

/*
            null
            |
            a
            |
            p
            |
            e
            |
            x


*/
class Trie{

    constructor(){
        this.root = new Node() 
    }

    //O(n) O(n)
    insert(word){
       
        let curNode = this.root;
        for(let c of word){
            if(curNode.children[c]){
                curNode = curNode.children[c];
            }
            else {
                let newNode = new Node(c);
                curNode.children[c] = newNode;
                curNode = newNode;
            }

        }
        curNode.length = word.length;
    }

    //O(n) O(1)
    search(word){
        let curNode = this.root;
        for(let c of word){
            if(!curNode.children[c]) return false;
            else curNode = curNode.children[c];
        }
        return (curNode.length) ? true : false

    }

    //O(n) O(1)
    startsWith(prefix){

        let curNode = this.root;
        for(let c of prefix){
            if(!curNode.children[c]) return false;
            else curNode = curNode.children[c];
        }
        return true;

    }


}

let trie = new Trie();
console.log(trie)

trie.insert("apple")
console.log(trie.search("apple"))
console.log(trie.search("app"))

