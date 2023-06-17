// YOUR CODE BELOW
function myJoin(array, separator)
{
    let newString = '';
    if(separator === undefined)
    {
        separator = ",";
    }
    for(let i=0; i<array.length; i++)
    {
        let currentArray = array[i];
        if(i !== 0)
        {
            newString += separator;
            // newString.push(separator);
        }
        if(currentArray !== undefined && currentArray !== null)
        {
            newString += currentArray;
            // newString.push(separator);
        }
    }   
    return newString;
}
myJoin();