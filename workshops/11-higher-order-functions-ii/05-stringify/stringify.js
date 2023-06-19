// YOUR CODE BELOW
function stringify(callback)
{
    return function()
    {
        let myFunc = callback();
        return myFunc.toString();
    }
}


