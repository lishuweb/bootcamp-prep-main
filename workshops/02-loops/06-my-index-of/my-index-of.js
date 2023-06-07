// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx)
{
    let result = '';
    
    if(startIdx === undefined)
    {
        startIdx = 0;
        for(let i=startIdx; i<source.length; i++)
        {
            if(searchValue[i] === source[i])
            {
                result = i;
                return result;
            }
            else 
            {
                return -1;
            }
        }   
    }
    else
    {   
        for(i=startIdx; i<source.length; i++)
        {
            if(searchValue[i] === source[i])
            {
                result = i;
                return result;
            }
            else 
            {
                return 'hello';
            } 
        }   
    }
}
myIndexOf();