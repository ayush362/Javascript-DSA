function pivot(arr, start, end) {
    // let pivotval = arr[start];
    let swapIdx = start
    for (let i = start + 1; i < end; i++) {
        if (arr[start] >= arr[i]) {
            let temp = arr[swapIdx + 1]
            arr[swapIdx + 1] = arr[i]
            arr[i] = temp
            swapIdx++
        }
    }
    let temp = arr[swapIdx]
    arr[swapIdx] = arr[start]
    arr[start] = temp
    // console.log(arr)
    return swapIdx
}

function quicksort(arr, left, right) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quicksort(arr, left, pivotIndex)
        quicksort(arr, pivotIndex + 1, right)
    }
    return arr
}
// const arr2 = [4, 8, 9, 5, 3, 4, 1, 4, 2, 7]\
const arr = [6, 4, 3, 2, 4, 5, 1, 6, 8, 3, 10]
console.log(quicksort(arr, 0, arr.length))