/*
 * @Author: your name
 * @Date: 2021-03-26 20:22:34
 * @LastEditTime: 2021-03-26 20:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/fib.js
 */

function fib(n) {
  if (n <= 1) return n

  return fib(n - 1) + fib(n - 2)
}

function fib2(n) {
  if (n <= 1) return n

  const arr = new Array(n)
  arr[0] = 0
  arr[1] = 1

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}

function fib3(n) {
  if (n <= 1) return n

  let a = 1
  let b = a + 0

  for (let i = 2; i < n; i++) {
    const temp = b + a
    a = b
    b = temp
  }
  return b
}

console.log(fib2(2))
