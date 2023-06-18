// YOUR CODE BELOW
function veryOddMutant(array)
{
    let count = 0;
    let mutatedArray = [];
    for(let i=0; i<array.length; i++)
    {
        let currentNum = array[i];
        if(!(currentNum % 2))
        {
            array[i] = 'normie';
            // array.push(currentNum);
            count++;
        }
    }
    return count;
}
