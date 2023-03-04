function checkodd(arr)
{
    newarr = []
    if(arr.length===0)
    {
        return newarr;
    }
    if(arr[0]%2 !==0)
    {
        newarr.push(arr[0])
    }
    newarr = newarr.concat(checkodd(arr.slice(1)))
    return newarr;
}

console.log(checkodd([1,2,3,4,5,6,7,8,9]))