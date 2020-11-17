// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。

// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

// 思路
// 遍历t，将遍历的字符作为key，出现的次数作为value储存在一个map中
// 然后在遍历t，当出现key相同时变value -1
// 最终剩下的那个key就是随机添加的字母

function findTheDifference(s, t) {
  const map = new Map()

  for (const chart of t) {
    let value = map.has(chart) ? map.get(chart) : 0
    map.set(chart, value + 1)
  }

  for (const chart of s) {
    let value = map.get(chart)
    if (value === 1) {
      map.delete(chart)
    } else {
      map.set(chart, value - 1)
    }
  }

  return [...map.keys()][0]
}

const result = findTheDifference("abcd", "abcde")
console.log("result", result)
