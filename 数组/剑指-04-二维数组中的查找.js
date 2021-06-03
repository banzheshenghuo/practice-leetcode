/**
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */

var findNumberIn2DArray = function (matrix, target) {
  while (matrix.length) {
    const rightTopItem = getRightTopItem(matrix)
    if (rightTopItem === undefined) return false

    if (rightTopItem === target) {
      return true
    } else if (rightTopItem < target) {
      matrix.shift()
    } else if (rightTopItem > target) {
      matrix.forEach((arr) => (arr.length = arr.length - 1))
    }
  }

  return false
}

function getRightTopItem(arr) {
  const firstArrLength = arr[0].length
  return arr[0][firstArrLength - 1]
}
