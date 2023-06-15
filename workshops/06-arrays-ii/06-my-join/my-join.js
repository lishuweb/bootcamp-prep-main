// YOUR CODE BELOW
function myJoin(array, separator)
{
    let newString = '';
    if(separator === undefined)
    {
        separator = ',';
    }
    for(let i=0; i<array.length; i++)
    {
        let currentArray = array[i];
        if(i !== 0)
        {
            // newString.push(separator);
            newString += separator;
        }
        if(currentArray !== null)
        {
            newString += currentArray;
        }
    }   
    return newString;
}
myJoin();