/**
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// * 运用二分法的查找左右边界模板代码

var searchRange = function (nums, target) {
  const lIndex = searchLeftBound(nums, target)
  const rIndex = searchRightBound(nums, target)
  return [lIndex, rIndex]
}

function searchLeftBound(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + (r - l) / 2) | 0

    if (nums[mid] >= target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return nums[l] === target ? l : -1
}

function searchRightBound(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + (r - l) / 2) | 0

    if (nums[mid] <= target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return nums[r] === target ? r : -1
}
