/**
 * https://leetcode-cn.com/problems/maximum-subarray/submissions/
 * https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
 */
let maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]

  let max = nums[0]
  let dp = []
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(max, dp[i])
  }

  return max
}

// 暴力法
// 直接三次嵌套循环
// 记住正负无穷书 Infinity
var maxSubArray1 = function (nums) {
  if (nums.length === 1) return nums[0]

  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j <= nums.length; j++) {
      const sum = nums.slice(i, j + 1).reduce((a, b) => a + b)
      max = Math.max(sum, max)
    }
  }

  return max
}

// 前缀和
// 不一定每次都要计算出来，可以使用前缀和
var maxSubArray2 = function (nums) {
  if (nums.length === 1) return nums[0]

  let max = -Infinity

  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = 0
    for (let j = i; j <= nums.length; j++) {
      sum = sum + nums[j]
      if (sum > max) {
        max = sum
      }
    }
  }

  return max
}

//
