/*
 * @Author: your name
 * @Date: 2021-03-20 15:15:36
 * @LastEditTime: 2021-03-20 15:20:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/手写代码/查找/二分查找边界.js
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

// left
function searchBound(nums, target) {
  if (nums.length === 0) return -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = ((left + right) / 2) | 0
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  return nums[left] === target ? left : -1
}

var data = [5, 7, 7, 8, 8, 10]

console.log(searchBound(data, 6))
