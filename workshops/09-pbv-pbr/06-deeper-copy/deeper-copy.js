// YOUR CODE BELOW
function deeperCopy(array)
{
    let newArray = [];
    for(let i=0; i<array.length; i++)
    {
        let currentValue = array[i];
        if(Array.isArray(currentValue))
        {
            let innerArray = [];
            for(let j=0; j<currentValue.length; j++)
            {
                let currentValue1 = currentValue[j];
                innerArray.push(currentValue1);
            }
            newArray.push(innerArray);
        }
        else 
        {
            newArray.push(currentValue);
        }
    }
    return newArray;
}
deeperCopy();