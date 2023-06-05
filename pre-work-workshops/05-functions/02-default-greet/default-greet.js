// YOUR CODE BELOW

function defaultGreet(firstName, lastName)
{
    if(lastName === undefined)
    {
        lastName = "Doe";
    }
    return "Hi" + " " +firstName + " " +lastName + "!";
}
defaultGreet();