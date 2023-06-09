// YOUR CODE BELOW
debugger;
function myIncludes(array, searchValue)
{
    for(i=0; i<array.length; i++)
    {
        let value = array[i];
        if(value === searchValue)
        {
            return true;
        }
    }
    return false;
}
myIncludes();