// YOUR CODE BELOW
function functionLogger(callback, argument) 
{
    console.log('Function running');
    let myFunc = callback(argument);
  
    console.log('Function complete');
    return myFunc;
}


