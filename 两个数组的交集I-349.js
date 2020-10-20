//* 给定2个数组，获取他们的交集，不考虑顺序，输出元素唯一

//* 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//* 输出：[2]

//* 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//* 输出：[9,4]

// 代码就和我的思维逻辑一样 混乱
// 有问题的点 概念 定义的不清晰，语言表达和描述不行，对问题的抽象和归纳总结不行

// 1. 遍历2个数组，数组元素作为map的属性名，值默认是2个元素都为false的数组
// 2. 将2个数组根据长度先排好顺序，当元素的左边或者右边
function findIntersection(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return []

  const resultArr = []
  const map = new Map()

  const baseArr = arr1.length > arr2.length ? arr1 : arr2

  for (let i = 0; i < baseArr.length; i++) {
    const result1 = checkMap(map, arr1[i], "left")

    if (
      Array.isArray(result1) &&
      result1.every(Boolean) &&
      result1.length === 2
    ) {
      resultArr.push(arr1[i])
    } else if (result1) {
      map.set(arr1[i], result1)
    }

    const result2 = checkMap(map, arr2[i], "right")

    if (
      Array.isArray(result2) &&
      result2.every(Boolean) &&
      result2.length === 2
    ) {
      resultArr.push(arr2[i])
    } else if (result2) {
      map.set(arr2[i], result2)
    }
  }

  return resultArr
}

function checkMap(map, elm, position) {
  // * 如果没有元素 直接返回
  if (elm === void 0) {
    return
  }

  const result = map.get(elm) || [false, false]

  if (result.every(Boolean) && result.length === 2) {
    return
  }

  if (position === "left") {
    //* 只是填充一个值
    result[0] = true
  } else {
    result[1] = true
  }

  return result
}

var arr1 = [1]
var arr2 = [1]

console.log(findIntersection(arr1, arr2))
