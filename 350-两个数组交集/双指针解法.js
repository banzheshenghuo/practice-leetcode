// * 先排序
// * 从0开始遍历，当不相同时，移动值小的指针，当值相同时共同进一位，同时push进输出结果中。
// * 结束条件：当其中某一条数组遍历完毕。

function intersect(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return []
  }

  const sortedNum1 = nums1.sort((a, b) => a - b)
  const sortedNum2 = nums2.sort((a, b) => a - b)

  const res = []

  let i = 0,
    j = 0,
    len1 = nums1.length,
    len2 = nums2.length

  while (i < len1 && j < len2) {
    const val1 = sortedNum1[i]
    const val2 = sortedNum2[j]

    if (val1 > val2) {
      j++
      continue
    } else if (val1 < val2) {
      i++
      continue
    } else {
      res.push(val2)
      i++
      j++
    }
  }

  return res
}

var arr1 = [4, 9, 5]
var arr2 = [9, 4, 9, 8, 4]

console.log(intersect(arr1, arr2))
