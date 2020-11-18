var arr1 = [1, 2, 3, 4]
var arr2 = [1, 3]

// 其实就是用hash表，先遍历一边数组将值存入hash表，然后遍历另一个取已存在的对象存入set

var intersection = function (nums1, nums2) {
  // 换行可去除
  return Array.from(
    nums1.reduce(
      (h, v) => (h[v] && h["r"].add(v), h),
      Object.assign(
        nums2.reduce((h, v) => ((h[v] = 1), h), {}),
        { r: new Set() }
      )
    )["r"]
  )
}
