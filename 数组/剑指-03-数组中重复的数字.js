/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

// * 最简单的方法，哈希表
var findRepeatNumber = function (nums) {
  const obj = {}
  let result

  for (const num of nums) {
    if (obj[num]) {
      result = num
      break
    } else {
      obj[num] = true
    }
  }

  return result
}

// * 可以排序，但是排序时间复杂度一般是nlogn，此方法虽然是双层循环，但是不会执行太多
var findRepeatNumber2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      let temp = nums[i]

      if (temp === nums[temp]) {
        return temp
      }

      nums[i] = nums[temp]
      nums[temp] = temp
    }
  }
}
