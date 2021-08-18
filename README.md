1. Program will break text input into an array, where each word (without spaces) is its own element in the array.

* For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

2. Program will check each word in the array for a beginning vowel.
3. If finding a vowel, program will add "way" to the end of the word

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

2. Program will check the first letters in the word for consonants.
3. If one or more consonants is found, program will add the consonants to the end of the word and then add "ay" to the end.

* If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."

2. Program will check the first letters in words for consonants inlcuding "qu".
3. If "qu" is found in the first consonants, any cosonants in front of "qu" will be added to the end of the word.
4. Program will then add "ay" to the end of the word.

## Test

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will check that the word is a vowel."
Code: pigLatin("a");
Expected Output: `true`

Test: "It will check first letter of word is a vowel and add "way" to the end."
Code: pigLatin("he is");
Expected Output: "he isway"

Test: "It will check if first letter of word is a consonant and add first letter and "ay" to the end."
Code: pigLatin("he is");
Expected Output: "ehay isway"

Test: "It will check if first two letters are "qu" and add "qu" and "ay" to the end."
Code: pigLatin("quick");
Expected Output: "ickquay"

Describe: letterVowel()

Test: "It will check that the first letter of word is a vowel."
Code: letterVowel("ah");
Expected Output: `true`


Describe: letterConsonant()

Test: "It will check that the word is a consonant."
Code: letterConsonant("b");
Expected Output: `true`


Describe: quConsonant()

Test: "It will check if first two letters are "qu"."
Code: quConsonant("qu");
Expected Output: `true`