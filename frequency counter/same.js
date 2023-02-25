// [1,2,3]  = [1,4,6]  True
const arr1 = [3,1,2];
const arr2 = [1,4,9];
let test = 0;
if(arr1.length != arr2.length)
{
    console.log("Failed");
}
else
{
for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr2.length;j++)
    {
        if(arr2[j]===arr1[i]*arr1[i])
        {
            arr2.splice(j,1);
            test++;
            console.log(arr1 ,arr2,test);
        }
    }
}
if(test===arr1.length)
{
    console.log("sucessfull");
}
else{
    console.log("Un-sucesfull");
}
}