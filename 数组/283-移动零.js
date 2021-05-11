/*
 * @Author: your name
 * @Date: 2021-02-19 11:59:46
 * @LastEditTime: 2021-02-19 15:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/283-移动零.js
 * https://leetcode-cn.com/problems/move-zeroes/
 */

//  思路：
//  第一个想的肯定就是遍历数组，然后发现有0就先splice,然后在数组最后push一个0

//  使用双指针，i和j，用来记录非零的下标，然后将至j部分的都修改为0

var moveZeroes = function (nums) {
  if (nums.length <= 1) return

  var i = 0
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j]
      i++
    }
  }

  while (i < nums.length) {
    nums[i] = 0
    i++
  }
}

// 相对方案一的升级版，只需要一次循环
var moveZeroes1 = function (nums) {
  let len = nums.length
  let i = 0

  while (i < len) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      len--
    } else {
      i++
    }
  }
  return nums
}

// 利用快排的思想
var moveZeroes2 = function (nums) {
  if (nums.length <= 1) return

  var j = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i !== j) {
        nums[j++] = nums[i]
        nums[i] = 0
      } else {
        j++
      }
    }
  }
}

// 快慢指针或者叫读写指针，比上面好理解些。
// fast是读指针，slow是写指针，当读指针不为0时，赋值给写指针
var moveZeroes3 = function (nums) {
  if (!nums.length) return nums

  let s = 0
  for (let f = 0; f < nums.length; f++) {
    if (nums[f] !== 0) {
      nums[s] = nums[f]
      s++
    }
  }

  for (; s < nums.length; s++) {
    nums[s] = 0
  }

  return nums
}
