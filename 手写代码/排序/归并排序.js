/**
 *
 */

//将数组分为2部分，递归的对两个子序列进行归并排序，合并两个子序列

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = (arr.length / 2) | 0
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const res = []

  while (left.length && right.length) {
    left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift())
  }

  // * 这一步有点不理解，还剩一个为何可以直接push
  left.length && res.push(...left.splice(0, left.length))
  right.length && res.push(...right.splice(0, right.length))

  return res
}

module.exports = mergeSort
