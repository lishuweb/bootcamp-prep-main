// YOUR CODE BELOW
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
