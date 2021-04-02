/*
 * @Author: your name
 * @Date: 2021-02-17 10:38:16
 * @LastEditTime: 2021-02-17 11:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/189-旋转数组.js
 * https://leetcode-cn.com/problems/rotate-array/
 */

//  思路
//  应该叫移动数组吧，
//  直译就是取最后一个元素，然后添加到数组头部

var rotate = function (nums, k) {
  if (nums.length <= 1 || k === 0) return

  while (k) {
    nums.unshift(nums.pop())
    k--
  }
}
