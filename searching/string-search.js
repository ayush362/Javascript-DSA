function search(str, pattern) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === pattern[0]) {
            // let found = true
            for (let j = 0; j < pattern.length; j++) {
                if (!(str[i + j] === pattern[j])) {
                    // found = false
                    break
                }
           
            if (j===pattern.length-1) {
                count += 1
            }
        }
    }
    }
    console.log(count)
}

search("Hello my name is Ayush khatri", "yus")