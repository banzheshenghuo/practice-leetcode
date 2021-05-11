/**
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()

  let i = 0
  while (i < nums.length) {
    const val = nums[i]
    if (map.has(val) && i - map.get(val) <= k) {
      return true
    }

    map.set(val, i)
    i++
  }

  return false
}
