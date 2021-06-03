/**
 *
 */

// * 递归分治的思想 将数组分为2部分，递归的对两个子序列进行归并排序，合并两个子序列

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = (arr.length / 2) | 0

  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    left[0] > right[0] ? result.push(right.shift()) : result.push(left.shift())
  }

  left.length && result.push(...left)
  right.length && result.push(...right)

  return result
}

module.exports = mergeSort3

function mergeSort3(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge3(mergeSort3(left), mergeSort3(right))
}

function merge3(left, right) {
  let result = []

  while (left.length && right.length) {
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
  }

  left.length && result.push(...left)
  right.length && result.push(...right)

  return result
}
