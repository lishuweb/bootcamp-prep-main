// YOUR CODE BELOW
function chainReaction(array, callback)
{
    // return array[0];
    callback.forEach(function(callback)
    {
        array = callback(array);
    })
    return array;
}