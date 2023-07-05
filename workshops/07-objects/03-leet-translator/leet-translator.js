let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(string) 
{
    let leetDict = {};
    let newWord = '';
    
    for (let i = 0; i < letters.length; i++) 
    {
        let currentLetter = letters[i];
        let currentLeetChar = leetChars[i];
        leetDict[currentLetter] = currentLeetChar;
    }
    
    for (let j = 0; j < string.length; j++) 
    {
        let currentStringChar = string[j].toLowerCase();
        newWord += leetDict[currentStringChar];
    }
    return newWord;
  }
