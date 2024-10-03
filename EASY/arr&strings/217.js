// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
const containsDuplicate = function (nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};

const containsDuplicate2 = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1, 4, 2, 3, 4]));
