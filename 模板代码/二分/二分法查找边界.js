function binarySerachLeftBound(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + (r - l) / 2) | 0

    // 取最左,收缩右边界
    if (nums[mid] >= target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    }
  }

  return l
}

function binarySerachRightBound(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + (r - l) / 2) | 0

    // 取最右,收缩左边界
    if (nums[mid] <= target) {
      l = mid + 1
    } else if (nums[mid] > target) {
      r = mid - 1
    }
  }

  return r
}
