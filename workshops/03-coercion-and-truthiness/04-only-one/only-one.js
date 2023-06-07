// YOUR CODE BELOW
function onlyOne(type1, type2, type3)
{
    if(type1 && !type2 && !type3)
    {
        return true;
    }
    if(!type1 && type2 && !type3)
    {
        return true;
    }
    if(!type1 && !type2 && type3)
    {
        return true;
    }
    return false;
}
onlyOne();