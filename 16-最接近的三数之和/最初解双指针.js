// https://leetcode-cn.com/problems/3sum-closest/

// * 输入：nums = [-1,2,1,-4], target = 1
// * 输出：2
// * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 思路：
// 感觉和三数之和差不多，有2点不同
// 1. 每次三数之和要想加
// 2. 之前是判断后面

// * 优化
//* 这里只要求和目标值最接近的三数和
//* 但是之前的解法是遍历了所有情况，是不是有些情况可以提前判断
//* 是否可以用二分法 | 不行，不能使用二分，不能保证所有的元素都被遍历到，可能会有更合适的h值遗漏

var threeSumClosest = function (sourceNums, target) {
  if (sourceNums.length === 3) {
    return sourceNums[0] + sourceNums[1] + sourceNums[2]
  }

  let nums = sourceNums.sort((a, b) => a - b)

  let closestVal

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let l = i + 1,
      r = len - 1
    while (l < r) {
      const sumVal = nums[i] + nums[l] + nums[r]

      if (sumVal === target) {
        // * 都相同了，那肯定最接近，直接输出完事
        return sumVal
      } else if (sumVal > target) {
        closestVal = selectClosest(sumVal, target, closestVal)
        while (nums[r] === nums[r - 1]) r--
        r--
      } else if (sumVal < target) {
        closestVal = selectClosest(sumVal, target, closestVal)
        while (nums[l] === nums[l + 1]) l++
        l++
      }
    }
  }

  console.log("closestVal", closestVal)

  return closestVal
}

function selectClosest(sumVal, target, closestVal) {
  if (typeof closestVal === "undefined") {
    return sumVal
  }

  return Math.abs(sumVal - target) < Math.abs(closestVal - target) ? sumVal : closestVal
}

threeSumClosest([-1, 2, 1, -4], 1)
