// YOUR CODE BELOW
function whosASpecial(specialPets)
{
    let finalString = [];
    specialPets.forEach(myPet);
    function myPet(objPet)
    {
        finalString.push(`${objPet.name} the ${objPet.species} is very special!`);
    }
    return finalString.join(' ');
   
}