let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW

debugger;
tacoCatInc.currentInventory = function()
{
  let total = 0;
  for (let key in this) 
  {
    if (key === 'cash') 
    {
      continue;
    }
    let items = this[key];
    for (let productName in items) 
    {
      let value = items[productName];
      total += value.cost * value.quantity;
    }
  }
  return total;
};

tacoCatInc.sale = function(order)
{
  let totalSales = 0;
  for (let key in order) 
  {
    let value = order[key];
    totalSales += this[key][value].cost;
    this.cash += this[key][value].cost;
    this[key][value].quantity--;
  }
  return totalSales;
};
