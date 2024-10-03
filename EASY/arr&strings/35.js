// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

/*

Test case 1:
Searching for 5 in [1,3,5,6]
Left: 0, Right: 3, Mid: 1, Mid value: 3
3 < 5, searching right half [5, 6]  
Left: 2, Right: 3, Mid: 2, Mid value: 5
Target 5 found at index 2
2

Test case 2:
Searching for 2 in [1,3,5,6]
Left: 0, Right: 3, Mid: 1, Mid value: 3
3 > 2, searching left half [1]
Left: 0, Right: 0, Mid: 0, Mid value: 1
1 < 2, searching right half [3, 5, 6]
Target 2 not found. Insertion point: 1
1

Test case 3:
Searching for 8 in [1,3,5,7,9,11,13]
Left: 0, Right: 6, Mid: 3, Mid value: 7
7 < 8, searching right half [9, 11, 13]
Left: 4, Right: 6, Mid: 5, Mid value: 11
11 > 8, searching left half [9]
Left: 4, Right: 4, Mid: 4, Mid value: 9
9 > 8, searching left half []
Target 8 not found. Insertion point: 4
4

Test case 4 (more complex):
Searching for 14 in [1,3,5,7,9,11,13,15,17,19]
Left: 0, Right: 9, Mid: 4, Mid value: 9
9 < 14, searching right half [11, 13, 15, 17, 19]
Left: 5, Right: 9, Mid: 7, Mid value: 15
15 > 14, searching left half [11, 13]
Left: 5, Right: 6, Mid: 5, Mid value: 11
11 < 14, searching right half [13]
Left: 6, Right: 6, Mid: 6, Mid value: 13
13 < 14, searching right half []
Target 14 not found. Insertion point: 7
7
*/
