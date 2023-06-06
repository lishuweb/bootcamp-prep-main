// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx)
{
    let newString = '';
    if(startIdx === undefined && endIdx === undefined)
    {
        return originalString;
    }

    if(startIdx !== undefined && endIdx === undefined)
    {
        for(let i=startIdx; i<originalString.length; i++)
        {
            newString += originalString[i];
        }
        return newString; 
    }
    
    if(startIdx !== undefined && endIdx !== undefined)
    {
        for(let i=startIdx; i<endIdx; i++)
        {
            newString += originalString[i];
        }
        return newString;
    } 
}
mySlice();