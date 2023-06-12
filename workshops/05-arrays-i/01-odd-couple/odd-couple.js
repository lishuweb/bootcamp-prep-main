// YOUR CODE BELOW
debugger;

function oddCouple(arr)
{
    let newArray = [];
    for(i=0; i<arr.length; i++)
    {
        let num = arr[i];
        if(arr[i]%2)
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
oddCouple([2,3,4,5]);