// YOUR CODE BELOW
function mostVowels(str)
{
    str = str + " ";
    let vowels = "AEIOUaeiou"
    let currentChar, currentWord, currentVowelsCount;
  let wordWithMostVowels = '', mostVowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];
    currentWord += currentChar;
    if (vowels.includes(currentChar)) currentVowelsCount++;
    if (currentChar === " ") {
      if (currentVowelsCount > mostVowelsCount) {
        wordWithMostVowels = currentWord;
        mostVowelsCount = currentVowelsCount;
      }
      currentWord = "";
      currentVowelsCount = 0;
    }
  }
  return wordWithMostVowels;
}
mostVowels();