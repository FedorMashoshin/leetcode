// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    };
    // if we reach here, it means all digits are 9 (we've set them to 0), so we need to add a 1 to the beginning of the array
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1, 2, 9])); 