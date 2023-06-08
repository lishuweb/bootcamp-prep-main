// Edit the code below
debugger;

let earth = 'Planet Earth';
function fullstackHQ()
{
  return middleFunction('United States');

  function middleFunction(value1) 
  {
    return innerFunction('New York State');

    function innerFunction(value2) 
    {
      place = 'New York City';
      return innermostFunction();

      function innermostFunction() 
      {
        return 'Fullstack HQ is at ' + earth + ', ' + value1 + ', ' + value2 + ', ' + place;
      }
    }
  }
}
fullstackHQ();
