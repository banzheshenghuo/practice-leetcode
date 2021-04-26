/**
 * https://leetcode-cn.com/problems/contains-duplicate/
 */

// 哈希表
var containsDuplicate = function (nums) {
  if (nums.length === 0) return false

  const obj = {}
  let i = 0
  while (i < nums.length) {
    const val = nums[i]
    if (obj[val]) {
      return true
    } else {
      obj[val] = true
    }
    i++
  }

  return false
}

//  排序 滑动指针
var containsDuplicate2 = function (nums) {
  if (nums.length === 0) return false

  const sortedList = nums.sort((a, b) => a - b)

  let i = 0
  while (i < sortedList.length) {
    if (sortedList[i] === sortedList[i + 1]) return true
    i++
  }

  return false
}
