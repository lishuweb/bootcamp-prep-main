// YOUR CODE BELOW

function crazyCaps(string)
{
    debugger;

    let newString = '';
    for(i=0; i<string.length; i++)
    {
        let val = string[i];
        if(i%2===1)
        {
            newString += val.toUpperCase();
        }
        else 
        {
            newString += val.toLowerCase();
        }
        
    }
    return newString;
}
console.log(crazyCaps("fullstack"));

