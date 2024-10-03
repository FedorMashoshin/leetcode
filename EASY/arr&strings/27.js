// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

const removeElement = function (nums, val) {
    // Initialize a pointer 'i' to keep track of the position where non-val elements should be placed
    let i = 0;
    // Iterate through the array
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            // Increment 'i' to prepare for the next non-val element
            i++;
        }
        console.log(nums);
    }
    return i;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/*
Initial array: [ 0, 1, 2, 2, 3, 0, 4, 2 ]
Value to remove: 2

Checking index 0: 0
Moving 0 to index 0
Current array state: [ 0, 1, 2, 2, 3, 0, 4, 2 ]

Checking index 1: 1
Moving 1 to index 1
Current array state: [ 0, 1, 2, 2, 3, 0, 4, 2 ]

Checking index 2: 2
Skipping 2 (matches val)
Current array state: [ 0, 1, 2, 2, 3, 0, 4, 2 ] 

Checking index 3: 2
Skipping 2 (matches val)
Current array state: [ 0, 1, 2, 2, 3, 0, 4, 2 ]

Checking index 4: 3
Moving 3 to index 2
Current array state: [ 0, 1, 3, 2, 3, 0, 4, 2 ]

Checking index 5: 0
Moving 0 to index 3
Current array state: [ 0, 1, 3, 0, 3, 0, 4, 2 ]

Checking index 6: 4
Moving 4 to index 4
Current array state: [ 0, 1, 3, 0, 4, 0, 4, 2 ]

Checking index 7: 2
Skipping 2 (matches val)
Current array state: [ 0, 1, 3, 0, 4, 0, 4, 2 ]

Final modified array: [ 0, 1, 3, 0, 4 ]
Number of elements not equal to val: 5
Result: 5
*/