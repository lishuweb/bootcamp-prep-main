// YOUR CODE BELOW
// theTruthCounts([0, [true, ['yes']]]); // => 2
function theTruthCounts(arr)
{
    debugger;
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i]))
        {
            count += theTruthCounts(arr[i]);
        }
        else 
        {
            if(arr[i] !== 0)
            {
                count++;
                // return count;
            }
        }
    }
    return count;
}

console.log(theTruthCounts([0, [true, ['yes']]]));