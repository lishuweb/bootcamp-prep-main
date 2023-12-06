// YOUR CODE BELOW
function isBadVersion(n) 
{
  let leftVal = 1;
  let rightVal = n;
  while (leftVal < rightVal) 
  {
    let midVal = Math.floor((leftVal + rightVal) / 2);
    if (isBadVersion(midVal)) 
    {
      rightVal = midVal;
    } 
    else 
    {
      leftVal = midVal + 1;
    }
    console.log(leftVal);
  }
};

isBadVersion(5);