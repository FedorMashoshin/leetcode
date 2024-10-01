// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = function (nums, k) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const sorted = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
    console.log(sorted);
    return sorted.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));