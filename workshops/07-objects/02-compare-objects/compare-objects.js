// // YOUR CODE BELOW
// // ### Compare Objects

// // Define a function, `compareObjects`, that accepts two objects as arguments.

// // `compareObjects` should return true if both objects have exactly the same
// // key/value pairs. Otherwise, `compareObjects` should return false. Assume the
// // objects are not nested.

// // ```javascript
// // compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

// // compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
// // ```

function compareObjects(obj1, obj2)
{
    // let obj1Length = obj1.length;
    // let obj2Length = obj2.length;

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    // let value1 =  =
    let value1 = [];
    let value2 = [];
    for(let i in obj1)
    {
        value1.push(obj1[i]);
    }
    for(let i in obj2)
    {
        value2.push(obj2[i]);
    }
debugger;
    if(obj1.length === obj2.length)
    {
        for(let i=0; i<key1.length; i++ )
        {
            if(key1[i] === key2[i] && value1[i] === value2[i])
            {
                return true;
            }
            return false;
        }
    }
    return false;

}
compareObjects({ name: 'nick' }, { name: 'nick' });
