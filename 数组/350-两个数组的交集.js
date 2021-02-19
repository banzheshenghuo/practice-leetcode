/*
 * @Author: your name
 * @Date: 2021-02-19 09:54:11
 * @LastEditTime: 2021-02-19 10:42:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/350-两个数组的交集.js
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */

// 思路：
// 使用哈希表，创建一个数组result作为最终输出，同时遍历两个数组，对于数组每一项执行一个检查方法，
// 第一个数组中的元素在map中为负数则push该元素到result，然后+1
// 第二个数组中的元素在mao中若是为正数则push进result，然后-1

var intersect = function (nums1, nums2) {
  var map = new Map()

  var result = []

  var i = 0
  var len = Math.max(nums1.length, nums2.length)

  while (i < len) {
    var val1 = nums1[i]
    var val2 = nums2[i]

    helper(val1, map, result, true)
    helper(val2, map, result, false)
    i++
  }

  return result
}

var helper = function (val, map, result, status) {
  if (val === undefined) return

  var score = map.has(val) ? map.get(val) : 0

  if (status) {
    if (score < 0) result.push(val)
    score++
  } else {
    if (score > 0) result.push(val)
    score--
  }
  map.set(val, score)
}

// 思路
// 先排序，然后使用双指针，找到相同的元素

var intersect1 = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  var i = 0
  var j = 0
  var result = []

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums2[j])
      i++
      j++
      continue
    }

    if (nums1[i] > nums2[j]) {
      j++
    } else {
      i++
    }
  }

  return result
}
