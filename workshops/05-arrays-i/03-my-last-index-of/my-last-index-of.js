// YOUR CODE BELOW
debugger;
function myLastIndexOf(array, searchValue, startIdx)
{
    if(startIdx === undefined)
    {
       startIdx = array.length-1; 
    }
    for(let i=startIdx; i>=0; i--)
    {
        let value = array[i];
        if(searchValue === value)
        {
            return i;
        }
    }
    return -1;
}
myLastIndexOf();