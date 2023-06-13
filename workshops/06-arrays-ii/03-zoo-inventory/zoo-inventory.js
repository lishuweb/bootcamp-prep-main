// YOUR CODE BELOW
function zooInventory(arrayAnimal)
{
    let sentence = [];
    for(let i=0; i<arrayAnimal.length; i++)
    {
        // let words = arrayAnimal[i];
        let keyWords = arrayAnimal[i];
        let name = keyWords[0];
        let species = keyWords[1][0];
        let age = keyWords[1][1];

        let word = `${name} the ${species} is ${age}.`
        sentence.push(word);
    }
     return sentence;
}
zooInventory();