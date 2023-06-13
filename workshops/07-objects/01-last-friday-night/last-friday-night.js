
function lastFridayNight(transactions)
{
    let totalAmount = 0;
    
    for(let i=0; i<transactions.length; i++)
    {
        let transaction = transactions[i];
        totalAmount += transaction.amount;
    }
    return totalAmount;
}
lastFridayNight();
