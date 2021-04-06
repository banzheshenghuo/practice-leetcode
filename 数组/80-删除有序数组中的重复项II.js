/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 */

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length

  let slow = 2
  let fast = 2

  while (fast < nums.length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }

    fast++
  }

  nums.length = slow

  return slow
}

const data = [1, 1, 1, 2, 2, 3]

console.log(removeDuplicates(data))
