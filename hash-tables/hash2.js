class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    hash(key) {
      let total = 0;
      let prime = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = key.charCodeAt(i) - 96;
        total = (total * prime + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this.hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
      console.log(this.keyMap);
    }
  }
  
  let list = new HashTable();
  list.set("pink", 13);
  list.set("orange", 13);
  list.set("yellow", 13);
  list.set("green", 13);
  list.set("purple", 33);
  