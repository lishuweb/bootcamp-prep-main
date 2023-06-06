// YOUR CODE BELOW
function onlyOdds(number)
{
    let sum = 0;
    for (let i = number; i >= 1; i--) 
    {
        if (i % 2 === 1) 
        {
            sum += i;
        }
    }
    return sum;
}
onlyOdds();
