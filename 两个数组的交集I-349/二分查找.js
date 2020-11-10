//* 给定2个数组，获取他们的交集，不考虑顺序，输出元素唯一

//* 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//* 输出：[2]

//* 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//* 输出：[9,4]

// * 二分法查找
// 但是二分法是不是对顺序有要求，复杂度也只是logN

function intersection(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b)
  arr2 = arr2.sort((a, b) => a - b)

  let collection = []
  let i = 0
  while (i < arr1.length) {
    let currentValue = arr1[i]

    if (collection.indexOf(currentValue) > -1) {
      continue
    }

    // if (binarySearch(currentValue, arr2)) {
    //   collection.push(currentValue)
    // }

    i++
  }

  return collection
}

function binarySearch(value, arr) {
  if (arr.length === 0) return false
  if (arr.length === 1 && arr[0] !== value) return false
  if (arr.length === 1 && arr[0] == value) return true

  const midSize = arr.length / 2 - 1

  const middleValue = arr[midSize]

  if (middleValue === value) {
    return true
  } else if (middleValue > value) {
    return binarySearch(value, arr.slice(0, midSize))
  } else {
    return binarySearch(value, arr.slice(midSize + 1))
  }
}

var arr1 = [1, 2, 2, 1]
var arr2 = [2, 2]
console.log(12)
console.log(intersection(arr1, arr2))
