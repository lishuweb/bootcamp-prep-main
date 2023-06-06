// YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum)
{
    let numberOfMinutes = 0;
    if(targetNum<currentNum)
    {
        return 'targetNum must be larger than currentNum';
    }
    else
    {
        for(let i=currentNum; i<targetNum; i*=2)
        {
            numberOfMinutes += 20;
        }
        return numberOfMinutes;
    } 
}
bacteriaTime(1,8);