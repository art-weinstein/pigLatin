function letterVowel(word) {
  let str = word;
  if ( str.charAt(0) === "a" || str.charAt(0) ==="e" || str.charAt(0) === "i" || str.charAt(0) === "i" || str.charAt(0) === "o" || str.charAt(0) === "u") {
    return true;
  } else {
    return false;
  }
}

function letterConsonant(word){
  if (letterVowel(word) === false){
    return true;
  }  else {
    return false;
  }
}

function quConsonant(word) {
  if (word.charAt(0) === "q" && word.charAt(1) === "u" && letterVowel(word) === false){
    return true;
} else {
  return false;
}
}

function ifPunctuation(word) {
  const punctArray = ["!", ".", ",", "/", "?", "-", "(", ")"];
  for (let i = 0; i < punctArray.length; i++) {
    if (word.includes(punctArray[i])) {
      const punctType = punctArray[i];
      const indexOfPunct = word.indexOf(punctType);
      return [true, indexOfPunct];
    } else {
      return false;
    }
  }
}

//   for (let i = 0; i < wordArray.length; i++) {
//     if(letterVowel(wordArray[i]) && ifPunctuation(wordArray[i])){
//       const movePunct = wordArray[i].slice(indexOfPunct);
//       pigLatinArray.push(wordArray[i] + "way" + movePunct);
//     } else if (letterVowel(wordArray[i])) {
//     pigLatinArray.push(wordArray[i] + "way");
//   } else if (quConsonant(wordArray[i])) {
//       const constQU = wordArray[i].charAt(0) + wordArray[i].charAt(1);
//       const wordBody = wordArray[i].slice(2);
//       pigLatinArray.push(wordBody + constQU + "ay");
//     } else if (letterConsonant(wordArray[i])){
//       const firstLetter = wordArray[i].charAt(0);
//       const wordBody = wordArray[i].slice(1);
//       pigLatinArray.push(wordBody + firstLetter + "ay");
//     } else {
//       pigLatinArray.push(wordArray[i]);
//     }
//   }
//   return pigLatinArray;
// }




function pigLatin(text) {
  const wordArray = text.toLowerCase().split(" ");
  let pigLatinArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (letterVowel(wordArray[i]) && ifPunctuation(wordArray[i])) {
      const punctIndex = ifPunctuation(wordArray[i])[1];
      const movePunct = wordArray[i].slice(punctIndex);
      pigLatinArray.push(wordArray[i] + "way" + movePunct);
    } else if (quConsonant(wordArray[i])) {
      const constQU = wordArray[i].charAt(0) + wordArray[i].charAt(1);
      const wordBody = wordArray[i].slice(2);
      pigLatinArray.push(wordBody + constQU + "ay");
    } else if (letterConsonant(wordArray[i])){
      const firstLetter = wordArray[i].charAt(0);
      const wordBody = wordArray[i].slice(1);
      pigLatinArray.push(wordBody + firstLetter + "ay");
    } else {
      pigLatinArray.push(wordArray[i]);
    }
  }
  return pigLatinArray;
}