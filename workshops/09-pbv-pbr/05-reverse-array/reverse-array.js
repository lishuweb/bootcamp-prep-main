// YOUR CODE BELOW
function reverseArray(array)
{
    let currentArray = [];
    // if(array.length) 
    while(array.length)
    {
        currentArray.push(array.pop());
    }
    while (currentArray.length) 
    {
        array.unshift(currentArray.pop())
    }
    return array;   
}
console.log(reverseArray([1,2,3,4]));