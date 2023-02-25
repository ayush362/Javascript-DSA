const arr = [-3,-2,-1,0,18,9,4];
let sum=0;
let flag=0;
let left = 0;
let right = arr.length-1;

while(left<right)
{
    sum = arr[left]+arr[right]
    if(sum===0)
    {
        console.log(arr[left],arr[right])
        flag = 1;
        break
    }
    else if(sum>0)
    {
        right--
    }
    else
    {
        left++
    }
}
if(flag===0)
{
    console.log("number not found");
}