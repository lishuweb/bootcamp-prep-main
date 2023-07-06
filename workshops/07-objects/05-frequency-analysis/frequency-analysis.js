// YOUR CODE BELOW
function frequencyAnalysis(string)
{
    let newObject = {};
    for(let i=0; i<string.length; i++)
    {
        let key = string[i];
        if(!newObject[key])
        {
            newObject[key] = 1;
        }
        else 
        {
            newObject[key]++;
        }
    }
    return newObject;
}
frequencyAnalysis();
