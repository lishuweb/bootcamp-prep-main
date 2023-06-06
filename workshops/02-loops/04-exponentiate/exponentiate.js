// YOUR CODE BELOW
function exponentiate(base, power)
{
    if(power >= 0)
    {
        if(power === 0)
        {
            return base = 1;
        }
        else 
        {
            let value = 1;
            for(let i=1; i<=power; i++)
            {
                value *= base;
            }
            return value;
        }
    }
    else 
    {
        return "Invalid power"; 
    }
}
exponentiate();