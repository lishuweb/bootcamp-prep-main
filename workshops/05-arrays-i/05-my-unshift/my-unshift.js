// YOUR CODE BELOW
function myUnshift(array, newElement)
{
    let newArray = [newElement];
    for(let i=0; i<array.length; i++)
    {
        let currentArray = array[i];
        newArray.push(currentArray);
    }
    return newArray;
}
myUnshift([2,3,4,5], 1);
