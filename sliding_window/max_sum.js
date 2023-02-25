// Time complexity = O(N2)




const arr = [1,2,3,4,6,7,8,9,5,3,4,3,4,5,1,5];
const num=4;
let max = 0;
let temp = 0;
for(let i=0;i<arr.length-num+1 ;i++)
{
    for(let j=0;j<num;j++)
    {
      temp  += arr[j+i]
    //   console.log(temp)
    }
    if(max<temp)
    {
        max = temp;
        // console.log(sum);
    }
    console.log(temp,max)
    temp = 0;

}
console.log(max);