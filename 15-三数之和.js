// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// 不可以包含重复的三元组

// 首先排序从小到大，然后从左侧开始遍历，
// 每次遍历的循环体使用双指针夹逼，一个指向当前元素右边，一个指向数组最大的元素。
function threeSums(nums) {
  if (nums.length < 3) return []

  const result = []

  const sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0, len = sortedNums.length; i < len - 2; i++) {
    let currentVal = sortedNums[i]
    if (currentVal > 0) break
    if (currentVal === sortedNums[i - 1]) continue
    const twoSums = 0 - currentVal

    let l = i + 1
    let r = len - 1

    while (l < r) {
      let lVal = sortedNums[l]
      let rVal = sortedNums[r]

      if (lVal + rVal === twoSums) {
        result.push([currentVal, lVal, rVal])
        while (sortedNums[l] === sortedNums[l + 1]) l++
        l++

        while (sortedNums[r] === sortedNums[r - 1]) r--
        r--
      } else if (lVal + rVal < twoSums) {
        while (sortedNums[l] === sortedNums[l + 1]) l++
        l++
      } else if (lVal + rVal > twoSums) {
        while (sortedNums[r] === sortedNums[r - 1]) r--
        r--
      }
    }
  }

  return result
}

threeSums([-1, 0, 1, 2, -1, -4], 0)

// 1. target 写错了 低级错误
// 2. 忘记了外层遍历值可能相同，会生成重复元素
// 3. 关于遍历长度可能需要强化下
// 4. target是0，当最左侧都大于target即0时，就可以直接break了
