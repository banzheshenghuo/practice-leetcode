/**
 * 题目：https://leetcode-cn.com/problems/single-number/
 */

// * 不适用位运算符，不满足题意
var singleNumber = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b)

  let i = 0
  let j = 1
  while (i < sortedNums.length && j < sortedNums.length) {
    if (sortedNums[i] !== sortedNums[j]) {
      return sortedNums[i]
    }

    i = i + 2
    j = j + 2
  }

  return sortedNums[i]
}

var singleNumber2 = function (nums) {
  let i = 0
  let result = 0
  while (i < nums.length) {
    result = nums[i++] ^ result
  }

  return result
}
