function odd(arr)
{
    const result = []
    function helper(helperInput)
    {
        if(helperInput.length === 0)
        {
            return;
        }
        if(helperInput[0] % 2 !== 0)
        {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    console.log(result)
}

odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])