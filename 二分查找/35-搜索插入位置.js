/**
 * https://leetcode-cn.com/problems/search-insert-position/
 */

// 用到了二分法查找左边界的模板代码
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = (left + (right - left) / 2) | 0

    if (nums[mid] >= target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  return left
}
