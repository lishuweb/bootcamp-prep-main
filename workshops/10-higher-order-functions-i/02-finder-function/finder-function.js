// YOUR CODE BELOW
function finderFunction(array, callback)
{
    for(let i=0; i<array.length; i++)
    {
        let currentValue = array[i];
        let element = callback(currentValue);
        if(element)
        {
            return i;
        }
    }
    return -1;
}