// YOUR CODE BELOW
function arrayFlattener(arr)
{
    let newArray =[];
    for(let i=0; i<arr.length; i++)
    {
        let currentValue = arr[i];
        if(Array.isArray(currentValue))
        {
            for(let j=0; j<currentValue.length; j++)
            {
                let currentValue1 = currentValue[j];
                newArray.push(currentValue1);
            }
        }
        else 
        {
            newArray.push(currentValue);
        }
    }
    return newArray;
}
arrayFlattener();