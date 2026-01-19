// Frequency Counter - validAnagram 
// Given two strings, write a function to determine if the 
// second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by 
// rearranging the letters of another, such as cinema, 
// formed from iceman.

function validAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;

    const lookupCounter = {};

    // count letters in str1
    for (let char of str1) {
        lookupCounter[char] = (lookupCounter[char] || 0) + 1;
    }

    // subtract using str2
    for (let char of str2) {
        if (!counter[char]) {
            return false;
        }
        counter[char]--;
    }

    return true;

}


