// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

const removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

/*
Initial array: [ 1,  1,  2,  5,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]

Comparing nums[0] (1) with nums[1] (1)
Duplicate found, skipping
Current array: [ 1,  1,  2,  5,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 1
---
Comparing nums[0] (1) with nums[2] (2)
Unique element found. Moving 2 to index 1
Current array: [ 1,  2,  2,  5,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 2
---
Comparing nums[1] (2) with nums[3] (5)
Unique element found. Moving 5 to index 2
Current array: [ 1,  2,  5,  5,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 3
---
Comparing nums[2] (5) with nums[4] (5)
Duplicate found, skipping
Current array: [ 1,  2,  5,  5,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 3
---
Comparing nums[2] (5) with nums[5] (5)
Duplicate found, skipping
Current array: [ 1,  2,  5,  5,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 3
---
Comparing nums[2] (5) with nums[6] (6)
Unique element found. Moving 6 to index 3
Current array: [ 1,  2,  5,  6,  5,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 4
---
Comparing nums[3] (6) with nums[7] (7)
Unique element found. Moving 7 to index 4
Current array: [ 1,  2,  5,  6,  7,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 5
---
Comparing nums[4] (7) with nums[8] (7)
Duplicate found, skipping
Current array: [ 1,  2,  5,  6,  7,  5, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 5
---
Comparing nums[4] (7) with nums[9] (8)
Unique element found. Moving 8 to index 5
Current array: [ 1,  2,  5,  6,  7,  8, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 6
---
Comparing nums[5] (8) with nums[10] (8)
Duplicate found, skipping
Current array: [ 1,  2,  5,  6,  7,  8, 6, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 6
---
Comparing nums[5] (8) with nums[11] (9)
Unique element found. Moving 9 to index 6
Current array: [ 1,  2,  5,  6,  7,  8, 9, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 7
---
Comparing nums[6] (9) with nums[12] (9)
Duplicate found, skipping
Current array: [ 1,  2,  5,  6,  7,  8, 9, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 7
---
Comparing nums[6] (9) with nums[13] (9)
Duplicate found, skipping
Current array: [ 1,  2,  5,  6,  7,  8, 9, 7,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 7
---
Comparing nums[6] (9) with nums[14] (10)
Unique element found. Moving 10 to index 7
Current array: [ 1,  2,  5,  6,  7,  8, 9, 10,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 8
---
Comparing nums[7] (10) with nums[15] (10)
Duplicate found, skipping
Current array: [ 1,  2,  5,  6,  7,  8, 9, 10,  7,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 8
---
Comparing nums[7] (10) with nums[16] (11)
Unique element found. Moving 11 to index 8
Current array: [ 1,  2,  5,  6,  7,  8, 9, 10, 11,  8,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 9
---
Comparing nums[8] (11) with nums[17] (12)
Unique element found. Moving 12 to index 9
Current array: [ 1,  2,  5,  6,  7,  8, 9, 10, 11, 12,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 10
---
Comparing nums[9] (12) with nums[18] (12)
Duplicate found, skipping
Current array: [ 1,  2,  5,  6,  7,  8, 9, 10, 11, 12,  8,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 10
---
Comparing nums[9] (12) with nums[19] (13)
Unique element found. Moving 13 to index 10
Current array: [ 1,  2,  5,  6,  7,  8, 9, 10, 11, 12, 13,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Current unique count: 11
---
Final array: [ 1,  2,  5,  6,  7,  8, 9, 10, 11, 12, 13,  9,  9, 9, 10, 10, 11, 12, 12, 13 ]
Number of unique elements: 11 
*/