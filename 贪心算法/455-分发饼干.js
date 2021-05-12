// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 输入: g = [1,2,3], s = [1,1]
// 输出: 1
// 输入: g = [1,2], s = [1,2,3]
// 输出: 2

// 思路：
// 饼干和小孩的分配，尽可能的将饼干分配给小孩，饼干的值只能大于等于小孩的胃口值。
// 先从小到大排序，双指针遍历

function findContentChildren(g, s) {
  if (s.length === 0) return 0
  const sortedG = g.sort((a, b) => a - b)
  const sortedS = s.sort((a, b) => a - b)

  let i = 0,
    j = 0

  while (i < sortedG.length && j < sortedS.length) {
    const gValue = sortedG[i]
    const sValue = sortedS[j]

    if (gValue > sValue) {
      j++
    } else if (gValue <= sValue) {
      j++
      i++
    }
  }

  return i
}

var a = [10, 9, 8, 7]
var b = [5, 6, 7, 8]

console.log(findConentChildren(a, b))
