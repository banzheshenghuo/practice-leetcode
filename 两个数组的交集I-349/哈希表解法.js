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
