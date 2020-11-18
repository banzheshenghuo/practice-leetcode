//* 剑指 Offer 50. 第一个只出现一次的字符
//* 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
//* 示例:
//* s = "abaccdeff"
//* 返回 "b"
//* s = ""
//* 返回 " "
//* 限制：
//* 0 <= s 的长度 <= 50000
//* https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

//* 初始思路：
//* 1. 首先想着只出现一次，那么肯定要完整遍历一遍
//* 2. 第一个出现的，所以顺序肯定不能变
//* 所以用哈希表储存出现的次数，然后遍历第一个仅出现一次的就是最终输出的字符

// * 优化
// * 看题解，还有优化的空间，对于一个出现超过1次的字符就不用在递增了，从判断逻辑上来说也简单了很多

// * 下面的例子使用map数据结构，因为map的遍历的顺序和插入顺序是一致的，所以可以直接取第一个命中项
// * 也可以使用object，第一次遍历不变，然后第二次在遍历字符串，找到第一个对应object的值为1的就是输出项

function firstUniqChar(str) {
  const map = new Map()

  let i = 0
  while (i < str.length) {
    const currentStr = str[i]

    if (map.get(currentStr) === undefined) {
      map.set(currentStr, true)
    } else if (map.get(currentStr)) {
      map.set(currentStr, false)
    }

    i++
  }

  for (const [key, status] of map.entries()) {
    if (status) {
      return key
    }
  }

  return " "
}

console.log(firstUniqChar("loveleetcode"))
