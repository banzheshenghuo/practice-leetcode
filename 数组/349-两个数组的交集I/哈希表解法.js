//* 给定2个数组，获取他们的交集，不考虑顺序，输出元素唯一

//* 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//* 输出：[2]

//* 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//* 输出：[9,4]

// * 题解
// 遍历较长数组（同时用索引获取较短数组的值）
// 然后将他们的共享属性添加至哈希表，当出现次数为2则添加至输出数组中

function intersection(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return []

  let collection = []
  let hashObj = {}

  let i = 0
  while (arr1.length > i || arr2.length > i) {
    const value1 = arr1[i]
    const value2 = arr2[i]

    if (typeof value1 !== "undefined") {
      if (!hashObj[value1]) {
        hashObj[value1] = { left: true }
      } else {
        if (!hashObj[value1].left && hashObj[value1].right) {
          collection.push(value1)
        }
        hashObj[value1].left = true
      }
    }

    if (typeof value2 !== "undefined") {
      if (!hashObj[value2]) {
        hashObj[value2] = { right: true }
      } else {
        if (hashObj[value2].left && !hashObj[value2].right) {
          collection.push(value2)
        }
        hashObj[value2].right = true
      }
    }

    i++
  }

  return collection
}
var arr1 = [1, 2, 3, 4]
var arr2 = [1, 2, 3]
console.log(intersection(arr1, arr2))

// 这个声明的变量多，但是好理解些
var intersection2 = function (nums1, nums2) {
  let map1 = new Map()
  let map2 = new Map()
  let result = new Set()

  let i = 0
  let len = Math.max(nums1.length, nums2.length)

  while (i < len) {
    if (nums1[i] !== undefined) {
      if (map2.has(nums1[i])) {
        result.add(nums1[i])
      } else {
        map1.set(nums1[i], true)
      }
    }

    if (nums2[i] !== undefined) {
      if (map1.has(nums2[i])) {
        result.add(nums2[i])
      } else {
        map2.set(nums2[i], true)
      }
    }
    i++
  }

  return [...result]
}
