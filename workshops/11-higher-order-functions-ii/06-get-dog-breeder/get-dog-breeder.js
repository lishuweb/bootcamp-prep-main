// YOUR CODE BELOW
function getDogBreeder(defaultName, defaultAge)
{
    return dogBreeder; 
    function dogBreeder(name, age)
    {
        if(age === undefined)
        {
            if(typeof name === 'number')
            {
                age = name;
                name = null;
            }
            else 
            {
                age = defaultAge;
            }
        }
        if(!name)
        {
            name = defaultName;
        }
        let newValue = {
            name: name,
            age: age
        };
        return newValue; 
    } 
}


