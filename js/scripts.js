function letterVowel(word) {
  let str = word;
  if ( str.charAt(0) === "a" || str.charAt(0) ==="e" || str.charAt(0) === "i" || str.charAt(0) === "i" || str.charAt(0) === "o" || str.charAt(0) === "u") {
    return true;
  } else {
    return false;
  }
}

function pigLatin(text) {
  const wordArray = text.toLowerCase().split(" ");
  let pigLatinArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (letterVowel(wordArray[i])) {
      pigLatinArray.push(wordArray[i] + "way");
    } else {
      pigLatinArray.push(wordArray[i]);
    }
  }
  return pigLatinArray;
}

function space(sentence) {
  if (sentence.includes(" ")){
    return true;
  } else {
    return false;
  }
}