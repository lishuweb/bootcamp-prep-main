// // YOUR CODE BELOW
function compareObjects(obj1, obj2)
{
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    let value1 = [];
    let value2 = [];

    if(key1.length !== key2.length)
    {
        return false;
    }
    for(let i=0; i<key1.length; i++ )
    {
        let val = key1[i];
        if (obj1[val] !== obj2[val]) 
        {
            return false;
        }
    }
    return true;
}
compareObjects();
