/*
 * @Author: your name
 * @Date: 2021-03-20 13:43:34
 * @LastEditTime: 2021-03-20 14:39:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/手写代码/查找/二分查找.js
 * https://leetcode-cn.com/problems/binary-search/submissions/
 */

function binarySearch(nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0
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
