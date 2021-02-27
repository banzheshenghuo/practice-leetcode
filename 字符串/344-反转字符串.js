/*
 * @Author: your name
 * @Date: 2021-02-27 08:35:11
 * @LastEditTime: 2021-02-27 08:47:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/字符串/344-反转字符串.js
 * https://leetcode-cn.com/problems/reverse-string/
 */

// 思路，第一个想到就是双指针一头一尾中间遍历，交换元素
// 对称交换

var revereString = function (s) {
  if (s.length <= 1) return s

  let i = 0
  let j = s.length - 1

  while (i < j) {
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp

    i++
    j--
  }

  return s
}

var result = revereString(["h", "e", "l", "l", "o"])
console.log("result", result)
