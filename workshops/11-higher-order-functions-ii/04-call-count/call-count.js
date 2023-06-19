// YOUR CODE BELOW
// let count = 0;
// count++;
// callCount();

function callCount()
{
    let count = 0;
    return function()
    {
        count++;
        return count;
    }
}

