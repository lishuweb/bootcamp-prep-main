// YOUR CODE BELOW
function oddCouple(array)
{
    let newArray = [];
    for(i=0; i<array.length; i++)
    {
        let num = array[i];
        if(array[i]%2)
        {
            newArray.push(num);
        }
        if(newArray.length === 2) 
        {
            return newArray;
        }
    }
    return newArray;
}
oddCouple();