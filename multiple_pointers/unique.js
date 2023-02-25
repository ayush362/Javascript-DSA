const arr = [1,1,2,2,3,3,3,4,5,5,6,6,7,8,8,8,9,9,9,9];

let i=0;
for(let j=1;j<arr.length;j++)
{
    if(!(arr[i]==arr[j]))
    {
        i++;
        arr[i] = arr[j];
    }
}
console.log(`There are ${i+1} unique values`);


