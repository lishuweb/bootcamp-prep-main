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
    let obj1Length = obj1.length;
    let obj2Length = obj2.length;

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    // let value1 = 
    for(let i in obj1)
    {
        let value1 = key1[i];
    }
    for(let i in obj2)
    {
        let value2 = key2[i];
    }

    if(obj1Length === obj2Length)
    {
        if(key1 === key2 && value1 === value2)
        {
            return true;
        }
        return false;
    }
    return false;

}
compareObjects();
