// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

const addBinary = (a, b) => {
    let carry = 0;  // Initialize carry to 0
    let result = '';  // Initialize an empty string to store the result
    let i = a.length - 1;  // Initialize pointer for the end of string 'a'
    let j = b.length - 1;  // Initialize pointer for the end of string 'b'

    // Continue loop while there are digits to process in either string or there's a carry
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;  // Start with the carry from the previous iteration

        // Add the digit from string 'a' if available
        if (i >= 0) sum += parseInt(a[i--]);
        // console.log("Sum 1: ", sum);  // Debugging log

        // Add the digit from string 'b' if available
        if (j >= 0) sum += parseInt(b[j--]);
        // console.log("Sum 2: ", sum);  // Debugging log

        // Append the least significant bit of the sum to the result
        result = (sum % 2) + result;
        // console.log("Result: ", result);  // Debugging log

        // Calculate the new carry for the next iteration
        carry = Math.floor(sum / 2);
    }

    return result;  // Return the final binary sum as a string
};

// Test the function
console.log(addBinary('101011', '111011'));  // Expected output: "1100110"
