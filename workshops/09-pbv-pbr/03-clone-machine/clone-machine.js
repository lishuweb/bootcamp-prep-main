// YOUR CODE BELOW
function cloneMachine(animal)
{
    let cloneObj = {
        name: animal.name + 'Clone',
        species: animal.species,
        offspring: []
    };
    let value = cloneObj.name;
    animal.offspring.push(value);
    return cloneObj;
}
