/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 */

var isValid = function (s) {
  if (!s) {
    return true
  }

  if (s.length % 2 !== 0) {
    return false
  }

  var matchObj = {
    "}": "{",
    "]": "[",
    ")": "(",
  }

  var stack = []

  for (let i = 0; i < s.length; i++) {
    const val = s[i]
    if (matchObj.hasOwnProperty(val)) {
      if (stack.length > 0 && stack[stack.length - 1] === matchObj[val]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(val)
    }
  }

  return stack.length === 0
}

var isValid2 = function (s) {
  if (!s.length || s.length % 2 === 1) return false

  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const val = s[i]

    if (map[val]) {
      stack.push(map[val])
    } else {
      const lastestVal = stack.pop()
      if (lastestVal != val) return false
    }
  }

  return stack.length ? false : true
}
