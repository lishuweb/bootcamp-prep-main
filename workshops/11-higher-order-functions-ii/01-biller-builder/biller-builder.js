// YOUR CODE BELOW
let NYFunc = function(price)
{
    return price * 1.03 * 1.04; 
}

let NJFunc = function(price)
{
    return price * 1.05 * 1.06625;
}
function billerBuilder(state)
{
    if(state === 'NY')
    {
        return NYFunc;
    }
    return NJFunc;
}

