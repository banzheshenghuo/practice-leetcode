/**
 * https://leetcode-cn.com/problems/binary-search/
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  // 需要等于号，有可能left和right相等
  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0

    // 严格分清楚，每一种可能性都列出来
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  return -1
}
