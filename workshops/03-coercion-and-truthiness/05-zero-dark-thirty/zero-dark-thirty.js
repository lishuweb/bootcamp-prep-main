// YOUR CODE BELOW
function zeroDarkThirty(number)
{
    debugger;
    if(number !== 0)
    {
        let newNumber = '';
        number = String(number);
        for(let i=0; i<number.length; i++)
        {
            if(number[i] === 0)
            {
                continue;
            }
            else 
            {
                newNumber += number[i];
            }
            return parseInt(newNumber);
        } 
    }
    return NaN;
}
zeroDarkThirty();