function sort(arr) {
    let temp = 0;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}




console.log(sort([5, 3, 1, 1, 6, 6,6,7,8,9,3,44,5,663,4,5,7,11, 4, 7]))