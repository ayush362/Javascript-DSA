const arr1 = [3,1,2];
const arr2 = [1,4,9];
let isSquare = 1;
if(arr1.length != arr2.length)
{
    console.log("Length does'nt match");
}  

else
{
    let frequencycounter1 = {};
    let frequencycounter2 = {};
    for(let val of arr1)
    {
        if(frequencycounter1[val]===1)
        {
            frequencycounter1[val] += 1;
        }
        else
        {
            frequencycounter1[val] = 1;
        }
    }
    for(let val of arr2)
    {
        if(frequencycounter2[val]===1)
        {
            frequencycounter2[val] += 1;
        }
        else
        {
            frequencycounter2[val] = 1;
        }
    }

    for(let key in frequencycounter1)
    {
        if(!(key **2 in frequencycounter2))
        {
           isSquare = 0;
        }
        if(frequencycounter2[key**2] !== frequencycounter1[key])
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

console.log(frequencycounter1,frequencycounter2)
    
}