// YOUR CODE BELOW
// ### Remove Columns

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */
// ```
function removeColumns(originalGrid, numColums)
{
    for(let i=0; i<originalGrid.length; i++)
    {
        for(let j=0; j<numColums; j++)
        {
            originalGrid[i].pop();
            // continue;
        }
    }
    return originalGrid;
}   
removeColumns();
