// YOUR CODE BELOW
function myJoin(array, separator)
{
    let newString = '';
    if(separator === '')
    {
        separator = ',';
    }
    for(let i=0; i<array.length; i++)
    {
        let currentArray = array[i];
        newString += separator;
        
    }
    return newString;
}
myJoin();