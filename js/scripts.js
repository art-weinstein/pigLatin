function pigLatin(word) {
  if (word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u")) {
    return word + "way";
  }
}