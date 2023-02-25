const arr1 = ['a','a','z'];
const arr2 = ['a','z','a'];

// const arr = "ayush".split('');

let fq1 ={};
let fq2 ={};
let flag = 0;

if(arr1.length!=arr2.length)
{
    flag = 0;
}
else
{

for(let val of arr1)
{
    if(fq1[val]===1)
    {
        fq1[val] += 1
    }
    else{
        fq1[val] = 1
    }
}

for(let val of arr2)
{
    if(fq2[val]===1)
    {
        fq2[val] += 1;
    }
    else{
        fq2[val] = 1;
    }
}

for(let key in fq1)
{
    if(!(key in fq2))
    {
        flag = 0;
    }
    if (!(fq1[key] === fq2[key]))
    {
        
        flag = 0;
    }
    else{
       flag = 1;
    }
}
}
 if(flag === 1)
 {
    console.log("similar");
 }
 else{
    console.log("Not similar");
 }
console.log(fq1,fq2);
