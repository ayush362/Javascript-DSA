function partition(arr, leftIndex, rightIndex) {
    let swapIndex = leftIndex;
    for (let i = leftIndex + 1; i < rightIndex; i++) {
        if (arr[leftIndex] >= arr[i]) {
            // arr[i] <-> arr[swapindex+1];
            let temp = arr[i];
            arr[i] = arr[swapIndex + 1];
            arr[swapIndex + 1] = temp;

            swapIndex++;
        }
    }
    // arr[leftIndex] <-> arr[swapIndex];
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[swapIndex];
    arr[swapIndex] = temp;

    return swapIndex;
}

function quicksort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        // const before = [...arr];
        const pivotIndex = partition(arr, leftIndex, rightIndex);
        // console.log({before: before.toString(), after: arr.toString(), values: {leftIndex, rightIndex, pivotIndex}});
        quicksort(arr, leftIndex, pivotIndex);
        quicksort(arr, pivotIndex + 1, rightIndex);
    }
}

function generateArray() {
    const arr = [];
    for (let i = 0; i < 11; i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return arr
}


const arr1 = [6, 4, 3, 2, 4, 5, 1, 6, 8, 3, 10];
const arr2 = generateArray();
const arr3 = generateArray();
const arr4 = generateArray();

const arrs = [
    arr1,
    arr2,
    arr3,
    arr4
];

arrs.forEach(arr => {
    const beforeSort = [...arr];
    quicksort(arr, 0, arr.length);
    console.log({before: beforeSort.toString(), after: arr.toString()});
})
