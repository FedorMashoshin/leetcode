// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

var productExceptSelf = function (nums) {
    const n = nums.length;
    const result = new Array(n).fill(1); // Initialize the result array with 1s

    // Step 1: Calculate the prefix product for each element
    let prefix = 1; // This variable will hold the product of all elements to the left of the current index
    for (let i = 0; i < n; i++) {
        result[i] = prefix; // Store the current prefix product in the result array
        prefix *= nums[i];  // Update the prefix product by multiplying with the current element
    }
    console.log('prefix', result);

    // Step 2: Calculate the suffix product and multiply with the prefix product
    let suffix = 1; // This variable will hold the product of all elements to the right of the current index
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix; // Multiply the current result by the suffix product
        suffix *= nums[i];   // Update the suffix product by multiplying with the current element
    }
    console.log('suffix', result);

    return result; // Return the result array
};

productExceptSelf([1, 2, 3, 4]);
