// 给出一个数组和一个目标值
// 输出数组中是否有2数之和等于目标值，有则输出

// nums = [2, 7, 11, 15], target = 9

function twoSum(nums, target) {
  if (nums.length === 0) return []

  const map = new Map()

  for (let i = 0, len = nums.length; i < len; i++) {
    const DValue = target - nums[i]
    if (map.has(DValue)) {
      return [map.get(DValue), i]
    } else {
      map.set(nums[i], i)
    }
  }

  return []
}

var nums = [2, 7, 11, 15]
var target = 9

console.log(twoSum(nums, target))
