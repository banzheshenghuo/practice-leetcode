/**
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */
// * js 的 特性解法
var replaceSpace = function (s) {
  return s.split(" ").join("%20")
}

// * 遍历赋值
var replaceSpace2 = function (s) {
  let result = ""

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result = result + "%20"
    } else {
      result = result + s[i]
    }
  }

  return result
}
