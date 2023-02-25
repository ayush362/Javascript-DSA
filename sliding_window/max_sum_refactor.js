
// Time complexity = O(N)

let arr = [1,2,3,2,1,4,9,3,5,6,7,4,3,7,8,1,3]
let num = 3;
let max = 0;
let temp = 0;

for(let i=0;i<num;i++)
{
    temp += arr[i]
}

max = temp;

for(let i =num;i<arr.length;i++)
{
    temp = temp - arr[i-num] + arr[i];
     max = Math.max(temp,max);
}

console.log(max);