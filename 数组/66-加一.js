/**
 * https://leetcode-cn.com/problems/plus-one/
 */

// 思路：最简单的就是从数组后面倒推，如果当前元素小于9则直接加一
// 如果等于9则当前元素为0，同时需要前一项需要+1
// 这里需要注意的是数组第一项为9且需要进1，需要在数组头部添加一个元素

var plusOne = function (digits) {
  var i = digits.length - 1
  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
        return digits
      }
      i++
    }
  }
}

// 优化：感觉理解起来很难，但是写法不是很合适

var plusOne2 = function (digits) {
  var i = digits.length - 1

  while (i >= 0) {
    digits[i]++
    //* 取余不等于10，可以直接返回
    if (digits[i] % 10 != 0) return digits
    // * 等于说明需要向前进一位
    digits[i] = 0
    i--
  }

  // * 执行到此处说明原数组的第一项元素也进1位，需要在数组头部再添加一个元素
  digits.unshift(1)

  return digits
}
