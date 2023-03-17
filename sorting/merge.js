function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while ((i !== arr1.length) && (j !== arr2.length)) {
        if (arr1[i] < arr2[j]) //true i=0 k =0 
        {
            result.push(arr1[i]) // arr3[0] = 1
            i++; //i =1
        }
        else {
            result.push(arr2[j])
            j++;
        }
    }
    while (i !== arr1.length) {
        result.push(arr1[i]);
        i++
    }
    while (j !== arr2.length) {
        result.push(arr2[j]);
        j++
    }
    return result
}

function mergesort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid))
    return merge(left, right)
}


console.log(mergesort([4, 6, 2, 14, 89, 3, 1]))