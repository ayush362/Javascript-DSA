class hashTable {
    constructor(size = 53) {
        this.keymap = new Array(size);
    }


    hash(key) {
        let total = 0;
        let prime = 31
        for (let i = 0; i < Math.min(key.len, 100); i++) {
            let char = key[i]
            let value = key.charCodeAt(0) - 96
            total = (total * prime + value) % this.keymap.length;
        }
        // console.log(total)
        return total
    }
    set(key, value) {
        let index = this.hash(key)
        if (!this.keymap[index]) {
            this.keymap[index] = []
        }
        this.keymap[index].push([key, value])
        // console.log(this.keymap)

    }
    get(key) {
        let index = this.hash(key)
        {
            if (this.keymap[index]) {
                for (let i = 0; i < this.keymap[index].length; i++) {
                    if (this.keymap[index][i][0] === key) {
                        console.log(this.keymap[index][i][1])
                        return this.keymap[index][i][1]
                    }
                }
            }
            return undefined
        }
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
}

let list = new hashTable();
list.set("pink", 13)
list.set("orange", 14)
list.set("yellow", 15)
list.set("green", 15)
list.set("purple", 33)

list.get("green")