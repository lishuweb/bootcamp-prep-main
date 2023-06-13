// YOUR CODE BELOW
function makeGrid(numColumns, numRows) 
{
    let newArray = [];
    for (let i=0; i<numRows; i++) 
    {
        let newRow = [];
        for (let j=0; j<numColumns; j++) 
        {
            newRow.push(j + 1);
        }
        newArray.push(newRow);
    }
      return newArray;
  }
makeGrid();