class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    //underscore indicates private property, developer's standard, doesn't really do anything
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.data[index]){
            this.data[index] = [];
        }
        this.data[index].push([key, value])
        console.log(this.data)
    }

    get(key){
        let index = this._hash(key);
        const currentBucket = this.data[index];
        if(currentBucket){
            for (let i=0; i < currentBucket.length; i++){
                if(currentBucket[i][0]===key) return currentBucket[i][1]
            }
        }
        return undefined;
    }

    keys(){
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                console.log(this.data[i][0])
                if(this.data[i].length > 1){
                    for (let j = 0; j < this.data[i].length; j++){
                        keysArray.push(this.data[i][j][0])
                    }
                }
                else keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
  }
  
  const myHashTable = new HashTable(5);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  console.log(myHashTable.get('apples'))
  myHashTable.set('bananas', 10)
  console.log("keys", myHashTable.keys())
  //[ <1 empty item>, [ [ 'grapes', 10000 ], [ 'apples', 9 ] ] ]