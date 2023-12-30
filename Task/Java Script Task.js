function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  const missingNumber = expectedSum - actualSum;
  
  return missingNumber;
}

// Example usage:
const nums = [9,6,4,2,3,5,7,0,1];
const missingNumber = findMissingNumber(nums);
console.log("Missing Number:", missingNumber);
