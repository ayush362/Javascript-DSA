function search(arr, num) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let middle = Math.round((left + right) / 2)
        if (num < arr[middle]) {
            right = middle;
        }
        else if (num > arr[middle]) {
            left = middle;
        }
        else {
            return middle;
        }
    }
    return -1
}

console.log(search([1, 2, 3, 4, 6, 7, 8, 9], 7))