// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const isAnagram = (s, t) => {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

const isAnagram2 = (s, t) => {
    // Check if the lengths of both strings are equal
    // If not, they can't be anagrams, so return false
    if (s.length !== t.length) return false;

    // Create an object to store character counts
    const count = {};

    // Count the occurrences of each character in string s
    for (let char of s) {
        // If the character exists, increment its count, otherwise set it to 1
        count[char] ? count[char]++ : count[char] = 1;
    }

    // Check if string t has the same character counts
    for (let char of t) {
        // If the character doesn't exist in count or its count is 0,
        // it means t has extra characters, so return false
        if (!count[char]) return false;
        // Decrement the count for the character
        count[char]--;
    }

    return true;
}

console.log(isAnagram2('anagram', 'nagaram'));

