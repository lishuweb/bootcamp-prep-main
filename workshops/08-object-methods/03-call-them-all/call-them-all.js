// YOUR CODE BELOW
function callThemAll(obj, value)
{
    let finalArray = [];
    // let currentKey = [];
    for(let key in obj)
    {
        let currentKey = obj[key];
        if(typeof currentKey === 'function')
        {
            let currentValue = currentKey(value);
            finalArray.push(currentValue);
        }
    }
    return finalArray;
}
callThemAll();