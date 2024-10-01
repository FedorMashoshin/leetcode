// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const groupAnagrams = function (strs) {
    const map = new Map();
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }

    // const result = [];
    // for (const v of map.values()) {
    //     result.push(v);
    // }
    // return result;

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));