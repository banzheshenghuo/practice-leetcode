/*
 * @Author: your name
 * @Date: 2021-02-27 08:48:48
 * @LastEditTime: 2021-02-27 11:39:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/字符串/7-整数反转.js
 */

// 思路：和反转字符串差不多，都是
// 1. 先判断正负
// 2. stirngify
// 3. 反转
// 4. 转换成数字
// 5. 加上符号
// 6. 判断范围

// split 和 join 方法记得有问题
// 字符串不能直接替换，需要转成数组

var reverse = function (x) {
  if (parseInt(x) === 0) return x

  const isPositive = Math.sign(x) > 0

  const s = `${parseInt(x)}`.split("")

  let i = 0
  let j = s.length - 1
  while (i < j) {
    const temp = s[i]
    s[i] = s[j]
    s[j] = temp

    i++
    j--
  }

  const resultNum = isPositive ? parseInt(s.join("")) : -parseInt(s.join(""))

  if (resultNum >= Math.pow(-2, 31) && resultNum <= Math.pow(2, 31) - 1) {
    return resultNum
  } else {
    return 0
  }
}

// 思路：如果能够用创建新的字符串，可以不使用对称交换的方法
// 直接在心的字符串上进行拼接

var reverse = function ()''

var result = reverse(-123)
console.log(result)
