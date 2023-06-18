let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(objectChar)
{
   let newWord = [];
   let value = [];
   for(let i=0; i<letters.length; i++)
   {
        if(newWord[i] === letters[i])
        {
            value = i;
        }
   }
   for(let i=0; i<leetChars.length; i++)
   {
        if(value[i] === leetChars[i])
        {
            newWord = leetChars[i];
        }
   }
   for(let i=0; i<objectChar.length; i++)
   {
    let l = objectChar[i]. toLowerCase();
   }
   return newWord.join();
}
leetTranslator("Lishu");