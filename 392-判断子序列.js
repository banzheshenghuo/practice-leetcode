// https://leetcode-cn.com/problems/is-subsequence/

// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 示例 1:
// s = "abc", t = "ahbgdc"

// 返回 true.

// 示例 2:
// s = "axc", t = "ahbgdc"

// 返回 false.

// 思路：
// 使用双指针main和sub指向长字符串和短字符串，遍历长字符串，当字符与短字符串相同时，main和sub同时递增，否则只有main递增，
// 遍历完成后，查看sub是否等于短字符串长度，如果等于说明属于长字符串

// 优化
// 在遍历长字符串过程中，如果sub已经满足等于短字符串长度，那么直接返回true

function isSubsequence(s, t) {
  if (s.length === 0) return true
  if (t.length === 0 || s.length > t.length) return false

  let main = 0,
    sub = 0

  while (main < t.length) {
    if (s[sub] === t[main]) {
      sub++
      if (sub === s.length) return true
    }
    main++
  }

  return false
}

console.log(isSubsequence("axc", "ahbgdc"))
