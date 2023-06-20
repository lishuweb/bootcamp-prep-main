// YOUR CODE BELOW
function myForEach(array, callback)
{
    for(let i=0; i<array.length; i++)
    {
        let currentArray = array[i];
        callback(currentArray, i);
        // callback(currentArray);
    }
}