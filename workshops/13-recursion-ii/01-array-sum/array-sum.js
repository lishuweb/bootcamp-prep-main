// YOUR CODE BELOW\
// arraySum([1, [2, 3, [4]]]) // => 10

function arraySum(arr)
{
    let sum = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i]))
        {
            sum += arraySum(arr[i]);
        }
        else 
        {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(arraySum([1, [2, 3, [4]]]));
