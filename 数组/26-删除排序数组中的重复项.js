/*
 * @Author: your name
 * @Date: 2021-02-17 09:04:18
 * @LastEditTime: 2021-03-22 10:19:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/26-删除排序数组中的重复项.js
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

//! 方案一
//  思路：最简单的就是先排序，使得重复项相邻（这里已经是升序就不用排了）
//  然后设置快慢，
//  - 如果快指针和慢指针对应的项相同，则删除快指针所在项。
//  - 如果不同则同时进一项
// 最终得到的数组就是去重后的数组

var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length

  var i = 0
  var j = 1

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1)
    } else {
      i++
      j++
    }
  }
  return nums.length
}

//! 方案二
//使用set数据结构去除重复项
// 但是这样不是在原数组上修改
var removeDuplicates2 = function (nums) {
  return [...new Set(nums)]
}

// ! 方案三
// 和第一种有点类似，但是不是每次都删除元素，而是将不重复的项前移
// 设置 i j 两个指针，如果 j位置所在的元素和i位置所在的元素相等，则将i+1的位置元素复制为j所在的元素，然后同时进1，
// 如果不相等，则j++
// 最终取数组长度为 i+1 的部分为最终

var removeDuplicates3 = function (nums) {
  if (nums.length <= 1) return nums.length

  var i = 0
  var j = 1

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      if (j - i > 1) {
        nums[i + 1] = nums[j]
      }
      i++
      j++
    }
  }

  return (nums.length = i + 1)
}

// ! 方案四
// 使用哈希表，然后遍历数组，先查看元素是否在哈希表，如果出现则删除，如果没有则跳过并加入存入哈希表
var removeDuplicates4 = function (nums) {
  if (nums.length <= 1) return nums.length

  const obj = {}

  let i = 0
  while (i < nums.length) {
    if (obj[nums[i]]) {
      nums.splice(i, 1)
    } else {
      obj[nums[i]] = true
      i++
    }
  }

  return nums.length
}

var result = removeDuplicates5([1, 2, 2, 3, 3, 4, 7])

console.log(result)

function removeDuplicates5(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr

  arr.sort((a, b) => a - b)

  let i = 0
  let j = 1

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++
    } else {
      if (j - i != 1) {
        arr[i + 1] = arr[j]
      }
      i++
      j++
    }
  }

  arr.length = i + 1
  return arr
}
