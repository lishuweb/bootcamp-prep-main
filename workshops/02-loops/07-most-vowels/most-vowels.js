// YOUR CODE BELOW
debugger;
function mostVowels(str)
{
    let vowels = "AEIOUaeiou";
    let currentChar;
    let currentWord = '';
    let currentVowelsCount = 0;
    let wordWithMostVowels = ''; 
    let mostVowelsCount = 0;
    for (let i = 0; i < str.length; i++) 
    {
      currentChar = str[i];
      currentWord += currentChar;

      if (vowels.includes(currentChar)) 
      {
        currentVowelsCount++;
      }
      
      if (currentChar === " " || currentChar === '.' || currentChar === ',') 
      {
        if (currentVowelsCount > mostVowelsCount)
        {
          currentWord = currentWord.slice(0,-1);
          wordWithMostVowels = currentWord;
          mostVowelsCount = currentVowelsCount;
          console.log(wordWithMostVowels);
        }
        currentWord = "";
        currentVowelsCount = 0;
      }
  }
  return wordWithMostVowels;
}
mostVowels();