// YOUR CODE BELOW
function backwardString(str)
{
    debugger
    if(str.length === 1)
    {
        console.log(str);
    }
    else 
    {
        let lastChar = str[str.length - 1];
        console.log(lastChar);
        str = str.slice(0,-1);
        backwardString(str);
    }
}

backwardString("hello");
