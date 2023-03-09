function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (!(i === min)) {
            let temp;
            temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr;
}


console.log(sort([98, 6, 5, 5, 7, 4, 90, 7, 6, 2, 12, 5, 3, 21, 4, 7]))