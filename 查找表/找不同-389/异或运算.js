// 规则：
// 一个数和0进行异或运算等于本身 a ^ 0 = a
// 一个数和本身做异或运算等于0  a ^ a = 0
// 异或运算满足交换律和结合律 a ^ b ^ a = a ^ a ^ b == 0 ^ b == b

function findTheDifference(s, t) {
  let i = 0,
    len = t.length,
    ans = t.charCodeAt(len - 1)

  while (i < len - 1) {
    ans = ans ^ s.charCodeAt(i)
    ans = ans ^ t.charCodeAt(i)
    i++
  }

  return String.fromCharCode(ans)
}

const result = findTheDifference("abcd", "abcde")
console.log("result", result)
