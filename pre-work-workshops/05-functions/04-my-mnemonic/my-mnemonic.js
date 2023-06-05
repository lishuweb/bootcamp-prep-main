// YOUR CODE BELOW

function myMnemonic(str1,str2,str3,str4)
{
    let newString = '';
    if(str1 !== undefined)
    {
        newString += str1[0];
    }
    if(str2 !== undefined)
    {
        newString += str2[0];
    }
    if(str3 !== undefined)
    {
        newString += str3[0];
    }
    if(str4 !== undefined)
    {
        newString += str4[0];
    }
    
    return newString;
}
myMnemonic();