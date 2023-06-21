// YOUR CODE BELOW
function myOr(type1, type2, type3)
{
    if(type1)
    {
        return type1;
    }
    if(type2)
    {
        return type2;
    }
    if(type3)
    {
        return type3;
    }
    return type3;
}
myOr();

function myAnd(type1, type2, type3)
{
    if(!type1)
    {
        return type1;
    }
    if(!type2)
    {
        return type2;
    }
    if(!type3)
    {
        return type3;
    }
    return type3;
}
myAnd();
