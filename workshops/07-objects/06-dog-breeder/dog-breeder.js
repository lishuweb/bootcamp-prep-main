// YOUR CODE BELOW
function dogBreeder(name, age)
{
    let objectDog = {};
    if(name === undefined)
    {
        name = "Steve";
    }
    if(age === undefined)
    {
        if(typeof name === 'number')
        {
            age = name;
            name = 'Steve';
        }
        else 
        {
            age = 0;
        }
    }
    
    objectDog = {
        name : name,
        age: age
    };

    return objectDog;

}
dogBreeder();
