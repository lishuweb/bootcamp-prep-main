// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum)
{
    if(rotateNum > 0)
    {
        for(let i=0; i<rotateNum; i++)
        {
            let currentValue = originalArray.pop();
            originalArray.unshift(currentValue);
        }

    }
    else if(rotateNum < 0)
    {
        for(let i=0; i>rotateNum; i--)
        {
            let currentValue = originalArray.shift();
            originalArray.push(currentValue);
        }
    }
    return originalArray;
}
rotateArray();