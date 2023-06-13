let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(objectChar)
{
    let objChar = {};
    for(let i=0; i<letters.length; i++)
    {
        let currentLetter = letters[i];
        let currentChar = leetChars[i];

        objChar[currentLetter] = currentChar;
    }
    let currentString = '';
    for(let i =0; i<objectChar.length; i++)
    {
        let letter = objectChar[i].toLowerCase();
        let currentChar = objChar[currentLetter];
        currentString += currentChar;
    }
    return currentString;
}