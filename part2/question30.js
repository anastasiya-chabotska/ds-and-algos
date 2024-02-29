class Trie {
    constructor() {
        this.root = new Node('start');
    }

    insert(word) {
        if (word == null || word == '') return 'error'
        let curNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (curNode.children[char]) {
                curNode = curNode.children[char];
            }
            else {
                let newNode = new Node(char);
                curNode.children[char] = newNode;
                curNode = newNode;
            }
        }

        curNode.isEnd = true;
    }

    search(word) {
        let curNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (curNode.children[char]) {
                curNode = curNode.children[char];
            }
            else {
                return false;
            }
        }
        return curNode.isEnd == true;
    }
}

class Node {
    constructor(char) {
        this.val = char;
        this.children = {};
        this.isEnd = false;
    }
}

const myTrie = new Trie();
myTrie.insert('apple');
myTrie.insert('ape');
console.log(myTrie.search('apple'))
console.log(myTrie.search('app'))
console.log(JSON.stringify(myTrie))