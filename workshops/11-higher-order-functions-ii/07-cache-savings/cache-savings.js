// YOUR CODE BELOW
function cacheSavings(callback)
{
    let cache = 0;
    let value;
    return function newFunc(arg)
    {
        if(arg !== cache)
        {
            cache = arg;
            value = callback(arg);
            return value;
        }
        return value;
    }
}