const arr = [-3,-2,-1,0,1,2,4];
let flag=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==0)
        {
            console.log(arr[i],arr[j])
            flag = 1;
            break;
        }
    }
    if(flag ===1)
    {
        break;
    }
}
if(flag===0)
{
    console.log("number not found");
}
