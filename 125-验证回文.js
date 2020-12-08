// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

// 链接：https://leetcode-cn.com/problems/valid-palindrome

// 思路：
// 1. 其实真正去验证很简单，双指针一前一后相同就行
// 2. 但是首先要处理接收的字符串，题目要求只接收字母和空字符串，其他的都应该去掉

// 主要就是正则 \w匹配，非数字、非字母和非下划线，所以要加上 _

var isPalindrome = function (s) {
  // 首先统一大小写
  const str = s.replace(/[\W|_]/g, "").toLowerCase()

  let i = 0,
    j = str.length - 1

  while (i < j) {
    if (str[i] != str[j]) {
      return false
    }
    i++
    j--
  }

  return true
}

var prarams = "A man, a plan, a canal: Panama"

isPalindrome(prarams)
