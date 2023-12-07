// YOUR CODE BELOW
let family = {
    'Beverly Marquez': {
        'Nina Rhone': {
            'William Rhodes': null,
            'Paul Nell': null,
            'Sir Paddington the Fourth, of the county Wilstonshire': null
        }
    }
};

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'

function getLongestName(family)
{
    let maxName = '';
    for(let name in family)
    {
        if(name.length > maxName.length)
        {
            maxName = name;
        }
        if(family[name])
        {
            let subName = getLongestName(family[name]);
            if(subName > maxName)
            {
                maxName = subName;
            }
        }
    }
    return maxName;
}

console.log(getLongestName(family = {
    'Beverly Marquez': {
        'Nina Rhone': {
            'William Rhodes': null,
            'Paul Nell': null,
            'Sir Paddington the Fourth, of the county Wilstonshire': null
        }
    }
}));