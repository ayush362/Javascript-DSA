const arr1 = [3,1,2];
const arr2 = [1,4,9];
let isSquare = 1;
if(arr1.length != arr2.length)
{
    console.log("Length does'nt match");
}
else
{
    for(let i=0;i<arr1.length;i++)
    {
        let correctindex = arr2.indexOf(arr1[i]**2)
        if(correctindex===-1)
        {
            isSquare = 0;
            
        }
    }
    if(isSquare===1)
    {

        console.log("Arrays are squared");
    }
    else
    {
        console.log("Arrays are not squared");

    }
}
