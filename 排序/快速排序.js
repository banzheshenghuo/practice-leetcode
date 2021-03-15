const swap = require("../工具/交换")
const random = require("../工具/随机值")

/**
 *
 * @param {number[]} arr
 */
function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1)
  return arr
}

/**
 * 对 arr[l...r] 部分进行快速排序
 * @param {number[]} arr
 * @param {number} l 左边界
 * @param {number} r 右边界
 */
function _quickSort(arr, l, r) {
  if (l >= r) {
    return
  }
  let p = partition(arr, l, r)
  _quickSort(arr, l, p - 1)
  _quickSort(arr, p + 1, r)
}

/**
 * 对 arr[l...r] 部分进行快速排序
 * @param {number[]} arr
 * @param {number} l 左边界
 * @param {number} r 右边界
 * @returns {number} 返回索引值p，使得arr[l...p-1] < arr[p] < arr[p+1...r]
 */
function partition(arr, left, right) {
  // 取一个基准值 取随机值
  let rand = random(left, right)
  swap(arr, left, rand)
  let pivot = arr[left]

  // arr[left+1...index] < pivot, arr[index+1...i) > pivot
  let index = left
  for (let i = left + 1; i <= right; i++) {
    let num = arr[i]
    if (num < pivot) {
      // 如果当前值小于基准值的话，就交换到index + 1的位置去。
      // 扩充了index的范围 [index...], pivot, [...right]
      swap(arr, index + 1, i)
      index++
    }
  }

  swap(arr, left, index)
  return index
}

// module.exports = quickSort

// function quickSort2(arr) {
//   if (arr.length <= 1) return arr

//   const mid = (arr.length / 2) | 0

//   let leftArr = []
//   let rightArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i === mid) continue

//     arr[i] > arr[mid] ? rightArr.push(arr[i]) : leftArr.push(arr[i])
//   }

//   return [...quickSort2(leftArr), arr[mid], ...quickSort2(rightArr)]
// }

module.exports = quickSort2

// 快排 选择一个基准值，遍历集合将整个集合分为小于该基准值和大于该基准值，然后对获取的2个集合在进行快排，这是一个递归的过程

function quickSort2(arr) {
  if (arr.length <= 1) return arr

  const mid = (arr.length / 2) | 0
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (i === mid) continue

    if (arr[i] < arr[mid]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort2(left), arr[mid], ...quickSort2(right)]
}
