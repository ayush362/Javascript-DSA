function sort(arr) {
    let temp = 0;
    for (let i = arr.length; i > 0; i--) {
        let noswap = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                noswap = false
            }
            console.log(arr[j], arr[j + 1])
        }
        if (noswap) {
            break;
        }
    }
    return arr
}




console.log(sort([5, 1, 2, 3, 4, 7]))