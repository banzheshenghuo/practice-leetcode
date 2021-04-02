/*
 * @Author: your name
 * @Date: 2021-02-19 09:42:30
 * @LastEditTime: 2021-02-19 09:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/136-只出现一次的数字.js
 * https://leetcode-cn.com/problems/single-number/
 */

var singleNumber = function (nums) {
  var list = nums.sort()
  var j = 1

  while (j < list.length) {
    if (list[j - 1] !== list[j]) return list[j - 1]
    while (list[j] === list[j - 1]) {
      j++
    }
    j++
  }
}

console.log(singleNumber([2, 2, 3, 1, 1]))
