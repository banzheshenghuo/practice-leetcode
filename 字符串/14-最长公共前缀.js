/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * https://mp.weixin.qq.com/s/GvF7HoyxEnUuP-BXTM4kjA // 解答
 */

var longestCommonPrefix = function (strs) {
  if (!strs.length) return ""
  if (strs.length === 1) return strs[0]

  let result = strs[0]

  for (let i = 1; i < strs.length; i++) {
    const cur = strs[i]
    for (let j = 0; j < result.length; j++) {
      if (cur[j] !== result[j]) {
        if (j === 0) return ""

        result = result.slice(0, j)
      }
    }
  }

  return result
}
