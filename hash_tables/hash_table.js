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
  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  console.log(myHashTable.get('apples'))
  