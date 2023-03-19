function getdigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitcount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function maxdigit(nums) {
    let maxval = 0;
    for (let i = 0; i < nums.length; i++) {
        maxval = Math.max(maxval, digitcount(nums[i]))
    }
    return maxval;
}

function radixsort(nums) {

    let maxvaluecount = maxdigit(nums)
    for (let i = 0; i < maxvaluecount; i++) {
        let digitbucket = Array.from({ length: 10 }, () => [])
        for (j = 0; j < nums.length; j++)
        {
            let digit = getdigit(nums[j],i)
            digitbucket[digit].push(nums[j])
        }
        nums = [].concat(...digitbucket)
    }
    return nums

}
console.log(radixsort([7352,566,76,1,6,3,2,9996,5644,786,420]))