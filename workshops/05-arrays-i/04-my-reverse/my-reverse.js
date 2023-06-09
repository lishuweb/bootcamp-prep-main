// YOUR CODE BELOW
debugger;
function myReverse(array)
{
    let newArray = [];
    for(let i = array.length-1; i >= 0; i--)
    {
        // let currentArray = array[i];
        newArray.push(array[i]);
    }
    return newArray;
}
myReverse([1,2,3,4]);