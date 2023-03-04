function searching(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return i
        }
    }
    return -1
}

console.log(searching([1, 2, 3, 4, 5, 6, 6, 4, 6, 2, 6, 7, 3, 9], 9))