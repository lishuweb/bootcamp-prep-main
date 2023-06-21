// YOUR CODE BELOW
function mySplice(array, startIdx, deleteIdx, newValue)
{
    let currentValue = [];
    let newArray = [];
    // while(array.length)
    // {
    //     array.pop();
    // }
    for(let i=0; i<startIdx; i++)
    {
        let element = array[i];
        currentValue.push(element);
    }
    if(newValue !== undefined)
    {
        currentValue.push(newValue);
    }
    for(let i=startIdx; i<startIdx+deleteIdx; i++)
    {
        let val = array[i];
        newArray.push(val);
    }
    for(let i=startIdx+deleteIdx; i<array.length; i++ )
    {
        let val1 = array[i];
        currentValue.push(val1);
    }
    while(array.length)
    {
        array.pop();
    }
    for(let i=0; i<currentValue.length; i++)
    {
        let val2 = currentValue[i];
        array.push(val2);
    }
    return newArray;
}