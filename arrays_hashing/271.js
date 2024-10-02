// Design an algorithm to encode a list of strings to a single string. The encoded string should be able to be decoded back to the original list of strings.

// Implement two functions:
// 1. ** encode(List < String > strs) **: Encodes a list of strings to a single string.
// 2. ** decode(String s) **: Decodes the encoded string back to a list of strings.

// Example:
// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]

// Encoder: Converts an array of strings into a single string
var encode = function (strs) {
    return strs.map(str => str.length + "#" + str).join('');
};

// Decoder: Converts a single string back into an array of strings
var decode = function (s) {
    let res = [];
    let i = 0;

    while (i < s.length) {
        let j = i;

        // Find the '#' to extract the length
        while (s[j] !== '#') {
            j++;
        }

        // Extract the length of the current string
        let length = parseInt(s.slice(i, j));

        // Extract the string using the extracted length
        let str = s.slice(j + 1, j + 1 + length);
        res.push(str);

        // Move i to the next encoded string
        i = j + 1 + length;
    }

    return res;
};

