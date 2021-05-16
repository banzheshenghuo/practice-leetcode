/*
 * @Author: your name
 * @Date: 2021-03-26 20:12:04
 * @LastEditTime: 2021-03-26 20:12:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/手写代码/模拟实现/函数调用累加.js
 */

function helper(arg) {
  if (arg.length === 0) return 0
  if (arg.length === 1) return arg[0]

  return arg.reduce((a, b) => a + b)
}

function add(...a) {
  let sum = helper(a)

  const handler = (...b) => {
    if (b.length === 0) return sum
    sum = sum + helper(b)
    return handler
  }

  handler.valueOf = () => {
    return sum
  }

  return handler
}
