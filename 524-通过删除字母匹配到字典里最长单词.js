// 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。
// 链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting

// 输入:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// 输出:
// "apple"

// 输入:
// s = "abpcplea", d = ["a","b","c"]

// 输出:
// "a"

// 思路：
// 第一个想的就是遍历字典，判断字典中的字符是否可以通过删除指定字符串的字符得到
// 如果能得到，那么记录字典字符串的索引和长度。

// 疑问
// 但是到底是最长还是顺序靠前？应该是先判断长度，如果长度相同再取顺序

// 那么就只有一个问题了，如果判断字符串可以由指定字符删除一些字符后获取
// 先遍历指定字符，是否有和当前字符匹配
// - 没有则返回空
// - 有则返回对应

// 遗漏
// 是字典序而不是下标序 可以根据unicode进行排序

// 优化，看还有没有多解，现在速度有点慢

function findLongestWord(s, d) {
  if (!s || d.length === 0) return ""

  let result = ""

  for (let i = 0, len = d.length; i < len; i++) {
    const char = d[i]
    let first = 0 // 对应目标字符串
    let second = 0 // 对应字典字符串

    while (first < s.length) {
      if (s[first] === char[second]) {
        second++
      }
      first++
    }

    if (second !== char.length) continue

    if (result.length < char.length) {
      result = char
    } else if (result.length === char.length) {
      // 字典序
      let i = 0
      while (i < result.length) {
        const originCharCode = result[i].charCodeAt()
        const newCharCode = char[i].charCodeAt()
        if (originCharCode < newCharCode) {
          break
        } else if (originCharCode > newCharCode) {
          result = char
          break
        }
        i++
      }
    }
  }

  return result
}

var a = "bab"
var b = ["ba", "ab"]
console.log(findLongestWord(a, b))
