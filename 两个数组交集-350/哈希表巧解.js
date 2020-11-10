// 双循环，第一次在哈希表储存出现的次数，第二次循环当匹配到出现的次数将次数减一，因为储存的次数就是第一个数组中出现的次数，要求是给出给小出现次数，
// 所以要么是减到0，然后输出第一次储存的次数，要么就是未到零，push第二个数组出现的次数。

function intersect(nums1, nums2) {
  if (nums2.length === 0 || nums1.length === 0) {
    return []
  }

  const res = []
  const map = {}

  for (const num1 of nums1) {
    if (map[num1]) {
      map[num1]++
    } else {
      map[num1] = 1
    }
  }

  for (const num2 of nums2) {
    const count = map[num2]
    if (count > 0) {
      res.push(num2)
      map[num2]--
    }
  }

  return res
}

var arr1 = [1, 2, 2, 1]
var arr2 = [2, 2]

console.log(intersect(arr1, arr2))
