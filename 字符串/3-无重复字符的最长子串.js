/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 */

// * 使用数组进行记录
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let arr = []

  for (let i = 0; i < s.length; i++) {
    const matchIndex = arr.indexOf(s[i])

    if (matchIndex < 0) {
      arr.push(s[i])
    } else {
      max = Math.max(max, arr.length)
      arr = [...arr.slice(matchIndex + 1), s[i]]
    }
  }

  return Math.max(max, arr.length)
}

// * 使用哈希表和双指针
var lengthOfLongestSubstring2 = function (s) {
  if (!s) return 0
  if (s.length === 1) return 1

  let obj = {}
  let slow = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
    const val = s[i]

    if (val in obj) {
      slow = Math.max(obj[val] + 1, slow)
      delete obj[val]
    }

    obj[val] = i
    max = Math.max(max, i - slow + 1)
  }

  return max
}

console.log(lengthOfLongestSubstring2("au"))
